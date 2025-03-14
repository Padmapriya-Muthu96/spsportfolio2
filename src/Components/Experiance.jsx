import React from "react";


function Experience() {
  return (
    <div className="experience-container">
      <h3 className="experience-title">Professional Experience</h3>
      <p className="experience-summary">
        <b>4+ years of experience in EMS (Electronics Manufacturing Field)</b>
      </p>
      <p className="experience-note">
        <mark style={{backgroundColor:'yellow'}}><b>Note:</b> No experience in IT field, but possess relevant technical skills.</mark>
      </p>

      <h4 className="technical-skills-title">Technical Skills Used in EMS</h4>
      <p className="technical-skills">
        <b>SFC, MES, SAP, ESD, 5S, MS OFFICE, ISO, IPCA, SOLDERING</b>
      </p>

      <h3 className="experience-section-title">Work Experience</h3>

     
      <div className="job-card">
        <h4 className="job-title">Production Engineer</h4>
        <h5 className="company-name">Ravel Electronics Pvt Ltd - Chengalpattu</h5>
        <h6 className="job-duration">Jan 2022 – Nov 2022</h6>
        <h5 className="project-name"><b>Project:</b> Fire Alarm</h5>
        <h6 className="job-section">Section: Material Control, THT, SMT, Assembly, Packing</h6>
        <h5 className="role-title">Roles and Responsibilities:</h5>
        <ul className="responsibilities">
          <li>Preparing Monthly and Weekly production plans.</li>
          <li>Monitoring the full production line.</li>
          <li>Preparing Monthly and Weekly Scrap Reports.</li>
          <li>Maintaining documentation for incoming, usage, and scrap data.</li>
          <li>Reducing material wastage in the production line.</li>
        </ul>
      </div>

     
      <div className="job-card">
        <h4 className="job-title">Production Line Leader</h4>
        <h5 className="company-name">SALCOMP MANUFACTURING INDIA PVT LTD - Sriperumbathur</h5>
        <h6 className="job-duration">Jan 2021 – Jul 2021</h6>
        <h5 className="project-name"><b>Project:</b> Micro Inventor</h5>
        <h6 className="job-section">Section: Material Control, THT</h6>
        <h5 className="role-title">Roles and Responsibilities:</h5>
        <ul className="responsibilities">
          <li>Preparing daily material needed request sheets for production.</li>
          <li>Receiving materials from the warehouse and arranging them stage-wise.</li>
          <li>Hourly material filling in the production line.</li>
          <li>Monitoring and tracking incoming and scrap materials.</li>
          <li>Maintaining documentation for incoming, usage, and scrap data.</li>
          <li>Reducing material wastage in the production line.</li>
        </ul>
      </div>

      
      <div className="job-card">
        <h4 className="job-title">Production Line Leader</h4>
        <h5 className="company-name">TSMT TECHNOLOGY INDIA PVT LTD - Chengalpattu</h5>
        <h6 className="job-duration">Feb 2019 – Oct 2020</h6>
        <h5 className="project-name"><b>Projects:</b> MI TV, Nokia, Samsung, Jio mobile phones, Airtel setup box</h5>
        <h6 className="job-section">Section: THT, PCBA Testing, Assembly, Packing, Soldering</h6>
        <h5 className="role-title">Roles and Responsibilities:</h5>
        <ul className="responsibilities">
          <li>Coordinating daily workloads for staff & managing team allocation.</li>
          <li>Motivating the team to achieve high standards and KPI targets.</li>
          <li>Resolving issues and mentoring new staff.</li>
          <li>Monitoring and reporting on standards & performance targets.</li>
          <li>Implementing new initiatives to improve efficiency.</li>
        </ul>
      </div>

    
      <div className="job-card">
        <h4 className="job-title">FQC & Testing Operator</h4>
        <h5 className="company-name">TSMT TECHNOLOGY INDIA PVT LTD - Chengalpattu</h5>
        <h6 className="job-duration">Oct 2017 – Jan 2019</h6>
        <h5 className="project-name"><b>Projects:</b> MI TV, Nokia, Samsung, Jio mobile phones, Airtel setup box</h5>
        <h6 className="job-section">Section: PCBA FQC & PCBA Testing, Soldering</h6>
        <h5 className="role-title">Roles and Responsibilities:</h5>
        <ul className="responsibilities">
          <li>Checking SMD components, soldering levels, and specifications.</li>
          <li>Function testing of PCBA.</li>
          <li>Soldering THT components and touch-up soldering on defective units.</li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
