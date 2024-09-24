import React from 'react';
import styled from 'styled-components';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const ProjectSection = styled.section`
  padding: 2rem;
`;

const GallerySection = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const ProjectDescription = styled.p`
  text-align: center;
  margin-bottom: 1rem;
`;

function Projects() {
  const projectImages = [
    {
      original: "/images/experian1pic.png",
      thumbnail: "/images/experian1pic.png",
    },
    {
      original: "/images/experian2pic.png",
      thumbnail: "/images/experian2pic.png",
    },
    {
      original: "/images/experian3pic.png",
      thumbnail: "/images/experian3pic.png",
    },
    {
      original: "/images/experian4pic.png",
      thumbnail: "/images/experian4pic.png",
    },
    {
      original: "/images/experian5pic.png",
      thumbnail: "/images/experian5pic.png",
    },
    {
      original: "/images/experian6pic.png",
      thumbnail: "/images/experian6pic.png",
    },
  ];

  return (
    <ProjectSection>
      <ProjectDescription>
<header>
  <h2>Experian Work</h2>
  <p>
    Here's a gallery showcasing some of my work at Experian.
  </p>
</header>
      </ProjectDescription>
      <GallerySection>
        <ImageGallery items={projectImages} />
      </GallerySection>
    </ProjectSection>
  );
}

export default Projects;