"use server"

export type ExchangeResponse = {
  error: boolean;
  exchanged: boolean;
}

export async function exchange(): Promise<ExchangeResponse> {
  await new Promise(resolve => setTimeout(resolve, 1500));
  return {
    error: false,
    exchanged: true
  }
}

