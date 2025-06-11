"use server"

export type FetchRateResponse = {
  rate: number;
}

export async function fetchRate(): Promise<FetchRateResponse> {
  const response = await fetch('https://data-api.coindesk.com/spot/v1/latest/tick?market=coinbase&instruments=BTC-USD');
  const data = await response.json();

  return {
    rate: data.Data?.['BTC-USD']?.PRICE
  }
}