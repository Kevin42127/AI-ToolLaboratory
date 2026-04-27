'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogContent';
import { useUserPreferences } from '@/hooks/useUserPreferences';
import { Refresh as RefreshIcon } from '@mui/icons-material';

export default function UserReset() {
  const { resetOnboarding, preferences } = useUserPreferences();
  const [open, setOpen] = useState(false);

  const handleReset = () => {
    resetOnboarding();
    setOpen(false);
    // Reload page to show onboarding again
    window.location.reload();
  };

  // Only show reset button if user has completed onboarding
  if (!preferences.profession) {
    return null;
  }

  return (
    <>
      {/* Reset Button */}
      <Box sx={{ position: 'fixed', bottom: 20, right: 20, zIndex: 1000 }}>
        <Button
          variant="outlined"
          size="small"
          startIcon={<RefreshIcon />}
          onClick={() => setOpen(true)}
          sx={{
            backgroundColor: 'background.paper',
            borderColor: 'divider',
            '&:hover': {
              backgroundColor: 'grey.50',
            }
          }}
        >
          Reset Preferences
        </Button>
      </Box>

      {/* Reset Confirmation Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Reset Your Preferences?</DialogTitle>
        <DialogContent>
          <Typography variant="body1" sx={{ mb: 2 }}>
            This will reset all your personalized settings:
          </Typography>
          <Box sx={{ pl: 2 }}>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              • Your profession and experience level
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              • Your goals and preferences
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              • Recently viewed tools
            </Typography>
            <Typography variant="body2" color="text.secondary">
              • Favorite tools
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ mt: 2, color: 'warning.main' }}>
            You'll need to go through the setup process again.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleReset} color="error" variant="contained">
            Reset Everything
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
