import { FormControl, FormLabel, Input } from '@truenorth/mate-ui';
import CreateForm from './create-form';
import { useState } from 'react';

export default function CreateTicket() {
  const [title, setTitle] = useState('');
  return (
    <main>
      <h3 className="pb-6 text-3xl font-semibold text-neutral-900">
        Create ticket
      </h3>
      <FormControl>
        <FormLabel>Title:</FormLabel>
        <Input
          type="text"
          defaultValue="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </FormControl>
      {/* <CreateForm /> */}
    </main>
  );
}
