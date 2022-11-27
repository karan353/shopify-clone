import React from "react";
import styled from "styled-components";

// images
import client1 from "../assets/clients/client1.webp";
import client2 from "../assets/clients/client2.png";
import client3 from "../assets/clients/client3.webp";
import client4 from "../assets/clients/client4.png";
import client5 from "../assets/clients/client5.png";
import client6 from "../assets/clients/client6.webp";
import client7 from "../assets/clients/client7.webp";
import client8 from "../assets/clients/client8.webp";

function Clients() {
  return (
    <Section>
      <div>
        <ul className="clients">
          <li className="image">
            <img src={client1} alt="" />
          </li>
          <li className="image">
            <img src={client2} alt="" />
          </li>
          <li className="image">
            <img src={client3} alt="" />
          </li>
          <li className="image">
            <img src={client4} alt="" />
          </li>
          <li className="image">
            <img src={client5} alt="" />
          </li>
          <li className="image">
            <img src={client6} alt="" />
          </li>
          <li className="image">
            <img src={client7} alt="" />
          </li>
          <li className="image">
            <img src={client8} alt="" />
          </li>
        </ul>
      </div>
    </Section>
  );
}

export default Clients;

const Section = styled.div`
   {
    border-top: 1px solid #d2d5d9;
    border-bottom: 1px solid #d2d5d9;
    padding-top: 3em;
    padding-bottom: 2em;
    margin-bottom: 32px;

    .clients {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      width: 100%;
      justify-content: space-evenly;
      list-style-type: none;
    }

    .image {
      flex: 1 1 3.125em;
      width: 3.125em;
      min-width: 100px;
    }

    img {
      width: 100%;
      height: auto;
    }
  }
`;
