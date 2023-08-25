import { styled } from "styled-components";

export const SearchFormContainer = styled.div`
  max-width: 54rem;
  margin: 0 auto;

  margin-top: 4.5rem;
`;

export const SearchFormContent = styled.form``;

export const FormLabels = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 160%;
  }

  p {
    font-size: 0.875rem;
    font-weight: 400;
    color: ${(props) => props.theme["gray-300"]};
  }
`;

export const FormInput = styled.input`
  border: 1px solid ${(props) => props.theme["gray-500"]};
  border-radius: 6px;
  background: ${(props) => props.theme["gray-900"]};
  line-height: 160%;

  margin-top: 0.75rem;
  padding: 0.75rem 1rem;

  width: 100%;

  color: ${(props) => props.theme["gray-200"]};

  &::placeholder {
    color: ${(props) => props.theme["gray-400"]};
  }
`;
