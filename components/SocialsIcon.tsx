export type SocialsIconProps = {
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
}: SocialsIconProps) => (
  <div
    className={className}
    sx={{
      display: 'flex',
      gap: '32px',
      color: color,
      a: {
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
      },
    }}
    {...props}
  >
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      sx={{ display: 'flex' }}
    >
      <svg viewBox='0 0 16 16'>
        <title>{title}</title>
        <use xlinkHref={xlinkHref}></use>
      </svg>
    </a>
  </div>
);
