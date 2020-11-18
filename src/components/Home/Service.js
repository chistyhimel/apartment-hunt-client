import React from "react";
import { Card, CardColumns, Container } from "react-bootstrap";
import serviceImg1 from "../../images/logos/service-img-1.png";
import serviceImg2 from "../../images/logos/service-img-2.png";
import serviceImg3 from "../../images/logos/service-img-3.png";

const Service = () => {
  const services = [
    {
      name: "Wide Range of Properties",
      description:
        "With a robust selection of popular properties on hand, as well as leading properties from experts.",
      img: serviceImg1,
    },
    {
      name: "Financing Made Easy",
      description:
        "Our stress-free finance department that can find financial solutions to save you money.",
      img: serviceImg2,
    },
    {
      name: "Trusted by Thousands",
      description:
        "10 new offers every day. 350 offers on site, trusted by a community of thousands of users.",
      img: serviceImg3,
    },
  ];
  return (
    <div className="bg-color">
      <Container style={{ fontFamily: "poppins, sans-serif" }}>
        <p className="lead text-center text-color pt-4">Service</p>
        <h2 className="text-center font-weight-bold">
          We're an agency tailored to all <br />
          clients' needs that always delivers
        </h2>
        <CardColumns className="mt-5">
          {services.map((service) => (
            <Card className="border-0 text-center bg-color" key={service.id}>
              <Card.Img
                variant="top"
                src={service.img}
                      style={{ width: "100px" }}
                      className="pt-5"
              />
              <Card.Body>
                <Card.Title className="font-weight-bold">
                  {service.name}
                </Card.Title>
                <Card.Text className="text-secondary">
                  {service.description}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </CardColumns>
      </Container>
    </div>
  );
};

export default Service;
