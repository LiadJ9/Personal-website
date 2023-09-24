import React, { useContext } from "react";
import { PageStyle } from "../styles/Styles";
import { AboutSegment, PageHeader } from "../components";
import { segmentType } from "../consts/types";
import { isMobileContext } from "../helpers/helpers";

export const AboutMe = () => {
  const isMobile = useContext(isMobileContext);
  const segment1: segmentType = {
    header: "More about me",
    text: "Great at being excited about new things and overcoming challenges. I love coming up with ideas and meeting new people that think alike.",
    img: require("../images/IMG_2414.jpg"),
    imgstyle: { width: isMobile ? "0rem" : "15rem" },
  };

  const segment2: segmentType = {
    text: "Jogging or hiking whenever I can is always exciting, and seeing myself break a personal record feels like a great accomplishment. I love baking and cooking and constantly trying to improve my recipes, or trying out new ones.",
    img: require("../images/wok.jpg"),
    imgstyle: {
      marginLeft: isMobile ? "5rem" : "16rem",
      width: "9rem",
      marginTop: "1rem",
    },
  };

  const segment3: segmentType = {
    text: "I have a big passion towards videogames and other media like movies and books, and I'm always looking forward to the next big thing that's going to draw me in. I've been doing front-end for about 3 months now and always improving✌️.",
    img: require("../images/pie.jpeg"),
    imgstyle: {
      width: "10rem",
      marginTop: "2rem",
      marginLeft: isMobile ? "10rem" : "3rem",
    },
  };

  const segment4: segmentType = {
    header: `The "site in one week" experience`,
    text: "Creating this website was the first time I had personally created a website, outside of my experience with web-based apps. this led to quite a bit of frustration about how I should even start building my website, how should I approach different resolutions, and what about mobile devices? eventually I figured out that I could do the same approach I did when creating mobile apps, which was basically using flex containers for almost everything, allowing for a dynamic site that works on both laptops, desktop computers and mobile.",
    img: require("../images/IMG_2422.jpg"),
    imgstyle: { width: isMobile ? "0rem" : "25rem" },
  };

  const segment5: segmentType = {
    text: "A bit after I've started to do design the website, I realized the way I was styling my components was awkward and very restricting - This is because the way I styled my components (CSS style objects) limited my way of passing optional variables to components. Looking back on it now there are some components which I would have done differently now that I've had the change to create them and understand the greater scope of what I actually wanted to do, for example, I had a dots component, which has a lot of parts where the same code segments appear multiple times instead of just iterating over the component..",
    img: require("../images/Tree.jpg"),
    imgstyle: { width: "15rem", marginTop: "7rem", marginLeft: "7rem" },
  };
  const segment6: segmentType = {
    text: "I've learnt a lot of things about typescript typing for using unsupported modules and about the way I approach different pieces of code, whether it is iterations or smarter use of logical operators.",
  };

  return (
    <div style={PageStyle}>
      <PageHeader>About</PageHeader>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <AboutSegment
          Segment1={segment1}
          Segment2={segment2}
          Segment3={segment3}
          isMobile={isMobile}
          textStyle={{
            fontSize: isMobile ? "large" : "x-large",
            margin: 0,
            marginLeft: "1rem",
          }}
        />
        <AboutSegment
          Segment1={segment4}
          Segment2={segment5}
          Segment3={segment6}
          isMobile={isMobile}
          textStyle={{ fontSize: "large", marginLeft: isMobile ? "1rem" : 0 }}
        />
      </div>
    </div>
  );
};
