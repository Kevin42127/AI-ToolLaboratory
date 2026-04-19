'use client';

import { usePathname } from 'next/navigation';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

export default function Footer() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHomePage) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  return (
    <Box
      component="footer"
      sx={{
        py: { xs: 3, sm: 4 },
        mt: { xs: 6, sm: 8 },
        backgroundColor: '#1a1a1a',
        borderTop: '1px solid',
        borderColor: '#333',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mb: 4 }} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              CURIUSAI
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.6 }}>
              Your curious guide to discovering and exploring the best AI tools available today.
            </Typography>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              Navigation
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/" color="inherit" underline="hover" onClick={handleHomeClick} sx={{ cursor: 'pointer' }}>Home</Link>
              <Link href="/tools/finder" color="inherit" underline="hover">AI Finder</Link>
              <Link href="/news" color="inherit" underline="hover">News</Link>
              <Link href="/about" color="inherit" underline="hover">About Us</Link>
              <Link href="/support" color="inherit" underline="hover">Support Us</Link>
              <Link href="/contact" color="inherit" underline="hover">Contact</Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              Legal
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/privacy" color="inherit" underline="hover">Privacy Policy</Link>
              <Link href="/terms" color="inherit" underline="hover">Terms of Service</Link>
            </Box>
          </Grid>
        </Grid>
        
        <Box sx={{ 
          borderTop: '1px solid rgba(255, 255, 255, 0.2)', 
          pt: 3, 
          textAlign: 'center' 
        }}>
          <Typography variant="body2" sx={{ color: 'white' }}>
            © 2025 CURIUSAI. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

