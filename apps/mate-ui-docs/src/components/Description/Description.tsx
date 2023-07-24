import { CodeBracketIcon, EyeIcon } from '@heroicons/react/20/solid';
import { Button } from '@truenorth/mate-ui';
import React from 'react';

interface Props {
  paragraphText: string;
  listItems: string[];
  onPreview?: () => void;
  onViewCode?: () => void;
}
const Description: React.FC<Props> = ({
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
      <p className="text-lg my-5">{paragraphText}</p>
      <p className="font-semibold text-base">Mate UI Components used:</p>

      <ul className="list-disc font-normal text-base pl-4 pt-2">
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Description;
