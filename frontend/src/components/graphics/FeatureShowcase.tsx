/**
 * Feature Showcase Component
 * 
 * Visual showcase of key features with animated graphics
 */
import React from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  useTheme,
  Container,
} from '@mui/material';
import { keyframes } from '@mui/system';
import {
  Speed as SpeedIcon,
  Security as SecurityIcon,
  Insights as InsightsIcon,
  CloudSync as CloudSyncIcon,
  Notifications as NotificationsIcon,
  Analytics as AnalyticsIcon,
} from '@mui/icons-material';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

interface Feature {
  icon: React.ReactElement;
  title: string;
  description: string;
  color: string;
}

const features: Feature[] = [
  {
    icon: <SpeedIcon sx={{ fontSize: 50 }} />,
    title: 'Lightning Fast',
    description: 'Real-time WebSocket updates ensure instant synchronization across all devices',
    color: '#06b6d4',
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 50 }} />,
    title: 'Zero-Trust Security',
    description: 'Advanced security with continuous verification and threat detection',
    color: '#8b5cf6',
  },
  {
    icon: <InsightsIcon sx={{ fontSize: 50 }} />,
    title: 'Smart Analytics',
    description: 'Comprehensive insights and reports to drive business decisions',
    color: '#f59e0b',
  },
  {
    icon: <CloudSyncIcon sx={{ fontSize: 50 }} />,
    title: 'Cloud Sync',
    description: 'Seamless synchronization with MongoDB for reliable data persistence',
    color: '#10b981',
  },
  {
    icon: <NotificationsIcon sx={{ fontSize: 50 }} />,
    title: 'Live Notifications',
    description: 'Instant alerts for low stock, new orders, and inventory changes',
    color: '#ef4444',
  },
  {
    icon: <AnalyticsIcon sx={{ fontSize: 50 }} />,
    title: 'Advanced Reports',
    description: 'Generate detailed reports with charts and export capabilities',
    color: '#6366f1',
  },
];

const FeatureShowcase: React.FC = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box textAlign="center" mb={6}>
        <Typography
          variant="h3"
          fontWeight="bold"
          gutterBottom
          sx={{
            background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: `${fadeInUp} 1s ease-out`,
          }}
        >
          Powerful Features
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ animation: `${fadeInUp} 1s ease-out 0.2s both` }}
        >
          Everything you need to manage your inventory efficiently
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            sx={{
              animation: `${fadeInUp} 0.6s ease-out ${index * 0.1}s both`,
            }}
          >
            <Card
              sx={{
                height: '100%',
                position: 'relative',
                overflow: 'visible',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: theme.shadows[12],
                  '& .feature-icon': {
                    animation: `${pulse} 1s ease-in-out infinite`,
                  },
                },
              }}
            >
              <Box
                className="feature-icon"
                sx={{
                  position: 'absolute',
                  top: -30,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}40)`,
                  border: `3px solid ${feature.color}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: feature.color,
                  boxShadow: `0 4px 20px ${feature.color}40`,
                }}
              >
                {feature.icon}
              </Box>

              <CardContent sx={{ pt: 6, textAlign: 'center' }}>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ color: feature.color }}
                >
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </CardContent>

              {/* Decorative corner */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  width: 60,
                  height: 60,
                  background: `linear-gradient(135deg, transparent 50%, ${feature.color}10 50%)`,
                  borderRadius: '0 0 4px 0',
                }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FeatureShowcase;