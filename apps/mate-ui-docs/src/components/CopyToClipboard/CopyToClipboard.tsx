'use client';
import { Tooltip } from '@truenorth/mate-ui';
import React, { useState } from 'react';

interface CopyToClipboardProps {
  children: React.ReactNode;
  tooltipText: string;
  contentToCopy: string;
}

const CopyToClipboard = ({ children, tooltipText, contentToCopy }: CopyToClipboardProps) => {
  const [copyTooltip, setCopyTooltip] = useState(tooltipText);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showTooltipTimeout, setShowTooltipTimeout] =
    useState<ReturnType<typeof setTimeout>>();

  const copy = () => {
    navigator.clipboard.writeText(contentToCopy);
    setCopyTooltip('Copied to clipboard');
    const timeout = setTimeout(() => {
      setShowTooltip(false);
      setCopyTooltip(tooltipText);
    }, 2000);
    setShowTooltipTimeout(timeout);
  };
  return (
    <Tooltip
      content={copyTooltip}
      open={showTooltip}
      defaultOpen={false}
      theme="dark"
      placement="top"
      align="center"
    >
      <div
        onClick={() => {
          if (!showTooltip) setShowTooltip(true);
          copy();
        }}
        onMouseOut={() => {
          clearTimeout(showTooltipTimeout);
          setCopyTooltip(tooltipText);
          setShowTooltip(false);
        }}
        onMouseOver={() => setShowTooltip(true)}
      >
        {children}
      </div>
    </Tooltip>
  );
};

export { CopyToClipboard };
