'use client ';
import React from 'react';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/20/solid';
import { Button, Header } from '@chaco/mate-ui';
import Link from 'next/link';
import { Url } from 'next/dist/shared/lib/router/router';
import { usePreview } from '@components';

interface Props {
  paragraphText: string;
  title: string;
  onViewCodeLink?: Url;
  hasPreviewButtons?: boolean;
}
export const DescriptionHeader: React.FC<Props> = ({
  paragraphText,
  title,
  onViewCodeLink,
  hasPreviewButtons = false,
}) => {
  const { setOnPreview } = usePreview();
  return (
    <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
      <div className="order-1 sm:order-1">
        <Header variant={'h1'}>{title}</Header>
      </div>

      <div className="order-2 bg-green-300 sm:order-3 sm:col-span-2">
        <p className="my-5 text-lg">{paragraphText}</p>
      </div>

      <div className="order-3 flex items-center gap-2 bg-blue-300 sm:order-2 md:justify-end">
        {hasPreviewButtons && onViewCodeLink && (
          <>
            <Button
              size="sm"
              rightIcon={<EyeIcon />}
              onClick={() => {
                setOnPreview(true);
              }}
            >
              Preview
            </Button>
            <Link href={onViewCodeLink} target="_blank">
              <Button size="sm" rightIcon={<CodeBracketIcon />}>
                View code
              </Button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default DescriptionHeader;
