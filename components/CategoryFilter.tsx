'use client';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { categories } from '@/data/categories';

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (slug: string) => void;
}

export default function CategoryFilter({ selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 1,
        overflowX: 'auto',
        pb: 1,
        px: 2,
        justifyContent: { xs: 'flex-start', md: 'center' },
        '&::-webkit-scrollbar': {
          height: 6,
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: 'grey.200',
          borderRadius: 1,
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'grey.400',
          borderRadius: 1,
          '&:hover': {
            backgroundColor: 'grey.500',
          },
        },
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
  );
}

