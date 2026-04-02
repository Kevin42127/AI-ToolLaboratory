'use client';

import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Link from 'next/link';

interface FeatureDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function FeatureDialog({ open, onClose }: FeatureDialogProps) {
  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
        }
      }}
    >
      <DialogTitle sx={{ pb: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant="h5" component="span" sx={{ fontWeight: 'bold' }}>
            Introducing AI Tool Finder
          </Typography>
          <Chip 
            label="BETA" 
            color="warning" 
            size="small"
            sx={{ fontWeight: 'bold', fontSize: '0.65rem' }}
          />
        </Box>
      </DialogTitle>

      <DialogContent>
        <Typography variant="body1" paragraph sx={{ mt: 1 }}>
          Discover the perfect AI tools for your needs with our new intelligent recommendation system!
        </Typography>

        <Box sx={{ mb: 3 }}>
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 0.5 }}>
              Personalized Recommendations
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Answer a few simple questions and get AI-powered tool suggestions tailored to your specific requirements
            </Typography>
          </Box>

          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 0.5 }}>
              Smart Matching Algorithm
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Our algorithm analyzes your purpose, experience level, budget, and preferences to find the best matches
            </Typography>
          </Box>

          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 0.5 }}>
              Powered by Groq AI
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Get intelligent insights and explanations for each recommendation
            </Typography>
          </Box>
        </Box>

        <Box 
          sx={{ 
            bgcolor: 'primary.light', 
            color: 'primary.contrastText',
            p: 2, 
            borderRadius: 1,
            textAlign: 'center'
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
            Save time and find the right tools faster!
          </Typography>
        </Box>
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 3 }}>
        <Button onClick={onClose} variant="outlined">
          Maybe Later
        </Button>
        <Button 
          component={Link}
          href="/tools/finder"
          variant="contained"
          size="large"
          onClick={onClose}
        >
          Try It Now
        </Button>
      </DialogActions>
    </Dialog>
  );
}
