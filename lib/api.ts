const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000/api/v1';

interface Venue {
  id: number;
  name: string;
  capacity: number;
  price: number;
  size: string;
  description?: string;
  amenities?: string[];
  is_active: boolean;
}

interface Room {
  id: number;
  name: string;
  price: number;
  capacity: number;
  size: string;
  bed_type: string;
  description?: string;
  amenities?: string[];
  is_active: boolean;
}

interface ReservationRoom {
  room_id: number;
  quantity: number;
}

interface CreateReservationData {
  venue_id: number;
  event_type: 'single' | 'multi';
  event_date?: string;
  check_in_date?: string;
  check_out_date?: string;
  attendees: number;
  needs_rooms: boolean;
  organization: string;
  event_name: string;
  contact_person: string;
  position?: string;
  email: string;
  phone: string;
  details?: string;
  rooms?: ReservationRoom[];
}

interface Reservation {
  id: number;
  reservation_number: string;
  venue_id: number;
  event_type: 'single' | 'multi';
  event_date?: string;
  check_in_date?: string;
  check_out_date?: string;
  nights: number;
  attendees: number;
  needs_rooms: boolean;
  organization: string;
  event_name: string;
  contact_person: string;
  position?: string;
  email: string;
  phone: string;
  details?: string;
  venue_total: number;
  rooms_total: number;
  total_amount: number;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  admin_notes?: string;
  venue?: Venue;
  reservation_rooms?: Array<{
    id: number;
    room_id: number;
    quantity: number;
    nights: number;
    price_per_night: number;
    subtotal: number;
    room?: Room;
  }>;
  created_at: string;
  updated_at: string;
}

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: Record<string, string[]>;
}

class ApiService {
  private async fetchApi<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          ...options.headers,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw {
          success: false,
          message: data.message || 'An error occurred',
          errors: data.errors,
        };
      }

      return data;
    } catch (error: any) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // Venues
  async getVenues(): Promise<ApiResponse<Venue[]>> {
    return this.fetchApi<Venue[]>('/venues');
  }

  async getVenue(id: number): Promise<ApiResponse<Venue>> {
    return this.fetchApi<Venue>(`/venues/${id}`);
  }

  // Rooms
  async getRooms(): Promise<ApiResponse<Room[]>> {
    return this.fetchApi<Room[]>('/rooms');
  }

  async getRoom(id: number): Promise<ApiResponse<Room>> {
    return this.fetchApi<Room>(`/rooms/${id}`);
  }

  // Reservations
  async createReservation(data: CreateReservationData): Promise<ApiResponse<Reservation>> {
    return this.fetchApi<Reservation>('/reservations', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async getReservations(params?: {
    status?: string;
    email?: string;
    page?: number;
  }): Promise<ApiResponse<{ data: Reservation[]; total: number }>> {
    const queryString = new URLSearchParams(params as any).toString();
    return this.fetchApi<{ data: Reservation[]; total: number }>(
      `/reservations${queryString ? `?${queryString}` : ''}`
    );
  }

  async getReservation(id: number): Promise<ApiResponse<Reservation>> {
    return this.fetchApi<Reservation>(`/reservations/${id}`);
  }

  async checkAvailability(data: {
    venue_id: number;
    event_type: 'single' | 'multi';
    event_date?: string;
    check_in_date?: string;
    check_out_date?: string;
  }): Promise<ApiResponse<{ available: boolean; message: string }>> {
    return this.fetchApi<{ available: boolean; message: string }>(
      '/reservations/check-availability',
      {
        method: 'POST',
        body: JSON.stringify(data),
      }
    );
  }
}

export const apiService = new ApiService();
export type { Venue, Room, Reservation, CreateReservationData, ApiResponse };
