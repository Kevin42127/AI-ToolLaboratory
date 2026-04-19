import { Metadata } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Support CURIUSAI - Help Us Grow',
  description: 'Support CURIUSAI to help us continue providing the best AI tools discovery platform. Your contribution helps us maintain and improve our services.',
};

export default function SupportPage() {
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
                fontSize: { xs: '1.2rem', sm: '1.4rem' },
              }}
            >
              Help us continue providing the best AI tools discovery platform
            </Typography>
          </Box>

          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={10} lg={8}>
              <Paper
                elevation={3}
                sx={{
                  p: { xs: 3, sm: 4, md: 5 },
                  borderRadius: 3,
                  backgroundColor: 'background.paper',
                }}
              >
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      color: 'text.primary',
                      fontWeight: 'bold',
                      mb: 3,
                    }}
                  >
                    Why Support Us?
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      mb: 4,
                      maxWidth: '600px',
                      mx: 'auto',
                    }}
                  >
                    Your contribution helps us maintain and improve this platform, ensuring we can continue to provide valuable AI tools discovery services to our community.
                  </Typography>
                </Box>

                <Grid container spacing={3} sx={{ mb: 6 }}>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ textAlign: 'center', p: 3 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          color: 'primary.main',
                          fontWeight: 'bold',
                          mb: 2,
                        }}
                      >
                        Platform Maintenance
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Keep our servers running and ensure smooth performance for all users
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ textAlign: 'center', p: 3 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          color: 'primary.main',
                          fontWeight: 'bold',
                          mb: 2,
                        }}
                      >
                        New Tools Discovery
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Research and add more innovative AI tools to our database
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ textAlign: 'center', p: 3 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          color: 'primary.main',
                          fontWeight: 'bold',
                          mb: 2,
                        }}
                      >
                        Feature Improvements
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Develop new features and enhance user experience
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ textAlign: 'center', p: 3 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          color: 'primary.main',
                          fontWeight: 'bold',
                          mb: 2,
                        }}
                      >
                        Community Support
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Provide support and resources for our growing community
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>

                <Box sx={{ textAlign: 'center', mb: 4 }}>
                  <Typography variant="h5" sx={{ mb: 3, color: 'text.primary' }}>
                    Support Our Work
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
                    Click below to make a secure donation through PayPal
                  </Typography>
                  
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    href="https://www.paypal.com/ncp/payment/U939WZRT6WKZS"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      py: 2,
                      px: 4,
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      textTransform: 'none',
                      minWidth: '200px',
                    }}
                  >
                    Donate with PayPal
                  </Button>
                  
                  <Typography variant="caption" sx={{ color: 'text.secondary', mt: 2, display: 'block' }}>
                    Secure payment powered by PayPal
                  </Typography>
                </Box>

                <Box sx={{ textAlign: 'center', mt: 4 }}>
                  <Typography variant="body2" sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
                    Every contribution, no matter the size, makes a difference. Thank you for supporting CURIUSAI!
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
