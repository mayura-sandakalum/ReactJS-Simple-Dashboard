import React from 'react';
import { SvgIcon } from '@mui/material';

const HorizontalDividerSvg = () => {
  return (
    <SvgIcon width="244" height="4" viewBox="0 0 244 4" fill="none" xmlns="http://www.w3.org/2000/svg" sx={{
      position: 'absolute',
      width: '240px',
      left: '33px',
      top: '521px',
    }}
    >
      <g filter="url(#filter0_f_4_35)">
        <line x1="2" y1="1.9" x2="242" y2="1.9" stroke="#343434" strokeWidth="0.2" />
      </g>
      <defs>
        <filter id="filter0_f_4_35" x="0.5" y="0.300003" width="243" height="3.2" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="0.75" result="effect1_foregroundBlur_4_35" />
        </filter>
      </defs>
    </SvgIcon>
  );
};

const VerticalDividerSvg = () => {
  return (
    <SvgIcon width="4" height="630" viewBox="0 0 4 630" fill="none" xmlns="http://www.w3.org/2000/svg" sx={{
      position: 'absolute',
      height: '626px',
      left: '300px',
      top: '47px',
    }}>
      <g filter="url(#filter0_f_6_23)">
        <line x1="2.1" y1="2" x2="2.10003" y2="628" stroke="#343434" strokeWidth="0.2" />
      </g>
      <defs>
        <filter id="filter0_f_6_23" x="0.5" y="0.5" width="3.20001" height="629" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="0.75" result="effect1_foregroundBlur_6_23" />
        </filter>
      </defs>
    </SvgIcon>

  );
};

export { HorizontalDividerSvg, VerticalDividerSvg };