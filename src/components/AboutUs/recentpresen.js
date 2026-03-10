import React from "react";
import styled from "styled-components";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  margin-bottom: 40px;
`;

const Album = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  max-width: 1200px;
`;

const PhotoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  max-width: 400px;
  height: auto;
`;

const Caption = styled.p`
  text-align: center;
  font-size: 0.9rem;
  margin-top: 8px;
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
  "ABN with Nancy Andreasen sharing ideas on schizophrenia",
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

function PhotoAlbum() {

  const images = [];

  for (let i = 1; i <= 21; i++) {
    const ext = pngIndices.includes(i) ? "png" : "jpg";
    images.push({
      src: `/assets/PA${i}.${ext}`,
      caption: captions[i - 1],
      id: i
    });
  }

  return (
    <Page>

      {/* TOP ROW */}
      <Row>
        <PhotoCard>
          <Img src="/assets/topphoto.jpg" alt="Top Photo" />
          <Caption>C4P Summer 2025</Caption>
        </PhotoCard>

        <PhotoCard>
          <Img src="/assets/PresidentialVisit.jpg" alt="Presidential Visit" />
          <Caption>UofA President Garimella Visits UA-COM Phoenix</Caption>
        </PhotoCard>
      </Row>

      {/* ALBUM */}
      <Album>
        {images.map(img => (
          <PhotoCard key={img.id}>
            <Img src={img.src} alt={`Photo ${img.id}`} />
            <Caption>{img.caption}</Caption>
          </PhotoCard>
        ))}
      </Album>

      {/* BOTTOM PHOTO */}
      <Row>
        <PhotoCard>
          <Img src="/assets/Ping-Pong.jpg" alt="Ping Pong" />
          <Caption>Taking a Break!</Caption>
        </PhotoCard>
      </Row>

    </Page>
  );
}

export default PhotoAlbum;