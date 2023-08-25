import { styled } from "styled-components";

import HeaderImage from "../../assets/headerBg.png";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 296px;
  background: url(${HeaderImage}) no-repeat center;
  background-size: cover;
  display: flex;
  justify-content: center;

  img {
    width: 148px;
    height: 98px;

    margin-top: 4rem;
  }
`;
