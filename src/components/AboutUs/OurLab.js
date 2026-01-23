import React from "react";
import styled from "styled-components";
import drnimg from '../../assets/Dr.N.png';
import helenimg from '../../assets/Helen_2010.jpg'
import rowanimg from '../../assets/rb.png';
import jessicaimg from '../../assets/Jessica.png';
import ethanimg from '../../assets/Ethan.jpg';
import emilyimg from '../../assets/Emily.png';
import joyateeimg from '../../assets/Joyateepng.png';
import adamimg from '../../assets/Adam.jpg';
import edieimg from '../../assets/edieimg.png';
import aayushimg from '../../assets/Aayush.png';
import mackenzieimg from '../../assets/Mackenzie.jpg';
import nicholasimg from '../../assets/Nicholas.jpg';
import robertimg from '../../assets/Robert.jpeg';
import joeyimg from '../../assets/joey.png';
import Jonathanimg from '../../assets/Jonathanimg.JPG';
import ashlynimg from '../../assets/Ashlyn.jpg'
import tobiimg from '../../assets/tobi.jpg'
// Styled Components
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Section = styled.div`
  margin-bottom: 40px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 1.8rem;
  color: #2c3e50;
`;

/* Styles for Current Members */
const MemberCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const MemberImage = styled.img`
  width: 196px;
  height: 256px;
  border: 1px solid #ddd;
  object-fit: cover;
`;

const MemberInfo = styled.div`
  font-size: 1rem;
  color: #34495e;
`;

const MemberName = styled.h3`
  margin: 0;
  font-size: 1.4rem;
  color: #2c3e50;
`;

const MemberTitle = styled.p`
  margin: 10px 0 0;
  font-size: 1.1rem;
  line-height: 1.5;
  white-space: pre-wrap; /* Allows \n to work */
`;


/* Styles for Alumni */
const AlumniList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 10px;
`;

const AlumniItem = styled.li`
  margin-bottom: 10px;
  font-size: 0.9rem;
  color: #7f8c8d;
  background: #f1f1f1;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

