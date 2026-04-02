'use client';

import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Chip from '@mui/material/Chip';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { tools } from '@/data/tools';

interface UserPreferences {
  purpose: string[];
  experience: string;
  budget: string;
  features: string[];
  language: string[];
}

interface ToolRecommendation {
  id: string;
  name: string;
  description: string;
  score: number;
  matchReasons: string[];
  category: string[];
  pricing: string;
  website: string;
  tags: string[];
}

interface ResultsStepProps {
  preferences: UserPreferences;
  onReset: () => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

export default function ResultsStep({ preferences, onReset, loading, setLoading }: ResultsStepProps) {
  const [recommendations, setRecommendations] = useState<ToolRecommendation[]>([]);
  const [aiInsights, setAiInsights] = useState<string>('');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    generateRecommendations();
  }, []);

  const generateRecommendations = async () => {
    setLoading(true);
    setError('');

    try {
      // 基礎評分算法
      const scoredTools = tools.map((tool) => {
        let score = 0;
        const matchReasons: string[] = [];

        // 用途匹配 (40分)
        const purposeMatch = tool.category.some((cat) => preferences.purpose.includes(cat));
        if (purposeMatch) {
          score += 40;
          matchReasons.push('Matches your purpose');
        }

        // 價格匹配 (30分)
        if (tool.pricing === preferences.budget) {
          score += 30;
          matchReasons.push('Fits your budget');
        } else if ((preferences.budget === 'freemium' || preferences.budget === 'subscription') && tool.pricing === 'free') {
          score += 20;
          matchReasons.push('Free option available');
        } else if (preferences.budget === 'subscription' && tool.pricing === 'freemium') {
          score += 25;
          matchReasons.push('Subscription model available');
        } else if (preferences.budget === 'paid' && (tool.pricing === 'freemium' || tool.pricing === 'paid')) {
          score += 25;
          matchReasons.push('Paid option available');
        }

        // 功能匹配 (20分)
        const featureMatches = tool.tags.filter((tag) =>
          preferences.features.some((feature) => tag.toLowerCase().includes(feature.toLowerCase()))
        );
        if (featureMatches.length > 0) {
          score += (featureMatches.length / preferences.features.length) * 20;
          matchReasons.push(`Has ${featureMatches.length} requested features`);
        }

        // 經驗程度匹配 (10分)
        if (preferences.experience === 'beginner' && tool.tags.includes('easy-to-use')) {
          score += 10;
          matchReasons.push('Beginner-friendly');
        } else if ((preferences.experience === 'advanced' || preferences.experience === 'expert') && tool.tags.includes('advanced')) {
          score += 10;
          matchReasons.push('Advanced features');
        } else if (preferences.experience === 'intermediate') {
          score += 8;
          matchReasons.push('Suitable for intermediate users');
        } else {
          score += 5;
        }

        return {
          ...tool,
          score,
          matchReasons,
        };
      });

      // 排序並取前10名
      const topRecommendations = scoredTools
        .filter((tool) => tool.score > 30)
        .sort((a, b) => b.score - a.score)
        .slice(0, 10);

      setRecommendations(topRecommendations);

      // 呼叫 Groq AI 生成個性化見解
      await generateAIInsights(topRecommendations);
    } catch (err) {
      setError('Failed to generate recommendations. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const generateAIInsights = async (topTools: ToolRecommendation[]) => {
    try {
      const response = await fetch('/api/groq/recommendations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          preferences,
          topTools: topTools.slice(0, 5).map((t) => ({
            name: t.name,
            description: t.description,
            category: t.category,
            pricing: t.pricing,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get AI insights');
      }

      const data = await response.json();
      setAiInsights(data.insights);
    } catch (err) {
      console.error('AI insights error:', err);
      setAiInsights('');
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'success';
    if (score >= 60) return 'primary';
    if (score >= 40) return 'warning';
    return 'default';
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 8 }}>
        <CircularProgress size={60} sx={{ mb: 3 }} />
        <Typography variant="h6" color="text.secondary">
          Analyzing your preferences...
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Finding the perfect AI tools for you
        </Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
        <Button variant="contained" onClick={generateRecommendations}>
          Try Again
        </Button>
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h5" component="h2" gutterBottom align="center" sx={{ mb: 1 }}>
        🎉 Your Personalized Recommendations
      </Typography>

      <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 4 }}>
        Based on your preferences, here are the top {recommendations.length} AI tools for you
      </Typography>

      {aiInsights && (
        <Alert severity="info" icon="🤖" sx={{ mb: 4 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
            AI Insights
          </Typography>
          <Box 
            sx={{ 
              '& p': { 
                margin: 0,
                marginBottom: 1,
                fontSize: '0.875rem',
                lineHeight: 1.5,
              },
              '& strong': { 
                fontWeight: 'bold',
              },
              '& em': { 
                fontStyle: 'italic',
              },
              '& ul, & ol': {
                marginTop: 0.5,
                marginBottom: 0.5,
                paddingLeft: 2,
              },
              '& li': {
                fontSize: '0.875rem',
                marginBottom: 0.5,
              },
            }}
          >
            <ReactMarkdown>{aiInsights}</ReactMarkdown>
          </Box>
        </Alert>
      )}

      <Box sx={{ mb: 4 }}>
        {recommendations.map((tool, index) => (
          <Card
            key={tool.id}
            sx={{
              mb: 2,
              border: index === 0 ? 2 : 1,
              borderColor: index === 0 ? `${getScoreColor(tool.score)}.main` : 'divider',
              position: 'relative',
            }}
          >
            {index === 0 && (
              <Chip
                label="Best Match"
                color={getScoreColor(tool.score)}
                size="small"
                sx={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  fontWeight: 'bold',
                }}
              />
            )}

            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  {index + 1}. {tool.name}
                </Typography>
                <Chip
                  label={`${Math.round(tool.score)}% Match`}
                  color={getScoreColor(tool.score)}
                  size="small"
                />
              </Box>

              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {tool.description}
              </Typography>

              <Box sx={{ mb: 2 }}>
                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
                  Why we recommend this:
                </Typography>
                {tool.matchReasons.map((reason, idx) => (
                  <Chip
                    key={idx}
                    label={reason}
                    size="small"
                    variant="outlined"
                    sx={{ mr: 0.5, mb: 0.5 }}
                  />
                ))}
              </Box>

              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                <Chip label={tool.pricing} size="small" color="primary" variant="outlined" />
                {tool.category.slice(0, 2).map((cat) => (
                  <Chip key={cat} label={cat} size="small" variant="outlined" />
                ))}
              </Box>
            </CardContent>

            <CardActions>
              {tool.website && (
                <Button
                  component={Link}
                  href={tool.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                  variant="contained"
                >
                  Visit Website
                </Button>
              )}
            </CardActions>
          </Card>
        ))}
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Button onClick={onReset} variant="outlined" size="large">
          Start Over
        </Button>
        <Button component={Link} href="/" variant="contained" size="large">
          Browse All Tools
        </Button>
      </Box>
    </Box>
  );
}
