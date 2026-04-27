'use client';

import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import SearchBar from './SearchBar';

interface HeaderProps {
  searchQuery?: string;
  onSearchChange?: (value: string) => void;
  showSearch?: boolean;
}

export default function Header({ searchQuery = '', onSearchChange, showSearch = true }: HeaderProps) {
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMenuItemClick = () => {
    setMobileMenuOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHomePage) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <AppBar position="sticky" sx={{ boxShadow: 2, bgcolor: '#1a1a1a' }}>
      <Container maxWidth={false} disableGutters>
        <Toolbar disableGutters sx={{ py: { xs: 1, sm: 0.5 }, px: { xs: 2, sm: 3, md: 4 }, display: 'flex', alignItems: 'center' }}>
          <IconButton
            color="inherit"
            aria-label="open menu"
            edge="start"
            onClick={handleMobileMenuToggle}
            sx={{ mr: 2, display: { xs: mobileSearchOpen ? 'none' : 'flex', lg: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Link href="/" onClick={handleLogoClick} style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
              <Typography
                variant="h6"
                noWrap
                sx={{
                  letterSpacing: '.1rem',
                  color: 'inherit',
                  fontSize: { xs: '1rem', sm: '1.15rem', md: '1.25rem' },
                  display: { xs: mobileSearchOpen ? 'none' : 'block', md: 'block' },
                  fontWeight: 700,
                }}
              >
                CURIUSAI
              </Typography>
            </Link>
            
            {showSearch && (
              <Box sx={{ 
                display: { xs: 'none', md: 'block' },
                width: { md: '35%', lg: '30%' },
                maxWidth: 400,
                minWidth: 280
              }}>
                <SearchBar
                  value={searchQuery}
                  onChange={handleSearchChange}
                  darkMode={true}
                />
              </Box>
            )}
          </Box>
          
          <Box sx={{ flexGrow: 1 }} />
          
          {/* Quick Links - Desktop */}
          <Box sx={{ display: { xs: 'none', lg: 'flex' }, gap: 2 }}>
            <Button
              component={Link}
              href="/"
              color="inherit"
              onClick={(e) => {
                if (isHomePage) {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              sx={{
                textTransform: 'none',
                fontSize: { md: '0.8rem', lg: '0.9rem' },
                px: { md: 1, lg: 2 },
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              Home
            </Button>
            <Button
              component={Link}
              href="/tools/finder"
              color="inherit"
              sx={{
                textTransform: 'none',
                fontSize: { md: '0.8rem', lg: '0.9rem' },
                px: { md: 1, lg: 2 },
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              AI Finder
            </Button>
            <Button
              component={Link}
              href="/news"
              color="inherit"
              sx={{
                textTransform: 'none',
                fontSize: { md: '0.8rem', lg: '0.9rem' },
                px: { md: 1, lg: 2 },
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              News
            </Button>
            <Button
              component={Link}
              href="/about"
              color="inherit"
              sx={{
                textTransform: 'none',
                fontSize: { md: '0.8rem', lg: '0.9rem' },
                px: { md: 1, lg: 2 },
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              About
            </Button>
            <Button
              component={Link}
              href="/support"
              color="inherit"
              sx={{
                textTransform: 'none',
                fontSize: { md: '0.8rem', lg: '0.9rem' },
                px: { md: 1, lg: 2 },
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              Support
            </Button>
            <Button
              component={Link}
              href="/privacy"
              color="inherit"
              sx={{
                textTransform: 'none',
                fontSize: { md: '0.8rem', lg: '0.9rem' },
                px: { md: 1, lg: 2 },
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              Privacy
            </Button>
            <Button
              component={Link}
              href="/terms"
              color="inherit"
              sx={{
                textTransform: 'none',
                fontSize: { md: '0.8rem', lg: '0.9rem' },
                px: { md: 1, lg: 2 },
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              Terms
            </Button>
            <Button
              component={Link}
              href="/contact"
              color="inherit"
              sx={{
                textTransform: 'none',
                fontSize: { md: '0.8rem', lg: '0.9rem' },
                px: { md: 1, lg: 2 },
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              Contact
            </Button>
          </Box>

          {showSearch && (
            <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', width: mobileSearchOpen ? '100%' : 'auto' }}>
              {mobileSearchOpen ? (
                <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', gap: 1 }}>
                  <SearchBar
                    value={searchQuery}
                    onChange={handleSearchChange}
                    darkMode={true}
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
          )}
        </Toolbar>
      </Container>

      <Drawer
        anchor="left"
        open={mobileMenuOpen}
        onClose={handleMobileMenuToggle}
        PaperProps={{
          sx: {
            width: 250,
            bgcolor: '#1a1a1a',
            color: 'white',
            backgroundImage: 'none',
          }
        }}
        sx={{
          display: { xs: 'block', lg: 'none' },
        }}
      >
        <Box sx={{ pt: 2, pb: 1, px: 2, bgcolor: '#1a1a1a' }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: 'white' }}>
            Menu
          </Typography>
        </Box>
        <Divider sx={{ borderColor: '#333' }} />
        <List sx={{ bgcolor: '#1a1a1a' }}>
          <ListItem disablePadding>
            <ListItemButton 
              component={Link} 
              href="/" 
              onClick={(e) => {
                handleMenuItemClick();
                if (isHomePage) {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} href="/tools/finder" onClick={handleMenuItemClick}>
              <ListItemText primary="AI Finder" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} href="/news" onClick={handleMenuItemClick}>
              <ListItemText primary="News" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} href="/about" onClick={handleMenuItemClick}>
              <ListItemText primary="About" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} href="/support" onClick={handleMenuItemClick}>
              <ListItemText primary="Support" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} href="/privacy" onClick={handleMenuItemClick}>
              <ListItemText primary="Privacy" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} href="/terms" onClick={handleMenuItemClick}>
              <ListItemText primary="Terms" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} href="/contact" onClick={handleMenuItemClick}>
              <ListItemText primary="Contact" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
}

