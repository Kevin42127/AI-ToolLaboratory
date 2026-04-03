import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Link from 'next/link';
import Header from '@/components/Header';

const articles = [
  {
    id: 1,
    title: 'How to Boost Work Efficiency 300% with AI Tools',
    slug: 'boost-work-efficiency-300-with-ai-tools',
    excerpt: 'Discover proven strategies and AI tools that can triple your productivity. Learn how to integrate AI into your daily workflow for maximum efficiency.',
    category: 'Productivity',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
    readTime: '8 min read',
  },
  {
    id: 2,
    title: 'ChatGPT vs Claude: Which One is Right for You?',
    slug: 'chatgpt-vs-claude-comparison',
    excerpt: 'A comprehensive comparison of two leading AI assistants. Find out which one best suits your needs based on features, pricing, and use cases.',
    category: 'Tool Comparison',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop',
    readTime: '10 min read',
  },
  {
    id: 3,
    title: 'Top 10 Best AI Writing Tools in 2026',
    slug: 'top-10-ai-writing-tools-2026',
    excerpt: 'Our curated list of the best AI writing assistants for content creators, marketers, and professionals. Compare features, pricing, and capabilities.',
    category: 'Tool Review',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format&fit=crop',
    readTime: '12 min read',
  },
];

export default function NewsPage() {
  return (
    <>
      <Header showSearch={false} />
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 }, px: { xs: 2, sm: 3 } }}>
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography variant="h3" component="h1" gutterBottom>
            CURIUSAI News
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
            Stay updated with the latest AI tools, trends, and insights. Explore our curated articles to enhance your AI knowledge.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {articles.map((article) => (
            <Grid item xs={12} md={6} lg={4} key={article.id}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  transition: 'box-shadow 0.2s',
                  '&:hover': {
                    boxShadow: 4,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={article.image}
                  alt={article.title}
                  sx={{
                    objectFit: 'cover',
                  }}
                />
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ mb: 2 }}>
                    <Chip 
                      label={article.category} 
                      size="small" 
                      color="primary" 
                      sx={{ mb: 1 }}
                    />
                    <Typography variant="caption" display="block" color="text.secondary">
                      {article.readTime}
                    </Typography>
                  </Box>
                  
                  <Typography variant="h6" component="h2" gutterBottom>
                    {article.title}
                  </Typography>
                  
                  <Typography variant="body2" color="text.secondary" paragraph sx={{ flexGrow: 1 }}>
                    {article.excerpt}
                  </Typography>
                  
                  <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
                    Photo by Unsplash
                  </Typography>
                  
                  <Button
                    component={Link}
                    href={`/news/${article.slug}`}
                    variant="outlined"
                    fullWidth
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 6, p: 4, bgcolor: 'grey.50', borderRadius: 2, textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>
            Stay Curious
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            More articles coming soon. Check back regularly for the latest AI tool updates, reviews, and insights.
          </Typography>
        </Box>
      </Container>
    </>
  );
}
