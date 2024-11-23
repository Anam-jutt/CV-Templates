import React, { useState } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable"; // Import autoTable plugin
import html2canvas from "html2canvas";
import { Row, Col } from 'react-bootstrap';

function Temp1() {
  const [name, setName] = useState("");
  const [name1, setName1] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [schoolName1, setSchoolName1] = useState("");
  const [schoolDescription1, setSchoolDescription1] = useState("");
  const [schoolName2, setSchoolName2] = useState("");
  const [schoolDescription2, setSchoolDescription2] = useState("");
  const [companyName1, setCompanyName1] = useState("");
  const [companyDescription1, setCompanyDescription1] = useState("");
  const [companyName2, setCompanyName2] = useState("");
  const [companyDescription2, setCompanyDescription2] = useState("");
  const [customLinks, setCustomLinks] = useState([]);
  const [newLinkTitle, setNewLinkTitle] = useState("");
  const [newLinkUrl, setNewLinkUrl] = useState("");
  const [newLinkValue, setNewLinkValue] = useState("");
  const [profile, setProfile] = useState("");
  const [activities, setActivities] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [cvGenerated, setCvGenerated] = useState(false); // Step 1: State for CV generation
  const [customSkill, setCustomSkill] = useState(""); // state variable for custom skill
  const [selectedSkills, setSelectedSkills] = useState([]); // state variable for selected skills
  const [educations, setEducations] = useState([]);
  const [schoolName, setSchoolName] = useState("");
  const [schoolDescription, setSchoolDescription] = useState("");
  const [customWorkExperience, setCustomWorkExperience] = useState([]);
  const [companyName, setCompanyName] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const generateCV = () => {
    setCvGenerated(true); // Step 2: Set state to true when CV is generated
  };
  const downloadCV = () => {
    const element = document.getElementById("cv-content");

    // Use html2canvas to render the content as a canvas
    html2canvas(element, {
      scale: 2, // For higher quality
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png"); // Get image data from canvas
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const imgWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("cv.pdf");
    });
  };

  const setProfileChange = (e) => {
    setProfile(e.target.value);
  };
  const setActivitiesChange = (e) => {
    setActivities(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleNameChange1 = (e) => {
    setName1(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleWebsiteChange = (e) => {
    setWebsite(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleAddCustomSkill = () => {
    // function to add custom skill
    if (customSkill.trim() !== "") {
      setSelectedSkills([...selectedSkills, customSkill]);
      setCustomSkill("");
    }
  };
  const handleRemoveSkill = (skillToRemove) => {
    // function to remove skill
    setSelectedSkills(
      selectedSkills.filter((skill) => skill !== skillToRemove)
    );
  };
  const addCustomLink = () => {
    if (newLinkTitle.trim() && newLinkUrl.trim()) {
      setCustomLinks([
        ...customLinks,
        { title: newLinkTitle, url: newLinkUrl, value: newLinkValue },
      ]);
      setNewLinkTitle("");
      setNewLinkUrl("");
      setNewLinkValue("");
    }
  };
  const handleAddEducation = () => {
    if (schoolName.trim() !== "" && schoolDescription.trim() !== "") {
      setEducations([
        ...educations,
        { name: schoolName, description: schoolDescription },
      ]);
      setSchoolName("");
      setSchoolDescription("");
    }
  };
  const handleRemoveEducation = (indexToRemove) => {
    setEducations(educations.filter((_, index) => index !== indexToRemove));
  };
  const handleAddWorkExperience = () => {
    if (companyName.trim() !== "" && companyDescription.trim() !== "") {
      setCustomWorkExperience([
        ...customWorkExperience,
        { companyName, companyDescription },
      ]);
      setCompanyName("");
      setCompanyDescription("");
    }
  };
  const handleRemoveWorkExperience = (index) => {
    const updatedWorkExperience = customWorkExperience.filter(
      (_, i) => i !== index
    );
    setCustomWorkExperience(updatedWorkExperience);
  };
  return (
    <>
      {cvGenerated ? (
        <>
          {" "}
          <div style={{borderRadius: "10px",color: "white",height: "3rem",backgroundColor: "#6E6E6E",}}>
          <Link to="/" style={{color:"lightBlue",textDecoration:"none",fontWeight:"600",fontSize:"25px",paddingLeft:"1rem",}}>Go Back To Template!</Link>
          <h3
            style={{
              textAlign: "center",
              marginTop:"-2rem"
              
            }}
          >
            Your CV Is Here
          </h3>
          </div>
          <div
            id="cv-content"
            className=" temp1-row"
            style={{
              backgroundColor: "white",
              paddingTop: "2rem",
              backgroundColor: "#EDE9EA",
              width: "50rem",
              marginLeft: "15rem",
              marginBottom: "5rem",
              marginTop: "2rem",
              borderBottomRightRadius: "4rem",
              boxShadow: "5px 10px 50px 5px",
            }}
          >
            <div style={{ padding: "30px", paddingTop: "10px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h5
                  style={{
                    color: "#538CB9",
                    color: "#6E6F70",
                    fontSize: "45px",
                    letterSpacing: "2px",
                  }}
                >
                  {name}
                </h5>
                <h5
                  style={{
                    color: "#538CB9",
                    paddingLeft: "5px",
                    color: "#252526",
                    fontSize: "45px",
                    letterSpacing: "2px",
                  }}
                >
                  {name1}
                </h5>
              </div>
              <div className="row" style={{ marginTop: "2rem" }}>
                <p className="col-sm-4">
                  <strong style={{ color: "#1A814B", fontSize: "16px" }}>
                    Phone:
                  </strong>{" "}
                  {phone}
                </p>
                <p className="col-sm-4">
                  <strong
                    style={{
                      color: "#538CB9",
                      fontSize: "16px",
                      paddingLeft: "30px",
                      color: "#1A814B",
                    }}
                  >
                    Website:
                  </strong>{" "}
                  <Link
                    to="https://parentheses.pk/"
                    style={{ textDecoration: "none", color: "#1A814B" }}
                    target="-/"
                  >
                    {website}
                  </Link>
                </p>
                <p className="col-sm-4">
                  <strong
                    style={{
                      color: "#1A814B",
                      fontSize: "16px",
                      paddingLeft: "30px",
                    }}
                  >
                    Email:
                  </strong>
                  <Link
                    to="https://parentheses.pk/"
                    style={{ textDecoration: "none", color: "#1A814B" }}
                    target="-/"
                  >
                    {" "}
                    {email}
                  </Link>
                </p>
                <div className="cv-section col-sm-4">
                  {customLinks.length > 0 ? (
                    customLinks.map((link, index) => (
                      <div
                        key={index}
                        style={{
                          display: "inline-block",
                          marginBottom: "8px",
                          color: "#1A814B",
                        }}
                      >
                        <p
                          style={{
                            display: "inline",
                            color: "#1A814B",
                            // marginRight: "8px",
                            fontWeight: "700",
                            fontSize: "16px",
                            // paddingLeft: "30px",
                          }}
                        >
                          {link.title}:
                        </p>
                        <Link
                          to={link.url}
                          target="_blank"
                          style={{ textDecoration: "none", color: "#1A814B" }}
                        >
                          {link.value || link.url}
                        </Link>
                      </div>
                    ))
                  ) : (
                    <p></p>
                  )}
                </div>
              </div>
            </div>
            <div style={{ border: "1px ridge Black" }}></div>
            <div
              className=" right-temp1"
              style={{ backgroundColor: "#FFFFFF" }}
            >
              <div
                style={{
                  margin: "20px",
                  padding: "20px",
                  border: "",
                }}
              >
                <div style={{ paddingRight: "2px" }}>
                  <p
                    style={{
                      textAlign: "left",
                      paddingTop: "0.5rem",
                      color: "black",
                    }}
                  >
                    {profile}
                  </p>
                  <h5 style={{ color: "#1A834C" }}>JOB TITLE</h5>
                  <h6 style={{}}>{jobTitle}</h6>
                  <h5
                    style={{
                      borderBottom: "2px solid black",
                      marginBottom: "0.5rem",
                      color: "#1A834C",
                    }}
                  >
                    Education
                  </h5>
                  <div>
                    <h5
                      style={{
                        fontSize: "14px",
                        fontWeight: "700",
                        color: "#1A834C",
                        marginTop:"0.6rem"
                      }}
                    >
                      {schoolName1}
                    </h5>
                    <Row>
                      <Col style={{}} xs={2}><div style={{borderLeft:"4px dotted black",height:"6rem",marginLeft:"0.3rem"}}></div></Col>
                      <Col xs={10} style={{marginLeft:"-3rem"}}>{schoolDescription1}</Col>
                    </Row>
                  </div>
                  <div>
                    <h5
                      style={{
                        fontSize: "14px",
                        fontWeight: "700",
                        color: "#1A834C",
                        marginTop:"0.6rem"
                      }}
                    >
                      {schoolName2}
                    </h5>
                    <Row>
                      <Col style={{}} xs={2}><div style={{borderLeft:"4px dotted black",height:"6rem",marginLeft:"0.3rem"}}></div></Col>
                      <Col xs={10} style={{marginLeft:"-3rem"}}>{schoolDescription1}</Col>
                    </Row>
                  </div>
                  {educations.map((education, index) => (
                    <div key={index}>
                      <h5
                        style={{
                          fontSize: "14px",
                          fontWeight: "700",
                          color: "#1A834C",
                          marginTop:"0.6rem"
                        }}
                      >
                        {education.name}
                      </h5>
                      <Row>
                      <Col style={{}} xs={2}><div style={{borderLeft:"4px dotted black",height:"6rem",marginLeft:"0.3rem"}}></div></Col>
                      <Col xs={10} style={{marginLeft:"-3rem"}}>{education.description}</Col>
                    </Row>
                    </div>
                  ))}

                  <h5
                    style={{
                      borderBottom: "2px solid black",
                      marginBottom: "0.5rem",
                      color: "#1A834C",
                      marginTop:"0.6rem"
                    }}
                  >
                    Work Experience
                  </h5>
                  <div>
                    <h5
                      style={{
                        fontSize: "14px",
                        fontWeight: "700",
                        color: "#1A834C",
                        marginTop:"0.6rem"
                      }}
                    >
                      {companyName1}
                    </h5>
                    <Row>
                      <Col style={{}} xs={2}><div style={{borderLeft:"4px dotted black",height:"6rem",marginLeft:"0.3rem"}}></div></Col>
                      <Col xs={10} style={{marginLeft:"-3rem"}}>{companyDescription1}</Col>
                    </Row>
                  </div>
                  <div>
                    <h5
                      style={{
                        fontSize: "14px",
                        fontWeight: "700",
                        color: "#1A834C",
                        marginTop:"0.6rem"
                      }}
                    >
                      {companyName2}
                    </h5>
                    <Row>
                      <Col style={{}} xs={2}><div style={{borderLeft:"4px dotted black",height:"6rem",marginLeft:"0.3rem"}}></div></Col>
                      <Col xs={10} style={{marginLeft:"-3rem"}}>{companyDescription2}</Col>
                    </Row>
                  </div>
                  {customWorkExperience.map((work, index) => (
                    <div key={index}>
                      <h5
                        style={{
                          fontSize: "14px",
                          fontWeight: "700",
                          color: "#1A834C",
                          marginTop:"0.6rem"
                        }}
                      >
                        {work.companyName}
                      </h5>
                      <Row>
                      <Col style={{}} xs={2}><div style={{borderLeft:"4px dotted black",height:"6rem",marginLeft:"0.3rem"}}></div></Col>
                      <Col xs={10} style={{marginLeft:"-3rem"}}>{work.companyDescription}</Col>
                    </Row>
                    </div>
                  ))}

                  <h5
                    style={{
                      borderBottom: "2px solid black",
                      marginBottom: "0.5rem",
                      color: "#1A834C",
                      marginTop:"0.6rem"
                    }}
                  >
                    Skills
                  </h5>
                  <ul>
                    {selectedSkills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                  <h5 style={{ color: "#1A834C",marginTop:"0.6rem" }}>Activities</h5>
                  <Row>
                      <Col style={{}} xs={2}><div style={{borderLeft:"4px dotted black",height:"6rem",marginLeft:"0.3rem"}}></div></Col>
                      <Col xs={10} style={{marginLeft:"-3rem"}}> {activities}</Col>
                    </Row>
                 
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={downloadCV}
            style={{
              border: "none",
              height: "3rem",
              marginLeft: "40.5%",
              marginBottom: "5rem",
              borderRadius: "10px",
              width: "15rem",
              backgroundColor: "#6E6E6E",
              color: "white",
              fontWeight: "700",
              fontSize: "20px",
            }}
          >
            Download CV In PDF
          </button>
        </>
      ) : (
        <div>
          {" "}
          <h3
            style={{
              textAlign: "center",
              backgroundColor: "#6E6E6E",
              borderRadius: "10px",
              color: "white",
              height: "3rem",
            }}
          >
            Plese Fill Up The Empty Boxes
          </h3>
          <div className="main-t1">
            <div>
              <div className="">
                <div className="t1-l-side" style={{ paddingBottom: "5rem" }}>
                  <div
                    style={{
                      paddingTop: "5rem",
                      color: "DarkBlue",
                      textAlignLast: "center",
                    }}
                  >
                    <p>
                      <input
                        style={{
                          padding: "10px",
                          height: "5rem",
                          padding: "10px",
                          fontWeight: "700",
                          fontSize: "30px",
                          marginRight: "10px",
                        }}
                        placeholder="FIRST NAME "
                        name="name"
                        value={name}
                        onChange={handleNameChange}
                      ></input>
                      <input
                        style={{
                          padding: "10px",
                          height: "5rem",
                          padding: "10px",
                          fontWeight: "700",
                          fontSize: "30px",
                        }}
                        placeholder="LAST NAME "
                        name="Name2"
                        value={name1}
                        onChange={handleNameChange1}
                      ></input>
                    </p>
                  </div>
                  <h3
                    style={{
                      paddingTop: "3rem",
                      color: "DarkBlue",
                      marginLeft: "50px",
                    }}
                  >
                    CONTACT
                  </h3>
                  <div className="row">
                    <div className="col-sm-4">
                      <p style={{ color: "DarkBlue", marginLeft: "50px" }}>
                        PHONE :
                      </p>
                      <input
                        placeholder="00219341134"
                        style={{ width: "80%", marginLeft: "50px" }}
                        type="number"
                        value={phone}
                        onChange={handlePhoneChange}
                      />
                    </div>
                    <div className="col-sm-4">
                      <p style={{ color: "DarkBlue", marginLeft: "30px" }}>
                        WEBSITE :
                      </p>
                      <input
                        placeholder="Reference"
                        style={{ width: "80%", marginLeft: "30px" }}
                        type="text"
                        value={website}
                        onChange={handleWebsiteChange}
                      />
                    </div>
                    <div className="col-sm-4">
                      <p style={{ color: "DarkBlue", marginLeft: "30px" }}>
                        EMAIL :
                      </p>
                      <Link href="https://www.youtube.com/">
                        <input
                          placeholder="Email Here"
                          style={{ width: "80%", marginLeft: "30px" }}
                          type="text"
                          value={email}
                          onChange={handleEmailChange}
                        />
                      </Link>
                    </div>
                    <div
                      className="col-sm-4"
                      style={{ paddingLeft: "65px", paddingTop: "20px" }}
                    >
                      <div className="main-cv">
                        <div className="cv-section">
                          {/* Custom Link Section */}
                          {customLinks.map((link, index) => (
                            <div
                              key={index}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                marginBottom: "8px",
                              }}
                            >
                              <p
                                style={{
                                  color: "DarkBlue",
                                  marginRight: "8px",
                                }}
                              >
                                {link.title}:
                              </p>
                              <Link
                                to={link.url}
                                target="_blank"
                                style={{
                                  textDecoration: "underline",
                                  color: "blue",
                                }}
                              >
                                {link.value || link.url}
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Form to Add Custom Links */}
                  <div className="custom-link-section">
                    <h4 style={{ marginLeft: "50px", marginTop: "20px" }}>
                      Add More Information (Optional)
                    </h4>
                    <input
                      type="text"
                      placeholder="Enter Title"
                      value={newLinkTitle}
                      onChange={(e) => setNewLinkTitle(e.target.value)}
                      style={{
                        marginBottom: "0.5rem",
                        width: "20%",
                        marginLeft: "50px",
                      }}
                    />
                    <input
                      type="text"
                      placeholder="Enter URL"
                      value={newLinkUrl}
                      onChange={(e) => setNewLinkUrl(e.target.value)}
                      style={{
                        marginBottom: "0.5rem",
                        width: "20%",
                        marginLeft: "20px",
                      }}
                    />
                    <input
                      type="text"
                      placeholder="Enter Value (Optional)"
                      value={newLinkValue}
                      onChange={(e) => setNewLinkValue(e.target.value)}
                      style={{
                        marginBottom: "0.5rem",
                        width: "20%",
                        marginLeft: "20px",
                      }}
                    />
                    <button
                      onClick={addCustomLink}
                      style={{
                        width: "20%",
                        marginTop: "10px",
                        border: "none",
                        height: "2rem",
                        color: "white",
                        backgroundColor: "#8F8F8F",
                        marginLeft: "20px",
                      }}
                    >
                      Add Now
                    </button>
                  </div>
                </div>
                <div className=" right-temp1">
                  <div className="row" style={{ marginLeft: "3rem", marginRight: "3rem" }}>
                    <div className="col-sm-6" style={{ paddingTop: "4rem", width: "" }}>
                      <h3 style={{ color: "" }}>Why You Should Choose Me...</h3>

                      <textarea
                        type="name"
                        style={{
                          width: "100%",
                          //   fontSize: "50px",
                          padding: "0.3rem",
                        }}
                        value={profile}
                        onChange={setProfileChange}
                        placeholder="Write SomeThing About You Here..."
                      />
                    </div>
                    <div className="col-sm-6" style={{ paddingTop: "2rem",marginTop:"2rem" }}>
                      <h3>JOB TITLE HERE</h3>
                      <input
                        type="text"
                        placeholder="What Type Of Job You Can Do"
                        style={{ padding: "0.5rem", width: "100%",height:"3.6rem" }}
                        name=""
                        id=""
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                      />
                    </div>
                    <div >
                      <div style={{ paddingTop: "1.5rem" }}>
                        <h3
                          style={{
                            borderBottom: "2px solid black",
                            marginBottom: "0.5rem",
                          }}
                        >
                          EDUCATION
                        </h3>
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="[Institute Name 1][Date from-to]"
                          style={{
                            padding: "0.3rem",
                            fontSize: "20px",
                            fontWeight: "700",
                            width: "100%",
                          }}
                          value={schoolName1}
                          onChange={(e) => setSchoolName1(e.target.value)}
                        />
                        <textarea
                          name=""
                          id=""
                          style={{
                            padding: "0.8rem",
                            fontSize: "16px",
                            fontWeight: "500",
                            width: "100%",
                            marginTop: "1rem",
                          }}
                          placeholder="Some Details About Your Degree [Date from-to]"
                          value={schoolDescription1}
                          onChange={(e) =>
                            setSchoolDescription1(e.target.value)
                          }
                        ></textarea>
                      </div>
                      <div style={{ marginTop: "1.5rem" }}>
                        <input
                          type="text"
                          placeholder="[Institute Name 2][Date from-to]"
                          style={{
                            padding: "0.3rem",
                            fontSize: "20px",
                            fontWeight: "700",
                            width: "100%",
                          }}
                          value={schoolName2}
                          onChange={(e) => setSchoolName2(e.target.value)}
                        />
                        <textarea
                          name=""
                          id=""
                          style={{
                            padding: "0.8rem",
                            fontSize: "16px",
                            fontWeight: "500",
                            width: "100%",
                            marginTop: "1rem",
                          }}
                          placeholder=" Some Details About Your Degree [Date from-to]"
                          value={schoolDescription2}
                          onChange={(e) =>
                            setSchoolDescription2(e.target.value)
                          }
                        ></textarea>
                      </div>
                      <div>
                        <div>
                          <h3>Add More Information (Optional)</h3>
                          <div>
                            <input
                              type="text"
                              placeholder="Institute Name [Date from-to]"
                              value={schoolName}
                              onChange={(e) => setSchoolName(e.target.value)}
                              style={{
                                marginRight: "10px",
                                width: "100%",
                                padding: "10px",
                                fontWeight: "600",
                              }}
                            />
                            <input
                              style={{
                                width: "100%",
                                marginTop: "0.5rem",
                                padding: "10px",
                              }}
                              type="text"
                              placeholder="Institute & Degree Description [Date from-to]"
                              value={schoolDescription}
                              onChange={(e) =>
                                setSchoolDescription(e.target.value)
                              }
                            />
                            <button
                              onClick={handleAddEducation}
                              style={{
                                width: "100%",
                                marginTop: "0.5rem",
                                border: "none",
                                height: "2rem",
                                backgroundColor: "#8F8F8F",
                                color: "white",
                              }}
                            >
                              Add Education
                            </button>
                          </div>

                          <div>
                            {educations.map((education, index) => (
                              <div key={index} style={{ marginTop: "10px" }}>
                                <p>
                                  <strong>School Name:</strong> {education.name}
                                </p>
                                <p>
                                  <strong>Description:</strong>{" "}
                                  {education.description}
                                </p>
                                <button
                                  onClick={() => handleRemoveEducation(index)}
                                  style={{ marginTop: "5px" }}
                                >
                                  Remove
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div style={{ paddingTop: "1.5rem" }}>
                        <h1
                          style={{
                            borderBottom: "2px solid black",
                            marginBottom: "2rem",
                          }}
                        >
                          WORK EXPERIANCE
                        </h1>
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="[Company Name] [Job Title][Date from-to]"
                          style={{
                            padding: "0.3rem",
                            fontSize: "20px",
                            fontWeight: "700",
                            width: "100%",
                          }}
                          value={companyName1}
                          onChange={(e) => setCompanyName1(e.target.value)}
                        />
                        <textarea
                          name=""
                          id=""
                          style={{
                            padding: "0.8rem",
                            fontSize: "16px",
                            fontWeight: "500",
                            width: "100%",
                            marginTop: "1rem",
                          }}
                          placeholder="About Your Company & your Role [Date from-to]"
                          value={companyDescription1}
                          onChange={(e) =>
                            setCompanyDescription1(e.target.value)
                          }
                        ></textarea>
                      </div>
                      <div style={{ marginTop: "1.5rem" }}>
                        <input
                          type="text"
                          placeholder="[Company Name] [Job Title][Date from-to]"
                          style={{
                            padding: "0.3rem",
                            fontSize: "20px",
                            fontWeight: "700",
                            width: "100%",
                          }}
                          value={companyName2}
                          onChange={(e) => setCompanyName2(e.target.value)}
                        />
                        <textarea
                          name=""
                          id=""
                          style={{
                            padding: "0.8rem",
                            fontSize: "16px",
                            fontWeight: "500",
                            width: "100%",
                            marginTop: "1rem",
                          }}
                          placeholder="About Your Company & your Role [Date from-to]"
                          value={companyDescription2}
                          onChange={(e) =>
                            setCompanyDescription2(e.target.value)
                          }
                        ></textarea>
                      </div>
                    </div>
                    <div>
                      <h3 style={{}}>Work Experience</h3>
                      {customWorkExperience.map((work, index) => (
                        <div key={index}>
                          <p>
                            <strong>{work.companyName}:</strong>{" "}
                            {work.companyDescription}
                            <button
                              onClick={() => handleRemoveWorkExperience(index)}
                            >
                              Remove
                            </button>
                          </p>
                        </div>
                      ))}

                      <div>
                        <input
                          style={{ width: "100%", padding: "10px" }}
                          type="text"
                          placeholder="Company Name [Date from-to]"
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                        />
                        <input
                          type="text"
                          style={{
                            width: "100%",
                            padding: "10px",
                            marginTop: "0.5rem",
                          }}
                          placeholder="Company Description [Date from-to]"
                          value={companyDescription}
                          onChange={(e) =>
                            setCompanyDescription(e.target.value)
                          }
                        />
                        <button
                          onClick={handleAddWorkExperience}
                          style={{
                            width: "100%",
                            marginTop: "0.5rem",
                            border: "none",
                            height: "2rem",
                            backgroundColor: "#8F8F8F",
                            color: "white",
                          }}
                        >
                          Add Work Experience
                        </button>
                      </div>
                    </div>

                    <div style={{ paddingTop: "1.5rem" }}>
                      <h3>Write Your Skills Here and Add Them</h3>
                      <input
                        type="text"
                        placeholder="Add custom skill"
                        value={customSkill}
                        onChange={(e) => setCustomSkill(e.target.value)}
                        style={{
                          width: "90%",
                          padding: "1rem",
                          height: "90%",
                          padding: "0.5rem",
                          marginBottom: "1rem",
                        }}
                      />
                      <button
                        onClick={handleAddCustomSkill}
                        style={{
                          border: "none",
                          backgroundColor: "#8F8F8F",
                          marginLeft: "1rem",
                          margin: "0.5rem",
                          borderRadius: "5px",
                        }}
                      >
                        Add
                      </button>
                    </div>

                    <ul>
                      {selectedSkills.map((skill) => (
                        <li key={skill}>
                          {skill}
                          <button
                            onClick={() => handleRemoveSkill(skill)}
                            style={{
                              border: "none",
                              backgroundColor: "#8F8F8F",
                              marginLeft: "1rem",
                              margin: "0.5rem",
                              borderRadius: "5px",
                            }}
                          >
                            Remove
                          </button>
                        </li>
                      ))}
                    </ul>
                    <div>
                      <h3 style={{marginTop:"3rem"}}>Activities</h3>

                      <textarea
                        type="name"
                        style={{
                          width: "100%",
                          //   fontSize: "50px",
                          padding: "0.3rem",
                          marginBottom: "5rem",
                        }}
                        value={activities}
                        onChange={setActivitiesChange}
                        placeholder="Write Activities Here..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ justifyItems: "" }}>
            <button
              onClick={generateCV}
              style={{
                marginLeft: "40%",
                border: "none",
                height: "3rem",
                width: "15rem",
                backgroundColor: "lightgreen",
                borderRadius: "50px",
                fontSize: "30px",
                fontWeight: "600",
                marginBottom: "5rem",
              }}
            >
              Genrate CV
            </button>
          </div>
        </div>
      )}
    </>
  );
}
export default Temp1;
