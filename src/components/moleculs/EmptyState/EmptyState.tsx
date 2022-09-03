import React from "react";
import { Card, Button } from "react-bootstrap";
import * as styles from "./emptystate.module.scss";

export default function EmptyState() {
  return (
    <Card
      className="mx-auto shadow-sm"
      style={{ textAlign: "center", maxWidth: "420px" }}
    >
      <Card.Body>
        <Card.Title>
          <i className="bx bx-code-alt bx-lg" />
        </Card.Title>
        <Card.Title className="mb-3 fw-bold">
          No Professional Project Yet
        </Card.Title>
        <Card.Text>
          If you'd like to start a new project, need help with an existing
          project or have any other enquiry, please get in touch.
        </Card.Text>
        <Button variant="primary" href="mailto:afifmakarim88@gmail.com">
          Hire Me
        </Button>
      </Card.Body>
    </Card>
  );
}
