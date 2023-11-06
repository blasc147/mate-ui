import React, { ReactNode } from 'react';
import { ProjectUrls } from '@/constants/routes';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { FigmaIcon, GithubIcon, StorybookIcon } from '@icons';
import { cn } from '@truenorth/mate-ui';

interface ResourcesProps {
  title: string;
  description: string;
  link: string;
  icon: ReactNode;
}
interface ComponentResourcesProps {
  resource: ResourcesProps;
  className?: string;
  key?: string;
}

const Resources: ResourcesProps[] = [
  {
    title: 'Figma Design Kit',
    description: 'A fully customizable design system.',
    link: ProjectUrls.Figma,
    icon: <FigmaIcon width={48} height={48} />,
  },
  {
    title: 'Storybook Web Components',
    description: 'Developed and tested library.',
    link: ProjectUrls.Storybook,
    icon: <StorybookIcon width={48} height={48} />,
  },
  {
    title: 'Github Repository',
    description: 'Open-source code and version control.',
    link: ProjectUrls.Github,
    icon: <GithubIcon width={48} height={48} />,
  },
];

const Resource: React.FC<ComponentResourcesProps> = ({
  resource,
  className,
}) => {
  return (
    <a
      key={resource.title}
      href={resource.link}
      rel="noreferrer"
      target="_blank"
      className={cn(
        className,
        '3xl:h-[188px] 2xl:h-[210px] lg:h-[232px] mb-6 lg:mr-8 w-full sm:max-w-[479px] rounded-lg bg-grey-100 p-9 lg:mb-0 last:mr-0 last:mb-0 cursor-pointer'
      )}
    >
      <div className="mb-6 flex flex-col text-left text-grey-900">
        <div className="flex justify-between">
          <div className="pb-2">{resource.icon}</div>
          <ArrowRightIcon className="h-6 w-6" />
        </div>
        <p className="text-xs font-semibold">{resource.title}</p>
      </div>
      <p className="text-left text-xs font-normal text-grey-600">
        {resource.description}
      </p>
    </a>
  );
};

export const ResourcesSection = () => {
  return (
    <section className="mt-[11.25rem] flex w-full flex-col items-center justify-center text-center">
      <h1 className="mb-12 text-3xl font-normal text-grey-900 md:text-[2.25rem]">
        Resources
        <br />
        <span className="pt-2 font-medium">to get started.</span>
      </h1>
      <div className="flex w-full flex-col items-center lg:flex-row">
        {Resources.map((resource) => {
          return (
            <Resource
              key={resource.title}
              resource={resource}
              className="last:mb-0"
            />
          );
        })}
      </div>
    </section>
  );
};
