import React from 'react';
import styled from 'styled-components';

// Container that holds all photo "cards".
const AlbumContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  padding: 1rem;
`;

// A small wrapper for each photo & its caption.
const PhotoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// The image itself.
const StyledImage = styled.img`
  /* By default: scale images down to a max width to prevent huge overflow. */
  width: auto;
  height: auto;
  max-width: 400px;
`;

// The caption text under each image.
const Caption = styled.p`
  margin-top: 0.5rem;
  font-size: 0.9rem;
  text-align: center;
  max-width: 400px;
`;

const TopPhotoContainer = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

// Captions for each image number (1..21).
// - Notice that #21 has no caption provided, so we leave it blank or add a placeholder.
const captions = [
  "ABN with his idol of clear thinking, Francis Crick", // 1
  "ABN with one of his scientific heroes, Jim Watson", // 2 
  "ABN and George Palade, a mentor and role model", // 3 
  "Dr. Niculescu", // 4
  "APA/AstraZeneca Young Minds in Psychiatry International Award - 2005", // 5
  "Theodore Reich Award from International Society for Psychiatric Genetics - New York, 2007", // 6
  "IU Neurophenomics Lab Members", // 7
  "The Power of Genomics", // 8
  "VA Neurophenomics Team", // 9
  "Bioinformatics Group: Building (CFG) Pyramids", // 10
  "Bioinformatics team, Winter 2016", // 11
  "ABN with Nancy Andreasen, a terrific researcher and writer, sharing ideas on the neurobiology of schizophrenia", // 12
  "Spreading the gospel of Convergent Functional Genomics, PhenoChipping and 3D Mindscape", // 13
  "Biomarkers!", // 14
  "Park City 2020. Along with key players in the psychiatric genetics field.", // 15
  "Niculescu Lab", // 16
  "Niculescu Lab", // 17 
  "ABN with one of his mentors, Prof. Ming Tsuang.", // 18 
  "Indiana Bob and the Pyramids of (CFG) Doom", // 19
  "IUPUI Research Frontiers Trailblazer Award 2012", // 20
  "" // 21
];

// Indices that are PNG vs. JPG
const pngIndices = [2, 11, 16, 17, 19];

// Images that should be displayed at original size (no max-width)
const keepOriginalSizeIndices = [ 4, 14];

function PhotoAlbum() {
  // Build an array of { src, index } for 21 images
  const images = [];
  for (let i = 1; i <= 21; i++) {
    const extension = pngIndices.includes(i) ? 'png' : 'jpg';
    images.push({
      src: `/assets/PA${i}.${extension}`,
      number: i
    });
  }

  return (
    <>
      <TopPhotoContainer>
        <StyledImage src="/assets/topphoto.jpg" alt="Top Photo" />
        <Caption>Summer 2025 Toblerone Ceremony</Caption>
      </TopPhotoContainer>
      <AlbumContainer>
        {images.map((img, idx) => {
          const { src, number } = img;
          const captionText = captions[number - 1];

          // If image # is in keepOriginalSizeIndices, remove max-width
          const customStyle = keepOriginalSizeIndices.includes(number)
            ? { width: 'auto', height: 'auto', maxWidth: 'none' }
            : {};

          return (
            <PhotoCard key={idx}>
              <StyledImage src={src} alt={`Photo ${number}`} style={customStyle} />
              <Caption>{captionText}</Caption>
            </PhotoCard>
          );
        })}
      </AlbumContainer>
    </>
  );
}

export default PhotoAlbum;
