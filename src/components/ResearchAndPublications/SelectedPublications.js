import React from 'react';
import styled from 'styled-components';
import publicationImage1 from '../../assets/PUB1img.jpg'; // Replace with actual paths
import publicationImage2 from '../../assets/PUB2img.jpg';
import publicationImage3 from '../../assets/PUB3img.jpg';
import publicationImage4 from '../../assets/PUB4img.jpg';


// Styled Components
const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  text-align: center;
  font-style: italic;
  margin-bottom: 20px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 30px;

  img {
    max-width: 200px;
    height: auto;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;

const PublicationsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const PublicationItem = styled.li`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;

  h3 {
    margin: 0 0 5px 0;
  }

  p {
    margin: 5px 0;
  }
`;

const DownloadLink = styled.a`
  display: inline-block;
  margin-top: 10px;
  padding: 8px 12px;
  background-color: #3498db;
  color: #fff;
  text-decoration: none;
  border-radius: 3px;

  &:hover {
    background-color: #2980b9;
  }
`;

const publications = [
  {
    title: "Next-generation precision medicine for mood disorders: reproducible blood biomarkers enable objective diagnostics, subtyping, and targeted therapeutics",
    authors:
      "J. Balducci, E. Gobel, M. Schmitz, J French, A. Germanos, SC Corey, R. Bhagar, SM Kurian, A. Shekhar,H. Le-Niculescu, and  AB Niculescu ",
    journal: "Molecular Psychiatry. 2026 Aug 04 ;30(1):186",
    doi: "10.1038/s41380-026-03736-8",
    pmid: "42547801",
    link: "/assets/pdfs/Balducci.pdf",
  },
  {
    title: "Next-generation precision medicine for pain",
    authors:
      "R. Bhagar, H. Le-Niculescu, S. C. Corey, A. S. Gettelfinger, M. Schmitz, A. Ebushi, E. Matei, C. Woods, J. Mullen, S. M. Kurian, A. Shekhar, F. A. White & AB Niculescu ",
    journal: "Molecular Psychiatry. 2025 Aug 25;30(1):186",
    doi: "10.1038/s41380-025-03186-8",
    pmid: "40855006",
    link: "/assets/pdfs/pain.pdf",
  },
  {
    title: "Next-generation precision medicine for suicidality prevention",
    authors:
      "R Bhagar, S S Gill, H Le-Niculescu, C Yin, K Roseberry, J Mullen, M Schmitz, E Paul, J Cooke, C Tracy, Z Tracy, A S Gettelfinger, D Battles, M Yard, G Sandusky, A Shekhar, S M Kurian, P Bogdan, A B Niculescu",
    journal: "Translational Psychiatry. 2024 Sep 6;14(1):362",
    doi: "10.1038/s41398-024-03071-y",
    pmid: "39242534",
    link: "/assets/pdfs/PDF1.pdf",
  },
  {
    title:
      "Precision Medicine for psychotic disorders: objective assessment, risk prediction, and pharmacogenomics",
    authors:
      "Hill MD, Gill SS, Le-Niculescu H, MacKie O, Bhagar R, Roseberry K, Murray OK, Dainton HD, Wolf SK, Shekhar A, Kurian SM, Niculescu AB",
    journal: "Molecular Psychiatry. 2024 Feb 8 (2)",
    doi: "10.1038/s41380-024-02433-8",
    pmid: "38326562",
    link: "/assets/pdfs/PDF2.pdf",
  },
  {
    title:
      "Temporal effects on death by suicide: empirical evidence and possible molecular correlates",
    authors:
      "R. Bhagar, H. Le-Niculescu, K. Roseberry, K. Kosary, C. Daly, A. Ballew, M. Yard, G. E. Sandusky, A. B. Niculescu",
    journal: "Discover Mental Health. 2023 April 3(10)",
    doi: "10.1007/s44192-023-00035-4",
    pmid: "37861857",
    link: "/assets/pdfs/PDF3.pdf",
  },
  {
    title:
      "Towards precision medicine for anxiety disorders: objective assessment, risk prediction, pharmacogenomics, and repurposed drugs",
    authors:
      "K. Roseberry, H. Le-Niculescu, D.F Levey, R. Bhagar, K. Soe, J. Rogers, S. Palkowitz, N. Pina, W.A. Anastasiadis, S. S. Gill, S. M. Kurian, A. Shekhar, A. B. Niculescu",
    journal: "Molecular Psychiatry. 2023 March 7(2)",
    doi: "10.1038/s41380-023-01998-0",
    pmid: "36878964",
    link: "/assets/pdfs/PDF4.pdf",
  },
  {
    title:
      "Polyphenic risk score shows robust predictive ability for long-term future suicidality",
    authors:
      "M. Cheng, K. Roseberry, Y. Choi, L. Quast, M. Gaines, G. Sandusky, J. A. Kline, P. Bogdan, A. B. Niculescu",
    journal: "Discover Mental Health. 2022 June 13(2)",
    doi: "10.1007/s44192-022-00016-z",
    pmid: "35722470",
    link: "/assets/pdfs/PDF5.pdf",
  },
  {
    title:
      "Precision medicine in psychiatry: biomarkers to the forefront",
    authors: "Niculescu AB, Le-Niculescu H",
    journal: "Neuropsychopharmacology. 2022 Jan;47(1):422-423",
    doi: "10.1038/s41386-021-01183-3",
    pmid: "34584209",
    link: "/assets/pdfs/PDF6.pdf",
  },
  {
    title:
      "Precision medicine for mood disorders: objective assessment, risk prediction, pharmacogenomics, and repurposed drugs",
    authors:
      "Le-Niculescu H, Roseberry K, Gill SS, Levey DF, Phalen PL, Mullen J, Williams A, Bhairo S, Voegtline T, Davis H, Shekhar A, Kurian SM, Niculescu AB",
    journal: "Molecular Psychiatry. 2021 Jul;26(7):2776-2804",
    doi: "10.1038/s41380-021-01061-w",
    pmid: "33828235",
    link: "/assets/pdfs/PDF7.pdf",
  },
  {
    title:
      "Blood biomarkers for memory: toward early detection of risk for Alzheimer disease, pharmacogenomics, and repurposed drugs",
    authors:
      "Niculescu AB, Le-Niculescu H, Roseberry K, Wang S, Hart J, Kaur A, Robertson H, Jones T, Strasburger A, Williams A, Kurian SM, Lamb B, Shekhar A, Lahiri DK, Saykin AJ",
    journal: "Molecular Psychiatry. 2020 Aug;25(8):1651-1672",
    doi: "10.1038/s41380-019-0602-2",
    pmid: "31792364",
    link: "/assets/pdfs/PDF8.pdf",
  },
  {
    title:
      "Convergence of recent GWAS data for suicidality with previous blood biomarkers: independent reproducibility using independent methodologies in independent cohorts",
    authors: "Niculescu AB, Le-Niculescu H",
    journal: "Molecular Psychiatry. 2020 Jan;25(1):19-21",
    doi: "10.1038/s41380-019-0465-6",
    pmid: "31383925",
    link: "/assets/pdfs/PDF9.pdf",
  },
  {
    title:
      "Towards precision medicine for stress disorders: diagnostic biomarkers and targeted drugs",
    authors:
      "Le-Niculescu H, Roseberry K, Levey DF, Rogers J, Kosary K, Prabha S, Jones T, Judd S, McCormick MA, Wessel AR, Williams A, Phalen PL, Mamdani F, Sequeira A, Kurian SM, Niculescu AB",
    journal: "Molecular Psychiatry. 2020 May;25(5):918-938",
    doi: "10.1038/s41380-019-0370-z",
    pmid: "30862937",
    link: "/assets/pdfs/PDF10.pdf",
  },
  {
    title:
      "Towards precision medicine for pain: diagnostic biomarkers and repurposed drugs",
    authors:
      "Niculescu AB, Le-Niculescu H, Levey DF, Roseberry K, Soe KC, Rogers J, Khan F, Jones T, Judd S, McCormick MA, Wessel AR, Williams A, Kurian SM, White FA",
    journal: "Molecular Psychiatry. 2019 Apr;24(4):501-522",
    doi: "10.1038/s41380-018-0345-5",
    pmid: "30755720",
    link: "/assets/pdfs/PDF11.pdf",
  },
  {
    title:
      "Assessing Risk of Future Suicidality in Emergency Department Patients",
    authors:
      "Brucker KM, Duggan C, Roseberry K, Le-Niculescu H, *Niculescu AB, *Kline JA",
    journal: "Academic Emergency Medicine. 2019 Apr;26(4):376-383",
    doi: "10.1111/acem.13562",
    pmid: "30375082",
    link: "/assets/pdfs/PDF12.pdf",
  },
  {
    title:
      "Precision medicine for suicidality: from universality to subtypes and personalization",
    authors:
      "Niculescu AB, Le-Niculescu H, Levey DF, Phalen PL, Dainton HL, Roseberry K, Niculescu EM, Niezer JO, Williams A, Graham DL, Jones TJ, Venugopal V, Ballew A, Yard M, Gelbart T, Kurian SM, Shekhar A, Schork NJ, Sandusky GE, Salomon DR",
    journal: "Molecular Psychiatry. 2017 Sep;22(9):1250-1273",
    doi: "10.1038/mp.2017.128",
    pmid: "28809398",
    link: "/assets/pdfs/PDF13.pdf",
  },
  {
    title:
      "Dissecting Suicidality Using a Combined Genomic and Clinical Approach",
    authors: "Niculescu AB, Le-Niculescu H",
    journal: "Neuropsychopharmacology. 2017 Jan;42(1):360",
    doi: "10.1038/npp.2016.228",
    pmid: "27909331",
    link: "/assets/pdfs/PDF14.pdf",
  },
  {
    title: "Mood, Stress and Longevity: Convergence on ANK3",
    authors:
      "Rangaraju S, Levey DF, Nho N, Jain N, Andrews KD, Le-Niculescu H, Salomon DR, Saykin AJ, Petrascheck M, Niculescu AB",
    journal: "Molecular Psychiatry. 2016 Aug;21(8):1037-1049",
    doi: "10.1038/mp.2016.65",
    pmid: "27217151",
    link: "/assets/pdfs/PDF15.pdf",
  },
  {
    title:
      "Towards understanding and predicting suicidality in women: biomarkers and clinical risk assessment",
    authors:
      "Levey DF, Niculescu EM, Le-Niculescu H, Dainton HD, Phalen PL, Ladd TB, Weber H, Belanger E, Graham DL, Khan FN, Vanipenta NP, Stage EC, Ballew A, Yard M, Gelbart T, Shekhar A, Schork NJ, Kurian SM, Sandusky GE, Salomon DR, Niculescu AB",
    journal: "Molecular Psychiatry. 2016 Jun;21(6):768-785",
    doi: "10.1038/mp.2016.31",
    pmid: "27046645",
    link: "/assets/pdfs/PDF16.pdf",
  },
  {
    title: "A brief proposal for improving clinical trials",
    authors: "Niculescu AB",
    journal: "Molecular Psychiatry. 2016 Jun;21(6):736-737",
    doi: "10.1038/mp.2016.42",
    pmid: "27021813",
    link: "/assets/pdfs/PDF17.pdf",
  },
  {
    title:
      "Suppression of transcriptional drift extends C. elegans lifespan by postponing the onset of mortality",
    authors:
      "Rangaraju S, Solis GM, Thompson RC, Gomez-Amaro RL, Kurian L, Encalada SE, Niculescu AB, Salomon DR, Petrascheck M",
    journal: "eLife. 2015 Dec 1;4:e08833",
    doi: "10.7554/eLife.08833",
    pmid: "26623667",
    link: "/assets/pdfs/PDF18.pdf",
  },
  {
    title:
      "Understanding and predicting suicidality using a combined genomic and clinical risk assessment approach",
    authors:
      "Niculescu AB, Levey DF, Phalen PL, Le-Niculescu H, Dainton HD, Jain N, Belanger E, James A, George S, Weber H, Graham DL, Schweitzer R, Ladd TB, Learman R, Niculescu EM, Vanipenta NP, Khan FN, Mullen J, Shankar G, Cook S, Humbert C, Ballew A, Yard M, Gelbart T, Shekhar A, Schork NJ, Kurian SM, Sandusky GE, Salomon DR",
    journal: "Molecular Psychiatry. 2015 Sep;20(11):1266-1285",
    doi: "10.1038/mp.2015.112",
    pmid: "26283638",
    link: "/assets/pdfs/PDF19.pdf",
  },
  {
    title:
      "Atypical antidepressants extend lifespan of Caenorhabditis elegans by activation of a non-cell-autonomous stress response",
    authors:
      "Rangaraju S, Solis GM, Andersson SI, Gomez-Amaro RL, Kardakaris R, Broaddus CD, Niculescu AB, Petrascheck M",
    journal: "Aging Cell. 2015 Dec;14(6):971-981",
    doi: "10.1111/acel.12379",
    pmid: "26255886",
    link: "/assets/pdfs/PDF20.pdf",
  },
  {
    title:
      "Characteristics of Bipolar I patients grouped by externalizing disorders",
    authors:
      "Swaminathan S, Koller DL, Foroud T, Edenberg HJ, Xuei X, Niculescu AB, Nurnberger JI Jr",
    journal: "J Affect Disord. 2015 Jun 1;178:206-214",
    doi: "10.1016/j.jad.2015.03.011",
    pmid: "25827505",
    link: "/assets/pdfs/PDF21.pdf",
  },
  {
    title:
      "Comprehensive gene- and pathway-based analysis of depressive symptoms in older adults",
    authors:
      "Nho K, Ramanan VK, Horgusluoglu E, Kim S, Inlow MH, Risacher SL, McDonald BC, Farlow MR, Foroud TM, Gao S, Callahan CM, Hendrie HC, Niculescu AB, Saykin AJ",
    journal: "J Alzheimers Dis. 2015;45(4):1197-1206",
    doi: "10.3233/JAD-148009",
    pmid: "25690665",
    link: "/assets/pdfs/PDF22.pdf",
  },
  {
    title:
      "Psychiatric blood biomarkers: avoiding jumping to premature negative or positive conclusions",
    authors:
      "Niculescu AB, Levey DF, Le-Niculescu H, Niculescu E, Kurian SM, Salomon DR",
    journal: "Molecular Psychiatry. 2015 Mar;20(3):286-288",
    doi: "10.1038/mp.2014.180",
    pmid: "25582618",
    link: "/assets/pdfs/PDF23.pdf",
  },
  {
    title:
      "Genetic Risk Prediction and Neurobiological Understanding of Alcoholism",
    authors:
      "Levey DF, Le-Niculescu H, Frank J, Ayalew M, Jain N, Kirlin B, Learman R, Winiger E, Rodd ZA, Shekhar A, Schork NJ, Kiefe F, Wodarz N, Müller-Myhsok B, Dahmer N, GESGA Consortium, Nöthen M, Sherva R, Farrer L, Smith AH, Kranzler H, Rietschel M, Gelernter J, Niculescu AB",
    journal: "Translational Psychiatry. 2014 May 20;4:e391",
    doi: "10.1038/tp.2014.29",
    pmid: "24844177",
    link: "/assets/pdfs/PDF24.pdf",
  },
  {
    title: "Convergent functional genomics of stem cell-derived cells",
    authors: "Niculescu AB",
    journal: "Translational Psychiatry. 2013 Sep 10;3:e305",
    doi: "10.1038/tp.2013.78",
    pmid: "24022510",
    link: "/assets/pdfs/PDF25.pdf",
  },
  {
    title:
      "Discovery and validation of blood biomarkers for suicidality",
    authors:
      "Le-Niculescu H, Levey D, Ayalew M, Palmer L, Gavrin LM, Jain N, Winiger E, Bhosrekar S, Shankar G, Radel M, Bellanger E, Duckworth H, Olesek K, Vergo J, Schweitzer R, Yard M, Ballew A, Shekhar A, Sandusky GE, Schork NJ, Kurian SM, Salomon DR, Niculescu AB",
    journal: "Molecular Psychiatry. 2013 Dec;18(12):1249-1264",
    doi: "10.1038/mp.2013.95",
    pmid: "23958961",
    link: "/assets/pdfs/PDF26.pdf",
  },
  {
    title:
      "Convergent Functional Genomics of Psychiatric Disorders",
    authors: "Niculescu AB",
    journal:
      "American Journal of Medical Genetics Part B: Neuropsychiatric Genetics. 2013 Oct;162B(7):587-594",
    doi: "10.1002/ajmg.b.32163",
    pmid: "23728881",
    link: "/assets/pdfs/PDF27.pdf",
  },
  {
    title:
      "Convergent Functional Genomics of Schizophrenia: From Comprehensive Understanding to Genetic Risk Prediction",
    authors:
      "Ayalew M, Le-Niculescu H, Levey D, Jain N, Changala B, Patel SD, Winiger E, Breier A, Shekhar A, Amdur R, Koller D, Nurnberger JI, Corvin A, Geyer M, Tsuang MT, Salomon DR, Schork NJ, Fanous A, O’Donovan M, Niculescu AB",
    journal: "Molecular Psychiatry. 2012 Sep;17(9):887-905",
    doi: "10.1038/mp.2012.37",
    pmid: "22584867",
    link: "/assets/pdfs/PDF28.pdf",
  },
  {
    title:
      "Convergent functional genomics of anxiety disorders: translational identification of genes, biomarkers, pathways and mechanisms",
    authors:
      "Le-Niculescu H, Balaraman Y, Patel SD, Ayalew M, Gupta J, Kuczenski R, Shekhar A, Schork N, Geyer MA, Niculescu AB",
    journal: "Translational Psychiatry. 2011 May 24;1:e9",
    doi: "10.1038/tp.2011.6",
    pmid: "22832404",
    link: "/assets/pdfs/PDF29.pdf",
  },
  {
    title:
      "Convergent Functional Genomic Studies of Omega-3 Fatty Acids in Stress Reactivity, Bipolar Disorder and Alcoholism",
    authors:
      "Le-Niculescu H, Case NJ, Hulvershorn L, Patel SD, Bowker D, Gupta J, Bell R, Edenberg HJ, Tsuang MT, Kuczenski R, Geyer MA, Rodd Z, Niculescu AB",
    journal: "Translational Psychiatry. 2011 Apr 26;1:e4",
    doi: "10.1038/tp.2011.3",
    pmid: "22832392",
    link: "/assets/pdfs/PDF30.pdf",
  },
  {
    title:
      "Identification of blood biomarkers for psychosis using convergent functional genomics",
    authors:
      "Kurian SM, Le-Niculescu H, Patel SD, Bertram D, Davis J, Dike C, Yehyawi N, Lysaker P, Dustin J, Caligiuri M, Lohr J, Lahiri DK, Nurnberger JI Jr, Faraone SV, Geyer MA, Tsuang MT, Schork NJ, Salomon DR, Niculescu AB",
    journal: "Molecular Psychiatry. 2011 Jan;16(1):37-58",
    doi: "10.1038/mp.2009.117",
    pmid: "19935739",
    link: "/assets/pdfs/PDF31.pdf",
  },
  {
    title:
      "Convergent Integration of Animal Model and Human Studies of Bipolar Disorder (manic-depressive illness)",
    authors: "Le-Niculescu H, Patel SD, Niculescu AB",
    journal: "Current Opinion in Pharmacology. 2010 Dec;10(5):594-600",
    doi: "10.1016/j.coph.2010.06.011",
    pmid: "20817606",
    link: "/assets/pdfs/PDF32.pdf",
  },
  {
    title:
      "Coming to Grips With Complex Disorders: Genetic Risk Prediction in Bipolar Disorder Using Panels of Genes Identified Through Convergent Functional Genomics",
    authors:
      "Patel SD, Le-Niculescu H, Koller DL, Green SD, Lahiri DK, McMahon F, Nurnberger JI, Niculescu AB",
    journal:
      "American Journal of Medical Genetics Part B: Neuropsychiatric Genetics. 2010 Jun 5;153B(4):850-877",
    doi: "10.1002/ajmg.b.31052",
    pmid: "20468069",
    link: "/assets/pdfs/PDF33.pdf",
  },
  {
    title:
      "The P-Value Illusion: How to Improve (Psychiatric) Genetic Studies",
    authors: "Niculescu AB, Le-Niculescu H",
    journal:
      "American Journal of Medical Genetics Part B: Neuropsychiatric Genetics. 2010 Jun 5;153B(4):847-849",
    doi: "10.1002/ajmg.b.31053",
    pmid: "20301110",
    link: "/assets/pdfs/PDF34.pdf",
  },
  {
    title:
      "Toward Early, Personalized, Rational Polypharmacy In Psychiatry: A Tri-Dimensional Approach",
    authors: "Niculescu AB, Hulvershorn L",
    journal: "Psychopharm Review. 2010;45(2):9-16",
    link: "/assets/pdfs/PDF35.pdf",
  },
  {
    title:
      "Convergent Functional Genomics: What We Have Learned and Can Learn About Genes, Pathways, and Mechanisms",
    authors: "Niculescu AB, Le-Niculescu H",
    journal: "Neuropsychopharmacology. 2010 Jan;35(1):355-356",
    doi: "10.1038/npp.2009.128",
    pmid: "20010721",
    link: "/assets/pdfs/PDF36.pdf",
  },
  {
    title:
      "Handwriting movement kinematics for quantifying extrapyramidal side effects in patients treated with atypical antipsychotics",
    authors:
      "Caligiuri MP, Teulings HL, Dean CE, Niculescu AB, Lohr JB",
    journal: "Psychiatry Research. 2010 May 15;177(1-2):77-83",
    doi: "10.1016/j.psychres.2009.02.001",
    pmid: "20381875",
    link: "/assets/pdfs/PDF37.pdf",
  },
  {
    title:
      "Evidence for genetic association of RORB with bipolar disorder",
    authors:
      "McGrath CL, Glatt SJ, Sklar P, Le-Niculescu H, Kuczenski R, Doyle AE, Biederman J, Mick E, Faraone SV, Niculescu AB, Tsuang MT",
    journal: "BMC Psychiatry. 2009 Nov 12;9:70",
    doi: "10.1186/1471-244X-9-70",
    pmid: "19909500",
    link: "/assets/pdfs/PDF38.pdf",
  },
  {
    title:
      "Handwriting movement analyses for monitoring drug-induced motor side effects in schizophrenia patients treated with risperidone",
    authors:
      "Caligiuri MP, Teulings HL, Dean CE, Niculescu AB, Lohr J",
    journal: "Human Movement Science. 2009 Oct;28(5):633-642",
    doi: "10.1016/j.humov.2009.08.001",
    pmid: "19692133",
    link: "/assets/pdfs/PDF39.pdf",
  },
  {
    title:
      "Mindscape: A convergent perspective on life, mind, consciousness and happiness",
    authors: "Niculescu AB, Schork NJ, Salomon DR",
    journal: "Journal of Affective Disorders. 2010 Jun;123(1-3):1-8",
    doi: "10.1016/j.jad.2009.10.008",
    pmid: "19595463",
    link: "/assets/pdfs/PDF40.pdf",
  },
  {
    title:
      "Convergent Functional Genomics of Genome-Wide Association Data for Bipolar Disorder: Comprehensive Identification of Candidate Genes, Pathways and Mechanisms",
    authors:
      "Le-Niculescu H, Patel SD, Bhat M, Kuczenski R, Faraone SV, Tsuang MT, McMahon FJ, Schork NJ, Nurnberger JI Jr, Niculescu AB",
    journal:
      "American Journal of Medical Genetics Part B: Neuropsychiatric Genetics. 2009 Mar 5;150B(2):155-181",
    doi: "10.1002/ajmg.b.30887",
    pmid: "19025758",
    link: "/assets/pdfs/PDF41.pdf",
  },
  {
    title:
      "Evidence of association between brain-derived neurotrophic factor (BDNF) gene and bipolar disorder",
    authors:
      "Liu L, Foroud R, Xuei X, Berrettini W, Byerley W, Coryell W, El-Mallakh R, Gershon E, Kelsoe J, Lawson W, MacKinnon D, McInnis M, McMahon F, Murphy D, Rice J, Scheftner W, Niculescu AB, Meyer ET, Edenberg HJ, Nurnberger JI Jr",
    journal: "Psychiatric Genetics. 2008 Dec;18(6):267-274",
    doi: "10.1097/YPG.0b013e328306a465",
    pmid: "19018231",
    link: "/assets/pdfs/PDF42.pdf",
  },
  {
    title:
      "Phenomic, convergent functional genomic and biomarker studies in a stress-reactive genetic animal model of bipolar disorder and co-morbid alcoholism",
    authors:
      "Le-Niculescu H, McFarland MJ, Ogden CA, Balaraman Y, Patel S, Tan J, Rodd ZA, Paulus M, Geyer M, Edenberg HJ, Glatt SJ, Faraone SV, Nurnberger JI Jr, Kuczenski R, Tsuang MT, Niculescu AB",
    journal:
      "American Journal of Medical Genetics Part B: Neuropsychiatric Genetics. 2008 Mar 5;147B(2):134-166",
    doi: "10.1002/ajmg.b.30613",
    pmid: "18247375",
    link: "/assets/pdfs/PDF43.pdf",
  },
  {
    title:
      "Convergent Functional Genomics of bipolar disorder: from animal model pharmacogenomics to human genetics and biomarkers",
    authors:
      "Le-Niculescu H, McFarland MJ, Mamidipalli S, Ogden CA, Kuczenski R, Kurian SM, Salomon DR, Tsuang MT, Nurnberger JI Jr, Niculescu AB",
    journal:
      "Neuroscience & Biobehavioral Reviews. 2007;31(6):897-903",
    doi: "10.1016/j.neubiorev.2007.04.009",
    pmid: "17614132",
    link: "/assets/pdfs/PDF44.pdf",
  },
  {
    title:
      "Towards Understanding the Schizophrenia Code: An Expanded Convergent Functional Genomics Approach",
    authors:
      "Le-Niculescu H, Balaraman Y, Patel SD, Tan J, Sidhu K, Jerome RE, Edenberg HJ, Kuczenski R, Geyer MA, Nurnberger JI Jr, Faraone SV, Tsuang MT, Niculescu AB",
    journal:
      "American Journal of Medical Genetics Part B: Neuropsychiatric Genetics. 2007 Mar 5;144B(2):129-158",
    doi: "10.1002/ajmg.b.30415",
    pmid: "17266109",
    link: "/assets/pdfs/PDF45.pdf",
  },
  {
    title:
      "Polypharmacy in oligopopulations: what psychiatric genetics can teach biological psychiatry",
    authors: "Niculescu AB",
    journal: "Psychiatric Genetics. 2006 Dec;16(6):241-244",
    doi: "10.1097/01.ypg.0000233905.89696.88",
    pmid: "17106426",
    link: "/assets/pdfs/PDFoligo.pdf",
  },
  {
    title:
      "Candidate genes, pathways and mechanisms for alcoholism: an expanded convergent functional genomics approach",
    authors:
      "Rodd ZA, Bertsch BA, Strother WN, Le-Niculescu H, Balaraman Y, Hayden E, Jerome RE, Lumeng L, Nurnberger JI Jr, Edenberg HJ, McBride WJ, Niculescu AB",
    journal: "The Pharmacogenomics Journal. 2007;7(4):222-256",
    doi: "10.1038/sj.tpj.6500425",
    pmid: "17033615",
    link: "/assets/pdfs/PDF46.pdf",
  },
  {
    title:
      "PhenoChipping of psychotic disorders: A novel approach for deconstructing and quantitating psychiatric phenotypes",
    authors:
      "Niculescu AB, Lulow LL, Ogden CA, Le-Niculescu H, Salomon DR, Schork NJ, Caligiuri MP, Lohr JB",
    journal:
      "American Journal of Medical Genetics Part B: Neuropsychiatric Genetics. 2006 Sep 5;141B(6):653-662",
    doi: "10.1002/ajmg.b.30358",
    pmid: "16838358",
    link: "/assets/pdfs/PDF47.pdf",
  },
  {
    title:
      "Striatopallidal regulation of affect in bipolar disorder",
    authors:
      "Caligiuri MP, Brown GG, Meloy MJ, Eberson S, Niculescu AB, Lohr JB",
    journal:
      "Journal of Affective Disorders. 2006 Apr;91(2-3):235-242",
    doi: "10.1016/j.jad.2006.01.012",
    pmid: "16503055",
    link: "/assets/pdfs/PDF48.pdf",
  },
  {
    title:
      "Convergent functional genomics: A Bayesian candidate gene identification approach for complex disorders",
    authors:
      "Bertsch B, Ogden CA, Sidhu K, Le-Niculescu H, Kuczenski R, Niculescu AB",
    journal: "Methods. 2005 Nov;37(3):274-279",
    doi: "10.1016/j.ymeth.2005.07.004",
    pmid: "16308156",
    link: "/assets/pdfs/PDF49.pdf",
  },
  {
    title:
      "Genomic studies of mood disorders—the brain as a muscle?",
    authors: "Niculescu AB",
    journal: "Genome Biology. 2005;6(4):215",
    doi: "10.1186/gb-2005-6-4-215",
    pmid: "15833130",
    link: "/assets/pdfs/PDF50.pdf",
  },
  {
    title:
      "Candidate genes, pathways and mechanisms for bipolar (manic-depressive) and related disorders: an expanded convergent functional genomics approach",
    authors:
      "Ogden CA, Rich ME, Schork NJ, Paulus MP, Geyer MA, Lohr JB, Kuczenski R, Niculescu AB",
    journal: "Molecular Psychiatry. 2004 Nov;9(11):1007-1029",
    doi: "10.1038/sj.mp.4001546",
    pmid: "15314610",
    link: "/assets/pdfs/PDF51.pdf",
  },
  {
    title:
      "Oxidative mechanisms and tardive dyskinesia",
    authors: "Lohr JB, Kuczenski R, Niculescu AB",
    journal: "CNS Drugs. 2003;17(1):47-62",
    doi: "10.2165/00023210-200317010-00004",
    pmid: "12467492",
    link: "/assets/pdfs/PDF52.pdf",
  },
  {
    title:
      "Finding Genes for Bipolar Disorder in the Functional Genomics Era: From Convergent Functional Genomics to Phenomics and Back",
    authors: "Niculescu AB, Kelsoe JR",
    journal: "CNS Spectrums. 2002 Mar;7(3):215-216, 223-226",
    doi: "10.1017/S1092852900027655",
    pmid: "15211285",
    link: "/assets/pdfs/PDF53.pdf",
  },
  {
    title:
      "Sex hormones, Darwinism, and depression",
    authors: "Niculescu AB, Akiskal HS",
    journal:
      "Archives of General Psychiatry. 2001 Nov;58(11):1083-1084; discussion 1085-6",
    doi: "10.1001/archpsyc.58.11.1083",
    pmid: "11695957",
    link: "/assets/pdfs/PDF54.pdf",
  },
  {
    title:
      "The human genome: genetic testing and animal models",
    authors: "Niculescu AB, Kelsoe JR",
    journal: "American Journal of Psychiatry. 2001 Oct;158(10):1587",
    doi: "10.1176/appi.ajp.158.10.1587",
    pmid: "11578984",
    link: "/assets/pdfs/PDF55.pdf",
  },
  {
    title:
      "Proposed endophenotypes of dysthymia: evolutionary, clinical and pharmacogenomic considerations",
    authors: "Niculescu AB, Akiskal HS",
    journal: "Molecular Psychiatry. 2001 Jul;6(4):363-366",
    doi: "10.1038/sj.mp.4000885",
    pmid: "11443518",
    link: "/assets/pdfs/PDF56.pdf",
  },
  {
    title:
      "Convergent functional genomics: application to bipolar disorder",
    authors: "Niculescu AB, Kelsoe JR",
    journal: "Annals of Medicine. 2001 May;33(4):263-271",
    doi: "10.3109/07853890109002092",
    pmid: "11405548",
    link: "/assets/pdfs/PDF57.pdf",
  },
  {
    title:
      "Identifying a series of candidate genes for mania and psychosis: a convergent functional genomics approach",
    authors:
      "Niculescu AB, Segal DS, Kuczenski R, Barrett T, Hauger RL, Kelsoe JR",
    journal: "Physiological Genomics. 2000 Nov 9;4(1):83-91",
    doi: "10.1152/physiolgenomics.2000.4.1.83",
    pmid: "11074017",
    link: "/assets/pdfs/PDF58.pdf",
  },
  {
    title: "The will to live, suicide, and euthanasia",
    authors: "Niculescu AB",
    journal: "Archives of Internal Medicine. 2000 Jun 12;160(11):1706",
    doi: "10.1001/archinte.160.11.1706",
    pmid: "10847275",
    link: "/assets/pdfs/PDF59.pdf",
  },
  {
    title:
      "Prophylactic antidepressant treatment before patients are admitted",
    authors: "Niculescu AB",
    journal: "The Lancet. 2000 Jan 29;355(9201):406-407",
    doi: "10.1016/S0140-6736(05)72040-0",
    pmid: "10665577",
    link: "/assets/pdfs/PDF60.pdf",
  },
  {
    title:
      "Effects of p21Cip1/Waf1 at both the G1/S and the G2/M cell cycle transitions: pRb is a critical determinant in blocking DNA replication and in preventing endoreduplication",
    authors:
      "Niculescu AB, Chen X, Smeets M, Hengst L, Prives C, Reed SI",
    journal: "Molecular and Cellular Biology. 1998 Jan;18(1):629-643",
    doi: "10.1128/MCB.18.1.629",
    pmid: "9418909",
    link: "/assets/pdfs/PDF61.pdf",
  },
];





// Component
function SelectedPublications() {

  return (
    <Container>
      <Title>Publications</Title>
      <Subtitle>
        “Look to the genome to rebuild healthcare” -Leroy Hood, Institute for Systems Biology
      </Subtitle>
      <ImageContainer>
        <img src={publicationImage1} alt="Publication Visual 1" />
        <img src={publicationImage2} alt="Publication Visual 2" />
        <img src={publicationImage3} alt="Publication Visual 3" />
        <img src={publicationImage4} alt="Publication Visual 4" />
      </ImageContainer>
      <PublicationsList>
        {publications.map((pub, index) => (
          <PublicationItem key={index}>
            <h3>{pub.title}</h3>
            <p>
              <strong>Authors:</strong> {pub.authors}
            </p>
            <p>
              <strong>Journal:</strong> {pub.journal}
            </p>
            <p>
              <strong>DOI:</strong> {pub.doi}{" "}
              {pub.pmid && (
                <>
                  <strong>PMID:</strong> {pub.pmid}
                </>
              )}
            </p>
            <DownloadLink href={pub.link} download>
            Download PDF
            </DownloadLink>

          </PublicationItem>
        ))}
      </PublicationsList>
    </Container>
  );
}

export default SelectedPublications;

