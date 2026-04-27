'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useUserPreferences } from '@/hooks/useUserPreferences';

interface UserOnboardingProps {
  onComplete: () => void;
  onSkip?: () => void;
}

const professions = [
  { value: 'developer', label: 'Software Developer' },
  { value: 'designer', label: 'Designer' },
  { value: 'marketer', label: 'Marketing Professional' },
  { value: 'writer', label: 'Writer/Content Creator' },
  { value: 'business', label: 'Business Professional' },
  { value: 'student', label: 'Student/Researcher' },
  { value: 'other', label: 'Other' },
];

const experienceLevels = [
  { value: 'beginner', label: 'Beginner - Just starting with AI tools' },
  { value: 'intermediate', label: 'Intermediate - Used some AI tools' },
  { value: 'advanced', label: 'Advanced - Experienced with AI tools' },
];

const goals = [
  'Increase productivity',
  'Improve code quality',
  'Enhance creativity',
  'Save time on tasks',
  'Learn new skills',
  'Automate workflows',
  'Generate content',
  'Analyze data',
];

export default function UserOnboarding({ onComplete, onSkip }: UserOnboardingProps) {
  const { completeOnboarding } = useUserPreferences();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    profession: '',
    experienceLevel: '',
    primaryGoals: [] as string[],
  });

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      completeOnboarding(formData);
      onComplete();
    }
  };

  const handleSkip = () => {
    console.log('Skip button clicked');
    // Mark as completed without saving preferences
    localStorage.setItem('hasCompletedOnboarding', 'true');
    console.log('Set hasCompletedOnboarding to true');
    
    if (onSkip) {
      console.log('Calling onSkip callback');
      onSkip();
    } else {
      console.log('Calling onComplete callback');
      onComplete();
    }
  };

  const handleGoalToggle = (goal: string) => {
    console.log('Toggling goal:', goal);
    console.log('Current goals:', formData.primaryGoals);
    
    setFormData(prev => {
      const newGoals = prev.primaryGoals.includes(goal)
        ? prev.primaryGoals.filter(g => g !== goal)
        : [...prev.primaryGoals, goal];
      console.log('New goals:', newGoals);
      return {
        ...prev,
        primaryGoals: newGoals
      };
    });
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Box>
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold' }}>
              Welcome to CURIUSAI! 🎯
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
              Let's personalize your experience. What's your profession?
            </Typography>
            
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Select your profession</InputLabel>
              <Select
                value={formData.profession}
                label="Select your profession"
                onChange={(e) => setFormData(prev => ({ ...prev, profession: e.target.value }))}
                MenuProps={{
                  sx: {
                    zIndex: 13000, // Higher than the modal backdrop
                  }
                }}
              >
                {professions.map((prof) => (
                  <MenuItem key={prof.value} value={prof.value}>
                    {prof.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        );

      case 2:
        return (
          <Box>
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold' }}>
              Your Experience Level 📊
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
              How experienced are you with AI tools?
            </Typography>
            
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Select your experience level</InputLabel>
              <Select
                value={formData.experienceLevel}
                label="Select your experience level"
                onChange={(e) => setFormData(prev => ({ ...prev, experienceLevel: e.target.value }))}
                MenuProps={{
                  sx: {
                    zIndex: 13000, // Higher than the modal backdrop
                  }
                }}
              >
                {experienceLevels.map((level) => (
                  <MenuItem key={level.value} value={level.value}>
                    {level.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        );

      case 3:
        return (
          <Box>
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold' }}>
              Your Goals 🎯
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
              What do you want to achieve with AI tools? (Select all that apply)
            </Typography>
            
            <Box sx={{ mb: 3 }}>
              {goals.map((goal) => (
                <Box 
                  key={goal}
                  onClick={() => handleGoalToggle(goal)}
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    mb: 1,
                    cursor: 'pointer',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.04)',
                      borderRadius: 1,
                      px: 1,
                      mx: -1,
                    }
                  }}
                >
                  <Checkbox
                    checked={formData.primaryGoals.includes(goal)}
                    onChange={(e) => {
                      e.stopPropagation();
                      handleGoalToggle(goal);
                    }}
                    sx={{ mr: 1 }}
                  />
                  <ListItemText 
                    primary={goal}
                    sx={{ 
                      '& .MuiListItemText-primary': {
                        fontSize: '0.95rem',
                      }
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        );

      default:
        return null;
    }
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bgcolor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
      }}
    >
      <Card sx={{ maxWidth: 500, width: '90%', mx: 2 }}>
        <CardContent sx={{ p: 4 }}>
          {renderStep()}
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 4 }}>
            <Button
              onClick={() => setStep(Math.max(1, step - 1))}
              disabled={step === 1}
            >
              Back
            </Button>
            
            {/* Skip Option */}
            <Button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleSkip();
              }}
              color="secondary"
              variant="text"
              sx={{ 
                fontSize: '0.875rem',
                minWidth: 'auto',
                px: 1,
              }}
            >
              Skip for now
            </Button>
            
            <Button
              variant="contained"
              onClick={handleNext}
              disabled={
                (step === 1 && !formData.profession) ||
                (step === 2 && !formData.experienceLevel) ||
                (step === 3 && formData.primaryGoals.length === 0)
              }
              sx={{
                ...(step === 3 && {
                  '&:hover': {
                    backgroundColor: formData.primaryGoals.length > 0 ? 'primary.dark' : undefined,
                  }
                })
              }}
            >
              {step === 3 ? 'Get Started' : 'Next'}
            </Button>
          </Box>
          
          <Box sx={{ mt: 2 }}>
            <Typography variant="caption" color="text.secondary" align="center">
              Step {step} of 3
            </Typography>
            {/* Debug info - remove in production */}
            {process.env.NODE_ENV === 'development' && step === 3 && (
              <Typography variant="caption" color="error" display="block">
                Debug: Selected goals: {formData.primaryGoals.length} | Goals: {formData.primaryGoals.join(', ')}
              </Typography>
            )}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
