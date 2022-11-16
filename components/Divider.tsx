/* eslint-disable @next/next/no-img-element */
/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import classnames from 'classnames';
import { HTMLAttributes } from 'react';

export type DividerProps = {
  color?: 'text' | 'primary';
  width?: string;
} & Omit<HTMLAttributes<HTMLHRElement>, 'children'>;

/**
 * Horizontal line for dividing content.
 */
export const Divider = ({
  color = 'text',
  width = '100%',
  className,
  ...props
}: DividerProps) => {
  return (
    <div
      className={classnames(className)}
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: width,
        height: '1px',
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
          borderTop: 'currentColor',
        }}
      />
    </div>
  );
};
