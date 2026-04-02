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
        backgroundColor: 'primary.main',
        borderTop: '1px solid',
        borderColor: 'primary.dark',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mb: 4 }} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              AI ToolLaboratory
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.6 }}>
              Discover the best AI tools to boost your productivity and creativity. Contact us at tyouxipindao@gmail.com
            </Typography>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              Navigation
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/" color="inherit" underline="hover" onClick={handleHomeClick} sx={{ cursor: 'pointer' }}>Home</Link>
              <Link href="/tools/finder" color="inherit" underline="hover">AI Finder</Link>
              <Link href="/about" color="inherit" underline="hover">About Us</Link>
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
            © 2025 AI ToolLaboratory. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

