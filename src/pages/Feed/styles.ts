import { styled } from "styled-components";

export const FeedContainer = styled.div`
  max-width: 54rem;
  margin: 0 auto;
`;

export const PostContainer = styled.div`
  margin-top: 3rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`;

export const Post = styled.div`
  width: 26rem;
  height: 16.25rem;

  border: 0;
  border-radius: 10px;

  background: ${(props) => props.theme["gray-600"]};

  padding: 2rem;

  overflow: hidden;
`;

export const PostTitle = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  margin-bottom: 1.25rem;

  span {
    line-height: 160%;
    font-size: 1.25rem;
    font-weight: 700;
    max-width: 17.6875rem;
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme["gray-300"]};
    line-height: 160%;
  }
`;

export const Description = styled.div`
  max-width: 22rem;
  max-height: 7rem;
  overflow: hidden;
  p {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;

    color: ${(props) => props.theme["gray-200"]};
    line-height: 160%;
  }
`;
