import type { Meta, StoryObj } from '@storybook/react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardImage,
  CardTitle,
} from './card';
import { Button } from '../button';
import { cn } from '../../utils';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid';

const Story: Meta<typeof Card> = {
  component: Card,
  title: 'Card',
  decorators: [(Story) => <Story />],
  tags: ['autodocs'],
};
export default Story;

type Story = StoryObj<typeof Card>;

export function OutlineCard() {
  return (
    <Card cardStyle="outline" padding="md" className="max-w-[572px]">
      <CardHeader>
        <CardTitle supportiveText="supportive text" size="md">
          Cart Title
        </CardTitle>
      </CardHeader>
      <CardContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae
        eleifend felis, vel fringilla neta et, egestas vel magna. Donec et
        dapibus eros. Curabiturfficitur dolor non dapibus pellentesque.
        Curabitur rutrum leo nunc. Maecenas pharetra gravida eros, eget varius
        eros sodales vel.
      </CardContent>
      <CardFooter>
        <Button type="submit" size="sm" className={cn('w-full')}>
          Button
        </Button>
      </CardFooter>
    </Card>
  );
}

export function SmallHeaderCard() {
  return (
    <Card cardStyle="outline" padding="md" className="max-w-[572px]">
      <CardHeader>
        <CardTitle supportiveText="supportive text" size="sm">
          Cart Title
        </CardTitle>
      </CardHeader>
      <CardContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae
        eleifend felis, vel fringilla neta et, egestas vel magna. Donec et
        dapibus eros. Curabiturfficitur dolor non dapibus pellentesque.
        Curabitur rutrum leo nunc. Maecenas pharetra gravida eros, eget varius
        eros sodales vel.
      </CardContent>
      <CardFooter>
        <Button type="submit" size="sm" className={cn('w-full')}>
          Button
        </Button>
      </CardFooter>
    </Card>
  );
}

export function ShadowCard() {
  return (
    <Card cardStyle="shadow" padding="md" className="max-w-[572px]">
      <CardHeader>
        <CardTitle supportiveText="supportive text" size="md">
          Cart Title
        </CardTitle>
      </CardHeader>
      <CardContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae
        eleifend felis, vel fringilla neta et, egestas vel magna. Donec et
        dapibus eros. Curabiturfficitur dolor non dapibus pellentesque.
        Curabitur rutrum leo nunc. Maecenas pharetra gravida eros, eget varius
        eros sodales vel.
      </CardContent>
      <CardFooter>
        <Button type="submit" size="sm" className={cn('w-full')}>
          Button
        </Button>
      </CardFooter>
    </Card>
  );
}

export function LeadingImageCard() {
  return (
    <Card cardStyle="shadow" padding="md" className="max-w-[572px]">
      <CardImage position="leading">
        <img alt="card" src="cardImage.png" />
      </CardImage>
      <CardHeader>
        <CardTitle supportiveText="supportive text" size="md">
          Cart Title
        </CardTitle>
      </CardHeader>
      <CardContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae
        eleifend felis, vel fringilla neta et, egestas vel magna. Donec et
        dapibus eros. Curabiturfficitur dolor non dapibus pellentesque.
        Curabitur rutrum leo nunc. Maecenas pharetra gravida eros, eget varius
        eros sodales vel.
      </CardContent>
      <CardFooter>
        <Button type="submit" size="sm" className={cn('w-full')}>
          Button
        </Button>
      </CardFooter>
    </Card>
  );
}

export function TrailingImageCard() {
  return (
    <Card cardStyle="shadow" padding="md" className="max-w-[572px]">
      <CardHeader>
        <CardTitle supportiveText="supportive text" size="md">
          Cart Title
        </CardTitle>
      </CardHeader>
      <CardImage position="trailing">
        <img alt="card" src="cardImage.png" />
      </CardImage>
      <CardContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae
        eleifend felis, vel fringilla neta et, egestas vel magna. Donec et
        dapibus eros. Curabiturfficitur dolor non dapibus pellentesque.
        Curabitur rutrum leo nunc. Maecenas pharetra gravida eros, eget varius
        eros sodales vel.
      </CardContent>
      <CardFooter>
        <Button type="submit" size="sm" className={cn('w-full')}>
          Button
        </Button>
      </CardFooter>
    </Card>
  );
}

