'use client';

import { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Header from '@/components/Header';
import QuestionStep from '@/components/tools/finder/QuestionStep';
import ResultsStep from '@/components/tools/finder/ResultsStep';

interface UserPreferences {
  purpose: string[];
  experience: string;
  budget: string;
  features: string[];
  language: string[];
}

const steps = ['Purpose', 'Experience', 'Budget', 'Features', 'Results'];

export default function ToolFinderPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [preferences, setPreferences] = useState<UserPreferences>({
    purpose: [],
    experience: '',
    budget: '',
    features: [],
    language: [],
  });
  const [loading, setLoading] = useState(false);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setPreferences({
      purpose: [],
      experience: '',
      budget: '',
      features: [],
      language: [],
    });
  };

  const updatePreferences = (key: keyof UserPreferences, value: any) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <>
      <Header showSearch={false} />
      <Container maxWidth="md" sx={{ py: { xs: 4, md: 8 }, px: { xs: 2, sm: 3 } }}>
        <Paper sx={{ p: { xs: 3, md: 6 }, overflow: 'hidden' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', gap: 1, mb: 2 }}>
            <Typography variant="h3" component="h1">
              AI Tool Finder
            </Typography>
            <Chip 
              label="BETA" 
              color="warning" 
              size="small"
              sx={{ 
                fontWeight: 'bold',
                fontSize: '0.65rem',
                height: '20px',
                mt: 0.5,
              }}
            />
          </Box>
          
          <Typography variant="body1" paragraph align="center" color="text.secondary" sx={{ mb: 4 }}>
            Answer a few questions and get personalized AI tool recommendations powered by Groq AI
          </Typography>

          <Stepper 
            activeStep={activeStep} 
            sx={{ 
              mb: 4,
              display: { xs: 'none', sm: 'flex' }
            }}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {/* 移動端步驟指示器 */}
          <Box 
            sx={{ 
              display: { xs: 'block', sm: 'none' },
              mb: 3,
              textAlign: 'center'
            }}
          >
            <Typography variant="body2" color="text.secondary">
              Step {activeStep + 1} of {steps.length}
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              gap: 1, 
              justifyContent: 'center',
              mt: 1
            }}>
              {steps.map((_, index) => (
                <Box
                  key={index}
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    bgcolor: index === activeStep ? 'primary.main' : 'grey.300',
                  }}
                />
              ))}
            </Box>
          </Box>

          <Box sx={{ minHeight: 400 }}>
            {activeStep === 0 && (
              <QuestionStep
                question="What's your main purpose?"
                description="Select all that apply"
                options={[
                  { value: 'text-generation', label: 'Content Creation' },
                  { value: 'image-generation', label: 'Image Design' },
                  { value: 'code-generation', label: 'Coding & Development' },
                  { value: 'video', label: 'Video Production' },
                  { value: 'audio', label: 'Audio & Music' },
                  { value: 'productivity', label: 'Productivity & Analysis' },
                ]}
                multiple
                value={preferences.purpose}
                onChange={(value) => updatePreferences('purpose', value)}
                onNext={handleNext}
              />
            )}

            {activeStep === 1 && (
              <QuestionStep
                question="What's your experience level?"
                description="This helps us recommend tools that match your skill level"
                options={[
                  { value: 'beginner', label: 'Beginner', description: 'Just starting with AI tools' },
                  { value: 'intermediate', label: 'Intermediate', description: 'Used some AI tools before' },
                  { value: 'advanced', label: 'Advanced', description: 'Comfortable with various AI tools' },
                  { value: 'expert', label: 'Expert', description: 'Regularly use multiple AI tools' },
                ]}
                value={preferences.experience}
                onChange={(value) => updatePreferences('experience', value)}
                onNext={handleNext}
                onBack={handleBack}
              />
            )}

            {activeStep === 2 && (
              <QuestionStep
                question="What's your budget?"
                description="Select your preferred pricing model"
                options={[
                  { value: 'free', label: 'Free Only', description: 'Only free tools' },
                  { value: 'freemium', label: 'Freemium', description: 'Free with optional paid features' },
                  { value: 'subscription', label: 'Subscription', description: 'Monthly or annual subscription' },
                  { value: 'paid', label: 'Paid', description: 'Willing to pay for quality tools' },
                ]}
                value={preferences.budget}
                onChange={(value) => updatePreferences('budget', value)}
                onNext={handleNext}
                onBack={handleBack}
              />
            )}

            {activeStep === 3 && (
              <QuestionStep
                question="What features matter most?"
                description="Select all that are important to you"
                options={[
                  { value: 'speed', label: 'Fast Processing' },
                  { value: 'accuracy', label: 'High Accuracy' },
                  { value: 'customization', label: 'Customization Options' },
                  { value: 'api', label: 'API Access' },
                  { value: 'collaboration', label: 'Team Collaboration' },
                  { value: 'mobile', label: 'Mobile App' },
                ]}
                multiple
                value={preferences.features}
                onChange={(value) => updatePreferences('features', value)}
                onNext={handleNext}
                onBack={handleBack}
              />
            )}

            {activeStep === 4 && (
              <ResultsStep
                preferences={preferences}
                onReset={handleReset}
                loading={loading}
                setLoading={setLoading}
              />
            )}
          </Box>
        </Paper>
      </Container>
    </>
  );
}
