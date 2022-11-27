import React from "react";
import styled from "styled-components";

// image
import quoteImage from "../assets/quoteImage.webp";

// component
import Button from "../common/Button";

export const Quote = () => {
  return (
    <Section>
      <Logo>
        <img src={quoteImage} className="logo" alt="shopify" />
      </Logo>
      <Header>
        <h2>
          "Shopify is better than any other platform we've played with, and
          we've played with them all."
        </h2>
        <h4>Jonathan Bayme, Ceo of Theory11</h4>
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
      <p>
        Try Shopify free for 14 days, no credit card required. By entering your
        email, you agree to receive marketing emails from Shopify.
      </p>
    </Section>
  );
};

const Section = styled.section`
   {
    p {
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
      margin-top: 50px;
      max-width: 620px;
      margin: auto;
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
    margin: 140px 0 30px 0;

    .logo {
        height: 70px;
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
    margin-bottom: 32px;

    h2 {
      font-size: 2.5em;
      font-weight: 500;
      line-height: 110%;
      letter-spacing: -0.0207142857em;
      color: #000000;
      margin: auto;
      margin-bottom: 32px;
      text-align: center;
      width: 66.6666666667%;
    }

    @media (max-width: 700px) {
      h2 {
        font-size: 1.9em;
        width: 100%;
      }
    }

    h4 {
      font-size: 1.5em;
      font-weight: 700;
      color: #000000;
      margin: auto;
      text-align: center;
    }
  }
`;
const HeroImage = styled.div`
   {
    .computer {
      display: flex;
      margin: auto;
    }
  }
`;
