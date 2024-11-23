import React, { useState } from "react";
import "../App.css";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable"; // Import autoTable plugin
import html2canvas from "html2canvas";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
function Temp1() {
  const [name, setName] = useState("");
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
  const [designation, setDesignation] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [year1, setYear1] = useState("");
  const [year2, setYear2] = useState("");
  const [year3, setYear3] = useState("");
  const [year4, setYear4] = useState("");
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [cvGenerated, setCvGenerated] = useState(false); // Step 1: State for CV generation
  const [customHobby, setCustomHobby] = useState(""); // state variable for custom hobby
  const [selectedHobbies, setSelectedHobbies] = useState([]); // state variable for selected hobbies
  const [customSkill, setCustomSkill] = useState(""); // state variable for custom skill
  const [selectedSkills, setSelectedSkills] = useState([]); // state variable for selected skills
  const [hobbies, setHobbies] = useState(["Reading","Traveling","Photography","Playing Music","Hiking","Cooking","Painting","Gardening","Writing","Yoga","Dancing","Playing Sports","Woodworking","Knitting","Playing Video Games",
  ]);
  const generateCV = () => {
    setCvGenerated(true); // Step 2: Set state to true when CV is generated
  };
  const downloadCV = () => {
    const element = document.getElementById("cv-content");
    // Use html2canvas to render the content as a canvas
    html2canvas(element, {
      scale: 2, // For higher quality
      useCORS: true, // If you have images from external sources
      allowTaint: true, // To allow cross-origin image rendering
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });
      // Calculate width and height of image for A4 size (210mm width)
      const imgWidth = 220;
      const imgHeight = (canvas.height * (imgWidth + 50)) / canvas.width;
      // Set margins based on your custom layout (15rem margin equivalent)
      const marginLeft = 0; // Set left margin
      const marginTop = 10; // Set top margin
      // Add the image to the PDF, adjusting for the margins
      pdf.addImage(imgData, "PNG", marginLeft, marginTop, imgWidth, imgHeight);
      // Save the PDF with the name "cv.pdf"
      pdf.save("cv.pdf");
    });
  };
  const handleSelect = (hobby) => {
    if (!selectedHobbies.includes(hobby)) {
      setSelectedHobbies([...selectedHobbies, hobby]);
    }
  };
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    setImageUrl(URL.createObjectURL(e.target.files[0]));
  };
  const handleProfileChange = (e) => {
    setProfile(e.target.value);
  };
  const handleDesignationChange = (e) => {
    setDesignation(e.target.value);
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
  const handleYear1Change = (e) => {
    setYear1(e.target.value);
  };
  const handleYear2Change = (e) => {
    setYear2(e.target.value);
  };
  const handleYear3Change = (e) => {
    setYear3(e.target.value);
  };
  const handleYear4Change = (e) => {
    setYear4(e.target.value);
  };
  const handleAddCustomHobby = () => {
    // function to add custom hobby
    if (customHobby.trim() !== "") {
      setSelectedHobbies([...selectedHobbies, customHobby]);
      setCustomHobby("");
    }
  };
  const handleRemoveHobby = (hobbyToRemove) => {
    // function to remove hobby
    setSelectedHobbies(
      selectedHobbies.filter((hobby) => hobby !== hobbyToRemove)
    );
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
              backgroundColor: "",
              width: "50rem",
              marginLeft: "15rem",
              marginBottom: "5rem",
              marginTop: "2rem",
              borderBottomRightRadius: "4rem",
              boxShadow: "5px 10px 50px 5px",
            }}
          >
            <div
              className=" t1-1-side temp1-p"
              style={{
                backgroundColor: "",
                borderBottomRightRadius: "4rem",
              }}
            >
              

                <Row>
                  <Col style={{}} xs={4}>
                  <div
                style={{
                  backgroundColor: "rgba(0,0,0,0.400)",
                  height: "16rem",
                  width: "12rem",
                  marginTop: "-3rem",
                  paddingTop: "5.8rem",
                }}
              > 
                  {imageUrl && (
                  <div className="t1-img-2">
                    <div className="circular-image">
                      <img
                        src={imageUrl}
                        style={{ outline: "3px solid #538CB9" }}
                        alt="Profile Picture"
                      />
                    </div>
                  </div>
                )}</div>
                  </Col>
                  <Col xs={8} style={{ marginLeft: "" }}>
                  <h2
                    style={{
                      textAlign: "center",
                      marginTop: "-1rem",
                      color: "#538CB9",
                    }}
                  >
                    {name}
                  </h2>
                  <Row style={{paddingTop:"2rem"}}>
                 <Col xs={12}>
                 <strong style={{ color: "#538CB9", fontSize: "14px"}}>
                    DESIGNATION:
                  </strong>
                  <h6 style={{paddingLeft:"6.5rem"}}>{designation} </h6>
                  </Col>
                 <Col xs={12}>
                  <Row>
                    <Col xs={6} >
                    <p>
                  <strong style={{ color: "#538CB9", fontSize: "14px" }}>
                    Phone:
                  </strong>{" "}
                  {phone}
                </p>
                    </Col>
                    <Col xs={6} >
                    <p>
                  <strong style={{ color: "#538CB9", fontSize: "14px" }}>
                    Website:
                  </strong>{" "}
                  <Link
                    to="https://parentheses.pk/"
                    style={{ textDecoration: "none" }}
                    target="-/"
                  >
                    {website}
                  </Link>
                </p>
                    </Col>
                    <Col xs={6} >
                    <p>
                  <strong style={{ color: "#538CB9", fontSize: "14px" }}>
                    Email:
                  </strong>
                  <Link
                    to="https://parentheses.pk/"
                    style={{ textDecoration: "none" }}
                    target="-/"
                  >
                    {" "}
                    {email}
                  </Link>
                </p>
                    </Col>
                    <Col sx={6}>
                    <div className="cv-section">
                  {customLinks.length > 0 ? (
                    customLinks.map((link, index) => (
                      <div
                        key={index}
                        style={{ display: "inline-block", marginBottom: "8px" }}
                      >
                        <p
                          style={{
                            display: "inline",
                            color: "#538CB9",
                            marginRight: "8px",
                            fontWeight: "700",
                            fontSize: "14px",
                          }}
                        >
                          {link.title}:
                        </p>
                        <Link
                          to={link.url}
                          target="_blank"
                          style={{ textDecoration: "none" }}
                        >
                          {link.value || link.url}
                        </Link>
                      </div>
                    ))
                  ) : (
                    <p></p>
                  )}
                </div>
                    </Col>
                  </Row>
                  </Col>
                 </Row>
                  </Col>
                </Row>
              <div style={{ padding: "30px", marginLeft: " px" }}>
                <Row>
                  <Col style={{}} xs={3}>
                  <h5 style={{ color: "#538CB9",fontWeight:"700",fontSize:"30px",paddingBottom:"2rem",marginLeft:"-1.5rem" }}>OBJECTIVE</h5>
                  </Col>
                  <Col xs={9} style={{ marginLeft: "" }}>
                  <h5 style={{paddingTop:"1rem"}}>{profile}</h5>
                  </Col>
                </Row>                
                <h6
                  style={{ color: "#538CB9",fontWeight:"700",fontSize:"25px"}}
                >
                  EXPERIANCE
                </h6>
                <div style={{borderLeft:"2px solid black",height:"12rem",marginLeft:"10px",marginTop:"2rem"}}></div><div style={{position:"absolute",borderRadius:"50%",height:"8px",width:"8px",backgroundColor:"black",marginTop:"-12.3rem",marginLeft:"7px"}}></div><div style={{position:"absolute",borderRadius:"50%",height:"8px",width:"8px",backgroundColor:"black",marginTop:"-6rem",marginLeft:"7px"}}></div>
                
              <Row style={{paddingLeft:"1.5rem",marginTop:"-12.8rem"}}>
                <Col xs={4}>{year1}</Col>
                <Col xs={8}>
                <div>
                    <h5
                     style={{ fontSize: "24px", fontWeight: "700" }}>
                      {companyName1}
                    </h5>
                    <p>{companyDescription1}</p>
                  </div>
                </Col>
                <Col xs={4}>{year2}</Col>
                <Col xs={8}>
                <div>
                    <h5 style={{ fontSize: "24px", fontWeight: "700" }}>
                      {companyName2}
                    </h5>
                    <p>{schoolDescription1}</p>
                  </div>
                </Col>
              </Row>
                <h6
                  style={{ color: "#538CB9",fontWeight:"700",fontSize:"25px",paddingBottom:"0rem",paddingTop:"1rem"}}
                >
                  EDUCATION
                </h6>
                <div style={{borderLeft:"2px solid black",height:"12rem",marginLeft:"10px",marginTop:"2rem"}}></div><div style={{position:"absolute",borderRadius:"50%",height:"8px",width:"8px",backgroundColor:"black",marginTop:"-12.3rem",marginLeft:"7px"}}></div><div style={{position:"absolute",borderRadius:"50%",height:"8px",width:"8px",backgroundColor:"black",marginTop:"-6rem",marginLeft:"7px"}}></div>
                
              <Row style={{paddingLeft:"1.5rem",marginTop:"-12.6rem"}}>
                <Col xs={4}>{year3}</Col>
                <Col xs={8}>
                <div>
                    <h5 style={{ fontSize: "24px", fontWeight: "700" }}>
                      {schoolName1}
                    </h5>
                    <p>{schoolDescription1}</p>
                  </div>
                </Col>
                <Col xs={4}>{year4}</Col>
                <Col xs={8}>
                <div>
                    <h5 style={{ fontSize: "24px", fontWeight: "700" }}>
                      {schoolName2}
                    </h5>
                    <p>{schoolDescription2}</p>
                  </div>
                </Col>
              </Row>
                <h5 style={{ color: "#538CB9",borderBottom:"2px solid black",fontWeight:"700",
                      fontSize:"25px",marginTop:"1rem"}}>Hobbies</h5>
                <Row>
                  {selectedHobbies.map((hobby) => (
                    <Col xs={4}>
                    <li key={hobby}>{hobby}</li> </Col>
                  ))}
                   
                </Row>
              </div>
            </div>
            <div
              className="right-temp1"
              style={{ backgroundColor: "#FFFFFF" }}
            >
              <div
                style={{
                  margin: "20px",
                  padding: "10px",
                  marginTop:"-6rem"
                }}
              >
                <div style={{ paddingRight: "2px" }}>

                  <h5
                    style={{
                      borderBottom: "2px solid black",
                      marginBottom: "0.5rem",
                      color: "#538CB9",
                      fontWeight:"700",
                      fontSize:"25px"
                    }}
                  >
                    Skills
                  </h5>
                  <Row>
                    {selectedSkills.map((skill) => (
                      <Col xs={4}  key={skill}> <li>{skill}</li></Col>
                    ))}
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
              <div className="row">
                <div className="col-sm-4 t1-l-side">
                  <div className="t1-img">
                    {imageUrl ? (
                      <div className="circular-image">
                        <img src={imageUrl} alt="Profile Picture" />
                      </div>
                    ) : (
                      <img src="" alt="" />
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      style={{ display: "none" }}
                    />
                    <button
                      style={{
                        border: "none",
                        marginLeft: "1.2rem",
                        marginTop: "10.5rem",
                        borderRadius: "10px",
                        color: "DarkBlue",
                      }}
                      onClick={() =>
                        document.querySelector("input[type='file']").click()
                      }
                    >
                      Upload Picture
                    </button>
                  </div>
                  <div style={{ paddingTop: "5rem", color: "DarkBlue" }}>
                    <h3>OBJECTIVE</h3>
                    <p>
                      <textarea
                        style={{ padding: "10px" }}
                        placeholder="Write Your Profile Here..."
                        cols={50}
                        name="Profile"
                        rows={5}
                        id=""
                        value={profile}
                        onChange={handleProfileChange}
                      ></textarea>
                    </p>
                  </div>
                  <div style={{ paddingTop: "5rem", color: "DarkBlue" }}>
                    <h3>DESIGNATION</h3>
                    <p>
                      <textarea
                        style={{ padding: "10px" }}
                        placeholder="About Designation "
                        cols={50}
                        name="Profile"
                        rows={5}
                        id=""
                        value={designation}
                        onChange={handleDesignationChange}
                      ></textarea>
                    </p>
                  </div>
                  <div>
                    <h3 style={{ paddingTop: "3rem", color: "DarkBlue" }}>
                      CONTACT
                    </h3>
                    <p style={{ color: "DarkBlue" }}>PHONE:</p>
                    <input
                      placeholder="00219341134"
                      style={{ width: "100%" }}
                      type="number"
                      value={phone}
                      onChange={handlePhoneChange}
                    />
                  </div>
                  <div>
                    <p style={{ color: "DarkBlue" }}>WEBSITE:</p>
                    <input
                      placeholder="Reference"
                      style={{ width: "100%" }}
                      type="text"
                      value={website}
                      onChange={handleWebsiteChange}
                    />
                  </div>
                  <div>
                    <p style={{ color: "DarkBlue" }}>EMAIL:</p>
                    <Link href="https://www.youtube.com/">
                      <input
                        placeholder="Email Here"
                        style={{ width: "100%" }}
                        type="text"
                        value={email}
                        onChange={handleEmailChange}
                      />
                    </Link>
                  </div>
                  <div>
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
                              style={{ color: "DarkBlue", marginRight: "8px" }}
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

                      {/* Form to Add Custom Links */}
                      <div className="custom-link-section">
                        <h4>Add More Information (Optional)</h4>
                        <input
                          type="text"
                          placeholder="Enter Title"
                          value={newLinkTitle}
                          onChange={(e) => setNewLinkTitle(e.target.value)}
                          style={{ marginBottom: "0.5rem", width: "100%" }}
                        />
                        <input
                          type="text"
                          placeholder="Enter URL"
                          value={newLinkUrl}
                          onChange={(e) => setNewLinkUrl(e.target.value)}
                          style={{ marginBottom: "0.5rem", width: "100%" }}
                        />
                        <input
                          type="text"
                          placeholder="Enter Value (Optional)"
                          value={newLinkValue}
                          onChange={(e) => setNewLinkValue(e.target.value)}
                          style={{ marginBottom: "0.5rem", width: "100%" }}
                        />
                        <button
                          onClick={addCustomLink}
                          style={{
                            width: "100%",
                            marginTop: "10px",
                            border: "none",
                            height: "2rem",
                            color: "white",
                            backgroundColor: "#8F8F8F",
                          }}
                        >
                          Add Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div style={{ marginBottom: "4rem" }}>
                    <Dropdown>
                      <Dropdown.Toggle
                        id="dropdown-basic"
                        style={{
                          borderColor: "black",
                          width: "100%",
                          height: "3rem",
                          backgroundColor: "#8F8F8F",
                          marginTop: "3rem",
                          marginBottom: "2rem",
                        }}
                      >
                        <h3>HOBIES</h3>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        {hobbies.map((hobby) => (
                          <Dropdown.Item
                            key={hobby}
                            onClick={() => handleSelect(hobby)}
                          >
                            {hobby}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>

                    <div>
                      <h5>Add Hobby If Not Exist There</h5>
                      <input
                        type="text"
                        placeholder="Add custom hobby"
                        value={customHobby}
                        onChange={(e) => setCustomHobby(e.target.value)}
                        style={{
                          width: "100%",
                          height: "2rem",
                          padding: "0.5rem",
                          marginBottom: "1rem",
                        }}
                      />
                      <button
                        onClick={handleAddCustomHobby}
                        style={{
                          width: "100%",
                          border: "none",
                          backgroundColor: "#8F8F8F",
                          borderRadius: "5px",
                          color: "white",
                          height: "2rem",
                        }}
                      >
                        Add
                      </button>
                    </div>

                    <ul>
                      {selectedHobbies.map((hobby) => (
                        <li key={hobby}>
                          {hobby}
                          <button
                            onClick={() => handleRemoveHobby(hobby)}
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
                  </div>
                </div>
                <div className="col-sm-7 right-temp1">
                  <div style={{ marginLeft: "3rem", marginRight: "3rem" }}>
                    <div style={{ paddingTop: "4rem", width: "" }}>
                      <input
                        type="name"
                        style={{
                          width: "100%",
                          fontSize: "50px",
                          fontWeight: "500",
                          padding: "1rem",
                        }}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name Here"
                      />
                    </div>
                    <div style={{ paddingTop: "2rem" }}>
                      <h3>JOB TITLE HERE</h3>
                      <input
                        type="text"
                        placeholder="Job Title Here"
                        style={{ padding: "0.5rem", width: "100%" }}
                        name=""
                        id=""
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                      />
                    </div>
                    <div>
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
                      <div><input onChange={handleYear1Change} type="text" value={year1} placeholder="Year-Year"/></div>
                      <div>
                        <input
                          type="text"
                          placeholder="[Institute Name 1]"
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
                          placeholder="Some Details About Your Degree"
                          value={schoolDescription1}
                          onChange={(e) =>
                            setSchoolDescription1(e.target.value)
                          }
                        ></textarea>
                      </div>
                      <div><input onChange={handleYear2Change} value={year2} type="text" placeholder="Year-Year"/></div>
                      <div style={{ marginTop: "1.5rem" }}>
                        <input
                          type="text"
                          placeholder="[Institute Name 2]"
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
                          placeholder=" Some Details About Your Degree "
                          value={schoolDescription2}
                          onChange={(e) =>
                            setSchoolDescription2(e.target.value)
                          }
                        ></textarea>
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
                      <div><input onChange={handleYear3Change} value={year3} type="text" placeholder="Year-Year"/></div>
                      <div>
                        <input
                          type="text"
                          placeholder="[Company Name] [Job Title]"
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
                          placeholder="About Your Company & your Role"
                          value={companyDescription1}
                          onChange={(e) =>
                            setCompanyDescription1(e.target.value)
                          }
                        ></textarea>
                      </div>
                      <div><input onChange={handleYear4Change} value={year4} type="text" placeholder="Year-Year"/></div>
                      <div style={{ marginTop: "1.5rem" }}>
                        <input
                          type="text"
                          placeholder="[Company Name] [Job Title]"
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
                          placeholder="About Your Company & your Role"
                          value={companyDescription2}
                          onChange={(e) =>
                            setCompanyDescription2(e.target.value)
                          }
                        ></textarea>
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
