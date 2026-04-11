'use client';

import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  darkMode?: boolean;
}

export default function SearchBar({ value, onChange, darkMode = false }: SearchBarProps) {
  return (
    <TextField
      fullWidth
      placeholder={darkMode ? "Search AI tools..." : "Search AI tools..."}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start" sx={{ mr: 0 }}>
            <SearchIcon sx={{ color: darkMode ? 'white' : 'primary.main' }} />
          </InputAdornment>
        ),
      }}
      sx={{
        backgroundColor: darkMode ? '#1a1a1a' : 'background.paper',
        '& .MuiOutlinedInput-root': {
          color: darkMode ? 'white' : 'inherit',
          boxShadow: darkMode ? '0 2px 4px rgba(0,0,0,0.3)' : '0 2px 4px rgba(0,0,0,0.1)',
          '& fieldset': {
            borderColor: darkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.23)',
          },
          '&:hover fieldset': {
            borderColor: darkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.23)',
          },
          '&.Mui-focused fieldset': {
            borderColor: darkMode ? 'white' : 'primary.main',
          },
          '&:hover': {
            boxShadow: darkMode ? '0 4px 8px rgba(0,0,0,0.4)' : '0 4px 8px rgba(0,0,0,0.1)',
          },
          '&.Mui-focused': {
            boxShadow: darkMode ? '0 4px 8px rgba(0,0,0,0.4)' : '0 4px 8px rgba(0,0,0,0.1)',
          },
        },
        '& .MuiOutlinedInput-input': {
          padding: darkMode ? '12px 14px' : '16px 14px',
          fontSize: darkMode ? '0.875rem' : '1rem',
          paddingLeft: darkMode ? '8px' : '0px',
          '&::placeholder': {
            color: darkMode ? 'white' : 'inherit',
          },
        },
      }}
    />
  );
}
