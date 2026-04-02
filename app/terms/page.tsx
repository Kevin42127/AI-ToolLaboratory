import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Header from '@/components/Header';

export default function TermsOfService() {
  return (
    <>
      <Header showSearch={false} />
      <Container maxWidth="md" sx={{ py: { xs: 4, md: 8 }, px: { xs: 2, sm: 3 } }}>
        <Paper sx={{ p: { xs: 3, md: 6 }, overflow: 'hidden' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Terms of Service
        </Typography>
        
        <Typography variant="body1" paragraph>
          Last updated: {new Date().toLocaleDateString()}
        </Typography>

        <Typography variant="h4" component="h2" sx={{ mt: 4, mb: 2 }}>
          1. Acceptance of Terms
        </Typography>
        
        <Typography variant="body1" paragraph>
          By accessing and using AI ToolLaboratory, you accept and agree to be bound by the terms and provision of this agreement.
        </Typography>

        <Typography variant="h4" component="h2" sx={{ mt: 4, mb: 2 }}>
          2. Use License
        </Typography>
        
        <Typography variant="body1" paragraph>
          Permission is granted to temporarily access the materials (information or software) on AI ToolLaboratory for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
        </Typography>

        <Typography variant="h4" component="h2" sx={{ mt: 4, mb: 2 }}>
          3. Disclaimer
        </Typography>
        
        <Typography variant="body1" paragraph>
          The materials on AI ToolLaboratory are provided on an 'as is' basis. AI ToolLaboratory makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
        </Typography>

        <Typography variant="h4" component="h2" sx={{ mt: 4, mb: 2 }}>
          4. Limitations
        </Typography>
        
        <Typography variant="body1" paragraph>
          In no event shall AI ToolLaboratory or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on AI ToolLaboratory.
        </Typography>

        <Typography variant="h4" component="h2" sx={{ mt: 4, mb: 2 }}>
          5. Accuracy of Materials
        </Typography>
        
        <Typography variant="body1" paragraph>
          The materials appearing on AI ToolLaboratory could include technical, typographical, or photographic errors. AI ToolLaboratory does not warrant that any of the materials on its website are accurate, complete, or current.
        </Typography>

        <Typography variant="h4" component="h2" sx={{ mt: 4, mb: 2 }}>
          6. Links
        </Typography>
        
        <Typography variant="body1" paragraph>
          AI ToolLaboratory has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by AI ToolLaboratory of the site.
        </Typography>

        <Typography variant="h4" component="h2" sx={{ mt: 4, mb: 2 }}>
          7. User Conduct
        </Typography>
        
        <Typography variant="body1" paragraph>
          You agree not to:
        </Typography>
        
        <Box component="ul" sx={{ pl: 3, mb: 2, listStyleType: 'disc' }}>
          <Typography component="li" variant="body1" sx={{ mb: 1, display: 'list-item' }}>
            Use the website for any unlawful purpose
          </Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1, display: 'list-item' }}>
            Attempt to gain unauthorized access to our systems
          </Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1, display: 'list-item' }}>
            Interfere with or disrupt the website or servers
          </Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1, display: 'list-item' }}>
            Post or transmit harmful or offensive content
          </Typography>
        </Box>

        <Typography variant="h4" component="h2" sx={{ mt: 4, mb: 2 }}>
          8. Intellectual Property
        </Typography>
        
        <Typography variant="body1" paragraph>
          All content on AI ToolLaboratory, including but not limited to text, graphics, logos, and images, is the property of AI ToolLaboratory or its content suppliers and is protected by intellectual property laws.
        </Typography>

        <Typography variant="h4" component="h2" sx={{ mt: 4, mb: 2 }}>
          9. Privacy
        </Typography>
        
        <Typography variant="body1" paragraph>
          Your use of AI ToolLaboratory is also governed by our Privacy Policy, which can be found in the footer of our website.
        </Typography>

        <Typography variant="h4" component="h2" sx={{ mt: 4, mb: 2 }}>
          10. Modifications
        </Typography>
        
        <Typography variant="body1" paragraph>
          AI ToolLaboratory may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
        </Typography>

        <Typography variant="h4" component="h2" sx={{ mt: 4, mb: 2 }}>
          11. Governing Law
        </Typography>
        
        <Typography variant="body1" paragraph>
          These terms and conditions are governed by and construed in accordance with the laws of Taiwan and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
        </Typography>

        <Typography variant="h4" component="h2" sx={{ mt: 4, mb: 2 }}>
          12. Contact Information
        </Typography>
        
        <Typography variant="body1" paragraph>
          If you have any questions about these Terms of Service, please contact us at tyouxipindao@gmail.com.
        </Typography>

        <Divider sx={{ my: 4 }} />
        
        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', mt: 4 }}>
          These terms of service are effective as of {new Date().toLocaleDateString()}.
        </Typography>
      </Paper>
    </Container>
    </>
  );
}
