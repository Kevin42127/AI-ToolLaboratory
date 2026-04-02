'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

export default function Footer() {
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
          <Grid item xs={12} md={5}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              AI ToolLaboratory
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.6 }}>
              Discover the best AI tools to boost your productivity and creativity. Contact us at tyouxipindao@gmail.com
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/about" color="inherit" underline="hover">About Us</Link>
              <Link href="/privacy" color="inherit" underline="hover">Privacy Policy</Link>
              <Link href="/terms" color="inherit" underline="hover">Terms of Service</Link>
              <Link href="/contact" color="inherit" underline="hover">Contact</Link>
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

