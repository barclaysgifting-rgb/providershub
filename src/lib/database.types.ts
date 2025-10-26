export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          name: string
          avatar: string | null
          role: 'client' | 'provider' | 'admin'
          bio: string | null
          location: string | null
          company: string | null
          job_title: string | null
          website: string | null
          linkedin: string | null
          experience: string | null
          specializations: string[] | null
          is_verified: boolean
          rating: number
          review_count: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          name: string
          avatar?: string | null
          role?: 'client' | 'provider' | 'admin'
          bio?: string | null
          location?: string | null
          company?: string | null
          job_title?: string | null
          website?: string | null
          linkedin?: string | null
          experience?: string | null
          specializations?: string[] | null
          is_verified?: boolean
          rating?: number
          review_count?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          name?: string
          avatar?: string | null
          role?: 'client' | 'provider' | 'admin'
          bio?: string | null
          location?: string | null
          company?: string | null
          job_title?: string | null
          website?: string | null
          linkedin?: string | null
          experience?: string | null
          specializations?: string[] | null
          is_verified?: boolean
          rating?: number
          review_count?: number
          created_at?: string
          updated_at?: string
        }
      }
      services: {
        Row: {
          id: string
          provider_id: string
          title: string
          description: string
          category: string
          subcategory: string | null
          tags: string[] | null
          price: number
          delivery_time: string
          revisions: number
          requirements: string[] | null
          images: string[] | null
          is_active: boolean
          featured: boolean
          rating: number
          review_count: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          provider_id: string
          title: string
          description: string
          category: string
          subcategory?: string | null
          tags?: string[] | null
          price: number
          delivery_time: string
          revisions?: number
          requirements?: string[] | null
          images?: string[] | null
          is_active?: boolean
          featured?: boolean
          rating?: number
          review_count?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          provider_id?: string
          title?: string
          description?: string
          category?: string
          subcategory?: string | null
          tags?: string[] | null
          price?: number
          delivery_time?: string
          revisions?: number
          requirements?: string[] | null
          images?: string[] | null
          is_active?: boolean
          featured?: boolean
          rating?: number
          review_count?: number
          created_at?: string
          updated_at?: string
        }
      }
      orders: {
        Row: {
          id: string
          buyer_id: string
          provider_id: string
          service_id: string
          title: string
          description: string | null
          price: number
          status: 'pending' | 'in_progress' | 'revision' | 'completed' | 'cancelled'
          delivery_date: string | null
          completed_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          buyer_id: string
          provider_id: string
          service_id: string
          title: string
          description?: string | null
          price: number
          status?: 'pending' | 'in_progress' | 'revision' | 'completed' | 'cancelled'
          delivery_date?: string | null
          completed_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          buyer_id?: string
          provider_id?: string
          service_id?: string
          title?: string
          description?: string | null
          price?: number
          status?: 'pending' | 'in_progress' | 'revision' | 'completed' | 'cancelled'
          delivery_date?: string | null
          completed_at?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      reviews: {
        Row: {
          id: string
          order_id: string
          reviewer_id: string
          reviewee_id: string
          rating: number
          comment: string | null
          created_at: string
        }
        Insert: {
          id?: string
          order_id: string
          reviewer_id: string
          reviewee_id: string
          rating: number
          comment?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          order_id?: string
          reviewer_id?: string
          reviewee_id?: string
          rating?: number
          comment?: string | null
          created_at?: string
        }
      }
      messages: {
        Row: {
          id: string
          sender_id: string
          receiver_id: string
          order_id: string | null
          content: string
          is_read: boolean
          created_at: string
        }
        Insert: {
          id?: string
          sender_id: string
          receiver_id: string
          order_id?: string | null
          content: string
          is_read?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          sender_id?: string
          receiver_id?: string
          order_id?: string | null
          content?: string
          is_read?: boolean
          created_at?: string
        }
      }
      favorites: {
        Row: {
          id: string
          user_id: string
          service_id: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          service_id: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          service_id?: string
          created_at?: string
        }
      }
      payments: {
        Row: {
          id: string
          order_id: string
          amount: number
          currency: string
          status: 'pending' | 'completed' | 'failed' | 'refunded'
          payment_method: string | null
          transaction_id: string | null
          created_at: string
        }
        Insert: {
          id?: string
          order_id: string
          amount: number
          currency?: string
          status?: 'pending' | 'completed' | 'failed' | 'refunded'
          payment_method?: string | null
          transaction_id?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          order_id?: string
          amount?: number
          currency?: string
          status?: 'pending' | 'completed' | 'failed' | 'refunded'
          payment_method?: string | null
          transaction_id?: string | null
          created_at?: string
        }
      }
      notifications: {
        Row: {
          id: string
          user_id: string
          title: string
          message: string
          type: 'info' | 'success' | 'warning' | 'error'
          is_read: boolean
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          title: string
          message: string
          type?: 'info' | 'success' | 'warning' | 'error'
          is_read?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          title?: string
          message?: string
          type?: 'info' | 'success' | 'warning' | 'error'
          is_read?: boolean
          created_at?: string
        }
      }
      portfolios: {
        Row: {
          id: string
          provider_id: string
          title: string
          description: string
          images: string[] | null
          category: string
          tags: string[] | null
          project_url: string | null
          completion_date: string | null
          client_name: string | null
          testimonial: string | null
          rating: number | null
          is_featured: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          provider_id: string
          title: string
          description: string
          images?: string[] | null
          category: string
          tags?: string[] | null
          project_url?: string | null
          completion_date?: string | null
          client_name?: string | null
          testimonial?: string | null
          rating?: number | null
          is_featured?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          provider_id?: string
          title?: string
          description?: string
          images?: string[] | null
          category?: string
          tags?: string[] | null
          project_url?: string | null
          completion_date?: string | null
          client_name?: string | null
          testimonial?: string | null
          rating?: number | null
          is_featured?: boolean
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
