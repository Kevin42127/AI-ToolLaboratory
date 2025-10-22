'use client';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import { AITool } from '@/data/tools';
import { getPricingLabel, getPricingColor } from '@/lib/utils';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

interface ToolCardProps {
  tool: AITool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
          <Typography variant="h6" component="h2">
            {tool.name}
          </Typography>
          <Chip
            label={getPricingLabel(tool.pricing)}
            color={getPricingColor(tool.pricing)}
            size="small"
            sx={{ ml: 1 }}
          />
        </Box>
        
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {tool.description}
        </Typography>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          {tool.tags.slice(0, 3).map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              size="small"
              variant="outlined"
              sx={{ fontSize: '0.7rem' }}
            />
          ))}
        </Box>
      </CardContent>
      
      <Box sx={{ 
        p: 2, 
        pt: 1, 
        borderTop: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'background.paper'
      }}>
        <Button
          fullWidth
          variant="contained"
          href={tool.website}
          target="_blank"
          rel="noopener noreferrer"
          endIcon={<OpenInNewIcon />}
          disableElevation
        >
          訪問官網
        </Button>
      </Box>
    </Card>
  );
}

