'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Header from '@/components/Header';
import PayPalHosted from '@/components/PayPalHosted';


export default function SupportPage() {
  const searchParams = useSearchParams();
  const [message, setMessage] = useState<{ type: 'success' | 'cancelled' | null; text: string }>({ type: null, text: '' });

  useEffect(() => {
    const success = searchParams.get('success');
    const cancelled = searchParams.get('cancelled');

    if (success === 'true') {
      setMessage({
        type: 'success',
        text: 'Thank you for your support! Your donation has been processed successfully.'
      });
    } else if (cancelled === 'true') {
      setMessage({
        type: 'cancelled',
        text: 'Your donation was cancelled. You can try again anytime.'
      });
    }
  }, [searchParams]);

  return (
    <>
      <Header showSearch={false} />
      <Box
        sx={{
          minHeight: 'calc(100vh - 200px)',
          py: { xs: 4, sm: 6 },
          backgroundColor: '#fafafa',
        }}
      >
        <Container maxWidth="lg">
        {message.type && (
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Box
              sx={{
                p: 2,
                borderRadius: 2,
                backgroundColor: message.type === 'success' ? '#e8f5e9' : '#fff3e0',
                border: `1px solid ${message.type === 'success' ? '#4caf50' : '#ff9800'}`,
                color: message.type === 'success' ? '#2e7d32' : '#e65100',
              }}
            >
              <Typography variant="body1">
                {message.text}
              </Typography>
            </Box>
          </Box>
        )}
        
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              color: 'text.primary',
              fontWeight: 'bold',
              mb: 2,
              fontSize: { xs: '2.5rem', sm: '3.5rem' },
            }}
          >
            Support CURIUSAI
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: 'text.secondary',
              mb: 4,
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Your support helps us continue providing the best AI tools discovery platform
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={8}>
            <Paper
              elevation={24}
              sx={{
                p: 4,
                borderRadius: 4,
                background: 'background.paper',
              }}
            >
              <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Typography variant="h4" sx={{ mb: 2, color: 'text.primary' }}>
                  Why Support Us?
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
                  CURIUSAI is dedicated to helping people discover and explore the best AI tools available today.
                  Your contribution helps us:
                </Typography>
              </Box>

              <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ textAlign: 'center', p: 2 }}>
                    <Typography variant="h6" sx={{ mb: 1, color: 'text.primary' }}>
                      <span role="img" aria-label="search"> Maintain Platform</span>
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Keep our servers running and the platform fast and reliable
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ textAlign: 'center', p: 2 }}>
                    <Typography variant="h6" sx={{ mb: 1, color: 'text.primary' }}>
                      <span role="img" aria-label="tools"> Add New Tools</span>
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Continuously research and add the latest AI tools to our database
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ textAlign: 'center', p: 2 }}>
                    <Typography variant="h6" sx={{ mb: 1, color: 'text.primary' }}>
                      <span role="img" aria-label="star"> Improve Features</span>
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Develop new features and enhance user experience
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ textAlign: 'center', p: 2 }}>
                    <Typography variant="h6" sx={{ mb: 1, color: 'text.primary' }}>
                      <span role="img" aria-label="users"> Support Community</span>
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Provide support and resources for our growing community
                    </Typography>
                  </Box>
                </Grid>
              </Grid>

              <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Typography variant="h5" sx={{ mb: 3, color: 'text.primary' }}>
                  Choose Your Support Amount
                </Typography>
                <PayPalHosted />
              </Box>

              <Box sx={{ textAlign: 'center', mt: 4 }}>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
                  Every contribution, no matter the size, makes a difference. Thank you for supporting CURIUSAI!
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Questions about supporting us?{' '}
            <Box component="a" href="/contact" sx={{ color: 'primary.main', textDecoration: 'underline' }}>
              Contact us
            </Box>
          </Typography>
        </Box>
      </Container>
    </Box>
    </>
  );
}
