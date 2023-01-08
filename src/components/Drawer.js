import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';

import Logo from './svgs/Logo';
import { HomeIcon, ContentIcon, AnalyticsIcon, LikesIcon, CommentsIcon, ShareIcon, LogoutIcon, DarkModeIcon } from './svgs/DrawerSvgs';
import DarkModeSwitch from './DarkModeSwitch';
import { HorizontalDividerSvg } from './svgs/DividerSvgs';

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
    textDecoration: 'none'
  };

  const drawerButtonSx = {
    position: 'absolute',
    width: '300px',
    height: '60px',
    left: '0px',
  };

  const drawerButtonBoxSx = {
    position: 'absolute',
    left: '50px',
    display: 'flex',
    flexDirection: 'row',
  };

  const drawerButtonTypoSx = {
    paddingLeft: "18px",
    fontSize: "20px",
    textTransform: "capitalize",
  };

  const switchSx = {
    position: 'absolute',
    left: '164px',
    top: '6px'
  };

  return (
    <Box>
      <Logo />
      <Typography sx={logoTextSx} > Codinglab </Typography>

      <Button variant="text" sx={{ top: '123px', ...drawerButtonSx }} >
        <Box sx={drawerButtonBoxSx}>
          <HomeIcon width="30px" height="30px" />
          <Typography color="#436DFE" {...drawerButtonTypoSx} > Dashboard </Typography>
        </Box>
      </Button>

      <Button variant="text" sx={{ top: '183px', ...drawerButtonSx }} >
        <Box sx={drawerButtonBoxSx} >
          <ContentIcon width="30px" height="30px" />
          <Typography color="#2A353D" {...drawerButtonTypoSx} > Content </Typography>
        </Box>
      </Button>

      <Button variant="text" sx={{ top: '243px', ...drawerButtonSx }} >
        <Box sx={drawerButtonBoxSx} >
          <AnalyticsIcon width="30px" height="30px" />
          <Typography color="#2A353D" {...drawerButtonTypoSx} > Analytics </Typography>
        </Box>
      </Button>

      <Button variant="text" sx={{ top: '303px', ...drawerButtonSx }} >
        <Box sx={drawerButtonBoxSx} >
          <LikesIcon width="30px" height="30px" />
          <Typography color="#2A353D" {...drawerButtonTypoSx} > Likes </Typography>
        </Box>
      </Button>

      <Button variant="text" sx={{ top: '363px', ...drawerButtonSx }} >
        <Box sx={drawerButtonBoxSx} >
          <CommentsIcon width="30px" height="30px" />
          <Typography color="#2A353D" {...drawerButtonTypoSx} > Comments </Typography>
        </Box>
      </Button>

      <Button variant="text" sx={{ top: '423px', ...drawerButtonSx }} >
        <Box sx={drawerButtonBoxSx} >
          <ShareIcon width="30px" height="30px" />
          <Typography color="#2A353D" {...drawerButtonTypoSx} > Share </Typography>
        </Box>
      </Button>

      <HorizontalDividerSvg />

      <Button variant="text" sx={{ top: '560px', ...drawerButtonSx }} >
        <Box sx={drawerButtonBoxSx} >
          <LogoutIcon width="30px" height="30px" />
          <Typography color="#2A353D" {...drawerButtonTypoSx} > Logout </Typography>
        </Box>
      </Button>

      <Stack direction="row" sx={{ position: 'absolute', left: '50px', top: '635px' }} >
        <DarkModeIcon width="30px" height="30px" />
        <Typography color="#2A353D" {...drawerButtonTypoSx} > Dark Mode </Typography>
        <DarkModeSwitch defaultChecked inputProps={{ "aria-label": "switch design" }} sx={{ ...switchSx, verticalAlign: 'center' }} />
      </Stack>


    </Box>
  )
}

export default Drawer;