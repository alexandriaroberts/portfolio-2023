/* eslint-disable @next/next/no-img-element */

import classnames from 'classnames';
import { HTMLAttributes } from 'react';

export type DividerProps = {
  color?: 'text' | 'primary';
  width?: string;
  height?: string;
} & Omit<HTMLAttributes<HTMLHRElement>, 'children'>;

/**
 * Horizontal line for dividing content.
 */
export const Divider = ({
  color = 'text',
  width = '100%',
  height = '1px',
  className,
  ...props
}: DividerProps) => {
  return (
    <div
      className={classnames(className)}
      sx={{
        display: 'flex',
        width: width,
        height: height,
        gap: '1px',
        color: color,
      }}
      {...props}
    >
      <hr
        sx={{
          flex: 1,
          borderWidth: '1px',
          borderStyle: 'solid',
          borderTop: height === '1px' ? 'currentColor' : 'transparent',
          borderLeft: height !== '1px' ? 'currentColor' : 'transparent',
        }}
      />
    </div>
  );
};
