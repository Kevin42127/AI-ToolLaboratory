'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface Option {
  value: string;
  label: string;
  icon?: string;
  description?: string;
}

interface QuestionStepProps {
  question: string;
  description?: string;
  options: Option[];
  multiple?: boolean;
  value: string | string[];
  onChange: (value: string | string[]) => void;
  onNext: () => void;
  onBack?: () => void;
}

export default function QuestionStep({
  question,
  description,
  options,
  multiple = false,
  value,
  onChange,
  onNext,
  onBack,
}: QuestionStepProps) {
  const handleOptionClick = (optionValue: string) => {
    if (multiple) {
      const currentValues = value as string[];
      if (currentValues.includes(optionValue)) {
        onChange(currentValues.filter((v) => v !== optionValue));
      } else {
        onChange([...currentValues, optionValue]);
      }
    } else {
      onChange(optionValue);
    }
  };

  const isSelected = (optionValue: string) => {
    if (multiple) {
      return (value as string[]).includes(optionValue);
    }
    return value === optionValue;
  };

  const canProceed = multiple 
    ? (value as string[]).length > 0 
    : value !== '';

  return (
    <Box>
      <Typography variant="h5" component="h2" gutterBottom align="center" sx={{ mb: 1 }}>
        {question}
      </Typography>
      
      {description && (
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 4 }}>
          {description}
        </Typography>
      )}

      <Grid container spacing={2} sx={{ mb: 4 }}>
        {options.map((option) => (
          <Grid item xs={12} sm={6} key={option.value}>
            <Card
              sx={{
                border: 2,
                borderColor: isSelected(option.value) ? 'primary.main' : 'transparent',
                transition: 'all 0.2s',
                '&:hover': {
                  borderColor: 'primary.light',
                  backgroundColor: 'rgba(66, 165, 245, 0.15)', // 淺藍色 15% 透明度
                },
              }}
            >
              <CardActionArea onClick={() => handleOptionClick(option.value)}>
                <CardContent sx={{ position: 'relative', minHeight: 100 }}>
                  {isSelected(option.value) && (
                    <CheckCircleIcon
                      color="primary"
                      sx={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        fontSize: 28,
                      }}
                    />
                  )}
                  
                  <Typography variant="h6" component="div" sx={{ mb: 1 }}>
                    {option.label}
                  </Typography>
                  
                  {option.description && (
                    <Typography variant="body2" color="text.secondary">
                      {option.description}
                    </Typography>
                  )}
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>


      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
        <Button
          onClick={onBack}
          disabled={!onBack}
          variant="outlined"
          size="large"
        >
          Back
        </Button>
        
        <Button
          onClick={onNext}
          disabled={!canProceed}
          variant="contained"
          size="large"
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}
