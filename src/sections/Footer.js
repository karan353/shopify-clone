import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <div>
      <FooterLinks>
        <a href="#">Terms of Service</a>
        <a href="#">Privacy Policy</a>
      </FooterLinks>
    </div>
  );
};

export default Footer;

const FooterLinks = styled.div`
   {
    margin-top: 40px;
    padding: 1em 2em;
    text-align: center;

    a {
      color: #008060;
      text-decoration: none;
      margin-left: 1em;
    }
  }
`;
