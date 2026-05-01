function getApiBaseUrl(): string {
  const baseUrl = import.meta.env.VITE_API_BASE_URL
  if (!baseUrl || !baseUrl.trim()) {
    throw new Error("Missing required environment variable: VITE_API_BASE_URL")
  }
  return baseUrl.replace(/\/+$/, "")
}

export const baseUrl = getApiBaseUrl()

export async function getData(url: string) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }
  return response.json();
}