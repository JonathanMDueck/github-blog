import {
  BottomRectangle,
  HeaderContainer,
  HeaderContent,
  LeftEffect,
  LeftEllipse,
  RightEffect,
  RightEllipse,
} from "./styles";

import rightEffect from "../../assets/right-effect.svg";
import leftEffect from "../../assets/left-effect.svg";
import LogoImg from "../../assets/Logo.svg";
import Ellipse6 from "../../assets/Ellipse6.svg";
import Ellipse5 from "../../assets/Ellipse5.svg";
import Rectangle from "../../assets/Rectangle11.svg";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={LogoImg} alt="" />
        <LeftEffect src={leftEffect} />
        <RightEffect src={rightEffect} />
        <LeftEllipse src={Ellipse6} />
        <RightEllipse src={Ellipse5} />
        <BottomRectangle src={Rectangle} />
      </HeaderContent>
    </HeaderContainer>
  );
}
