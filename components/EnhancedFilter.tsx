'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Chip from '@mui/material/Chip';
import { categories } from '@/data/categories';

interface EnhancedFilterProps {
  selectedCategory: string;
  selectedProfession: string;
  selectedDifficulty: string;
  onCategoryChange: (slug: string) => void;
  onProfessionChange: (profession: string) => void;
  onDifficultyChange: (difficulty: string) => void;
}

const professions = [
  { id: 'all', name: 'All Professions' },
  { id: 'developer', name: 'Developers' },
  { id: 'designer', name: 'Designers' },
  { id: 'marketer', name: 'Marketers' },
  { id: 'writer', name: 'Writers' },
  { id: 'business', name: 'Business Professionals' },
  { id: 'student', name: 'Students' },
];

const difficulties = [
  { id: 'all', name: 'All Levels' },
  { id: 'beginner', name: 'Beginner Friendly' },
  { id: 'intermediate', name: 'Intermediate' },
  { id: 'advanced', name: 'Advanced' },
];

export default function EnhancedFilter({
  selectedCategory,
  selectedProfession,
  selectedDifficulty,
  onCategoryChange,
  onProfessionChange,
  onDifficultyChange,
}: EnhancedFilterProps) {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" sx={{ mb: 3, fontWeight: 'bold' }}>
        Find Your Perfect AI Tool
      </Typography>
      
      {/* Category Filter */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle2" sx={{ mb: 2, color: 'text.secondary' }}>
          Category
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          <Chip
            label="All Categories"
            onClick={() => onCategoryChange('all')}
            color={selectedCategory === 'all' ? 'primary' : 'default'}
            variant={selectedCategory === 'all' ? 'filled' : 'outlined'}
            clickable
          />
          {categories.map((category) => (
            <Chip
              key={category.slug}
              label={category.name}
              onClick={() => onCategoryChange(category.slug)}
              color={selectedCategory === category.slug ? 'primary' : 'default'}
              variant={selectedCategory === category.slug ? 'filled' : 'outlined'}
              clickable
            />
          ))}
        </Box>
      </Box>

      {/* Profession and Difficulty Filters */}
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        <FormControl sx={{ minWidth: 200, flex: 1 }}>
          <InputLabel>Profession</InputLabel>
          <Select
            value={selectedProfession}
            label="Profession"
            onChange={(e) => onProfessionChange(e.target.value)}
          >
            {professions.map((profession) => (
              <MenuItem key={profession.id} value={profession.id}>
                {profession.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 200, flex: 1 }}>
          <InputLabel>Difficulty Level</InputLabel>
          <Select
            value={selectedDifficulty}
            label="Difficulty Level"
            onChange={(e) => onDifficultyChange(e.target.value)}
          >
            {difficulties.map((difficulty) => (
              <MenuItem key={difficulty.id} value={difficulty.id}>
                {difficulty.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {/* Filter Description */}
      <Box sx={{ mt: 3, p: 2, bgcolor: 'background.paper', borderRadius: 1, border: '1px solid', borderColor: 'divider' }}>
        <Typography variant="body2" color="text.secondary">
          <strong>Smart Filtering:</strong> Find tools specifically designed for your profession and skill level. 
          Whether you're a beginner looking for easy-to-use tools or a professional needing advanced features, 
          we'll help you find the perfect match.
        </Typography>
      </Box>
    </Box>
  );
}
