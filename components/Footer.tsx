'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import LaunchIcon from '@mui/icons-material/Launch';

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
      <Container maxWidth="xl">
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          <Typography variant="body2" align="center" sx={{ fontSize: { xs: '0.8rem', sm: '0.875rem' }, color: 'white' }}>
            © AI ToolLaboratory.
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="body2" sx={{ color: 'white', fontSize: { xs: '0.75rem', sm: '0.8rem' } }}>
              相關網站：
            </Typography>
            <Button
              component={Link}
              href="https://devkitofficial.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              size="small"
              endIcon={<LaunchIcon sx={{ fontSize: 14 }} />}
              sx={{
                color: 'white',
                borderColor: 'white',
                fontSize: { xs: '0.75rem', sm: '0.8rem' },
                py: 0.5,
                px: 1.5,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderColor: 'white',
                },
              }}
            >
              DevKit
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

