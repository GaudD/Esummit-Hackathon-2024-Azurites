export async function GET() {
  const response = await fetch("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=72f65251-4ca3-4855-8c99-368bcbb2f06a", {
      method: 'GET',
      headers: {
          Accept: 'application/json',
      }
  });

  return await response.json();
}
