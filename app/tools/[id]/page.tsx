import { notFound } from 'next/navigation';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import LaunchIcon from '@mui/icons-material/Launch';
import Header from '@/components/Header';
import { tools } from '@/data/tools';
import { getPricingLabel, getPricingColor } from '@/lib/utils';

interface ToolDetailPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return tools.map((tool) => ({
    id: tool.id,
  }));
}

export default function ToolDetailPage({ params }: ToolDetailPageProps) {
  const tool = tools.find((t) => t.id === params.id);

  if (!tool) {
    notFound();
  }

  return (
    <>
      <Header showSearch={false} />
      <Container maxWidth="lg" sx={{ py: { xs: 2, sm: 3, md: 4 }, px: { xs: 2, sm: 3 } }}>
        <Breadcrumbs sx={{ mb: 3 }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
          <HomeIcon sx={{ mr: 0.5, fontSize: 20 }} />
          Home
        </Link>
        <Typography color="text.primary">{tool.name}</Typography>
      </Breadcrumbs>

      <Card elevation={3} sx={{ overflow: 'visible' }}>
        <CardContent sx={{ p: { xs: 3, sm: 4, md: 5 } }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3, flexWrap: 'wrap', gap: 2 }}>
            <Typography variant="h3" component="h1" sx={{ fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' } }}>
              {tool.name}
            </Typography>
            <Chip
              label={getPricingLabel(tool.pricing)}
              color={getPricingColor(tool.pricing)}
              size="medium"
            />
          </Box>

          <Typography variant="h6" color="text.secondary" sx={{ mb: 4, fontSize: { xs: '1rem', sm: '1.15rem', md: '1.25rem' } }}>
            {tool.description}
          </Typography>

          <Typography variant="body1" paragraph sx={{ mb: 4, lineHeight: 1.8, fontSize: { xs: '0.95rem', sm: '1rem' } }}>
            {tool.longDescription}
          </Typography>

          {/* Pros and Cons Section */}
          <Box sx={{ mb: 4, display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
            {/* Pros */}
            <Box>
              <Typography variant="h6" sx={{ mb: 2, color: 'success.main', fontWeight: 600 }}>
                ✓ Pros
              </Typography>
              <Box component="ul" sx={{ pl: 2, m: 0 }}>
                {tool.pros.map((pro, index) => (
                  <Typography component="li" key={index} variant="body2" sx={{ mb: 1, lineHeight: 1.6 }}>
                    {pro}
                  </Typography>
                ))}
              </Box>
            </Box>

            {/* Cons */}
            <Box>
              <Typography variant="h6" sx={{ mb: 2, color: 'error.main', fontWeight: 600 }}>
                ✗ Cons
              </Typography>
              <Box component="ul" sx={{ pl: 2, m: 0 }}>
                {tool.cons.map((con, index) => (
                  <Typography component="li" key={index} variant="body2" sx={{ mb: 1, lineHeight: 1.6 }}>
                    {con}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="subtitle2" sx={{ mb: 1.5 }}>
              Tags
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {tool.tags.map((tag, index) => (
                <Chip key={index} label={tag} variant="outlined" />
              ))}
            </Box>
          </Box>

          <Button
            variant="contained"
            size="large"
            href={tool.website}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<LaunchIcon />}
          >
            Visit Website
          </Button>

        </CardContent>
      </Card>
      </Container>
    </>
  );
}

