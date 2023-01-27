/* eslint-disable @next/next/no-img-element */
/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import classnames from 'classnames';
import { HTMLAttributes } from 'react';

export type HeadingDecorationProps = {
  left: {};
} & Omit<HTMLAttributes<HTMLElement>, 'children'>;

/**
 * Decoration style for headings
 */
export const HeadingDecoration = ({
  left,
  className,
  ...props
}: HeadingDecorationProps) => {
  return (
    <span
      className={classnames(className)}
      sx={{
        display: 'inline-block',
        position: 'absolute',
        top: '40%',
        left: left,
        width: ['50px', null, '66px', '108px'],
        height: ['36px', null, '46px', '72px'],
        transform: 'translate(-50%, -50%)',
        borderRadius: '250px 250px 0 0',
        bg: 'secondaryOrange',
        zIndex: '-1',
      }}
      {...props}
    />
  );
};
