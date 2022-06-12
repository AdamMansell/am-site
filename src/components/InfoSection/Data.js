import styled from "styled-components";
import  svg1  from '../../images/svg-1.svg'
import  svg2  from '../../images/svg-2.svg'
import  svg3  from '../../images/svg-3.svg'

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'About',
    headline: 'My Story',
    description: "I grew up in California as an Australian-American, spending my time either running or flying drones. I had a love for two things - Running, and Technology (embarisingly inspired by Tony Stark... yes, Iron Man). I quickly developed a burning desire to be at the forefront of technology, and what better way to start - than to code. ",
    buttonLabel: 'Get started',
    imgStart: false,
    img: svg3,
    alt: 'Desk',
    dark: true,
    primary: true,
    darkText: false
};

export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Discover',
    headline: 'Travel',
    description: "I work full stack with a focus on front end. My passion for coding derives from a desire to fully capture a thought or a dream - bringing it to life. What's your idea? Let's build it.",
    buttonLabel: 'Get started',
    imgStart: true,
    img: svg2
    ,
    alt: 'Desk',
    dark: true,
    primary: true,
    darkText: false
};

export const homeObjThree = {
    id: 'services',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Services',
    headline: 'My Work',
    description: "I work full stack with a focus on front end. My passion for coding derives from a desire to fully capture a thought or a dream - bringing it to life. What's your idea? Let's build it.",
    buttonLabel: 'Get started',
    imgStart: false,
    img: svg1,
    alt: 'Desk',
    dark: true,
    primary: true,
    darkText: false
};