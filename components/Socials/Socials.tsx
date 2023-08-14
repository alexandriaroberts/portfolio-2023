export type SocialProps = {
  width?: {};
  height?: string;
  color?: string;
  hoverColor?: string;
  className?: string;
};

export const Socials = ({
  width = ['30px'],
  height = '30px',
  color = 'primary',
  hoverColor = 'secondaryOrange',
  className,
  ...props
}: SocialProps) => (
  <div
    className={className}
    sx={{
      display: 'flex',
      alignItems: 'center',
      gap: '24px',
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
      href='https://github.com/alexandriaroberts'
      target='_blank'
      rel='noopener noreferrer'
    >
      <svg viewBox='0 0 16 16'>
        <title>Github</title>
        <use xlinkHref='../images/sprite.svg#github'></use>
      </svg>
    </a>

    <a
      href='mailto:iamlexieonearth@gmail.com'
      target='_blank'
      rel='noopener noreferrer'
    >
      <svg viewBox='0 0 13 14'>
        <title>Email</title>
        <use xlinkHref='../images/sprite.svg#email'></use>
      </svg>
    </a>

    <a
      href='https://twitter.com/iamlexieonearth'
      target='_blank'
      rel='noopener noreferrer'
    >
      <svg viewBox='0 0 13 10'>
        <title>Twitter</title>
        <use xlinkHref='../images/sprite.svg#twitter'></use>
      </svg>
    </a>

    <a
      href='https://codepen.io/iamlexieonearth'
      target='_blank'
      rel='noopener noreferrer'
    >
      <svg viewBox='0 0 100 100'>
        <title>Codepen</title>
        <use xlinkHref='../images/sprite.svg#codepen'></use>
      </svg>
    </a>

    <a
      href='https://www.linkedin.com/in/alexandria-roberts-001/'
      target='_blank'
      rel='noopener noreferrer'
    >
      <svg viewBox='0 0 512 512'>
        <title>LinkedIn</title>
        <use xlinkHref='../images/sprite.svg#linkedin'></use>
      </svg>
    </a>
  </div>
);
