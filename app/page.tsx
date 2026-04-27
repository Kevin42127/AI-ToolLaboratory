'use client';

import { useState, useMemo, useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SearchOffIcon from '@mui/icons-material/SearchOff';
import { tools } from '@/data/tools';
import ToolCard from '@/components/ToolCard';
import EnhancedFilter from '@/components/EnhancedFilter';
import Header from '@/components/Header';
import FeatureDialog from '@/components/FeatureDialog';
import UserOnboarding from '@/components/UserOnboarding';
import { filterToolsByCategory, searchTools } from '@/lib/utils';
import { useUserPreferences } from '@/hooks/useUserPreferences';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProfession, setSelectedProfession] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [featureDialogOpen, setFeatureDialogOpen] = useState(false);
  const { preferences, isFirstVisit, isLoaded, addToRecentlyViewed, completeOnboarding } = useUserPreferences();

  useEffect(() => {
    const hasSeenDialog = localStorage.getItem('hasSeenFinderDialog');
    if (!hasSeenDialog) {
      const timer = setTimeout(() => {
        setFeatureDialogOpen(true);
        localStorage.setItem('hasSeenFinderDialog', 'true');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const filteredTools = useMemo(() => {
    let result = tools;
    
    // If user has preferences, use them for personalization
    if (preferences.profession && !searchQuery && selectedCategory === 'all') {
      const professionTags = {
        developer: ['programming', 'code', 'development'],
        designer: ['design', 'image', 'creative', 'art'],
        marketer: ['marketing', 'seo', 'content', 'analytics'],
        writer: ['writing', 'text', 'content'],
        business: ['business', 'productivity', 'management'],
        student: ['education', 'learning', 'research'],
      };
      
      const relevantTags = professionTags[preferences.profession as keyof typeof professionTags] || [];
      result = result.filter(tool => {
        const toolTags = tool.tags.map(tag => tag.toLowerCase());
        const toolCategories = tool.category.map(cat => cat.toLowerCase());
        
        return relevantTags.some(tag => 
          toolTags.some(toolTag => toolTag.includes(tag)) ||
          toolCategories.some(cat => cat.includes(tag))
        );
      });
    }
    
    result = filterToolsByCategory(result, selectedCategory);
    result = searchTools(result, searchQuery);
    
    // Filter by profession (based on tags and categories)
    if (selectedProfession !== 'all') {
      result = result.filter(tool => {
        const professionTags = {
          developer: ['programming', 'code', 'development'],
          designer: ['design', 'image', 'creative', 'art'],
          marketer: ['marketing', 'seo', 'content', 'analytics'],
          writer: ['writing', 'text', 'content'],
          business: ['business', 'productivity', 'management'],
          student: ['education', 'learning', 'research'],
        };
        
        const relevantTags = professionTags[selectedProfession as keyof typeof professionTags] || [];
        const toolTags = tool.tags.map(tag => tag.toLowerCase());
        const toolCategories = tool.category.map(cat => cat.toLowerCase());
        
        return relevantTags.some(tag => 
          toolTags.some(toolTag => toolTag.includes(tag)) ||
          toolCategories.some(cat => cat.includes(tag))
        );
      });
    }
    
    // Filter by difficulty (simulated based on pricing and complexity)
    if (selectedDifficulty !== 'all') {
      result = result.filter(tool => {
        // Simple logic: free tools are beginner-friendly, paid tools are intermediate/advanced
        if (selectedDifficulty === 'beginner') {
          return tool.pricing === 'free' || tool.tags.includes('beginner-friendly');
        } else if (selectedDifficulty === 'intermediate') {
          return tool.pricing === 'freemium' || tool.tags.includes('intermediate');
        } else if (selectedDifficulty === 'advanced') {
          return tool.pricing === 'paid' || tool.tags.includes('advanced');
        }
        return true;
      });
    }
    
    return result;
  }, [searchQuery, selectedCategory, selectedProfession, selectedDifficulty, preferences.profession]);

  return (
    <>
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <Container maxWidth="xl" sx={{ py: { xs: 2, sm: 3, md: 4 }, px: { xs: 2, sm: 3 } }}>
        <Box sx={{ 
          textAlign: 'center', 
          mb: 6,
          py: { xs: 4, sm: 5, md: 6 },
          px: { xs: 2, sm: 3 },
          bgcolor: '#1a1a1a',
          color: 'white',
          borderRadius: 2,
        }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' } }}>
            CURIUSAI
          </Typography>
          <Typography variant="subtitle1" sx={{ fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' }, mb: 3 }}>
            {preferences.profession 
              ? `AI Tools for ${preferences.profession.charAt(0).toUpperCase() + preferences.profession.slice(1)}s - Personalized Recommendations`
              : 'Find the Perfect AI Tools for Your Work - Save 80% Time on Research'
            }
          </Typography>
          
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: { xs: 2, sm: 4 }, 
            flexWrap: 'wrap',
            mb: 4 
          }}>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              <strong>For Developers:</strong> Code assistants & debugging tools
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              <strong>For Designers:</strong> Image generation & design tools
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              <strong>For Marketers:</strong> Content creation & SEO tools
            </Typography>
          </Box>

          <Typography variant="body1" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' }, opacity: 0.8, maxWidth: '600px', mx: 'auto' }}>
            Stop wasting hours testing AI tools. We've tested 100+ tools so you can focus on what matters - getting results.
          </Typography>
        </Box>

        {/* Statistics Section */}
        <Box sx={{ 
          mb: 6, 
          p: { xs: 3, sm: 4 }, 
          bgcolor: 'background.paper', 
          borderRadius: 2,
          border: '1px solid',
          borderColor: 'divider'
        }}>
          <Typography variant="h5" sx={{ textAlign: 'center', mb: 4, fontWeight: 'bold' }}>
            Why Professionals Choose CURIUSAI
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" color="primary" sx={{ fontWeight: 'bold', mb: 1 }}>
                  100+
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Curated AI Tools Tested
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" color="primary" sx={{ fontWeight: 'bold', mb: 1 }}>
                  80%
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Time Saved on Tool Research
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" color="primary" sx={{ fontWeight: 'bold', mb: 1 }}>
                  15+
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Tool Categories Covered
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" color="primary" sx={{ fontWeight: 'bold', mb: 1 }}>
                  24/7
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Updated with Latest Tools
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ mb: 4 }}>
          <EnhancedFilter
            selectedCategory={selectedCategory}
            selectedProfession={selectedProfession}
            selectedDifficulty={selectedDifficulty}
            onCategoryChange={setSelectedCategory}
            onProfessionChange={setSelectedProfession}
            onDifficultyChange={setSelectedDifficulty}
          />
        </Box>
      {filteredTools.length > 0 ? (
        <Grid container spacing={3}>
          {filteredTools.map((tool) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={tool.id}>
              <ToolCard tool={tool} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <SearchOffIcon sx={{ fontSize: 80, color: 'grey.300', mb: 3 }} />
          <Typography variant="h5" color="text.secondary" gutterBottom>
            No tools found
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
            Please try other search terms or categories
          </Typography>
        </Box>
      )}
      </Container>

      <FeatureDialog 
        open={featureDialogOpen} 
        onClose={() => setFeatureDialogOpen(false)} 
      />
      
      {/* User Onboarding */}
      {isLoaded && isFirstVisit && (
        <UserOnboarding onComplete={() => {}} />
      )}
    </>
  );
}

