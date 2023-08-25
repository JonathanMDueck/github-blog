import { styled } from "styled-components";

export const ProfileContainer = styled.div`
  max-width: 54rem;
  height: 13.25rem;

  margin: 0 auto;
  margin-top: -5.5rem;

  background: ${(props) => props.theme["gray-700"]};
  border-radius: 10px;

  display: flex;

  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
`;

export const ProfileContent = styled.div`
  margin-top: 2.5rem;
  margin-right: 2rem;

  width: 100%;
`;

export const ProfilePicture = styled.img`
  height: 9.25rem;
  width: 9.25rem;

  border-radius: 8px;

  margin: 2rem 2rem 2rem 2.5rem;
`;

export const Name = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    border: none;
    background: transparent;
    cursor: pointer;
    display: flex;
  }

  span {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 130%;
  }
`;

export const Description = styled.p`
  margin-top: 0.5rem;
  line-height: 160%;
`;

export const InfoTagsContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 1.5rem;
`;

export const InfoTag = styled.div`
  display: flex;
  align-items: center;

  span {
    line-height: 160%;
  }

  img {
    width: 1.125rem;
    height: 1.125rem;
    margin-right: 0.5rem;
  }
`;
