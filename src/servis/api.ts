import type { CardOneObjectProps } from '@/components/type'

function getApiBaseUrl(): string {
  const baseUrl = import.meta.env.VITE_API_BASE_URL
  if (!baseUrl || !baseUrl.trim()) {
    throw new Error("Missing required environment variable: VITE_API_BASE_URL")
  }
  return baseUrl.replace(/\/+$/, "")
}

const BASE_URL = getApiBaseUrl()

function buildUrl(endpoint: string): string {
  const normalizedEndpoint = endpoint.startsWith("/") ? endpoint : `/${endpoint}`
  return `${BASE_URL}${normalizedEndpoint}`
}

export const apiClient = {
  async get<T>(endpoint: string): Promise<T> {
    try {
      const response = await fetch(buildUrl(endpoint))
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      return await response.json()
    } catch (error) {
      console.error('API request failed:', error)
      throw error
    }
  },

  async post<T>(endpoint: string, data: any): Promise<T> {
    try {
      const response = await fetch(buildUrl(endpoint), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      return await response.json()
    } catch (error) {
      console.error('API request failed:', error)
      throw error
    }
  }
}

export const productService = {
  async getAllProducts(): Promise<CardOneObjectProps[]> {
    return apiClient.get<CardOneObjectProps[]>('/products')
  },

  async getProductById(id: number): Promise<CardOneObjectProps> {
    return apiClient.get<CardOneObjectProps>(`/products/${id}`)
  },

  async getProductsByCategory(category: string): Promise<CardOneObjectProps[]> {
    return apiClient.get<CardOneObjectProps[]>(`/products?category=${category}`)
  }
}