import React from "react";
import { Col, Row, ListGroup, Button } from "react-bootstrap";
import SectionTitle from "../../moleculs/SectionTitle/SectionTitle";
import SocialButton from "../../moleculs/SocialButton/SocialButton";
import * as styles from "./footer.module.scss";
import data from "../../../constant/data.json";
import { useStaticQuery, graphql } from "gatsby";

export default function Footer() {
  const image = useStaticQuery(graphql`
    query imageQuery {
      constantJson {
        photo {
          childImageSharp {
            original {
              src
            }
          }
        }
      }
    }
  `);
  return (
    <>
      <SectionTitle title="About Me" />
      <section
        id="about"
        className="position-relative "
        style={{ height: "180px" }}
      >
        <div className="container position-absolute top-0 start-50 translate-middle-x ">
          <div className="border bg-white rounded-4 p-4">
            <Row>
              <Col className="d-flex flex-column align-items-center gap-4">
                <img
                  src={image.constantJson.photo.childImageSharp.original.src}
                  alt=""
                  width={320}
                  height={320}
                />
                <p>
                  Hello, I am <span className="fw-bold">Afif</span>. I completed
                  my degree in computer science at Gunadarma University in 2018.
                  Currently working as BAU Integration in fintech company. In my
                  freetime i usually attending online course about fullstack
                  development using javascript and build a{" "}
                  <a
                    href=""
                    className="text-secondary"
                    style={{ textDecoration: "none" }}
                  >
                    web apps
                  </a>{" "}
                  as personal project.
                </p>
              </Col>
              <Col sm={12} md={6}>
                <h4 className="fw-bolder">Work Experience</h4>
                <ListGroup as="ol" numbered>
                  {data.experience.map((item, idx) => (
                    <ListGroup.Item
                      key={idx}
                      as="li"
                      className="d-flex justify-content-between align-items-start border-0"
                    >
                      <div className="ms-2 me-auto">
                        <div className="fw-bold">
                          {item.name}
                          <span style={{ fontSize: "0.5rem" }}>
                            {" "}
                            ({item.startDate} - {item.endDate})
                          </span>
                        </div>
                        {item.role}
                      </div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
                <h4 className="fw-bolder my-2">Online Course Certification</h4>
                <ListGroup as="ol">
                  {data.certification.map((item, idx) => (
                    <ListGroup.Item
                      key={idx}
                      as="li"
                      className="d-flex justify-content-between align-items-start border-0"
                    >
                      <div className="ms-2 me-auto">
                        <div className="fw-bold">
                          {item.name}
                          <span style={{ fontSize: "0.5rem" }}>
                            {" "}
                            ({item.corp})
                          </span>
                        </div>
                        Final Project: {item.proejct}
                      </div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Col>
              <SocialButton />
            </Row>
          </div>
        </div>
      </section>

      <div className={styles.bgFooter} style={{ height: "450px" }} />
    </>
  );
}
