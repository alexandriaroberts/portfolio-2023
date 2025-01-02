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
}: ProjectCardProps) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Prevent navigation if the click is on a child anchor tag
    if ((e.target as HTMLElement).closest('a')) return;
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  return (
    <Box
      onClick={handleClick}
      sx={{
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 6px 25px rgba(0, 0, 0, 0.15)',
        },
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
    </Box>
  );
};
