export interface HelloResponse {
    message: string
}

export async function getHello(): Promise<HelloResponse> {
    const response = await fetch('/api/hello')

    if (!response.ok) {
        throw new Error('Failed to fetch hello message')
    }

    return await response.json() as Promise<HelloResponse>
}