/** @jsxImportSource theme-ui */
import { Box } from 'theme-ui';

type SocialsIconProps = {
  width?: {};
  height?: string;
  color?: string;
  hoverColor?: string;
  xlinkHref: string;
  href: string;
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
  href,
  className,
  ...props
}: SocialsIconProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering ProjectCard's click event
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  return (
    <Box
      className={className}
      onClick={handleClick}
      sx={{
        display: 'flex',
        gap: '32px',
        color: color,
        ml: '8px',
        cursor: 'pointer',
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
      {...props}
    >
      <svg viewBox='0 0 16 16'>
        <title>{title}</title>
        <use xlinkHref={xlinkHref}></use>
      </svg>
    </Box>
  );
};
