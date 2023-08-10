import {
  BackgroundContainer,
  Container,
  FooterBar,
  HeaderBar,
  Logo,
} from "./style";
import logo from "../../assets/vegaluxLogo.svg";

export const Body = () => {
  return (
    <Container>
      <BackgroundContainer>
        <HeaderBar>
          <Logo src={logo} alt="" />
        </HeaderBar>
        <h2>Site em desenvolvimento.</h2>
        <FooterBar>
          <div>
            <p> Vegalux iluminação Ltda.</p>
            <p> R. Dr. Dolzani, 123 - Jardim da Glória São</p>
            <p>
              {" "}
              Paulo - SP - Brasil - CEP: 01546-000 Tel.: +55 (11) 2615-3001
            </p>
            <p> atendimento@vegalux.com.br</p>
            <p>www.vegalux.com.br</p>
          </div>
        </FooterBar>
      </BackgroundContainer>
    </Container>
  );
};
