export const metadata = {
  title: "AP Villas & Resorts",
  description: "Luxury private stays in Ujjain",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
