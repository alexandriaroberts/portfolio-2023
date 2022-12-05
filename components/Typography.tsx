/* eslint-disable @next/next/no-img-element */
/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import { ReactNode } from 'react';
import classnames from 'classnames';

interface TypographyProps {
  children?: ReactNode;
  className?: string;
}

export const H1 = ({ children, className, ...props }: TypographyProps) => (
  <h1
    className={classnames(className)}
    sx={{
      fontFamily: 'Lora, serif',
      fontSize: '80px',
      fontStyle: 'normal',
      fontWeight: '200',
      lineHeight: '80px',
      letterSpacing: '2px',
    }}
    {...props}
  >
    {children}
  </h1>
);

export const H2 = ({ children, className, ...props }: TypographyProps) => (
  <h2
    className={classnames(className)}
    sx={{
      fontFamily: 'Lora, serif',
      fontSize: '74px',
      fontStyle: 'normal',
      fontWeight: '200',
      lineHeight: '78px',
      letterSpacing: '2px',
      mt: 0,
      mb: '48px',
    }}
    {...props}
  >
    {children}
  </h2>
);

export const H3 = ({ children, className, ...props }: TypographyProps) => (
  <h3
    className={classnames(className)}
    sx={{
      fontFamily: 'Lora, serif',
      fontSize: '74px',
      fontStyle: 'normal',
      fontWeight: '200',
      lineHeight: '78px',
      letterSpacing: '2px',
      mb: '48px',
    }}
    {...props}
  >
    {children}
  </h3>
);

export const P = ({ children, className, ...props }: TypographyProps) => (
  <p
    className={classnames(className)}
    sx={{
      fontFamily: 'Noto Serif',
      fontSize: '20px',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: '37px',
      letterSpacing: '2px',
      mb: '54px',
    }}
    {...props}
  >
    {children}
  </p>
);
