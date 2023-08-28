import React from 'react';

interface Props {
  listItems: string[];
}
export const ComponentList: React.FC<Props> = ({ listItems }) => {
  return (
    <div>
      <p className="text-base font-semibold">Mate UI Components used:</p>

      <ul className="list-disc pl-4 pt-2 text-base font-normal">
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ComponentList;
