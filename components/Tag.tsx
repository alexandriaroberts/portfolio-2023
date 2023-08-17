import { ReactNode } from 'react';
import { P16 } from './Typography';

type TagProps = {
  children?: ReactNode;
  className?: string;
};

export const Tag = ({ children, className, ...props }: TagProps) => (
  <P16
    className={className}
    sx={{
      display: 'flex',
      alignItems: 'center',
      background: 'rgba(255, 154, 25, 0.30)',
      p: '0px 4px',
      borderRadius: '4px',
      height: '30px',
    }}
    {...props}
  >
    {children}
  </P16>
);
