export const metadata = { title: 'Lumen Studio', description: 'A static marketing site exported by Next.js.' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
