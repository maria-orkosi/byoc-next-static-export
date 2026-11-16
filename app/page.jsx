export default function Home() {
  const api = process.env.NEXT_PUBLIC_API_URL || '';
  return (
    <main>
      <h1>Lumen Studio</h1>
      <p>Photography for small brands. Booking through {api || 'the studio API'}.</p>
    </main>
  );
}
