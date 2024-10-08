import React from 'react'
import HeroImage from '../asess/Illustration.png'
import { Box, Button, TextField, Typography } from '@mui/material'
const HeroSection = () => {
    return (
      <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
        minHeight: '80vh',
        padding:'0px 360px'
      }}
    >
      {/* left Section */}
      <Box sx={{ maxWidth: '50%' }}>
        <Typography variant="h2" sx={{ color: '#333', margin:'20px 0px' }}>
          Lessons and insights
        </Typography>
        <Typography
          variant="h2"
          sx={{  color: '#28a745', marginBottom: '16px' }}
        >
          from 8 years
        </Typography>

        <Typography
          variant="p"
          sx={{ marginBottom: '16px' }}
        >
         Where to grow your business as a photographer: site or social media?
        </Typography>
        <Typography
          sx={{
           
            marginBottom: '30px',

          }}
        />
         

        <Button
          variant="contained"
          sx={{
            backgroundColor: '#28a745',
            color: '#fff',
            padding: '10px 30px',
            '&:hover': {
              backgroundColor: '#218838',
            },
          }}
        >
          Register
        </Button>
      </Box>

      {/* right Section */}
      <Box>
        <img
          src={HeroImage}
          alt="Hero section Image"
          style={{ width: '400px' }}
        />
      </Box>
    </Box>
  )
}

export default HeroSection;