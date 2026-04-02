import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import Link from 'next/link';
import Header from '@/components/Header';

export default function ContactPage() {
  return (
    <>
      <Header showSearch={false} />
      <Container maxWidth="md" sx={{ py: { xs: 4, md: 8 }, px: { xs: 2, sm: 3 } }}>
        <Paper sx={{ p: { xs: 3, md: 6 }, textAlign: 'center', overflow: 'hidden' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Contact Us
        </Typography>
        
        <Typography variant="body1" paragraph sx={{ mb: 4 }}>
          We'd love to hear from you! Whether you have questions about AI tools, want to suggest a new tool for our database, or need help with anything related to AI ToolLaboratory, we're here to help.
        </Typography>

        <Box sx={{ mb: 6 }}>
          <EmailIcon sx={{ fontSize: 64, color: 'primary.main', mb: 2 }} />
          <Typography variant="h5" component="h2" sx={{ mb: 2, color: 'primary.main' }}>
            Get in Touch
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 3 }}>
            Feel free to reach out to us with any questions, suggestions, or feedback.
          </Typography>
          <Button
            component={Link}
            href="mailto:tyouxipindao@gmail.com"
            variant="contained"
            size="large"
            startIcon={<EmailIcon />}
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
            }}
          >
            Send Email
          </Button>
        </Box>

        <Box sx={{ mt: 6, p: 3, bgcolor: 'grey.50', borderRadius: 2 }}>
          <Typography variant="h6" component="h3" sx={{ mb: 2, textAlign: 'center' }}>
            Quick Links
          </Typography>
          
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, textAlign: 'center' }}>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <strong>Email:</strong> <Link href="mailto:tyouxipindao@gmail.com" color="primary">tyouxipindao@gmail.com</Link>
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <strong>Response Time:</strong> Usually within 24-48 hours
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Container>
    </>
  );
}
