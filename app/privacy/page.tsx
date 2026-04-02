import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Link from 'next/link';
import Header from '@/components/Header';

export default function PrivacyPolicy() {
  return (
    <>
      <Header showSearch={false} />
      <Container maxWidth="md" sx={{ py: { xs: 4, md: 8 }, px: { xs: 2, sm: 3 } }}>
        <Paper sx={{ p: { xs: 3, md: 6 }, overflow: 'hidden' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Privacy Policy
        </Typography>
        
        <Typography variant="body1" paragraph>
          Last updated: {new Date().toLocaleDateString()}
        </Typography>

        <Typography variant="h4" component="h2" sx={{ mt: 4, mb: 2 }}>
          1. Information We Collect
        </Typography>
        
        <Typography variant="body1" paragraph>
          <strong>AI ToolLaboratory does not collect personal information from users.</strong> Since our website does not require registration or login, we do not collect or store any personal data such as names, email addresses, or other identifiable information.
        </Typography>
        
        <Typography variant="body1" paragraph>
          The only information we may collect is:
        </Typography>
        
        <Box component="ul" sx={{ pl: 3, mb: 2 }}>
          <Typography component="li" variant="body1" sx={{ mb: 1 }}>
            • Anonymous usage data and analytics through Google Analytics
          </Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1 }}>
            • IP addresses and browser information for security and analytics purposes
          </Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1 }}>
            • Cookies for website functionality and advertising (Google AdSense)
          </Typography>
        </Box>

        <Typography variant="body1" paragraph>
          <strong>No user accounts, no personal data collection, no registration required.</strong>
        </Typography>

        <Typography variant="h4" component="h2" sx={{ mt: 4, mb: 2 }}>
          2. How We Use Information
        </Typography>
        
        <Typography variant="body1" paragraph>
          Since we don't collect personal information, we use the limited anonymous data we collect for:
        </Typography>
        
        <Box component="ul" sx={{ pl: 3, mb: 2 }}>
          <Typography component="li" variant="body1" sx={{ mb: 1 }}>
            • To improve our website and user experience
          </Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1 }}>
            • To analyze website traffic and usage patterns
          </Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1 }}>
            • To display relevant advertisements through Google AdSense
          </Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1 }}>
            • To ensure website security and prevent abuse
          </Typography>
        </Box>

        <Typography variant="h4" component="h2" sx={{ mt: 4, mb: 2 }}>
          3. Third-Party Services
        </Typography>
        
        <Typography variant="body1" paragraph>
          Our website uses the following third-party services:
        </Typography>
        
        <Box component="ul" sx={{ pl: 3, mb: 2 }}>
          <Typography component="li" variant="body1" sx={{ mb: 1 }}>
            • <strong>Google AdSense:</strong> For displaying advertisements
          </Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1 }}>
            • <strong>Google Analytics:</strong> For website analytics
          </Typography>
        </Box>

        <Typography variant="h4" component="h2" sx={{ mt: 4, mb: 2 }}>
          4. Cookies
        </Typography>
        
        <Typography variant="body1" paragraph>
          We use cookies to enhance your browsing experience. You can control cookie settings through your browser preferences.
        </Typography>

        <Typography variant="h4" component="h2" sx={{ mt: 4, mb: 2 }}>
          5. Data Retention
        </Typography>
        
        <Typography variant="body1" paragraph>
          We retain collected data for as long as necessary to fulfill the purposes outlined in this privacy policy.
        </Typography>

        <Typography variant="h4" component="h2" sx={{ mt: 4, mb: 2 }}>
          6. Your Rights
        </Typography>
        
        <Typography variant="body1" paragraph>
          Since we don't collect personal information, you don't need to worry about:
        </Typography>
        
        <Box component="ul" sx={{ pl: 3, mb: 2 }}>
          <Typography component="li" variant="body1" sx={{ mb: 1 }}>
            • <strong>No personal data to access</strong> - We don't store any of your personal information
          </Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1 }}>
            • <strong>No data to delete</strong> - Since we don't collect personal data, there's nothing to delete
          </Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1 }}>
            • <strong>No accounts to manage</strong> - Our website requires no registration or login
          </Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1 }}>
            • <strong>Cookie control</strong> - You can control cookies through your browser settings
          </Typography>
        </Box>

        <Typography variant="h4" component="h2" sx={{ mt: 4, mb: 2 }}>
          7. Security
        </Typography>
        
        <Typography variant="body1" paragraph>
          While we don't collect personal information, we still implement appropriate security measures to protect our website and ensure safe browsing for all visitors.
        </Typography>

        <Typography variant="h4" component="h2" sx={{ mt: 4, mb: 2 }}>
          8. Children's Privacy
        </Typography>
        
        <Typography variant="body1" paragraph>
          Our website is suitable for all ages. Since we don't collect personal information from any users, including children, there are no privacy concerns for underage visitors.
        </Typography>

        <Typography variant="h4" component="h2" sx={{ mt: 4, mb: 2 }}>
          9. Changes to This Policy
        </Typography>
        
        <Typography variant="body1" paragraph>
          We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.
        </Typography>

        <Typography variant="h4" component="h2" sx={{ mt: 4, mb: 2 }}>
          10. Contact Us
        </Typography>
        
        <Typography variant="body1" paragraph>
          If you have any questions about this privacy policy, please contact us at tyouxipindao@gmail.com.
        </Typography>

        <Divider sx={{ my: 4 }} />
        
        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', mt: 4 }}>
          This privacy policy is effective as of {new Date().toLocaleDateString()}.
        </Typography>
      </Paper>
    </Container>
    </>
  );
}
