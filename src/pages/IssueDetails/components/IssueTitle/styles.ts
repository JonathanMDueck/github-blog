import { styled } from "styled-components";

export const IssueTitleContainer = styled.div`
  background: ${(props) => props.theme["gray-700"]};

  height: 10.5rem;
  width: 54rem;
  margin-top: -5.5rem;

  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

  border-radius: 10px;

  padding: 2rem;

  p {
    font-size: 1.5rem;
    color: ${(props) => props.theme["gray-000"]};
    font-weight: 700;
    line-height: 130%;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;

  img {
    cursor: pointer;
  }
`;

export const InfoTagsContainer = styled.div`
  margin-top: 0.5rem;
  display: flex;
  gap: 1.5rem;
`;

export const InfoTag = styled.div`
  display: flex;
  align-items: center;

  span {
    line-height: 160%;
    color: ${(props) => props.theme["gray-300"]};
  }

  img {
    width: 1.125rem;
    height: 1.125rem;
    margin-right: 0.5rem;
  }
`;
