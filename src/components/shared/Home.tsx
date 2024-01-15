/* eslint-disable @typescript-eslint/no-explicit-any */
import { styled } from "styled-components";

const Home = ({ children }: any) => {
  const Home = styled.div`
    position: relative;
    line-height: 1.5rem;
  `;
  return <Home>{children}</Home>;
};

export default Home;
