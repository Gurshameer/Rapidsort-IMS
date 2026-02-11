import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
  useTheme,
  alpha,
  Divider,
} from '@mui/material';
import './AuthModal.css';
import {
  Inventory as InventoryIcon,
  TrendingUp as TrendingUpIcon,
  Analytics as AnalyticsIcon,
  Security as SecurityIcon,
  Speed as SpeedIcon,
  CloudSync as CloudSyncIcon,
  Star as StarIcon,
  CheckCircle,
} from '@mui/icons-material';
import AuthModal from './AuthModal';
import AnimatedBackground from '../graphics/AnimatedBackground';
import HeroGraphics from '../graphics/HeroGraphics';
import FeatureShowcase from '../graphics/FeatureShowcase';
import StatsVisualization from '../graphics/StatsVisualization';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const theme = useTheme();

  const features = [
    {
      icon: <InventoryIcon sx={{ fontSize: 40 }} />,
      title: 'Smart Inventory Tracking',
      description: 'Real-time stock monitoring with automatic low-stock alerts, SKU management, and bulk operations for efficient inventory control.',
    },
    {
      icon: <AnalyticsIcon sx={{ fontSize: 40 }} />,
      title: 'Advanced Analytics & Reports',
      description: 'Comprehensive business intelligence with revenue tracking, sales trends, inventory turnover, and customizable reports in PDF/Excel format.',
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
      title: 'Growth & Revenue Insights',
      description: 'Monitor business performance with detailed profit analysis, growth metrics, and predictive analytics to make data-driven decisions.',
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40 }} />,
      title: 'Enterprise Security',
      description: 'Bank-level security with JWT authentication, bcrypt encryption, HTTPS/TLS, Zero-Trust architecture, and role-based access control.',
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 40 }} />,
      title: 'Lightning Fast Performance',
      description: 'Optimized MongoDB queries, efficient indexing, and WebSocket real-time updates for instant data synchronization across all devices.',
    },
    {
      icon: <CloudSyncIcon sx={{ fontSize: 40 }} />,
      title: 'Cloud-Based Platform',
      description: 'Access from anywhere with automatic cloud backup, multi-device sync, and 99.9% uptime guarantee for uninterrupted operations.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Operations Manager',
      company: 'TechCorp Inc.',
      avatar: 'SJ',
      rating: 5,
      comment: 'Rapid Sort transformed our inventory operations completely. We reduced stock-outs by 80%, cut ordering time by 60%, and improved overall efficiency dramatically. The real-time alerts are a game-changer!',
    },
    {
      name: 'Michael Chen',
      role: 'Supply Chain Director',
      company: 'Global Logistics',
      avatar: 'MC',
      rating: 5,
      comment: 'The analytics and reporting features are outstanding. The multi-database architecture ensures lightning-fast performance even with millions of records. We now make data-driven decisions with complete confidence.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Business Owner',
      company: 'Retail Plus',
      avatar: 'ER',
      rating: 5,
      comment: 'Easy to use, powerful features, and excellent support. The role-based access control is perfect for our team. We manage 5 warehouses seamlessly. Highly recommend for any business size!',
    },
  ];

  const openAuthModal = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  return (
    <Box>
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Hero Section */}
      <Box
        sx={{
          color: 'white',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >

        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <Chip
                  label="🚀 New: AI-Powered Insights"
                  sx={{
                    mb: 3,
                    backgroundColor: alpha('#ffffff', 0.2),
                    color: 'white',
                    fontWeight: 'bold',
                  }}
                />

                <Typography
                  variant="h2"
                  component="h1"
                  fontWeight="bold"
                  mb={3}
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    lineHeight: 1.2,
                  }}
                >
                  <span style={{ color: '#FFD700' }}>Rapid Sort</span>
                  <br />
                  Smart Inventory
                </Typography>

                <Typography
                  variant="h5"
                  mb={4}
                  sx={{
                    opacity: 0.9,
                    fontWeight: 300,
                    lineHeight: 1.6,
                  }}
                >
                  Transform your inventory management with Rapid Sort's intelligent platform.
                  Real-time tracking, automated alerts, powerful analytics, and seamless supplier integration—all in one place.
                </Typography>

                <Box sx={{ display: 'flex', gap: 3, mb: 4, flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CheckCircle sx={{ color: '#FFD700' }} />
                    <Typography variant="body1">No credit card required</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CheckCircle sx={{ color: '#FFD700' }} />
                    <Typography variant="body1">14-day free trial</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CheckCircle sx={{ color: '#FFD700' }} />
                    <Typography variant="body1">Cancel anytime</Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => openAuthModal('signup')}
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                      backgroundColor: '#FFD700',
                      color: '#333',
                      fontWeight: 'bold',
                      '&:hover': {
                        backgroundColor: '#FFC107',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Get Started Free
                  </Button>

                  <Button
                    variant="outlined"
                    size="large"
                    onClick={() => openAuthModal('login')}
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                      borderColor: 'white',
                      color: 'white',
                      '&:hover': {
                        borderColor: '#FFD700',
                        backgroundColor: alpha('#FFD700', 0.1),
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Sign In
                  </Button>
                </Box>

                <Box sx={{ mt: 4, display: 'flex', alignItems: 'center', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIcon key={star} sx={{ color: '#FFD700', fontSize: 20 }} />
                    ))}
                  </Box>
                  <Typography variant="body2" sx={{ opacity: 1, fontWeight: 500, color: 'white' }}>
                    Trusted by 10,000+ businesses worldwide
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  textAlign: 'center',
                  position: 'relative',
                  display: { xs: 'none', md: 'block' },
                }}
              >
                <HeroGraphics />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <FeatureShowcase />

      {/* Statistics Section */}
      <StatsVisualization />

      {/* How It Works Section */}
      <Box sx={{ backgroundColor: '#f0f4f8', py: 10 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" component="h2" fontWeight="bold" mb={3}>
              How Rapid Sort Works
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
              Get started in minutes with our intuitive inventory management system
            </Typography>
          </Box>

          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={3}>
              <Card sx={{ textAlign: 'center', p: 3, height: '100%' }}>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    bgcolor: 'primary.main',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    mx: 'auto',
                    mb: 2,
                  }}
                >
                  1
                </Box>
                <Typography variant="h6" fontWeight="bold" mb={2}>
                  Sign Up & Setup
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Create your account in seconds. No credit card required for the 14-day free trial.
                </Typography>
              </Card>
            </Grid>

            <Grid item xs={12} md={3}>
              <Card sx={{ textAlign: 'center', p: 3, height: '100%' }}>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    bgcolor: 'success.main',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    mx: 'auto',
                    mb: 2,
                  }}
                >
                  2
                </Box>
                <Typography variant="h6" fontWeight="bold" mb={2}>
                  Add Your Inventory
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Import products via CSV or add them manually. Organize by categories and suppliers.
                </Typography>
              </Card>
            </Grid>

            <Grid item xs={12} md={3}>
              <Card sx={{ textAlign: 'center', p: 3, height: '100%' }}>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    bgcolor: 'warning.main',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    mx: 'auto',
                    mb: 2,
                  }}
                >
                  3
                </Box>
                <Typography variant="h6" fontWeight="bold" mb={2}>
                  Track & Monitor
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Real-time tracking with automatic alerts for low stock, orders, and inventory changes.
                </Typography>
              </Card>
            </Grid>

            <Grid item xs={12} md={3}>
              <Card sx={{ textAlign: 'center', p: 3, height: '100%' }}>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    bgcolor: 'info.main',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    mx: 'auto',
                    mb: 2,
                  }}
                >
                  4
                </Box>
                <Typography variant="h6" fontWeight="bold" mb={2}>
                  Analyze & Grow
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Generate insights with advanced analytics and make data-driven decisions to grow your business.
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 10 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" component="h2" fontWeight="bold" mb={3}>
              What Our Customers Say
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Join thousands of satisfied businesses
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card sx={{ height: '100%', p: 3 }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar sx={{ mr: 2, bgcolor: 'primary.main' }}>
                        {testimonial.avatar}
                      </Avatar>
                      <Box>
                        <Typography variant="subtitle1" fontWeight="bold">
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {testimonial.role} at {testimonial.company}
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: 'flex', mb: 2 }}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <StarIcon key={i} sx={{ color: '#FFD700', fontSize: 18 }} />
                      ))}
                    </Box>

                    <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                      "{testimonial.comment}"
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Why Choose Rapid Sort Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h3" component="h2" fontWeight="bold" mb={3}>
            Why Choose Rapid Sort?
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto' }}>
            Built with cutting-edge technology and designed for businesses that demand excellence
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
              <CheckCircle sx={{ color: 'success.main', fontSize: 28, flexShrink: 0 }} />
              <Box>
                <Typography variant="h6" fontWeight="bold" mb={1}>
                  MongoDB Database
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Powered by MongoDB's flexible NoSQL architecture for fast, scalable data storage. Optimized queries and efficient indexing ensure optimal performance for all your inventory operations.
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
              <CheckCircle sx={{ color: 'success.main', fontSize: 28, flexShrink: 0 }} />
              <Box>
                <Typography variant="h6" fontWeight="bold" mb={1}>
                  Real-Time Updates
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  WebSocket integration provides instant notifications for stock changes, new orders, and system events. Stay informed without refreshing your browser.
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
              <CheckCircle sx={{ color: 'success.main', fontSize: 28, flexShrink: 0 }} />
              <Box>
                <Typography variant="h6" fontWeight="bold" mb={1}>
                  Enterprise-Grade Security
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  JWT authentication, bcrypt password hashing, HTTPS/TLS, and Zero-Trust architecture protect your sensitive business data 24/7.
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
              <CheckCircle sx={{ color: 'success.main', fontSize: 28, flexShrink: 0 }} />
              <Box>
                <Typography variant="h6" fontWeight="bold" mb={1}>
                  Scalable & Reliable
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Built to scale from startups to enterprises. MongoDB's flexible architecture and efficient indexing ensure reliable performance even during peak traffic.
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
              <CheckCircle sx={{ color: 'success.main', fontSize: 28, flexShrink: 0 }} />
              <Box>
                <Typography variant="h6" fontWeight="bold" mb={1}>
                  Comprehensive Reporting
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Generate detailed reports in PDF, Excel, or CSV format. Track revenue, inventory turnover, supplier performance, and customer analytics with customizable dashboards.
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
              <CheckCircle sx={{ color: 'success.main', fontSize: 28, flexShrink: 0 }} />
              <Box>
                <Typography variant="h6" fontWeight="bold" mb={1}>
                  Easy Integration
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  RESTful API with comprehensive documentation. Integrate with your existing ERP, accounting software, or e-commerce platforms seamlessly.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          py: 10,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" component="h2" fontWeight="bold" mb={3}>
            Ready to Transform Your Inventory Management?
          </Typography>
          <Typography variant="h6" mb={4} sx={{ opacity: 0.9 }}>
            Join 10,000+ businesses already using Rapid Sort to streamline operations, reduce costs, and boost efficiency
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => openAuthModal('signup')}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                backgroundColor: '#FFD700',
                color: '#333',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: '#FFC107',
                },
              }}
            >
              Start Free Trial
            </Button>

            <Button
              variant="outlined"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                borderColor: 'white',
                color: 'white',
                '&:hover': {
                  borderColor: '#FFD700',
                  backgroundColor: alpha('#FFD700', 0.1),
                },
              }}
            >
              Contact Sales
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
          color: 'white',
          py: 6,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="space-between">
            <Grid item xs={12} md={5}>
              <Typography variant="h6" fontWeight="bold" mb={2} sx={{ color: '#FFD700' }}>
                Rapid Sort
              </Typography>
              <Typography variant="body2" sx={{ color: '#e0e0e0', mb: 2, lineHeight: 1.6 }}>
                Smart inventory management solution for modern businesses. Track, analyze, and optimize your operations with ease.
              </Typography>
              <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
                © 2024 Rapid Sort. All rights reserved.
              </Typography>
            </Grid>

            <Grid item xs={12} sm={4} md={2}>
              <Typography variant="h6" fontWeight="bold" mb={2} sx={{ color: '#FFD700' }}>
                Pages
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#e0e0e0',
                    cursor: 'pointer',
                    '&:hover': { color: '#FFD700', textDecoration: 'underline' }
                  }}
                  onClick={() => navigate('/features')}
                >
                  Features
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#e0e0e0',
                    cursor: 'pointer',
                    '&:hover': { color: '#FFD700', textDecoration: 'underline' }
                  }}
                  onClick={() => navigate('/about')}
                >
                  About Us
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4} md={2}>
              <Typography variant="h6" fontWeight="bold" mb={2} sx={{ color: '#FFD700' }}>
                Legal
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#e0e0e0',
                    cursor: 'pointer',
                    '&:hover': { color: '#FFD700', textDecoration: 'underline' }
                  }}
                  onClick={() => navigate('/terms')}
                >
                  Terms & Conditions
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#e0e0e0',
                    cursor: 'pointer',
                    '&:hover': { color: '#FFD700', textDecoration: 'underline' }
                  }}
                  onClick={() => navigate('/privacy')}
                >
                  Privacy Policy
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4} md={2}>
              <Typography variant="h6" fontWeight="bold" mb={2} sx={{ color: '#FFD700' }}>
                Connect
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#e0e0e0',
                    cursor: 'pointer',
                    '&:hover': { color: '#FFD700', textDecoration: 'underline' }
                  }}
                  onClick={() => window.open('https://www.linkedin.com/m/in/naman-kumar-0980aa293/', '_blank')}
                >
                  LinkedIn
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#e0e0e0',
                    cursor: 'pointer',
                    '&:hover': { color: '#FFD700', textDecoration: 'underline' }
                  }}
                  onClick={() => window.open('https://github.com/naman-kumar1212', '_blank')}
                >
                  GitHub
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Divider sx={{ my: 4, borderColor: 'rgba(255,215,0,0.2)' }} />

          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
              Built with ❤️ by{' '}
              <Box
                component="span"
                onClick={() => window.open('https://www.linkedin.com/m/in/naman-kumar-0980aa293/', '_blank')}
                sx={{
                  color: '#FFD700',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                Naman Kumar
              </Box>
            </Typography>
            <Typography variant="body2" sx={{ color: '#b0b0b0', mt: 1 }}>
              Enterprise-grade security with Zero-Trust Architecture
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Auth Modal */}
      <AuthModal
        open={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authMode}
      />
    </Box>
  );
};

export default LandingPage;