'use client';

import { useState, useMemo } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SearchOffIcon from '@mui/icons-material/SearchOff';
import { tools } from '@/data/tools';
import ToolCard from '@/components/ToolCard';
import CategoryFilter from '@/components/CategoryFilter';
import Header from '@/components/Header';
import { filterToolsByCategory, searchTools } from '@/lib/utils';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredTools = useMemo(() => {
    let result = tools;
    
    result = filterToolsByCategory(result, selectedCategory);
    
    result = searchTools(result, searchQuery);
    
    return result;
  }, [searchQuery, selectedCategory]);

  return (
    <>
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <Container maxWidth="xl" sx={{ py: { xs: 2, sm: 3, md: 4 }, px: { xs: 2, sm: 3 } }}>
        <Box sx={{ 
          textAlign: 'center', 
          mb: 6,
          py: { xs: 4, sm: 5, md: 6 },
          px: { xs: 2, sm: 3 },
          bgcolor: 'primary.main',
          color: 'white',
          borderRadius: 2,
        }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' } }}>
            AI ToolLaboratory
          </Typography>
          <Typography variant="subtitle1" sx={{ fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' } }}>
            探索100款精選AI工具，提升您的工作效率
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <CategoryFilter
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
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
            未找到符合的工具
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
            請嘗試其他搜尋詞或分類
          </Typography>
        </Box>
      )}
      </Container>
    </>
  );
}

