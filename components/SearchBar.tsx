'use client';

import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <TextField
      fullWidth
      placeholder="搜尋AI工具..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={{ color: 'primary.main' }} />
          </InputAdornment>
        ),
      }}
      sx={{
        backgroundColor: 'background.paper',
        '& .MuiOutlinedInput-root': {
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          '&:hover': {
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          },
          '&.Mui-focused': {
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          },
        },
        '& .MuiOutlinedInput-input': {
          padding: '16px 14px',
          fontSize: '1rem',
        },
      }}
    />
  );
}

