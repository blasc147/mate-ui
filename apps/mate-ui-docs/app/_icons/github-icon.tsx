import React from 'react';
import Image from 'next/image';
import { IconProps } from './IconProps';

const GithubIcon: React.FC<IconProps> = ({ width = 24, height = 24 }) => {
  return (
    <Image
      src="/assets/github-mark.png"
      alt="Github"
      width={width}
      height={height}
    />
  );
};

export { GithubIcon };
