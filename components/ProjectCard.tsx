/** @jsxImportSource theme-ui */
import { Box, Image } from 'theme-ui';

type ProjectCardProps = {
  href: string;
  image: string;
  alt: string;
  children: React.ReactNode;
};

export const ProjectCard = ({
  href,
  image,
  alt,
  children,
}: ProjectCardProps) => (
  <Box
    sx={{
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 6px 25px rgba(0, 0, 0, 0.15)',
      },
    }}
  >
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      sx={{
        textDecoration: 'none',
        color: 'text',
        display: 'block',
      }}
    >
      <Box sx={{ position: 'relative', paddingTop: '56.25%' }}>
        <Image
          src={image}
          alt={alt}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        />
      </Box>
      <Box sx={{ p: 4 }}>{children}</Box>
    </a>
  </Box>
);
