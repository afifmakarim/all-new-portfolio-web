import React from "react";
import "./social.scss";
import data from "../../../constant/data.json";

export default function SocialButton() {
  return (
    <div className="social-buttons ">
      <a
        href={data.social[0].url}
        target="_blank"
        className="social-buttons__button social-button social-button--linkedin"
        aria-label="LinkedIn"
      >
        <i className="bx bxl-linkedin"></i>
      </a>
      <a
        href={data.social[1].url}
        target="_blank"
        className="social-buttons__button social-button social-button--github"
        aria-label="GitHub"
      >
        <i className="bx bxl-github"></i>
      </a>
      <a
        href={data.social[2].url}
        target="_blank"
        className="social-buttons__button social-button social-button--instagram"
        aria-label="InstaGram"
      >
        <i className="bx bxl-instagram"></i>
      </a>
    </div>
  );
}
