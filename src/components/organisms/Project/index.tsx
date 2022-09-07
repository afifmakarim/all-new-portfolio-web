import React, { useState } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import CardItem from "../../moleculs/CardItem";
import EmptyState from "../../moleculs/EmptyState/EmptyState";
import SectionTitle from "../../moleculs/SectionTitle/SectionTitle";
import * as styles from "./project.module.scss";
import { useStaticQuery, graphql } from "gatsby";

interface ProjectPropsTypes {
  title: string;
  isPro: boolean;
}

export interface ProjectItemTypes {
  name: string;
  imageUrl: {
    image: { childImageSharp: { original: { src: string } } };
  }[];
  framework: any;
  platform: any;
  description: string;
  categories: string;
  url: string;
  year: string;
}
export default function Project({ title, isPro }: ProjectPropsTypes) {
  const [categories, setCategories] = useState("all");
  const data = useStaticQuery(graphql`
    query MyQuery {
      constantJson {
        id
        projects {
          year
          name
          platform
          url
          categories
          description
          framework
          imageUrl {
            image {
              childImageSharp {
                original {
                  src
                }
              }
            }
          }
        }
      }
    }
  `);

  const filterData = data.constantJson.projects.filter(
    (item: ProjectItemTypes) => item.categories === categories
  );

  const dataToShow =
    categories == "all" ? data.constantJson.projects : filterData;

  return (
    <section id="project" className="my-4">
      <SectionTitle title={title} />
      {isPro ? (
        <div className="container d-flex justify-content-center gap-5 my-5">
          <EmptyState />
        </div>
      ) : (
        <>
          <div className="container d-flex justify-content-center gap-5 my-5">
            <ToggleButton
              id="all-btn"
              type="checkbox"
              variant={categories == "all" ? "primary" : "link"}
              className={styles.round}
              value="all"
              onChange={(e) => setCategories(e.target.value)}
            >
              All
            </ToggleButton>
            <ToggleButton
              id="fe-btn"
              type="checkbox"
              className={styles.round}
              variant={categories == "frontend" ? "primary" : "link"}
              value="frontend"
              onChange={(e) => setCategories(e.target.value)}
            >
              Front End
            </ToggleButton>
            <ToggleButton
              id="be-btn"
              type="checkbox"
              className={styles.round}
              variant={categories == "backend" ? "primary" : "link"}
              value="backend"
              onChange={(e) => setCategories(e.target.value)}
            >
              Back End
            </ToggleButton>
          </div>
          <div className="container">
            <div className={styles.project}>
              {dataToShow.map(
                (
                  item: ProjectItemTypes,
                  index: React.Key | null | undefined
                ) => (
                  <CardItem
                    key={index}
                    data={item}
                    title={item.name}
                    image={item.imageUrl[0].image.childImageSharp.original.src}
                    framework={`${item.framework} - ${item.platform}`}
                    description={item.description}
                    year={item.year}
                  />
                )
              )}
            </div>
          </div>
        </>
      )}
    </section>
  );
}
