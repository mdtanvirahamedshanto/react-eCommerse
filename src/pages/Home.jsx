/* eslint-disable no-unused-vars */
import styled from "styled-components";
import HeroSection from "../components/HeroSection";

const Home = () => {
  const title = "E-com Store";

  return (
    <div className="h-screen">
      <HeroSection title={title} />
    </div>
  );
};

const Wrapper = styled.section`
  hight: "100vh";
`;
export default Home;
