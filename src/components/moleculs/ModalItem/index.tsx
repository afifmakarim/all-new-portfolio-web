import React from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";
import { ProjectItemTypes } from "../../organisms/Project";

interface ModalItemPropsTypes {
  show: boolean;
  onHide: () => void;
  modalData: ProjectItemTypes;
}

export default function ModalItem({
  show,
  onHide,
  modalData,
}: ModalItemPropsTypes) {
  // console.log("data : ", modalData);
  return (
    <Modal
      onHide={onHide}
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {modalData.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col md={7}>
            <h4>
              {modalData.platform} - {modalData.framework}
            </h4>
            <p>{modalData.description}</p>
          </Col>
          <Col>
            <div className="d-flex justify-content-center">
              <img
                className="rounded-4"
                src={modalData.imageUrl[1].image.childImageSharp.original.src}
                alt=""
                width={200}
              />
            </div>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button href={modalData.url} target="_blank" variant="secondary">
          View Project
        </Button>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