function LabMembers() {
  // Function to extract last name for sorting
  const getLastName = (fullName) => {
    // Remove degrees and titles after commas
    const nameBeforeComma = fullName.split(',')[0].trim();
    
    // Split by spaces
    const nameParts = nameBeforeComma.split(' ');
    
    // Handle cases like "III", "Jr.", "Sr."
    let lastName = nameParts[nameParts.length - 1];
    if (['III', 'II', 'IV', 'Jr.', 'Sr.'].includes(lastName)) {
      lastName = nameParts[nameParts.length - 2];
    }
    
    return lastName.toLowerCase();
  };

  const currentMembers = [
    {
      name: 'Alexander B. Niculescu III, M.D., Ph.D.',
      title: 'Professor of Psychiatry, Founding Director, C4P (Center for Precise, Personalized, and Preventive Psychiatry)\nThe University of Arizona College of Medicine – Phoenix\nStaff Psychiatrist and R&D Investigator, Carl T. Hayden VA Medical Center \n\nEmail: aniculescu@arizona.edu',
      image: drnimg,
    },
    {
      name: 'Helen Le-Niculescu, Ph.D.',
      title: 'Staff Scientist',
      image: helenimg,
    },
    {
      name: 'Tobenna Ani',
      title: 'High School Research Assistant',
      image: tobiimg,
    },
    {
      name: 'Joey Balducci',
      title: 'Research Assistant',
      image: joeyimg,
    },    
    {
      name: 'Ashlyn Germanos',
      title: 'Research Assistant',
      image: ashlynimg,
    },
    {
      name: 'Edie Gobel',
      title: 'Undergraduate Research Assistant',
      image: edieimg,
    },
    {
      name: 'Mackenzie Lopez',
      title: 'Undergraduate Research Assistant',
      image: mackenzieimg,
    },
    {
      name: 'Nicholas Novell',
      title: 'Undergraduate Research Assistant',
      image: nicholasimg,
    },
    {
      name: 'Aayush Rastogi',
      title: 'Undergraduate Research Assistant',
      image: aayushimg,
    }
  ];

  const alumni = [
    { name: "Will Anastasiadis, Psy.D.", title: "Children's Hospital Colorado, CO" },
    { name: "Katie Andrews, M.D., Ph.D.", title: "Indiana University School of Medicine" },
    { name: "Mikias Ayalew, M.S.", title: "Software Engineer, Glassdoor, San Francisco, CA" },
    { name: "Yokesh Balaraman, M.D.", title: "Psychiatry Specialist, Fort Wayne, IN" },
    { name: "Adam Bedeir", title: "University of Arizona, Tucson" },
    { name: "Elizabeth Belanger, Psy.D.", title: "Clinical Psychologist, Hinesville VA Clinic, GA" },
    { name: "David M. Bertram, Psy.D.", title: "Clinical Psychologist, Grand Rapids, MI" },
    { name: "Brion Bertsh, M.D.", title: "Neurologist, Fairmount, IN" },
    { name: 'Rowan Bhagar'},
    { name: "Meghana Bhat, M.D.", title: "Adult Psychiatry, Meridian Health Services, IN" },
    { name: "Sugandha Bhosrekar, M.D.", title: "Psychiatrist, Minneapolis, MN" },
    { name: "Dean Bowker, M.D.", title: "Anesthesiology, California Pacific Medical Center, CA" },
    { name: "Alyson Brener", title: "Marriage and Family Therapy, Scotia, NY" },
    { name: "Natalie Case", title: "Project Manager, Labcorp, Evansville, IN" },
    { name: "Jessica Cooke", title: "PhD Student, University of Indianapolis" },
    { name: "Helen Dainton", title: "Resident, Neuropsychiatry, University of South Carolina School of Medicine" },
    { name: "Christine Daly, MSc.", title: "Medical Student, IU School of Medicine" },
    { name: "Jeremy Davis, Psy.D.", title: "Clinical Neuropsychologist, UT Health San Antonio, TX" },
    { name: "Craig Dike, Psy.D.", title: "Psychologist, VA Medical Center, San Antonio, TX" },
    { name: "Bharathi Eddula, M.D.", title: "Psychiatrist, Orlando, FL" },
    { name: "Kaitlyn Engle, MD", title: "Pediatrics Resident, IU School of Medicine" },
    { name: "Griffin Fitzgerald", title: "Principal Scientist, Imaging and Pharmacology, Eli Lilly" },
    { name: "Miranda Gavrin", title: "Software Engineer, Aurora, Pittsburgh, PA" },
    { name: "Sunita George, Psy.D.", title: "Psychologist, Modern Therapy, Houston, TX" },
    { name: "Sumanpreet Singh Gill, M.D.", title: "Family Medicine Resident" },
    { name: "Emily Gilmore, Psy.D.", title: "Clinical Psychologist, Bethel Olentangy, Columbus, OH" },
    { name: "Katie Harlow, M.D.", title: "Pediatric Gastroenterology, Riley Children's Health, IN" },
    { name: "Steven Hightshue, PT, DPT, ODCS", title: "Doctor of Physical Therapy, Gainesville, GA" },
    { name: "Leslie Hulvershorn, M.D.", title: "Chairman, Department of Psychiatry, IU School of Medicine" },
    { name: "Alison James, Psy.D.", title: "Staff Psychologist, VA Maryland, Baltimore, MD" },
    { name: "Seth Judd, D.O.", title: "Psychiatry, Napa State Hospital, CA" },
    { name: "Brigid Kirlin, RN NPI", title: "Dental Medical Support Services, Indianapolis, IN" },
    { name: "Kaitlyn Kosary, M.S.", title: "Lab Technician, Advocate Christ Medical Center, Oak Lawn, IL" },
    { name: "Thatcher Ladd, Ph.D.", title: "Stark Neurosciences Research Institute, IU School of Medicine" },
    { name: "Rebecca Learman, MSW PA-C", title: "Psychiatric Physician Assistant, Henry Ford Allegiance Health" },
    { name: "Daniel Levey, Ph.D.", title: "Assistant Professor of Psychiatry, Yale School of Medicine" },
    { name: "Shira Louria, Psy.D.", title: "Clinical Psychologist, University of Vermont Health Network, VT" },
    { name: "Thomas Lowe, M.D.", title: "Diagnostic Radiology, Indianapolis & Mishawaka, IN" },
    { name: "SudhaRani Mamidipalli, M.S.", title: "Data Curation Strategy Leader, Eli Lilly, Indianapolis" },
    { name: "Ethan Matei"},
    { name: "Matthew J. McFarland, RPh., Ph.D.", title: "Vice President of Commercialization, Nationwide Children's Hospital" },
    { name: "Jim Mullen, Ph.D.", title: "IT Guru" },
    { name: "Lauren Myers", title: "Doctoral Intern, Jane Pauley Community Health Center, Anderson, IN" },
    { name: "Cory A. Ogden, M.D.", title: "Urgent Care, Family Medicine, Sunnyside, OR" },
    { name: "Kyle Olesek, Psy.D.", title: "Psychologist, VA Medical Center, Indianapolis" },
    { name: "Laura E. Palmer, M.D.", title: "Anesthesiologist, Community Hospital North, Indianapolis, IN" },
    { name: "Zachary Parrett, Psy.D.", title: "Psychologist, VA Medical Center, Kansas City, MO" },
    { name: "Sagar D. Patel, M.D.", title: "Emergency Medicine Physician, Community Hospital East, IN" },
    { name: "Emily Paul", title: "PhD Student, Indiana State University" },
    { name: "Peter Phalen, Psy.D.", title: "University of Maryland" },
    { name: "Swapna Raavi, M.D.", title: "Internal Medicine, St. Luke's, Duluth & Hermantown, MN" },
    { name: "Mark Radel, Psy.D.", title: "Psychologist, LifeSpan Counseling & Psychological Services, Oak Park, IL" },
    { name: "Michael Rich, M.D.", title: "Cardiology, Boise, ID" },
    { name: "Hayley Robertson, Pharm.D.", title: "Pharmacist, Indianapolis, IN" },
    { name: "Kyle Roseberry, MD.", title: "Psychiatrist, VA" },
    { name: "Joyatee Sarker, M.D., Ph.D.", title: "Chief Resident, Inidana University, School of Medicine" },
    { name: "Ganesh Shankar", title: "Pervasive Technology Institute" },
    { name: "Carolyn Sherer, Psy.D.", title: "Clinical Neuropsychologist, National Institute of Health, Washington, DC" },
    { name: "Robert M. Shweitzer, M.D.", title: "Psychiatrist, Indianapolis, IN" },
    { name: "Kanwaldeep S. Sidhu, M.D.", title: "Attending Psychiatrist, Community North Hospital" },
    { name: "Katie Soe, M.D.", title: "Pediatrics/Child & Adolescent Psychiatry Residency, IU School of Medicine" },
    { name: "Eddie Stage, Ph.D.", title: "Researcher, Department of Medical Neuroscience, IU School of Medicine" },
    { name: "Amy Steiner, Psy.D., LP", title: "Neuropsychologist, Minneapolis, MN" },
    { name: "Jiahuai Tan, M.D.", title: "Hematologist & Oncologist, North Mississippi Medical Center Cancer Care" },
    { name: "Naga Prasuna Vanipenta, M.D.", title: "Psychiatrist, Kansas City, MO" },
    { name: "Jeffery M. Vergo, Psy.D.", title: "Clinical Psychologist, Chicago, IL" },
    { name: "Evan Winiger, Ph.D.", title: "Research Fellow, Institute for Behavioral Genetics, Denver, CO" },
    { name: "Stefanie K. Wolf, M.D.", title: "Neurology, Gallipolis, OH" },
    { name: "Nabeel T. Yehyawi, Psy.D.", title: "Clinical Psychologist, Memphis, TN" }
  ];

  return (
    <Container>
      {/* Current Members Section */}
      <Section>
        <Title>People</Title>
        {currentMembers.map((member, index) => (
          <MemberCard key={index}>
            <MemberImage src={member.image} alt={member.name} />
            <MemberInfo>
              <MemberName>{member.name}</MemberName>
              <MemberTitle>{member.title}</MemberTitle>
            </MemberInfo>
          </MemberCard>
        ))}
      </Section>

      {/* Alumni Section */}
      <Section>
        <Title>Alumni</Title>
        <AlumniList>
          {alumni.map((alum, index) => (
            <AlumniItem key={index}>{alum.name},{alum.title}</AlumniItem>
          ))}
        </AlumniList>
      </Section>
    </Container>
  );
}

export default LabMembers;