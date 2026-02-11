/**
 * Hero Graphics Component
 * 
 * Animated graphics for the hero section
 */
import React from 'react';
import { Box, useTheme } from '@mui/material';
import { keyframes } from '@mui/system';
import {
  Inventory2 as InventoryIcon,
  TrendingUp as TrendingUpIcon,
  Speed as SpeedIcon,
  Security as SecurityIcon,
} from '@mui/icons-material';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeroGraphics: React.FC = () => {
  const theme = useTheme();

  const iconStyle = {
    fontSize: 60,
    color: theme.palette.primary.main,
    animation: `${bounce} 3s ease-in-out infinite`,
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Central circle */}
      <Box
        sx={{
          position: 'absolute',
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
          border: `3px solid ${theme.palette.primary.main}40`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          animation: `${rotate} 20s linear infinite`,
        }}
      >
        <InventoryIcon sx={{ fontSize: 80, color: theme.palette.primary.main }} />
      </Box>

      {/* Orbiting icons */}
      {[
        { Icon: TrendingUpIcon, angle: 0, delay: '0s' },
        { Icon: SpeedIcon, angle: 120, delay: '0.5s' },
        { Icon: SecurityIcon, angle: 240, delay: '1s' },
      ].map(({ Icon, angle, delay }, index) => (
        <Box
          key={index}
          sx={{
            position: 'absolute',
            width: 80,
            height: 80,
            borderRadius: '50%',
            background: theme.palette.background.paper,
            boxShadow: theme.shadows[4],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: `rotate(${angle}deg) translateX(150px) rotate(-${angle}deg)`,
            animation: `${fadeInUp} 1s ease-out ${delay}, ${bounce} 2s ease-in-out infinite ${delay}`,
          }}
        >
          <Icon sx={{ fontSize: 40, color: theme.palette.primary.main }} />
        </Box>
      ))}

      {/* Connecting lines */}
      <svg
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={theme.palette.primary.main} stopOpacity="0.3" />
            <stop offset="100%" stopColor={theme.palette.secondary.main} stopOpacity="0.3" />
          </linearGradient>
        </defs>
        {[0, 120, 240].map((angle, index) => {
          const x1 = 200;
          const y1 = 200;
          const x2 = 200 + Math.cos((angle * Math.PI) / 180) * 150;
          const y2 = 200 + Math.sin((angle * Math.PI) / 180) * 150;
          return (
            <line
              key={index}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="url(#lineGradient)"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
          );
        })}
      </svg>
    </Box>
  );
};

export default HeroGraphics;