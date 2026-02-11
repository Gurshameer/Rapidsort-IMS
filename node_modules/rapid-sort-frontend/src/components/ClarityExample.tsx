/**
 * Clarity Analytics Integration Example
 * 
 * This component demonstrates how to use Clarity analytics
 * throughout your application
 */
import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  TextField,
  Chip,
  Stack,
} from '@mui/material';
import {
  Analytics as AnalyticsIcon,
  Search as SearchIcon,
  Download as DownloadIcon,
  ShoppingCart as OrderIcon,
} from '@mui/icons-material';
import { useClarity } from '../contexts/ClarityContext';

const ClarityExample: React.FC = () => {
  const {
    trackEvent,
    trackAction,
    trackProductInteraction,
    trackOrderInteraction,
    trackSearch,
    trackExport,
  } = useClarity();

  const [searchQuery, setSearchQuery] = useState('');

  // Example 1: Track button click
  const handleButtonClick = () => {
    trackEvent('example_button_clicked', {
      component: 'ClarityExample',
      timestamp: new Date().toISOString(),
    });
    alert('Event tracked! Check Clarity dashboard.');
  };

  // Example 2: Track search
  const handleSearch = () => {
    if (searchQuery) {
      trackSearch(searchQuery, 10); // 10 = mock results count
      alert(`Search tracked: "${searchQuery}"`);
    }
  };

  // Example 3: Track product interaction
  const handleProductView = () => {
    trackProductInteraction('view', 'product-123');
    alert('Product view tracked!');
  };

  // Example 4: Track order creation
  const handleOrderCreate = () => {
    trackOrderInteraction('create', 'order-456');
    alert('Order creation tracked!');
  };

  // Example 5: Track export
  const handleExport = () => {
    trackExport('pdf', 'example_report');
    alert('Export tracked!');
  };

  // Example 6: Track custom action
  const handleCustomAction = () => {
    trackAction('filter_applied', {
      filterType: 'category',
      filterValue: 'electronics',
    });
    alert('Custom action tracked!');
  };

  return (
    <Box sx={{ p: 3 }}>
      <Card>
        <CardContent>
          <Box display="flex" alignItems="center" gap={2} mb={3}>
            <AnalyticsIcon color="primary" sx={{ fontSize: 40 }} />
            <Box>
              <Typography variant="h5" fontWeight="bold">
                Microsoft Clarity Analytics
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Integration Examples - Click buttons to track events
              </Typography>
            </Box>
          </Box>

          <Stack spacing={2}>
            {/* Example 1: Basic Event Tracking */}
            <Box>
              <Typography variant="subtitle2" gutterBottom>
                1. Basic Event Tracking
              </Typography>
              <Button
                variant="contained"
                onClick={handleButtonClick}
                fullWidth
              >
                Track Button Click Event
              </Button>
            </Box>

            {/* Example 2: Search Tracking */}
            <Box>
              <Typography variant="subtitle2" gutterBottom>
                2. Search Tracking
              </Typography>
              <Box display="flex" gap={1}>
                <TextField
                  size="small"
                  placeholder="Enter search query..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  fullWidth
                />
                <Button
                  variant="outlined"
                  onClick={handleSearch}
                  startIcon={<SearchIcon />}
                >
                  Search
                </Button>
              </Box>
            </Box>

            {/* Example 3: Product Interaction */}
            <Box>
              <Typography variant="subtitle2" gutterBottom>
                3. Product Interaction Tracking
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleProductView}
                fullWidth
              >
                Track Product View
              </Button>
            </Box>

            {/* Example 4: Order Tracking */}
            <Box>
              <Typography variant="subtitle2" gutterBottom>
                4. Order Interaction Tracking
              </Typography>
              <Button
                variant="contained"
                color="success"
                onClick={handleOrderCreate}
                startIcon={<OrderIcon />}
                fullWidth
              >
                Track Order Creation
              </Button>
            </Box>

            {/* Example 5: Export Tracking */}
            <Box>
              <Typography variant="subtitle2" gutterBottom>
                5. Export Tracking
              </Typography>
              <Button
                variant="contained"
                color="info"
                onClick={handleExport}
                startIcon={<DownloadIcon />}
                fullWidth
              >
                Track PDF Export
              </Button>
            </Box>

            {/* Example 6: Custom Action */}
            <Box>
              <Typography variant="subtitle2" gutterBottom>
                6. Custom Action Tracking
              </Typography>
              <Button
                variant="outlined"
                color="warning"
                onClick={handleCustomAction}
                fullWidth
              >
                Track Custom Action
              </Button>
            </Box>
          </Stack>

          {/* Info Section */}
          <Box mt={3} p={2} bgcolor="info.light" borderRadius={1}>
            <Typography variant="body2" color="info.dark" gutterBottom>
              <strong>📊 How to View Tracked Events:</strong>
            </Typography>
            <Typography variant="body2" color="info.dark">
              1. Open browser console to see event logs
              <br />
              2. Go to{' '}
              <a
                href="https://clarity.microsoft.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'inherit', fontWeight: 'bold' }}
              >
                Microsoft Clarity Dashboard
              </a>
              <br />
              3. Wait 2-3 minutes for events to appear
              <br />
              4. Check "Recordings" and "Insights" sections
            </Typography>
          </Box>

          {/* Status Chips */}
          <Box mt={2} display="flex" gap={1} flexWrap="wrap">
            <Chip
              label="Clarity Enabled"
              color="success"
              size="small"
              variant="outlined"
            />
            <Chip
              label="Auto Page Tracking"
              color="primary"
              size="small"
              variant="outlined"
            />
            <Chip
              label="Session Recording"
              color="secondary"
              size="small"
              variant="outlined"
            />
            <Chip
              label="Heatmaps Active"
              color="info"
              size="small"
              variant="outlined"
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ClarityExample;