import * as React from "react";
import type { HeadFC } from "gatsby";
import "../styles/global.scss";
import "boxicons";

import Navigation from "../components/organisms/Navigation";
import Figura from "../components/organisms/Figura";
import CardItem from "../components/moleculs/CardItem";
import Project from "../components/organisms/Project";
import Specialization from "../components/organisms/Specialization";
import Helmet from "react-helmet";
import Footer from "../components/organisms/Footer";

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <script
          src="https://unpkg.com/boxicons@2.1.2/dist/boxicons.js"
          type="text/javascript"
        />
        <link
          href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css"
          rel="stylesheet"
        />
      </Helmet>

      <Navigation />
      <Figura />
      <Specialization />
      <Project title="Personal Project" isPro={false} />
      <Project title="Professional Project" isPro={true} />

      <Footer />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Afif Makarim</title>;
