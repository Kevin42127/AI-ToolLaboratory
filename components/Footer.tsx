'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

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
        <Typography variant="body2" align="center" sx={{ fontSize: { xs: '0.8rem', sm: '0.875rem' }, color: 'white' }}>
          © AI ToolLaboratory.
        </Typography>
      </Container>
    </Box>
  );
}

