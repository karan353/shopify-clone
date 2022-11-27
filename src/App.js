import "./App.css";
import styled from "styled-components";

// sections
import { Hero } from "./sections/Hero";
import { Offers } from "./sections/Offers";
import Clients from "./sections/Clients";
import { Quote } from "./sections/Quote";
import Footer from "./sections/Footer";

function App() {
  return (
    <Main>
      <Container>
        <Hero />
        <Offers />
        <Clients />
        <Quote />
        <Footer />
      </Container>
    </Main>
  );
}

export default App;

const Main = styled.section`
   {
    height: 100%;
    width: 100%;
    background-image: radial-gradient(
        circle at 5% 0%,
        rgba(216, 239, 85, 0.2) 15%,
        transparent 35%
      ),
      radial-gradient(
        circle at 0% 0%,
        rgba(144, 222, 251, 0.32) 9%,
        transparent 16%
      ),
      radial-gradient(
        circle at 100% 50%,
        rgba(216, 239, 85, 0.25) 5%,
        transparent 30%
      ),
      radial-gradient(
        circle at 100% 50%,
        rgba(144, 222, 251, 0.25) 8%,
        transparent 20%
      ),
      radial-gradient(
        circle at 5% 81%,
        rgba(216, 239, 85, 0.13) 11%,
        transparent 24%
      ),
      radial-gradient(
        circle at 0% 84%,
        rgba(144, 222, 251, 0.4) 2.5%,
        transparent 14%
      );
  }
  .v3_color_burst {
    background-image: radial-gradient(
        circle at -20% 2%,
        rgba(216, 239, 85, 0.2) 300px,
        transparent 540px
      ),
      radial-gradient(
        circle at -2% 0%,
        rgba(144, 222, 251, 0.26),
        transparent 340px
      ),
      radial-gradient(
        circle at 100% 1485px,
        rgba(216, 239, 85, 0.27) 100px,
        transparent 420px
      ),
      radial-gradient(
        circle at 100% 1525px,
        rgba(144, 222, 251, 0.25),
        transparent 270px
      ),
      radial-gradient(
        circle at 5% 81%,
        rgba(216, 239, 85, 0.18) 300px,
        transparent 890px
      ),
      radial-gradient(
        circle at 0% 84%,
        rgba(144, 222, 251, 0.35) 20px,
        transparent 470px
      );
    background-repeat: no-repeat;
  }
`;
const Container = styled.div`
   {
    margin-left: auto;
    margin-right: auto;
    padding-left: 32px;
    padding-right: 32px;

    @media screen and (min-width: 1079px) {
      width: 1008px;
    }

    @media screen and (min-width: 750px) and (max-width: 1079px) {
      width: 750px;
    }
  }
`;
