/* eslint-disable no-unused-vars */
import styled from "styled-components";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Trusted from "../components/Trusted";
import FeatureProduct from "../components/featureProduct";

const Home = () => {
  const title = "E-com Store";

  return (
    <div className="">
      <HeroSection title={title} />
      <FeatureProduct />
      <Services />
      <Trusted />
    </div>
  );
};

const Wrapper = styled.section`
  hight: "100vh";
`;
export default Home;
