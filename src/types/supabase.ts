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
      User: {
        Row: {
          id: string
          email: string
          firstName: string
          lastName: string
          passwordHash?: string
          roleId: string
          brokerId?: string
          phoneNumber?: string
          status: string
          isAdmin: boolean
          createdAt: string
          updatedAt: string
        }
        Insert: {
          id?: string
          email: string
          firstName: string
          lastName: string
          passwordHash?: string
          roleId: string
          brokerId?: string
          phoneNumber?: string
          status?: string
          isAdmin?: boolean
          createdAt?: string
          updatedAt?: string
        }
        Update: {
          id?: string
          email?: string
          firstName?: string
          lastName?: string
          passwordHash?: string
          roleId?: string
          brokerId?: string
          phoneNumber?: string
          status?: string
          isAdmin?: boolean
          createdAt?: string
          updatedAt?: string
        }
      }
      Role: {
        Row: {
          id: string
          name: string
          permissions: string[]
          createdAt: string
          updatedAt: string
        }
        Insert: {
          id?: string
          name: string
          permissions?: string[]
          createdAt?: string
          updatedAt?: string
        }
        Update: {
          id?: string
          name?: string
          permissions?: string[]
          createdAt?: string
          updatedAt?: string
        }
      }
      Broker: {
        Row: {
          id: string
          name: string
          email?: string
          phone?: string
          address?: string
          website?: string
          status: string
          createdAt: string
          updatedAt: string
        }
        Insert: {
          id?: string
          name: string
          email?: string
          phone?: string
          address?: string
          website?: string
          status?: string
          createdAt?: string
          updatedAt?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          phone?: string
          address?: string
          website?: string
          status?: string
          createdAt?: string
          updatedAt?: string
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
  }
} 