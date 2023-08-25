import {
  FormInput,
  FormLabels,
  SearchFormContainer,
  SearchFormContent,
} from "./styles";

export function SearchForm() {
  return (
    <SearchFormContainer>
      <SearchFormContent>
        <FormLabels>
          <span>Publicações</span>
          <p> 6 publicações</p>
        </FormLabels>
        <FormInput placeholder="Buscar contúdo" />
      </SearchFormContent>
    </SearchFormContainer>
  );
}
