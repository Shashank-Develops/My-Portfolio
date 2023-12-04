import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import FER from "../../Assets/Projects/FER.jpg";
import CodeEditor from "../../Assets/Projects/CodeEditor.jpg";
import SeeWeather from "../../Assets/Projects/SeeWeather.jpg";
import MyQuiz from "../../Assets/Projects/MyQuiz.jpg";
import StockMarketPrediction from "../../Assets/Projects/SMP.jpg";
import ToDo_List from "../../Assets/Projects/ToDo-List.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ToDo_List}
              isBlog={false}
              title="ToDoList"
              description="This is ToDo list to remember daily things , I have used Html,Css and Javascript as Front-end
              and MERN Stack as Back-end."
/>
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FER}
              isBlog={false}
              title="FER"
              description="This project is detects your face emotion in Real-time video stream. I have used openCV and Deep Learning for the functionality.
              The language is used in project is Python."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CodeEditor}
              isBlog={false}
              title="CodeEditor"
              description="This code Editor is built by Reactjs which is used for html, Css and Javascript."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MyQuiz}
              isBlog={false}
              title="MyQuiz"
              description="This is Quiz which consist 4 questions , I have built it by basic Reactjs."             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SeeWeather}
              isBlog={false}
              title="SeeWeather"
              description="This project used to  see weather of any place. I have used Reactjs and used API of Weather forecast to built this SeeWeather "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={StockMarketPrediction}
              isBlog={false}
              title="StockMarketPrediction"
              description="I have made this project to predict the stocks according to the past 10 years , This project takes Numpy, Pandas and matplotib library of python to be built."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
