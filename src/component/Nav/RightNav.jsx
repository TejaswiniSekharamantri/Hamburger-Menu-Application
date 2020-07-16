import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 20px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-210%)'};
    top: 0;
    left:0;
    height: 150vh;                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
    
    return (
        <Ul open={open}>
            <li>Home</li>
            <li>Services</li>
            <li>Career</li>
            <li>Contact Us</li>
        </Ul>
    )
}

export default RightNav;