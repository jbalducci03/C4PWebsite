import React from "react";
import styled from "styled-components";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const AlbumGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  max-width: 1200px;
`;

const BottomSection = styled.div`
  margin-top: 3rem;
  margin-bottom: 2rem;
`;

const PhotoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImage = styled.img`
  max-width: 400px;
  height: auto;
`;

const Caption = styled.p`
  margin-top: 0.5rem;
  font-size: 0.9rem;
  text-align: center;
  max-width: 400px;
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
  "ABN with Nancy Andreasen, sharing ideas on schizophrenia",
  "Spreading the gospel of Convergent Functional Genomics",
  "Biomarkers!",
  "Park City 2020",
  "Niculescu Lab",
  "Niculescu Lab",
  "ABN with Prof. Ming Tsuang",
  "Indiana Bob and the Pyramids of (CFG) Doom",
  "IUPUI Research Frontiers Trailblazer Award 2012",
  ""
];

const pngIndices = [2, 11, 16, 17, 19];

const BASE = process.env.PUBLIC_URL || "";

function PhotoAlbum() {

  const images = [];

  for (let i = 1; i <= 21; i++) {
    const extension = pngIndices.includes(i) ? "png" : "jpg";
    images.push({
      src: `${BASE}/assets/PA${i}.${extension}`,
      caption: captions[i - 1],
      id: i
    });
  }

  return (
    <Page>

      {/* TOP PHOTOS */}
      <TopSection>

        <PhotoCard>
          <StyledImage
            src={`${BASE}/assets/topphoto.jpg`}
            alt="Top Photo"
          />
          <Caption>C4P Summer 2025</Caption>
        </PhotoCard>

        <PhotoCard>
          <StyledImage
            src={`${BASE}/assets/PresidentialVisit.jpg`}
            alt="Presidential Visit"
          />
          <Caption>
            UofA President Garimella Visits UA-COM Phoenix
          </Caption>
        </PhotoCard>

      </TopSection>


      {/* MAIN PHOTO ALBUM */}

      <AlbumGrid>
        {images.map((img) => (
          <PhotoCard key={img.id}>
            <StyledImage src={img.src} alt={`Photo ${img.id}`} />
            <Caption>{img.caption}</Caption>
          </PhotoCard>
        ))}
      </AlbumGrid>


      {/* BOTTOM PHOTO */}

      <BottomSection>
        <PhotoCard>
          <StyledImage
            src={`${BASE}/assets/Ping-Pong.jpg`}
            alt="Ping Pong"
          />
          <Caption>Taking a Break!</Caption>
        </PhotoCard>
      </BottomSection>

    </Page>
  );
}

export default PhotoAlbum;