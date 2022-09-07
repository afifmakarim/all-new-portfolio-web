import React, { useState } from "react";
import { ProjectItemTypes } from "../../organisms/Project";
import ModalItem from "../ModalItem";
import * as styles from "./CardItem.module.scss";

interface CardItemPropsTypes {
  title: string;
  image: string;
  framework: string;
  description: string;
  data: ProjectItemTypes;
  year: string;
}
export default function CardItem({
  title,
  image,
  framework,
  description,
  data,
  year,
}: CardItemPropsTypes) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div className={styles.card} onClick={() => setModalShow(true)}>
        <div className={styles.year}>{year}</div>
        <img src={image} alt="" style={{ objectFit: "cover" }} />
        <div
          className={styles.content}
          style={{
            color: "white",
            textShadow: "0.4pt 0.6pt #111",
          }}
        >
          <h2>{title}</h2>
          <span>{framework}</span>
          <p>{description}</p>
        </div>
      </div>

      <ModalItem
        show={modalShow}
        onHide={() => setModalShow(false)}
        modalData={data}
      />
    </>
  );
}
