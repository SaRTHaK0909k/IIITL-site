import Link from "next/link";
import { useRouter } from "next/router"; 
import { useState, useEffect } from "react"; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from "next/image";
import Heading from "./Heading";  
import styles from "./Navbarr.module.css"; 
import React from "react";


const Navbarr = () => {
  const router = useRouter(); 

  const [activeTab, setActiveTab] = useState("Home"); 

  const handleTabHover = (tabName) => {
    setActiveTab(tabName);
  };

  const handleTabLeave = () => {
    if (router.pathname === "/") {
      setActiveTab("Home");
    } else if (router.pathname === "/admissions") {
      setActiveTab("Admissions");
    } else if (router.pathname === "/people") {
      setActiveTab("People");
    } else if (router.pathname === "/news") {
      setActiveTab("News");
    } else if (router.pathname.startsWith("/course")) {
      setActiveTab("Courses");
    } else if (router.pathname.startsWith("/studentLife")) {
      setActiveTab("studentLife");
    }
    
  };

  useEffect(() => {
    // Update the active tab based on the current route
    if (router.pathname === "/") {
      setActiveTab("Home");
    } else if (router.pathname === "/admissions") {
      setActiveTab("Admissions");
    } else if (router.pathname === "/people") {
      setActiveTab("People");
    } else if (router.pathname === "/news") {
      setActiveTab("News");
    } else if (router.pathname.startsWith("/course")) {
      setActiveTab("Courses");
    } else if (router.pathname.startsWith("/studentLife")) {
      setActiveTab("studentLife");
    }
    
    // Add similar conditions for other pages
  }, [router.pathname]);

  return (
    <div className="sticky top-0 z-10">
      <Navbar expand="lg" className="px-2 py-4 bg-[#e6e6e6] text-bluel text-xl font-semibold  text-center">
        <Container >
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse >
            <Nav
              className="me-auto my-2  my-lg-0 gap-3"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link
                href="/"
                onMouseEnter={() => handleTabHover("Home")}
                onMouseLeave={handleTabLeave}
                
                className={activeTab === "Home" ? styles.active : ""}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="/admissions"
                onMouseEnter={() => handleTabHover("Admissions")}
                onMouseLeave={handleTabLeave}
                className={activeTab === "Admissions" ? styles.active : ""}
              > 
                Admissions
              </Nav.Link>
              <Nav.Link
                href="/people"
                onMouseEnter={() => handleTabHover("People")}
                onMouseLeave={handleTabLeave}
                className={activeTab === "People" ? styles.active : ""}
              >
                People
              </Nav.Link>
              <NavDropdown title="Student Life" id="navbarScrollingDropdown"  onMouseEnter={() => handleTabHover("studentLife")}
                onMouseLeave={handleTabLeave}
                className={activeTab === "studentLife" ? styles.active : ""}>
                <NavDropdown.Item href="/studentLife/events">Events</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Courses" id="navbarScrollingDropdown" onMouseEnter={() => handleTabHover("Courses")}
                onMouseLeave={handleTabLeave}
                className={activeTab === "Courses" ? styles.active : ""}>
                <NavDropdown.Item href="/course/UGCourses">UG Courses</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  PG Courses
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                href="/news"
                onMouseEnter={() => handleTabHover("News")}
                onMouseLeave={handleTabLeave}
                className={activeTab === "News" ? styles.active : ""}
              >
                News
              </Nav.Link>
              <Nav.Link
                href="/clubs"
                onMouseEnter={() => handleTabHover("Clubs")}
                onMouseLeave={handleTabLeave}
                className={activeTab === "Clubs" ? styles.active : ""}
              >
                Clubs
              </Nav.Link>
              <Nav.Link
                href="/contact"
                onMouseEnter={() => handleTabHover("Contact Us")}
                onMouseLeave={handleTabLeave}
                className={activeTab === "Contact Us" ? styles.active : ""}
              >
                Contact Us
              </Nav.Link>
              <Nav.Link
                href="https://placements.iiitl.ac.in/"
                onMouseEnter={() => handleTabHover("Placements")}
                onMouseLeave={handleTabLeave}
                className={activeTab === "Placements" ? styles.active : ""}
              >
                Placements
              </Nav.Link>
              <NavDropdown title="Careers@IIITL" id="navbarScrollingDropdown"  onMouseEnter={() => handleTabHover("careers@iiitl")}
                onMouseLeave={handleTabLeave}
                className={activeTab === "careers@iiitl" ? styles.active : ""}>
                <NavDropdown.Item href="/careers/Nonteachingpos">Non Teaching Positions</NavDropdown.Item>
                <NavDropdown.Item href="/careers/Faculty_pos">
                  Faculty Positions
                </NavDropdown.Item>
                <NavDropdown.Item href="https://iiitl.ac.in/wp-content/uploads/2023/05/Ramp-project2.pdf">
                  Project Vacancy
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
           
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbarr;
