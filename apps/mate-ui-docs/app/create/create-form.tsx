'use client';
import { Button, FormControl, FormLabel, Input } from '@truenorth/mate-ui';
import { useState } from 'react';

export default function CreateForm() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
    return;
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-1/2 flex-col gap-3">
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
