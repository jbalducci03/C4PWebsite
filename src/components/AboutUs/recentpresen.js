import React from 'react';
import styled from 'styled-components';

const AlbumContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  padding: 1rem;
`;

const PhotoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImage = styled.img`
  width: auto;
  height: auto;
  max-width: 400px;
`;

const Caption = styled.p`
  margin-top: 0.5rem;
  font-size: 0.9rem;
  text-align: center;
  max-width: 400px;
`;

const TopPhotoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const TopPhotoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BottomPhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const captions = [
  "ABN with his idol of clear thinking, Francis Crick",
  "ABN with one of his scientific heroes, Jim Watson",
  "ABN and George Palade, a mentor and role model",
  "Dr. Niculescu",
  "APA/AstraZeneca Young Minds in Psychiatry International Award - 2005",
  "Theodore Reich Award from International Society for Psychiatric Genetics - New York, 2007",
  "IU Neurophenomics Lab Members",
  "The Power of Genomics",
  "VA Neurophenomics Team",
  "Bioinformatics Group: Building (CFG) Pyramids",
  "Bioinformatics team, Winter 2016",
  "ABN with Nancy Andreasen, a terrific researcher and writer, sharing ideas on the neurobiology of schizophrenia",
  "Spreading the gospel of Convergent Functional Genomics, PhenoChipping and 3D Mindscape",
  "Biomarkers!",
  "Park City 2020. Along with key players in the psychiatric genetics field.",
  "Niculescu Lab",
  "Niculescu Lab",
  "ABN with one of his mentors, Prof. Ming Tsuang.",
  "Indiana Bob and the Pyramids of (CFG) Doom",
  "IUPUI Research Frontiers Trailblazer Award 2012",
  ""
];

const pngIndices = [2, 11, 16, 17, 19];
const keepOriginalSizeIndices = [4, 14];

function PhotoAlbum() {
  const images = [];
  for (let i = 1; i <= 21; i++) {
    const extension = pngIndices.includes(i) ? 'png' : 'jpg';
    images.push({ src: `/assets/PA${i}.${extension}`, number: i });
  }

  return (
    <>
      <TopPhotoContainer>
        <TopPhotoCard>
          <StyledImage src="/assets/topphoto.jpg" alt="Top Photo" style={{ maxWidth: 'none' }} />
          <Caption>C4P Summer 2025</Caption>
        </TopPhotoCard>
        <TopPhotoCard>
          <StyledImage src="/assets/PresidentialVisit.jpg" alt="Presidential Visit" style={{ maxWidth: 'none' }} />
          <Caption>UofA President Garimella Visits UA-COM Phoenix</Caption>
        </TopPhotoCard>
      </TopPhotoContainer>

      <AlbumContainer>
        {images.map((img, idx) => {
          const { src, number } = img;
          const captionText = captions[number - 1];
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

      <BottomPhotoContainer>
        <PhotoCard>
          <StyledImage src="/assets/Ping-Pong.jpg" alt="Ping Pong" />
          <Caption>Taking a Break!</Caption>
        </PhotoCard>
      </BottomPhotoContainer>
    </>
  );
}

export default PhotoAlbum;