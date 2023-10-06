'use client';

import { Button, FormControl, FormLabel, Input } from '@truenorth/mate-ui';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function CreateForm() {
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
    return;
    setIsLoading(true);

    const newTicket = { title, body, user_email: 'test@test.dev' };

    const res = await fetch('http://localhost:4000/tickets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTicket),
    });

    if (res.status === 201) {
      router.refresh();
      router.push('/tickets');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-1/2 flex flex-col gap-3">
      <FormControl>
        <FormLabel>Title:</FormLabel>
        <Input
          type="text"
          defaultValue="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Body</FormLabel>
        <Input
          type="text"
          defaultValue="text"
          onChange={(e) => setBody(e.target.value)}
          value={body}
        />
      </FormControl>

      <Button
        type="submit"
        variant="filled"
        themeColor="secondary"
        disabled={isLoading}
        loading={isLoading}
      >
        Add
      </Button>
    </form>
  );
}
