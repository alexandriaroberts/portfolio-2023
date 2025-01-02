/** @jsxImportSource theme-ui */
import { Box } from 'theme-ui';

type SocialsIconProps = {
  width?: {};
  height?: string;
  color?: string;
  hoverColor?: string;
  xlinkHref: string;
  onClick: () => void;
  title: string;
  className?: string;
};

export const SocialsIcon = ({
  width = ['22px'],
  height = '22px',
  color,
  hoverColor = 'secondaryOrange',
  title,
  xlinkHref,
  onClick,
  className,
  ...props
}: SocialsIconProps) => (
  <div
    onClick={onClick}
    role='button'
    tabIndex={0}
    sx={{
      display: 'flex',
      cursor: 'pointer',
      color: 'currentColor',
      transition: 'all 0.3s ease',
      '&:hover': {
        color: hoverColor,
        transform: 'scale(1.1)',
      },
      svg: {
        width: width,
        height: height,
      },
    }}
  >
    <svg viewBox='0 0 16 16'>
      <title>{title}</title>
      <use xlinkHref={xlinkHref}></use>
    </svg>
  </div>
);

export default SocialsIcon;
