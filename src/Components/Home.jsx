/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/BehanceBanner.png";

const imageAltText =
  "A picture with a gradient overlay showcasing best grahpic design work of Alhaarith";

const Home = ({ name, title }) => {
  // Function to scroll to the "portfolio" section
  function scrollToPortfolio() {
    const portfolioSection = document.getElementById("portfolio");
    portfolioSection.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt="" />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
          pointerEvents: "none", // This makes sure the overlay doesn't interfere with clicks
        }}
      ></div>
      <div style={{ position: "absolute", top: "5rem", left: "2rem", width: "17rem" }}>
        <h1>{name}</h1>
        <h2>{title}</h2>
      </div>
      <button
        style={{
          position: "absolute",
          bottom: "3rem",
          left: "50%",
          transform: "translateX(-50%)",
          background: "none", // Make the button background transparent
          border: "none", // Remove the border
          outline: "none", // Remove the outline to ensure it's fully transparent when focused
          padding: 0, // Remove any padding
          cursor: "pointer", // Optional: Change the cursor to pointer to indicate it's clickable
        }}
        onClick={scrollToPortfolio}
        onKeyDown={scrollToPortfolio}
        tabIndex={0}
      >
        <img
          src={arrowSvg}
          style={{ height: "3rem", width: "3rem", filter: "brightness(0) invert(1)" }}
          alt={imageAltText}
        />
      </button>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
