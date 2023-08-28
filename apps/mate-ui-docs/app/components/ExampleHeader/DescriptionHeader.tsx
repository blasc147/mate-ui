import React from 'react';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/20/solid';
import { Button, Header } from '@truenorth/mate-ui';

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
    <div>
      <div className="flex justify-between">
        <Header variant={'h1'}>{title}</Header>
        <div className="flex gap-3">
          {hasPreviewButtons && (
            <>
              <Button
                variant="outlined"
                size="sm"
                rightIcon={<EyeIcon />}
                onClick={onPreview}
              >
                Preview
              </Button>
              <Button
                variant="outlined"
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

      <p className="my-5 text-lg">{paragraphText}</p>
    </div>
  );
};

export default DescriptionHeader;
