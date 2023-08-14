import { Tooltip } from "@truenorth/mate-ui";
import React, { useState } from 'react';

interface CopyToClipboardProps {
  children: React.ReactNode;
  tooltipText: string;
}

export function CopyToClipboard({ children, tooltipText }: CopyToClipboardProps) {
  const [copyTooltip, setCopyTooltip] = useState(tooltipText);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showTooltipTimeout, setShowTooltipTimeout] =
    useState<ReturnType<typeof setTimeout>>();

  const copy = () => {
    navigator.clipboard.writeText(tooltipText);
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
}