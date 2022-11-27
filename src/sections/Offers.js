import React from "react";
import styled from "styled-components";

// icons
import { HiOutlineTemplate } from "react-icons/hi";
import { GiPresent } from "react-icons/gi";
import { BsPeople } from "react-icons/bs";

export const Offers = () => {
  return (
    <Section>
      <div className="container">
        <div className="grid-item">
          <Svg>
            <HiOutlineTemplate className="svg" />
          </Svg>
          <h5>Customizable templates</h5>
          <p>Free website designs to launch your store quickly and easily.</p>
        </div>
        <div className="grid-item">
          <Svg>
            <GiPresent className="svg" />
          </Svg>
          <h5>All in one</h5>
          <p>
            Shopify takes care of everything from marketing and payments to
            secure transactions and shipping.
          </p>
        </div>
        <div className="grid-item">
          <Svg>
            <BsPeople className="svg" />
          </Svg>
          <h5>A safe and efficient platform</h5>
          <p>Millions of users trust Shopify to manage their online stores.</p>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.section`
   {
    padding-top: 6em;
    padding-bottom: 6em;

    @media (max-width: 750px) {
       {
        padding: 4em 0;
      }
    }

    @media screen and (min-width: 1079px) {
      .container {
        display: flex;
        width: 100%;
        justify-content: space-between;
      }

      .grid-item {
        width: 30%;
      }
    }

    @media screen and (min-width: 750px) and (max-width: 1079px) {
      .container {
        display: flex;
        justify-content: space-between;
      }

      .grid-item {
        width: 30%;
      }
    }

    h5 {
      margin-bottom: 0.75em;
      color: #212326;
      line-height: 1.33333125;
    }

    p {
      font-size: 1em;
      color: #6b7177;
      font-weight: 400;
      font-family: Helvetica, Arial, Lucida Grande, sans-serif;
    }
  }
`;

const Svg = styled.div`
   {
    .svg {
      width: 45px;
      height: 45px;
      fill: #008060;
      color: #008060;
      margin-bottom: 1em;
    }
  }
`;
