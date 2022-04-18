import React from "react";
import { Button, Card } from "react-bootstrap";
import hamid from "../../images/hamid.jpg";

const About = () => {
  return (
    <div className="text-center container mt-5">
      <Card>
        <Card.Img
          variant="top"
          style={{ height: "50%" }}
          className="mx-auto w-50"
          src={hamid}
        />
        <Card.Body>
          <Card.Title>Name: Hamid Hosen</Card.Title>
          <Card.Text>
            For the next four months I am trying to be a full stack web
            development.I am currently working with react and trying to be a
            good react developer. I have a plan to work with database for the
            next four months. And trying to learn Flutter Mobile App by myself.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default About;
