import React from 'react';
import {
  Box,
  Button,
  IconButton,
  Slider,
  Typography,
} from '@mui/material';


export default function VideoComponent({ courses }) {
  return (
    <Box sx={{ display: 'grid', gap: 2 }}>
      <Box sx={{ position: 'relative', width: '100%', maxWidth: '800px', overflow: 'hidden', borderRadius: 2, aspectRatio: '16/9' }}>
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            p: 2,
            bgcolor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
          }}
        >
          <Typography variant="h6" noWrap>
            Introduction to Web Development - Course Preview
          </Typography>
        </Box>
        <Box component="video" sx={{ width: '100%' }} controls>
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" type="video/mp4" />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            display: 'grid',
            gap: 1,
            bgcolor: 'rgba(0, 0, 0, 0.5)',
            p: 2,
          }}
        >
          
        
        </Box>
      </Box>
    </Box>
  );
}
