import React from 'react';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/20/solid';
import { Button, Header } from '@truenorth/mate-ui';
import '@styles';

interface Props {
  paragraphText: string;
  title: string;
  onPreview?: () => void;
  onViewCode?: () => void;
  hasPreviewButtons?: boolean;
}
export const DescriptionHeader: React.FC<Props> = ({
  paragraphText,
  title,
  onPreview,
  onViewCode,
  hasPreviewButtons = false,
}) => {
  return (
    <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
      <div className="order-1 bg-red-300 sm:order-1">
        <Header variant={'h1'}>{title}</Header>
      </div>

      <div className="order-2 bg-green-300 sm:order-3 sm:col-span-2">
        <p className="my-5 text-lg">{paragraphText}</p>
      </div>

      <div className="order-3 flex items-center gap-2 bg-blue-300 sm:order-2 md:justify-end">
        {hasPreviewButtons && (
          <>
            <Button size="sm" rightIcon={<EyeIcon />} onClick={onPreview}>
              Preview
            </Button>
            <Button
              size="sm"
              rightIcon={<CodeBracketIcon />}
              onClick={onViewCode}
            >
              View code
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default DescriptionHeader;
