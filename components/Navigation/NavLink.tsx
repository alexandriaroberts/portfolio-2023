/* eslint-disable @next/next/no-img-element */
/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import { ReactNode } from 'react';
import { theme } from '../../styles/theme';

export type NavLinkProps = {
  href: string;
  target?: string;
  children: ReactNode | string;
  className?: string;
};

export const NavLink = ({
  href,
  target,
  children,
  className,
  ...props
}: NavLinkProps) => {
  return (
    <a
      href={href}
      target={target || '_blank'}
      className={className}
      sx={{
        fontSize: '22px',
        fontFamily: 'Noto Serif',
        fontStyle: 'medium',
        lineHeight: '30px',
        textDecoration: 'none',
        transition: 'all 0.3s ease',
        whiteSpace: 'nowrap',
        position: 'relative',
        display: 'inline',
        cursor: 'pointer',
        '&::after': {
          content: 'close-quote',
          display: 'none',
          width: '100%',
          height: '3px',
          backgroundColor: 'primary',
          position: 'absolute',
          left: 0,
          bottom: '30px',
          opacity: 1,
          transform: 'translate3d(0, 0, 0)',
          transition: 'transform .3s ease, opacity .3s ease',
        },
        '&:hover': {
          textShadow: '0px 0px 16px primary',
          transition: 'all 0.3s ease',
          '&::after': {
            display: 'inline',
            transform: 'translate3d(0, 100%, 0)',
            boxShadow: '0px 0px 8px primary',
          },
        },
        '&:visited, &:active, &:focus': {
          color: 'text',

          //   color: 'rgba(255, 255, 255, 0.72)',
          transition: 'all 0.3s ease',
          //   '&::after': {
          //     backgroundColor: 'rgba(111, 76, 255, 0.72)',
          //   },
        },
        '&:visited:hover, &:active:hover, &:focus:hover': {
          //   color: '#FFFFFF',
          transition: 'all 0.3s ease',
          '&::after': {
            transform: 'translate3d(0, 100%, 0)',
          },
        },
      }}
      {...props}
    >
      {children}
    </a>
  );
};
