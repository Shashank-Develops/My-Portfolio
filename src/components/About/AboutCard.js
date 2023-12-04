import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shashank Dhauni </span>
            from <span className="purple"> Dehradun</span> (<span className="purple"> Uttarakhand</span>),
            <br />Known as the land of God.
            <br />
            <br />
            <li>I am currently pursuing BCA at Graphic Era Hill University Dehradun.</li>
            <li>I have completed my 10th and 12th from Kids Paradise Sr Sec School (CBSE) Durgapur , U.S.Nagar.</li>
            <br />
            <br />
            Apart from coding,  I love to play sports!
          </p>
          <ul>
          <li className="about-activity">
              <ImPointRight /> Surfing Internet
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Novels
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Like to do creative stuff!"{" "}
          </p>
          <footer className="blockquote-footer">Shashank</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
