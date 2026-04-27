'use client';

import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { categories } from '@/data/categories';

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (slug: string) => void;
}

export default function CategoryFilter({ selectedCategory, onSelectCategory }: CategoryFilterProps) {
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Detect screen size
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    // Check if content overflows
    const checkOverflow = () => {
      const container = document.getElementById('category-filter-container');
      if (container) {
        setIsOverflowing(container.scrollWidth > container.clientWidth);
      }
    };
    
    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    
    return () => window.removeEventListener('resize', checkOverflow);
  }, []);

  const shouldShowHint = isOverflowing && isDesktop;

  return (
    <Box>
      {/* Desktop hint */}
      {shouldShowHint && (
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'flex-end',
          mb: 1,
          pr: 2,
          gap: 0.5,
        }}>
          <Typography 
            variant="caption" 
            color="text.secondary"
            sx={{ 
              fontSize: '0.75rem',
              opacity: 0.7,
            }}
          >
            Scroll horizontally to see more
          </Typography>
          <KeyboardArrowRightIcon 
            sx={{ 
              fontSize: '0.875rem',
              color: 'text.secondary',
              opacity: 0.7,
            }} 
          />
        </Box>
      )}
      
      {/* Filter buttons container */}
      <Box
        id="category-filter-container"
        sx={{
          display: 'flex',
          gap: 1,
          overflowX: 'auto',
          pb: 1,
          px: 2,
          justifyContent: 'flex-start',
          scrollbarWidth: 'thin', // Desktop thin scrollbar
          msOverflowStyle: 'thin', // IE and Edge
          '&::-webkit-scrollbar': {
            height: isDesktop ? '6px' : 'none', // Desktop show, mobile hide
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: isDesktop ? 'grey.200' : 'transparent',
            borderRadius: 1,
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: isDesktop ? 'grey.400' : 'transparent',
            borderRadius: 1,
            '&:hover': {
              backgroundColor: isDesktop ? 'grey.500' : 'transparent',
            },
          },
          maxWidth: '100%',
          width: '100%',
          // Desktop gradient mask
          ...(shouldShowHint && {
            '&:after': {
              content: '""',
              position: 'absolute',
              right: 0,
              top: 0,
              bottom: 0,
              width: '20px',
              background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.9))',
              pointerEvents: 'none',
            },
          }),
        }}
      >
        {categories.map((category) => (
          <Chip
            key={category.id}
            label={category.name}
            onClick={() => onSelectCategory(category.slug)}
            color={selectedCategory === category.slug ? 'primary' : 'default'}
            sx={{
              cursor: 'pointer',
              flexShrink: 0,
              whiteSpace: 'nowrap',
              '&:hover': {
                backgroundColor: selectedCategory === category.slug 
                  ? 'primary.dark' 
                  : 'primary.main',
                color: 'white',
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
}

