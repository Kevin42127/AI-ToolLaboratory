'use client';

import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

interface HeaderProps {
  searchQuery?: string;
  onSearchChange?: (value: string) => void;
}

export default function Header({ searchQuery = '', onSearchChange }: HeaderProps) {
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const handleSearchChange = (value: string) => {
    if (onSearchChange) {
      onSearchChange(value);
    }
  };

  const handleMobileSearchToggle = () => {
    setMobileSearchOpen(!mobileSearchOpen);
    if (!mobileSearchOpen && !isHomePage) {
      router.push('/');
    }
  };

  return (
    <AppBar position="sticky" elevation={2}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ py: { xs: 1, sm: 0.5 } }}>
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography
              variant="h6"
              noWrap
              sx={{
                letterSpacing: '.1rem',
                color: 'inherit',
                fontSize: { xs: '1rem', sm: '1.15rem', md: '1.25rem' },
                display: { xs: mobileSearchOpen ? 'none' : 'block', md: 'block' },
              }}
            >
              AI ToolLaboratory
            </Typography>
          </Link>
          
          <Box sx={{ flexGrow: 1 }} />
          
          <Box sx={{ display: { xs: 'none', md: 'block' }, width: '100%', maxWidth: 400 }}>
            <TextField
              fullWidth
              size="small"
              placeholder="搜尋AI工具..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: 'white' }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  color: 'white',
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.7)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'white',
                  },
                },
                '& .MuiOutlinedInput-input': {
                  '&::placeholder': {
                    color: 'white',
                  },
                },
              }}
            />
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', width: mobileSearchOpen ? '100%' : 'auto' }}>
            {mobileSearchOpen ? (
              <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', gap: 1 }}>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="搜尋AI工具..."
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  autoFocus
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon sx={{ color: 'white' }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      color: 'white',
                      '& fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.5)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.7)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'white',
                      },
                    },
                    '& .MuiOutlinedInput-input': {
                      '&::placeholder': {
                        color: 'white',
                      },
                    },
                  }}
                />
                <IconButton
                  onClick={handleMobileSearchToggle}
                  sx={{ color: 'white' }}
                >
                  <CloseIcon />
                </IconButton>
              </Box>
            ) : (
              <IconButton
                onClick={handleMobileSearchToggle}
                sx={{ color: 'white' }}
              >
                <SearchIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

