'use client';

import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  border: '2px solid ' + theme.palette.grey[200],
  borderRadius: 16,
  boxShadow: theme.shadows[2],
}));

export default function PayPalHosted() {
  useEffect(() => {
    // Load PayPal SDK with hosted buttons
    const script = document.createElement('script');
    script.src = 'https://www.paypal.com/sdk/js?client-id=BAAwbFfT0UgvNf6hTIfT04SRb3-VqcT5wnXUb9b-22AL8H5aY0ZJmhlut6D9bPB5cCw7cje66ZW-ew-jSI&components=hosted-buttons&disable-funding=venmo&currency=USD';
    script.async = true;
    
    script.onload = () => {
      // Initialize hosted buttons after SDK loads
      if (window.paypal && window.paypal.HostedButtons) {
        window.paypal.HostedButtons({
          hostedButtonId: "U939WZRT6WKZS",
        }).render("#paypal-container-U939WZRT6WKZS");
      }
    };
    
    document.head.appendChild(script);
    
    return () => {
      // Clean up
      const existingScript = document.querySelector('script[src*="paypal.com/sdk/js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <StyledCard sx={{ maxWidth: 400, mx: 'auto' }}>
      <CardContent sx={{ textAlign: 'center', py: 4 }}>
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
          <span role="img" aria-label="heart"> Support CURIUSAI</span>
        </Typography>
        <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
          Your support helps us maintain and improve this AI tools platform.
        </Typography>
        
        <Box sx={{ mt: 2 }}>
          <div id="paypal-container-U939WZRT6WKZS"></div>
        </Box>
        
        <Typography variant="caption" sx={{ color: 'text.secondary', mt: 2, display: 'block' }}>
          Secure payment powered by PayPal
        </Typography>
      </CardContent>
    </StyledCard>
  );
}
