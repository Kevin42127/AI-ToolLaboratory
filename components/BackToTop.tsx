'use client';

import { useState, useEffect } from 'react';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useScrollTrigger, Zoom } from '@mui/material';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Zoom in={trigger}>
      <Fab
        onClick={scrollToTop}
        color="primary"
        size="medium"
        aria-label="返回頂部"
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          zIndex: 1000,
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
}
