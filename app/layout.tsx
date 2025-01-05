import './globals.css';
import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { LanguageProvider } from '@/lib/language-context';
import Navbar from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CookieConsent } from '@/components/cookie-consent';

const raleway = Raleway({ 
  subsets: ['latin'],
  variable: '--font-raleway'
});

export const metadata: Metadata = {
  title: 'Developer Portfolio',
  description: 'Professional web developer portfolio showcasing projects and skills',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${raleway.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
            <CookieConsent />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}