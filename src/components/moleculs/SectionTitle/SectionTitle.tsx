import React from "react";

interface SectionTitlePropsTypes {
  title: string;
}
export default function SectionTitle({ title }: SectionTitlePropsTypes) {
  return (
    <h1 className="section-title fw-bold mx-auto d-flex justify-content-center my-4 text-center text-primary">
      {title}
    </h1>
  );
}