export function HeaderButtonCard() {
  return (
    <Card cardStyle="outline" padding="md" className="max-w-[572px]">
      <CardHeader>
        <CardTitle supportiveText="supportive text" size="md">
          Cart Title
        </CardTitle>
        <Button className="h-10">Button</Button>
      </CardHeader>
      <CardContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae
        eleifend felis, vel fringilla neta et, egestas vel magna. Donec et
        dapibus eros. Curabiturfficitur dolor non dapibus pellentesque.
        Curabitur rutrum leo nunc. Maecenas pharetra gravida eros, eget varius
        eros sodales vel.
      </CardContent>
    </Card>
  );
}

export function HeaderIconCard() {
  return (
    <Card cardStyle="outline" padding="md" className="max-w-[572px]">
      <CardHeader>
        <CardTitle supportiveText="supportive text" size="md">
          Cart Title
        </CardTitle>
        <EllipsisHorizontalIcon className="h-6 w-6" />
      </CardHeader>
      <CardContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae
        eleifend felis, vel fringilla neta et, egestas vel magna. Donec et
        dapibus eros. Curabiturfficitur dolor non dapibus pellentesque.
        Curabitur rutrum leo nunc. Maecenas pharetra gravida eros, eget varius
        eros sodales vel.
      </CardContent>
      <CardFooter>
        <Button type="submit" size="sm" className={cn('w-full')}>
          Button
        </Button>
      </CardFooter>
    </Card>
  );
}

export function SmallPaddingCard() {
  return (
    <Card cardStyle="outline" padding="sm" className="max-w-[572px]">
      <CardHeader>
        <CardTitle supportiveText="supportive text" size="md">
          Cart Title
        </CardTitle>
        <EllipsisHorizontalIcon className="h-6 w-6" />
      </CardHeader>
      <CardContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae
        eleifend felis, vel fringilla neta et, egestas vel magna. Donec et
        dapibus eros. Curabiturfficitur dolor non dapibus pellentesque.
        Curabitur rutrum leo nunc. Maecenas pharetra gravida eros, eget varius
        eros sodales vel.
      </CardContent>
      <CardFooter>
        <Button type="submit" size="sm" className={cn('w-full')}>
          Button
        </Button>
      </CardFooter>
    </Card>
  );
}

export function HeaderDividerCard() {
  return (
    <Card cardStyle="outline" padding="sm" className="max-w-[572px]">
      <CardHeader divider>
        <CardTitle supportiveText="supportive text" size="md">
          Cart Title
        </CardTitle>
        <EllipsisHorizontalIcon className="h-6 w-6" />
      </CardHeader>
      <CardContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae
        eleifend felis, vel fringilla neta et, egestas vel magna. Donec et
        dapibus eros. Curabiturfficitur dolor non dapibus pellentesque.
        Curabitur rutrum leo nunc. Maecenas pharetra gravida eros, eget varius
        eros sodales vel.
      </CardContent>
      <CardFooter>
        <Button type="submit" size="sm" className={cn('w-full')}>
          Button
        </Button>
      </CardFooter>
    </Card>
  );
}

export function SecondaryButtonCard() {
  return (
    <Card cardStyle="outline" padding="sm" className="max-w-[572px]">
      <CardHeader divider>
        <CardTitle supportiveText="supportive text" size="md">
          Cart Title
        </CardTitle>
        <EllipsisHorizontalIcon className="h-6 w-6" />
      </CardHeader>
      <CardContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae
        eleifend felis, vel fringilla neta et, egestas vel magna. Donec et
        dapibus eros. Curabiturfficitur dolor non dapibus pellentesque.
        Curabitur rutrum leo nunc. Maecenas pharetra gravida eros, eget varius
        eros sodales vel.
      </CardContent>
      <CardFooter className="flex justify-start gap-2">
        <Button type="submit" size="sm" variant="outlined">
          Button
        </Button>
        <Button type="submit" size="sm">
          Button
        </Button>
      </CardFooter>
    </Card>
  );
}
