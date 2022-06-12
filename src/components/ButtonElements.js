import styled from "styled-components";
import {Link} from 'react-scroll';

export const Button = styled(Link)`
//  border-radius: 50px;
//  background: ${({primary}) => (primary ? '#fff' : '#010606')};
 white-space: nowrap;
 padding: ${({big}) => (big ? '14px 48px' : '10px 18px')};
 color: ${({dark}) => (dark ? '#fff' : '#fff')};
 font-size= ${({fontBig}) => (fontBig ? '20px' : '16px')};
 outline: white;
 border: 1px solid grey;
 cursor: pointer;
 display: flex;
 justify-content: center;
 align-items: center;
 transition: all 0.2s ease-in-out;
 font-weight: bold;

 &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#fff' : '#62a2d6')};
    color: #62a2d6;
 }
`;