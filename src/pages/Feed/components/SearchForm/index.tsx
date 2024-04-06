import {
  FormInput,
  FormLabels,
  SearchFormContainer,
  SearchFormContent,
} from "./styles";

type SearchFormProps = {
  numberOfPosts: number;
  searchParam: string;
  setSearchParam: (param: string) => void;
}


export function SearchForm({ numberOfPosts, searchParam, setSearchParam }: SearchFormProps) {

  function handleInputChange(param: string) {
    setSearchParam(param)
  }

  return (
    <SearchFormContainer>
      <SearchFormContent>
        <FormLabels>
          <span>Publicações</span>
          <p>{`${numberOfPosts} publicações`}</p>
        </FormLabels>
        <FormInput placeholder="Buscar contúdo" value={searchParam} onChange={(e) => { handleInputChange(e.target.value) }} />
      </SearchFormContent>
    </SearchFormContainer>
  );
}
