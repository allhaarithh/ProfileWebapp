/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "HydroTrack",
    description:
      "HydroTrack is a cutting-edge water resource management system that provides real-time insights and analytics for efficient water usage, conservation, and allocation. With HydroTrack, users can monitor consumption, identify conservation opportunities, optimize resource allocation, and promote sustainability. Join us in revolutionizing water management with HydroTrack!.",
    url: "https://github.com/gopiikaaa/HydroTrack",
  },
  {
    title: "Google Colab Notebooks",
    description:
      "This repository contains comprehensive code for training a regression model to predict car mileage. Leveraging powerful machine learning libraries, it guides you through data preprocessing, model training, and evaluation. Ideal for anyone looking to understand and implement mileage prediction models efficiently.",
    url: "https://github.com/allhaarithh/Internship-Submission",
  },
  {
    title: "My Portfolio Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  },
  {
    title: "To-Do Web App",
    description:
      "My web app, built with React, MongoDB, and JWT, offers a seamless and secure user experience. React ensures a dynamic and responsive interface, MongoDB provides robust data management, and JWT guarantees secure authentication. Enjoy a fast, reliable, and protected service for all your web needs.",
    url: "https://github.com/allhaarithh/ToDo-App",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideInLeft",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
