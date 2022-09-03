import React from "react";
import SpecializationItem from "../../moleculs/SpecializationItem";
import data from "../../../constant/data.json";
import { Row, Col } from "react-bootstrap";

export default function Specialization() {
  return (
    <section className="my-4">
      <div className="container">
        <div className="d-md-flex gap-4">
          <Row>
            {data.skills.map((item, index) => (
              <Col md={12} lg={4} key={index}>
                <SpecializationItem
                  icon={item.icon}
                  title={item.name}
                  description={item.description}
                  active={index == 1}
                />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </section>
  );
}
