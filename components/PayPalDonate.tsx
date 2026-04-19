'use client';

import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { styled } from '@mui/material/styles';

declare global {
  interface Window {
    paypal: any;
  }
}

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  border: '2px solid ' + theme.palette.grey[200],
  borderRadius: 16,
  boxShadow: theme.shadows[2],
}));

export default function PayPalDonate() {
  const [amount, setAmount] = useState('10');
  const [customAmount, setCustomAmount] = useState('');
  const [isCustomAmount, setIsCustomAmount] = useState(false);
  const [paypalLoaded, setPaypalLoaded] = useState(false);

  useEffect(() => {
    // Load PayPal SDK
    const script = document.createElement('script');
    // Use sandbox for testing
    const isSandbox = process.env.NODE_ENV === 'development';
    const clientId = isSandbox 
      ? process.env.NEXT_PUBLIC_PAYPAL_SANDBOX_CLIENT_ID 
      : process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
    
    script.src = `https://www.${isSandbox ? 'sandbox.' : ''}paypal.com/sdk/js?client-id=${clientId}&currency=USD`;
    script.addEventListener('load', () => setPaypalLoaded(true));
    document.body.appendChild(script);

    // Add CSS to hide PayPal branding text
    const style = document.createElement('style');
    style.textContent = `
      .paypal-button-tagline,
      .paypal-button-text + .paypal-button-tagline,
      [data-testid="paypal-button-tagline"],
      .paypal-button-container .paypal-button-tagline {
        display: none !important;
      }
      .paypal-button-container:has(.paypal-button-tagline) {
        padding-bottom: 0 !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.body.removeChild(script);
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  useEffect(() => {
    if (paypalLoaded && window.paypal) {
      // Clear previous PayPal buttons
      const container = document.getElementById('paypal-button-container');
      if (container) {
        container.innerHTML = '';
      }
      
      // Render PayPal buttons
      window.paypal.Buttons({
        createOrder: function(data: any, actions: any) {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: amount,
                currency_code: 'USD'
              },
              description: 'CURIUSAI Website Support'
            }]
          });
        },
        onApprove: function(data: any, actions: any) {
          return actions.order.capture().then(function(details: any) {
            alert('Thank you for your support! ' + details.payer.name.given_name);
          });
        },
        onError: function(err: any) {
          console.error('PayPal error:', err);
          alert('Payment failed. Please try again.');
        }
      }).render('#paypal-button-container');
    }
  }, [paypalLoaded, amount]);

  const predefinedAmounts = ['5', '10', '25', '50', '100'];
const amountOptions = ['5', '10', '25', '50', '100', 'custom'];

  const handleAmountChange = (value: string) => {
    if (value === 'custom') {
      setIsCustomAmount(true);
      if (!customAmount) {
        setCustomAmount('10'); // Set default custom amount
      }
      setAmount(customAmount || '10');
    } else {
      setIsCustomAmount(false);
      setAmount(value);
    }
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    if (value) {
      setAmount(value);
    }
  };

  return (
    <StyledCard sx={{ maxWidth: 400, mx: 'auto' }}>
      <CardContent sx={{ textAlign: 'center', py: 4 }}>
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
          <span role="img" aria-label="heart"> Support CURIUSAI</span>
        </Typography>
        <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
          Your support helps us maintain and improve this AI tools platform.
        </Typography>
        
        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel sx={{ color: 'text.secondary' }}>Amount (USD)</InputLabel>
          <Select
            value={isCustomAmount || !predefinedAmounts.includes(amount) ? 'custom' : amount}
            label="Amount (USD)"
            onChange={(e) => handleAmountChange(e.target.value)}
            sx={{
              color: 'text.primary',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#ccc',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#999',
              },
              '& .MuiSvgIcon-root': {
                color: 'text.secondary',
              },
            }}
          >
            {amountOptions.map((value) => (
              <MenuItem key={value} value={value}>
                {value === 'custom' ? 'Custom Amount' : `$ ${value}`}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {isCustomAmount && (
          <TextField
            fullWidth
            label="Enter Custom Amount (USD)"
            type="number"
            value={customAmount}
            onChange={(e) => handleCustomAmountChange(e.target.value)}
            sx={{
              mb: 3,
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#ccc',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#999',
              },
              '& .MuiInputLabel-root': {
                color: 'text.secondary',
              },
              '& .MuiInputBase-input': {
                color: 'text.primary',
              },
            }}
            inputProps={{
              min: '1',
              step: '1',
            }}
          />
        )}

        <Box
          id="paypal-button-container"
          sx={{
            minHeight: '150px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 2,
            marginBottom: 2,
          }}
        >
          {!paypalLoaded && (
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Loading payment options...
            </Typography>
          )}
        </Box>
      </CardContent>
      
      <CardActions sx={{ justifyContent: 'center', pb: 3 }}>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          Secure payment powered by PayPal
        </Typography>
      </CardActions>
    </StyledCard>
  );
}
