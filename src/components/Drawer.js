import React from 'react'
import { Box, Typography } from '@mui/material'

import Logo from './svgs/Logo'

const Drawer = () => {
  const logoTextSx = {
    position: 'absolute',
    width: '119px',
    height: '29px',
    left: '103px',
    top: '43px',
    fontWeight: '600',
    fontSize: '24px',
    lineHeight: '29px',
  }

  return (
    <Box>
      <Logo />
      <Typography
        sx={logoTextSx}
      >
        Codinglab
      </Typography>
    </Box>
  )
}

export default Drawer