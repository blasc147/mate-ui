import type { Meta } from '@storybook/react';
import {
  Header,
  type HeaderProps,
  HeaderSupportiveText,
  type HeaderSupportiveTextProps,
} from './header';

interface CompProps {
  headerProps: HeaderProps;
  supportiveTextProps?: HeaderSupportiveTextProps;
}

const Comp = ({ headerProps, supportiveTextProps }: CompProps) => {
  return (
    <>
      <Header {...headerProps} />
      {supportiveTextProps?.children && (
        <HeaderSupportiveText {...supportiveTextProps} />
      )}
    </>
  );
};

const Story: Meta<typeof Comp> = {
  component: Comp,
  title: 'Header',
};

export default Story;

export const H1 = {
  args: {
    headerProps: {
      children: 'Header',
      variant: 'h1',
    },
  },
};

export const H1WithSupportiveText = {
  args: {
    headerProps: {
      children: 'Header',
      variant: 'h1',
    },
    supportiveTextProps: {
      children: 'Supportive text',
      variant: 'h1',
    },
  },
};

export const H2 = {
  args: {
    headerProps: {
      children: 'Header',
      variant: 'h2',
    },
  },
};

export const H2WithSupportiveText = {
  args: {
    headerProps: {
      children: 'Header',
      variant: 'h2',
    },
    supportiveTextProps: {
      children: 'Supportive text',
      variant: 'h2',
    },
  },
};

export const H3 = {
  args: {
    headerProps: {
      children: 'Header',
      variant: 'h3',
    },
  },
};

export const H3WithSupportiveText = {
  args: {
    headerProps: {
      children: 'Header',
      variant: 'h3',
    },
    supportiveTextProps: {
      children: 'Supportive text',
      variant: 'h3',
    },
  },
};

export const H4 = {
  args: {
    headerProps: {
      children: 'Header',
      variant: 'h4',
    },
  },
};

export const H4WithSupportiveText = {
  args: {
    headerProps: {
      children: 'Header',
      variant: 'h4',
    },
    supportiveTextProps: {
      children: 'Supportive text',
      variant: 'h4',
    },
  },
};

export const H5 = {
  args: {
    headerProps: {
      children: 'Header',
      variant: 'h5',
    },
  },
};

export const H5WithSupportiveText = {
  args: {
    headerProps: {
      children: 'Header',
      variant: 'h5',
    },
    supportiveTextProps: {
      children: 'Supportive text',
      variant: 'h5',
    },
  },
};

export const H1AsH2 = {
  args: {
    headerProps: {
      asChild: true,
      children: <h2>Header</h2>,
      variant: 'h1',
    },
  },
};

export const SupportiveTextAsH2 = {
  args: {
    headerProps: {
      children: 'Header',
      variant: 'h1',
    },
    supportiveTextProps: {
      asChild: true,
      children: <h2>Supportive text</h2>,
      variant: 'h1',
    },
  },
};
