import React from 'react';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/20/solid';
import { Button } from '@truenorth/mate-ui';

interface Props {
  paragraphText: string;
  listItems: string[];
  onPreview?: () => void;
  onViewCode?: () => void;
}
export const Description: React.FC<Props> = ({
  paragraphText,
  listItems,
  onPreview,
  onViewCode,
}) => {
  return (
    <div>
      <div className="flex gap-3">
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
      </div>
      <p className="my-5 text-lg">{paragraphText}</p>
      <p className="text-base font-semibold">Mate UI Components used:</p>

      <ul className="list-disc pl-4 pt-2 text-base font-normal">
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Description;
