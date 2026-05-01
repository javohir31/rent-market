function getApiBaseUrl(): string {
  const baseUrl = import.meta.env.VITE_API_BASE_URL
  if (!baseUrl || !baseUrl.trim()) {
    throw new Error("Missing required environment variable: VITE_API_BASE_URL")
  }
  return baseUrl.replace(/\/+$/, "")
}

const BASE_URL = getApiBaseUrl()

type PostDataParams = {
  url: string
  data: unknown
}

function buildUrl(path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`
  return `${BASE_URL}${normalizedPath}`
}

export async function postData({ url, data }: PostDataParams): Promise<unknown> {
  const response = await fetch(buildUrl(url), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => null)
    throw new Error(
      errorBody?.message || `Request failed with status ${response.status}`
    )
  }

  return response.json()
}

export async function getData({ url }: { url: string }): Promise<unknown> {
  const response = await fetch(buildUrl(url), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })

  if (!response.ok) {
    const errorBody = await response.json().catch(() => null);
    throw new Error(
      errorBody?.message || `Request failed with status ${response.status}`
    );
  }

  return response.json();
}