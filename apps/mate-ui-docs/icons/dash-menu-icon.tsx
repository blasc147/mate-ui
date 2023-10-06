import React from 'react';
import { IconProps } from './IconProps';

const DashMenuIcon: React.FC<IconProps> = ({ width = 24, height = 24 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 184 126"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="1" y="1" width="182" height="124" rx="5" fill="white" />
    <rect
      x="11"
      y="11"
      width="47.3333"
      height="47"
      rx="3"
      fill="#F1F5F9"
      stroke="#334155"
      stroke-width="2"
    />
    <rect
      x="68.3335"
      y="11"
      width="47.3333"
      height="47"
      rx="3"
      fill="#F1F5F9"
      stroke="#334155"
      stroke-width="2"
    />
    <rect
      x="124.667"
      y="10"
      width="49.3333"
      height="49"
      rx="4"
      fill="#334155"
    />
    <rect x="11" y="68" width="76" height="47" rx="3" fill="#F1F5F9" />
    <path
      d="M36.5333 85.7143C24.8 83.4285 17.9556 94.2857 16 100V110H82V80C64.4 102.857 51.2 88.5714 36.5333 85.7143Z"
      fill="#334155"
    />
    <rect
      x="11"
      y="68"
      width="76"
      height="47"
      rx="3"
      stroke="#334155"
      stroke-width="2"
    />
    <rect
      x="97"
      y="68"
      width="76"
      height="47"
      rx="3"
      fill="#F1F5F9"
      stroke="#334155"
      stroke-width="2"
    />
    <rect
      x="1"
      y="1"
      width="182"
      height="124"
      rx="5"
      stroke="#334155"
      stroke-width="2"
    />
  </svg>
);

export { DashMenuIcon };
