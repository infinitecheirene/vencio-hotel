import { useState, useEffect } from 'react';
import { apiService, Venue, Room, ApiResponse } from '@/lib/api';

export function useVenues() {
  const [venues, setVenues] = useState<Venue[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchVenues() {
      try {
        setLoading(true);
        const response = await apiService.getVenues();
        if (response.success && response.data) {
          setVenues(response.data);
        }
      } catch (err: any) {
        setError(err.message || 'Failed to fetch venues');
      } finally {
        setLoading(false);
      }
    }

    fetchVenues();
  }, []);

  return { venues, loading, error };
}

export function useRooms() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRooms() {
      try {
        setLoading(true);
        const response = await apiService.getRooms();
        if (response.success && response.data) {
          setRooms(response.data);
        }
      } catch (err: any) {
        setError(err.message || 'Failed to fetch rooms');
      } finally {
        setLoading(false);
      }
    }

    fetchRooms();
  }, []);

  return { rooms, loading, error };
}