/* eslint-disable no-unused-vars */
import styled from "styled-components";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Trusted from "../components/Trusted";

const Home = () => {
  const title = "E-com Store";

  return (
    <div className="h-screen">
      <HeroSection title={title} />
      <Services />
      <Trusted />
    </div>
  );
};

const Wrapper = styled.section`
  hight: "100vh";
`;
export default Home;
