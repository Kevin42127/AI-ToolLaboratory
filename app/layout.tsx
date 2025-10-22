import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme/theme';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export const metadata: Metadata = {
  title: 'AI ToolLaboratory',
  description: '發現最好的AI工具，提升工作效率',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <body style={{ margin: 0 }}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <main style={{ minHeight: 'calc(100vh - 200px)' }}>
              {children}
            </main>
            <Footer />
            <BackToTop />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

