import React from "react";
import styled from "styled-components";

// components
import Button from "../common/Button";

// images
import logoshopify from "../assets/logoshopify.png";
import herocomputer from "../assets/herocomputer.svg";

export const Hero = () => {
  return (
    <Section>
      <Logo>
        <img src={logoshopify} className="logo" alt="shopify" />
      </Logo>
      <Header>
        <h1>Sell online with Shopify</h1>
        <p>Trusted by millions of businesses worldwide</p>
      </Header>
      <div className="header-bottom">
        <form action="#">
          <input
            type="text"
            className="form"
            placeholder="Enter your email address"
          />
        </form>
        <Button></Button>
      </div>
      <p className="try-shopify">
        Try Shopify free for 14 days, no credit card required. By entering your
        email, you agree to receive marketing emails from Shopify.
      </p>
      <HeroImage>
        <img src={herocomputer} className="computer" alt="computer" />
      </HeroImage>
    </Section>
  );
};

const Section = styled.section`
   {
    .try-shopify {
      font-weight: 500;
      text-align: center;
      margin-top: 16px;
      color: #42474c;
      font-size: 0.75em;
      margin-bottom: 1em;
      line-height: 1.5;
      max-width: 500px;
      margin: auto;
      margin-top: 16px;
    }

    .header-bottom {
      margin: auto;
      max-width: 500px;
    }

    @media (min-width: 600px) {
      .header-bottom {
        display: flex;

        form {
          width: 100%;
        }

        Button {
          width: 190px;
          margin-left: 10px;
        }
      }
    }
  }
`;

const Logo = styled.div`
   {
    display: flex;
    justify-content: center;

    .logo {
        height: 34px;
        margin: 40px 0;
        width: auto;
      }
    }
  }
`;

const Header = styled.div`
   {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    margin-bottom: 28px;

    h1 {
      font-size: 4.5em;
      font-weight: 700;
      line-height: 110%;
      letter-spacing: -0.0207142857em;
      color: #212326;
      margin: auto;
      margin-bottom: 20px;
      text-align: center;
    }

    @media (max-width: 700px) {
      h1 {
        font-size: 2.8125em;
        font-weight: 600;
      }
    }

    p {
      font-size: 1.875em;
      font-weight: 400;
      color: #000000;
      margin: auto;
      text-align: center;
    }

    @media (max-width: 700px) {
      p {
        font-size: 1.5125em;
        font-weight: 500;
      }
    }
  }
`;
const HeroImage = styled.div`
   {
    .computer {
      display: flex;
      margin: auto;
      padding-top: 40px;
      padding-bottom: 10px;
      width: 100%;
      max-width: 550px;
    }
  }
`;
