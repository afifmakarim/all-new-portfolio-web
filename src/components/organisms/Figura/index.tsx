import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Button } from "react-bootstrap";
import * as styles from "./Figura.module.scss";
import Typewriter from "typewriter-effect";

export default function Figura() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row py-3">
          <div className="col d-flex flex-column justify-content-center">
            <h1 className="fw-bold">Hi There, </h1>
            <h1 className="fw-bold">
              I'm <span className="text-secondary">Afif Makarim</span>
            </h1>
            <p className="fs-5 mb-5">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      'I Am Into <span style="color: #6f4e4c;">Web Developer</span></br/>Looking for entry position as Software Developer'
                    )

                    .pauseFor(400)
                    .deleteAll()

                    .start();
                }}
                options={{
                  loop: true,
                }}
              />
            </p>
            <Button variant="primary" className={styles.btn} href="#about">
              About Me
            </Button>
          </div>
          <div className="col align-items-center justify-content-center d-none d-sm-flex d-sm-none d-md-flex">
            <StaticImage
              className="position-absolute"
              src="../../../images/yaiba.png"
              width={320}
              height={320}
              alt=""
            />
            <div className={styles.image}>
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#17233E"
                  d="M61.5,-35.9C72.1,-17,68,10,55.3,28C42.7,46,21.3,55.1,-3.1,56.9C-27.5,58.6,-55,53.1,-64.2,37.1C-73.4,21.1,-64.5,-5.5,-50.7,-26.2C-37,-46.9,-18.5,-61.8,3.5,-63.8C25.4,-65.8,50.8,-54.9,61.5,-35.9Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
