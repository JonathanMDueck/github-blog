import { HeaderContainer } from "./styles";
import LogoImg from "../../assets/Logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoImg} alt="" />
    </HeaderContainer>
  );
}
