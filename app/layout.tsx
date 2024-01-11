//applying global styles to my application
import '@/app/ui/global.css';

//importera font från google via filen font.ts adderar till body så att den används på hela webbplatsen
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
