import { styled } from "styled-components";

const device = {
  tablet: `(min-width: 768px)`,
  desktop: `(min-width: 1024px)`,
};




export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BackgroundContainer = styled.div`
  height: 90%;
  width: 95%;
  background-color: rgba(240, 240, 240, 1);
  box-shadow: 0px 0px 40px 5px rgba(25, 0, 0, 0.07);

  border: solid 10px white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media ${device.tablet} {
  width: 60%;
 }
`;

export const HeaderBar = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: solid 1px black;
`;

export const Logo = styled.img`
  height: 100px;
`;
export const FooterBar = styled.div`
  height: 200px;
  width: 100%;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: white;
    font-size: 16px;
    text-align: center;
    line-height: 1.5;
  }

  @media ${device.tablet} {
    p {
    font-size: 20px;
  }

}
`;
