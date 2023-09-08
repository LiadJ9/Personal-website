import { blogType } from "./types";

export const blogs: blogType[] = [
  {
    title: "Blog title",
    content: "this is a whole lot of text that describes how I feel",
    img: require("../images/React_header.jpg"),
    key: 0,
    timestamp: new Date("9/8/2023").toDateString(),
  },
  {
    title: "My journey towards react mastery",
    content: `I've always felt like I wanted to do something more, and explore new ideas,
       but I was at a loss of how to really make that a reality, until I discovered web development in a more in depth environment, 
       which made me realize how much freedom I have to express myself through programming. 
       I started to learn about coding, more specifically javascript, and then of course, react, the library that made it possible for me to create a website of my own,
       breaking through the barrier of my own creative limits.`,
    img: require("../images/adventure.jpg"),
    key: 1,
    timestamp: new Date("9/8/2023").toDateString(),
  },
  {
    title: "My journey towards react mastery",
    content: `I've always felt like I wanted to do something more, and explore new ideas,
       but I was at a loss of how to really make that a reality, until I discovered web development in a more in depth environment, 
       which made me realize how much freedom I have to express myself through programming, 
       so I started to learn about coding, more specifically javascript, and then of course, react, the library that made it possible for me to create a website of my own,
       breaking through the barrier of my own creative limits.`,
    img: require("../images/React_header.jpg"),
    key: 2,
    timestamp: new Date("9/8/2023").toDateString(),
  },
];
