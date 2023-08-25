import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 296px;
  background: ${(props) => props.theme["gray-700"]};
`;
export const HeaderContent = styled.div`
  display: flex;
  justify-content: center;

  img:first-child {
    margin-top: 4rem;
  }
`;

export const LeftEffect = styled.img`
  position: absolute;

  top: 70px;
  bottom: 38px;
  left: 0;
`;

export const RightEffect = styled.img`
  position: absolute;

  top: 30px;
  bottom: 30px;
  right: 2px;
`;

export const LeftEllipse = styled.img`
  position: absolute;

  width: 236px;
  height: 236px;

  left: 0px;
`;

export const RightEllipse = styled.img`
  position: absolute;
  right: 0px;
`;

export const BottomRectangle = styled.img`
  position: absolute;

  top: 112px;

  width: 891px;
`;
