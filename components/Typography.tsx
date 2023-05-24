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
      fontSize: ['36px', null, '48px', '80px'],
      fontStyle: 'normal',
      fontWeight: '200',
      lineHeight: ['36px', null, '48px', '80px'],
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
      fontSize: ['26px', null, '38px', '74px'],
      fontStyle: 'normal',
      fontWeight: '200',
      lineHeight: ['28px', null, '40px', '78px'],
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
      fontSize: ['26px', null, '38px', '74px'],
      fontStyle: 'normal',
      fontWeight: '200',
      lineHeight: ['28px', null, '40px', '78px'],
      letterSpacing: '2px',
      mb: '48px',
    }}
    {...props}
  >
    {children}
  </h3>
);

export const H4 = ({ children, className, ...props }: TypographyProps) => (
  <h4
    className={classnames(className)}
    sx={{
      fontFamily: 'Lora, serif',
      fontSize: ['20px', null, '28px'],
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: ['28px', null, '36px'],
      letterSpacing: '2px',
      color: 'primary',
    }}
    {...props}
  >
    {children}
  </h4>
);

export const P = ({ children, className, ...props }: TypographyProps) => (
  <p
    className={classnames(className)}
    sx={{
      fontFamily: 'Noto Serif',
      fontSize: ['16px', null, '20px'],
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: ['28px', null, '37px'],
      letterSpacing: '1px',
    }}
    {...props}
  >
    {children}
  </p>
);

export const P16 = ({ children, className, ...props }: TypographyProps) => (
  <p
    className={classnames(className)}
    sx={{
      fontFamily: 'Noto Serif',
      fontSize: ['14px', null, '16px'],
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: ['18px', null, '28px'],
      letterSpacing: '2px',
    }}
    {...props}
  >
    {children}
  </p>
);

export const S20 = ({ children, className, ...props }: TypographyProps) => (
  <span
    className={classnames(className)}
    sx={{
      fontFamily: 'Lora',
      fontSize: ['14px', null, '20px'],
      fontStyle: 'italic',
      fontWeight: '400',
      lineHeight: ['16px', null, '26px'],
      letterSpacing: '2px',
      color: 'secondaryOrange',
    }}
    {...props}
  >
    {children}
  </span>
);
