import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import ScienceIcon from '@mui/icons-material/Science';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import Header from '@/components/Header';

export default function AboutPage() {
  return (
    <>
      <Header showSearch={false} />
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 }, px: { xs: 2, sm: 3 } }}>
        <Paper sx={{ p: { xs: 3, md: 6 }, mb: 4, overflow: 'hidden' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          About AI ToolLaboratory
        </Typography>
        
        <Typography variant="h5" component="h2" sx={{ mt: 4, mb: 2, color: 'primary.main' }}>
          Our Mission
        </Typography>
        
        <Typography variant="body1" paragraph>
          AI ToolLaboratory is dedicated to helping professionals, creators, and businesses discover the most effective AI tools to enhance their productivity and creativity. We serve as your trusted laboratory for exploring the rapidly evolving world of artificial intelligence.
        </Typography>

        <Typography variant="h5" component="h2" sx={{ mt: 4, mb: 2, color: 'primary.main' }}>
          What We Do
        </Typography>
        
        <Typography variant="body1" paragraph>
          We carefully curate and review 100+ cutting-edge AI tools across 16 different categories, from text generation and image creation to code assistance and video production. Each tool is thoroughly evaluated to ensure it meets our standards for quality, usability, and value.
        </Typography>

        <Typography variant="h5" component="h2" sx={{ mt: 4, mb: 2, color: 'primary.main' }}>
          Our Values
        </Typography>
        
        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: '100%', textAlign: 'center', p: 2 }}>
              <Avatar sx={{ bgcolor: 'primary.main', mx: 'auto', mb: 2 }}>
                <ScienceIcon />
              </Avatar>
              <Typography variant="h6" component="h3" gutterBottom>
                Innovation
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We stay at the forefront of AI technology to bring you the latest and most innovative tools.
              </Typography>
            </Card>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: '100%', textAlign: 'center', p: 2 }}>
              <Avatar sx={{ bgcolor: 'primary.main', mx: 'auto', mb: 2 }}>
                <TrendingUpIcon />
              </Avatar>
              <Typography variant="h6" component="h3" gutterBottom>
                Quality
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Every tool in our laboratory is carefully tested and reviewed for effectiveness and reliability.
              </Typography>
            </Card>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: '100%', textAlign: 'center', p: 2 }}>
              <Avatar sx={{ bgcolor: 'primary.main', mx: 'auto', mb: 2 }}>
                <SpeedIcon />
              </Avatar>
              <Typography variant="h6" component="h3" gutterBottom>
                Efficiency
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We help you find tools that truly enhance your productivity and streamline your workflow.
              </Typography>
            </Card>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: '100%', textAlign: 'center', p: 2 }}>
              <Avatar sx={{ bgcolor: 'primary.main', mx: 'auto', mb: 2 }}>
                <SecurityIcon />
              </Avatar>
              <Typography variant="h6" component="h3" gutterBottom>
                Trust
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We provide honest, unbiased reviews and recommendations you can rely on.
              </Typography>
            </Card>
          </Grid>
        </Grid>

        <Typography variant="h5" component="h2" sx={{ mt: 6, mb: 2, color: 'primary.main' }}>
          Our Categories
        </Typography>
        
        <Typography variant="body1" paragraph>
          We cover 16 major categories of AI tools:
        </Typography>
        
        <Box component="ul" sx={{ pl: 3, mb: 2 }}>
          <Typography component="li" variant="body1" sx={{ mb: 1 }}>
            • Text Generation & Writing Assistants
          </Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1 }}>
            • Image Generation & Editing
          </Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1 }}>
            • Code Assistance & Development
          </Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1 }}>
            • Video Production & Editing
          </Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1 }}>
            • Voice Synthesis & Audio
          </Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1 }}>
            • Music Generation
          </Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1 }}>
            • Translation & Language
          </Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1 }}>
            • Customer Service & Support
          </Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1 }}>
            • 3D Modeling & Design
          </Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1 }}>
            • Education & Learning
          </Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1 }}>
            • Game Development
          </Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1 }}>
            • Marketing Tools
          </Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1 }}>
            • Data Analysis
          </Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1 }}>
            • Design Tools
          </Typography>
        </Box>

        <Typography variant="h5" component="h2" sx={{ mt: 6, mb: 2, color: 'primary.main' }}>
          Why Choose AI ToolLaboratory?
        </Typography>
        
        <Typography variant="body1" paragraph>
          In the rapidly growing world of AI tools, it's easy to get overwhelmed. We cut through the noise to provide you with:
        </Typography>
        
        <Box component="ul" sx={{ pl: 3, mb: 2 }}>
          <Typography component="li" variant="body1" sx={{ mb: 1 }}>
            • <strong>Curated Selection:</strong> Only the best and most useful AI tools make it to our list
          </Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1 }}>
            • <strong>Detailed Reviews:</strong> Comprehensive information about each tool's features and capabilities
          </Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1 }}>
            • <strong>Regular Updates:</strong> We continuously add new tools and update existing reviews
          </Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1 }}>
            • <strong>User-Friendly Interface:</strong> Easy search and filtering to find exactly what you need
          </Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1 }}>
            • <strong>Free Access:</strong> All our information is completely free to access
          </Typography>
        </Box>

        <Typography variant="h5" component="h2" sx={{ mt: 6, mb: 2, color: 'primary.main' }}>
          Get Started
        </Typography>
        
        <Typography variant="body1" paragraph>
          Ready to explore the world of AI tools? Browse our categories, use our search function to find specific tools, or check out our featured tools to discover the most popular AI solutions available today.
        </Typography>
        
        <Typography variant="body1" paragraph>
          Whether you're a developer, marketer, content creator, or business professional, AI ToolLaboratory has the tools you need to stay ahead in the AI revolution.
        </Typography>
      </Paper>
    </Container>
    </>
  );
}
