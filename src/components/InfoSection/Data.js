import styled from "styled-components";
import  svg1  from '../../images/svg-1.svg'
import  svg2  from '../../images/svg-2.svg'
import  svg3  from '../../images/svg-3.svg'
import  svg4  from '../../images/svg-4.svg'

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'About',
    headline: 'My Story',
    description: 
    "I grew up in California as an Australian-American with a love for two things - Running, and Technology (embarisingly inspired by Tony Stark... yes, Iron Man). I quickly developed a burning desire to be at the forefront of technology, and what better way to start - than to code. ",
    buttonLabel: 'Get started',
    imgStart: false,
    img: svg3,
    alt: 'Campfire',
    dark: true,
    primary: true,
    darkText: false
};

export const homeObjTwo = {
    id: 'skills',
    lightBg: true,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Skills',
    headline: 'My Skillset',
    description: "I work full stack, most recently having a stronger focus on front end. I enjoy using React & Ruby but have experience with Java and TypeScript as well.",
    buttonLabel: 'Get started',
    imgStart: true,
    img: svg4,
    alt: 'Program',
    dark: true,
    primary: true,
    darkText: false
};

export const homeObjThree = {
    id: 'work',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Work',
    headline: 'Snö',
    description: "Snö, My most recent project, was designed to bridge a gap between nature and technology. The concept was to supply important data regarding Mt.Hood to any snowboarder or skier looking to make a trip to the mountain that day. Whether it's snowfall in the last 24 hours, parking availability or ski lift wait times - Snö would have you covered.",
    buttonLabel: 'Get started',
    imgStart: false,
    img: svg1,
    alt: 'Desk',
    dark: true,
    primary: true,
    darkText: false
};

export const homeObjFour = {
    id: 'contact',
    lightBg: true,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Contact',
    headline: "Let's Connect",
    description: "Feel free to reach out via LinkedIn. I do my best to get back to everyone as soon as possible.",
    buttonLabel: 'Get started',
    imgStart: true,
    img: svg2,
    alt: 'Map',
    dark: true,
    primary: true,
    darkText: false
};