import { ReactNode } from 'react';

import { Divider } from './Divider';

type ProjectItemProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export const ProjectItem = ({ href, children, ...props }: ProjectItemProps) => (
  <a
    href={href}
    target='_blank'
    rel='noreferrer'
    {...props}
    sx={{
      textDecoration: 'none',
      color: 'primary',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      p: '8px',
      ':hover': {
        bg: 'hsla(0,0%,100%,.05)',
      },
      transition: 'all 0.3s ease',
    }}
  >
    {children}
    <Divider color='primary' />
  </a>
);
