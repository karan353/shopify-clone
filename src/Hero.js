import React from "react";
import { Container, Image, Col, Row } from "react-bootstrap";
import "./App.css";
import herocomputer from "./assets/herocomputer.svg";
import logoshopify from "./assets/logoshopify.png";
import Button from "./common/Button";

function Hero() {
  return (
    <>
      <Container className=" d-flex flex-column align-items-center justify-content-center">
        <Image fluid src={logoshopify} className="logo" alt="shopify" />
        <h1 class="display-1 mb-4">
          <strong>Sell online with Shopify</strong>
        </h1>
        <p className="lead mb-4">
          <strong>Trusted by millions of businesses worldwide</strong>
        </p>

        <p>
          <small>
            Try Shopify free for 14 days, no credit card required. By entering
            your email, you agree to receive marketing emails from Shopify.
          </small>
        </p>
        <Image
          fluid
          src={herocomputer}
          className="img-fluid hero-img"
          alt="computer"
        />
      </Container>
      <Container className="call-to-action">
        <Row gap={3}>
          <Col md={4}>
            <form action="#">
              <input
                type="text"
                className="form"
                placeholder="Enter your email address"
              />
            </form>
          </Col>
          <Col md={2}>
            <Button />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Hero;
