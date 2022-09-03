import React from "react";
import { Card, Button, CardImg } from "react-bootstrap";
import cx from "classnames";
interface SpecializationItemPropsTypes {
  title: string;
  description: string;
  icon: string;
  active?: boolean;
}
export default function SpecializationItem({
  title,
  description,
  active,
  icon,
}: SpecializationItemPropsTypes) {
  const styledComponent = cx({
    "text-center rounded-5 p-2 mb-4": true,
    "bg-primary text-white": active === true,
  });

  const iconStyle = cx({
    [`${icon}`]: true,
    "text-white": active === true,
  });
  return (
    <Card className={styledComponent} style={{ height: "16em" }}>
      <Card.Body>
        <i className={iconStyle}></i>
        <Card.Title className="my-3">{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
