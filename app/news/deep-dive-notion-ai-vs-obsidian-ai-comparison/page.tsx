'use client';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';
import Header from '@/components/Header';

export default function ArticlePage() {
  return (
    <>
      <Header showSearch={false} />
      <Container maxWidth="md" sx={{ py: { xs: 4, md: 8 }, px: { xs: 2, sm: 3 } }}>
        <Button
          component={Link}
          href="/news"
          startIcon={<ArrowBackIcon />}
          sx={{ mb: 3 }}
        >
          Back to News
        </Button>

        <Paper sx={{ p: { xs: 3, md: 6 }, overflow: 'hidden' }}>
          <Box sx={{ mb: 3 }}>
            <Chip label="Tool Comparison" color="primary" sx={{ mb: 2 }} />
          </Box>

          <Typography variant="h3" component="h1" gutterBottom>
            Deep Dive: Notion AI vs Obsidian AI
          </Typography>

          <Typography variant="subtitle1" color="text.secondary" paragraph sx={{ mb: 4 }}>
            Two powerful AI-enhanced note-taking and knowledge management platforms go head-to-head. We compare their approaches, features, and ideal use cases to help you choose the right tool for your workflow.
          </Typography>

          <Divider sx={{ my: 4 }} />

          <Typography variant="h5" component="h2" sx={{ mt: 4, mb: 2 }}>
            Platform Overview
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 4, mb: 4 }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" gutterBottom>
                Notion AI
              </Typography>
              <Typography variant="body2" paragraph>
                Notion's AI integration brings artificial intelligence directly into their all-in-one workspace. It focuses on team collaboration, project management, and content creation with AI-powered assistance.
              </Typography>
              <Box component="ul" sx={{ pl: 2, listStyleType: 'disc' }}>
                <Typography component="li" variant="body2" sx={{ mb: 1, display: 'list-item' }}>
                  • AI-powered writing and editing assistance
                </Typography>
                <Typography component="li" variant="body2" sx={{ mb: 1, display: 'list-item' }}>
                  • Smart content organization and auto-tagging
                </Typography>
                <Typography component="li" variant="body2" sx={{ mb: 1, display: 'list-item' }}>
                  • Team collaboration with AI insights
                </Typography>
                <Typography component="li" variant="body2" sx={{ mb: 1, display: 'list-item' }}>
                  • Project management automation
                </Typography>
              </Box>
            </Box>
            
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" gutterBottom>
                Obsidian AI
              </Typography>
              <Typography variant="body2" paragraph>
                Obsidian's AI capabilities focus on knowledge management, linking ideas, and intelligent content discovery. It excels at connecting information and revealing insights through AI-enhanced note relationships.
              </Typography>
              <Box component="ul" sx={{ pl: 2, listStyleType: 'disc' }}>
                <Typography component="li" variant="body2" sx={{ mb: 1, display: 'list-item' }}>
                  • AI-powered knowledge graph and linking
                </Typography>
                <Typography component="li" variant="body2" sx={{ mb: 1, display: 'list-item' }}>
                  • Intelligent content discovery and search
                </Typography>
                <Typography component="li" variant="body2" sx={{ mb: 1, display: 'list-item' }}>
                  • Plugin ecosystem for extended functionality
                </Typography>
                <Typography component="li" variant="body2" sx={{ mb: 1, display: 'list-item' }}>
                  • Local-first approach with privacy focus
                </Typography>
              </Box>
            </Box>
          </Box>

          <Typography variant="h5" component="h2" sx={{ mt: 4, mb: 2 }}>
            Core Philosophy & Approach
          </Typography>
          
          <Typography variant="body1" paragraph>
            The fundamental difference between these platforms lies in their approach to knowledge management and AI integration.
          </Typography>

          <Box sx={{ bgcolor: 'grey.50', p: 3, borderRadius: 2, mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Notion AI: Collaborative Workspace
            </Typography>
            <Typography variant="body2" paragraph>
              Notion AI treats knowledge as a collaborative asset within team environments. The AI enhances shared workspaces, suggesting improvements to team documents, meeting notes, and project plans. It's designed for organizations that need centralized knowledge management with AI assistance.
            </Typography>
          </Box>

          <Box sx={{ bgcolor: 'grey.50', p: 3, borderRadius: 2, mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Obsidian AI: Personal Knowledge Network
            </Typography>
            <Typography variant="body2" paragraph>
              Obsidian AI approaches knowledge as a personal network of interconnected ideas. The AI helps individuals discover hidden connections, generate insights from their knowledge graph, and enhance personal thinking through intelligent linking and content discovery.
            </Typography>
          </Box>

          <Typography variant="h5" component="h2" sx={{ mt: 4, mb: 2 }}>
            Feature Comparison
          </Typography>
          
          <Typography variant="body1" paragraph>
            Let's compare the key features that differentiate these two AI-powered platforms:
          </Typography>

          <Box sx={{ bgcolor: 'grey.50', p: 3, borderRadius: 2, mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              AI Writing & Content Creation
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
              <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle2" gutterBottom>
                  Notion AI
                </Typography>
                <Typography variant="body2">
                  Advanced writing assistance with style consistency, template generation, and multi-format content creation. AI helps maintain brand voice across team documents.
                </Typography>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle2" gutterBottom>
                  Obsidian AI
                </Typography>
                <Typography variant="body2">
                  Creative writing support with knowledge integration, pulling from your existing notes to enhance content. Better for individual creators and researchers.
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{ bgcolor: 'grey.50', p: 3, borderRadius: 2, mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Knowledge Management & Organization
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
              <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle2" gutterBottom>
                  Notion AI
                </Typography>
                <Typography variant="body2">
                  Structured databases with AI-powered organization, smart categorization, and automated tagging. Excellent for project-based knowledge and team collaboration.
                </Typography>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle2" gutterBottom>
                  Obsidian AI
                </Typography>
                <Typography variant="body2">
                  Bi-directional linking with AI-suggested connections, knowledge graph visualization, and intelligent content discovery. Ideal for research and personal knowledge management.
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{ bgcolor: 'grey.50', p: 3, borderRadius: 2, mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Collaboration & Sharing
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
              <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle2" gutterBottom>
                  Notion AI
                </Typography>
                <Typography variant="body2">
                  Real-time collaboration with AI-powered suggestions, shared workspaces, and team insights. Built for teams working together on knowledge projects.
                </Typography>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle2" gutterBottom>
                  Obsidian AI
                </Typography>
                <Typography variant="body2">
                  Community sharing through plugins, selective collaboration features, and individual control. Better for solo users who occasionally share specific insights.
                </Typography>
              </Box>
            </Box>
          </Box>

          <Typography variant="h5" component="h2" sx={{ mt: 4, mb: 2 }}>
            Pricing & Business Model
          </Typography>
          
          <Typography variant="body1" paragraph>
            The pricing structures reflect each platform's target audience and philosophy:
          </Typography>

          <Box sx={{ bgcolor: 'grey.50', p: 3, borderRadius: 2, mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Notion AI
            </Typography>
            <Typography variant="body2" paragraph>
              Team-based subscription model starting at $10/user/month. AI features included in higher tiers. Designed for organizations and teams requiring centralized collaboration.
            </Typography>
          </Box>

          <Box sx={{ bgcolor: 'grey.50', p: 3, borderRadius: 2, mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Obsidian AI
            </Typography>
            <Typography variant="body2" paragraph>
              Personal license with optional commercial add-ons. Core product is free for personal use. AI features available through paid plugins. Ideal for individual users and researchers.
            </Typography>
          </Box>
          </Box>

          <Typography variant="h5" component="h2" sx={{ mt: 4, mb: 2 }}>
            Use Case Scenarios
          </Typography>
          
          <Typography variant="body1" paragraph>
            Understanding who benefits most from each platform helps in making the right choice:
          </Typography>

          <Box sx={{ bgcolor: 'grey.50', p: 3, borderRadius: 2, mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Choose Notion AI If:
            </Typography>
            <Box component="ul" sx={{ pl: 2, listStyleType: 'disc' }}>
              <Typography component="li" variant="body2" sx={{ mb: 1, display: 'list-item' }}>
                You work in a team requiring centralized knowledge management
              </Typography>
              <Typography component="li" variant="body2" sx={{ mb: 1, display: 'list-item' }}>
                You need AI-assisted content creation and brand consistency
              </Typography>
              <Typography component="li" variant="body2" sx={{ mb: 1, display: 'list-item' }}>
                You prefer structured databases over free-form note-taking
              </Typography>
              <Typography component="li" variant="body2" sx={{ mb: 1, display: 'list-item' }}>
                Real-time collaboration and AI team insights are valuable
              </Typography>
            </Box>
          </Box>

          <Box sx={{ bgcolor: 'grey.50', p: 3, borderRadius: 2, mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Choose Obsidian AI If:
            </Typography>
            <Box component="ul" sx={{ pl: 2, listStyleType: 'disc' }}>
              <Typography component="li" variant="body2" sx={{ mb: 1, display: 'list-item' }}>
                • You are a solo user or researcher managing personal knowledge
              </Typography>
              <Typography component="li" variant="body2" sx={{ mb: 1, display: 'list-item' }}>
                • You value privacy and local data control
              </Typography>
              <Typography component="li" variant="body2" sx={{ mb: 1, display: 'list-item' }}>
                • You need advanced knowledge linking and graph visualization
              </Typography>
              <Typography component="li" variant="body2" sx={{ mb: 1, display: 'list-item' }}>
                • You prefer flexible customization through plugins
              </Typography>
              <Typography component="li" variant="body2" sx={{ mb: 1, display: 'list-item' }}>
                • You are focused on research and deep knowledge exploration
              </Typography>
            </Box>
          </Box>

          <Typography variant="h5" component="h2" sx={{ mt: 4, mb: 2 }}>
            The Verdict
          </Typography>
          
          <Typography variant="body1" paragraph>
              Both Notion AI and Obsidian AI represent excellent choices for AI-enhanced knowledge management, but they serve different philosophies and use cases. Notion AI excels in team collaboration and structured content creation, while Obsidian AI shines in personal knowledge networking and research.
            </Typography>

          <Typography variant="body1" paragraph>
              The choice ultimately depends on your workflow, collaboration needs, and approach to knowledge management. Consider starting with the platform that aligns with your primary use case, as both offer powerful AI capabilities that can significantly enhance your productivity.
            </Typography>

          <Typography variant="body1" paragraph>
              For many users, the ideal solution might involve using both platforms: Notion AI for team projects and structured collaboration, complemented by Obsidian AI for personal knowledge management and research. This hybrid approach leverages the strengths of both platforms.
            </Typography>

          <Divider sx={{ my: 4 }} />

          <Box sx={{ mt: 4, p: 3, bgcolor: 'grey.50', borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>
              Explore More AI Tools
            </Typography>
            <Typography variant="body2" paragraph>
              Discover more AI-powered knowledge management and productivity tools in our comprehensive directory. Use our <Link href="/tools/finder" style={{ color: 'inherit', textDecoration: 'underline' }}>AI Tool Finder</Link> to get personalized recommendations based on your specific needs and workflow requirements.
            </Typography>
            <Button
              component={Link}
              href="/tools/finder"
              variant="contained"
              size="large"
              sx={{ mt: 2 }}
            >
              Find Your AI Tool
            </Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
}
