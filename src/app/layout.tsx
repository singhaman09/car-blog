import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';
import { Toaster } from "@/components/sonner"
export const metadata: Metadata = {
  title: 'CarBlog - Your Ultimate Car Guide',
  description: 'Latest car reviews, tips, and automotive insights',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
          <Toaster />
        </main>
        <Footer />
      </body>
    </html>
  );
}