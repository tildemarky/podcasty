import { useState } from "react";
import tw, { styled, theme } from "twin.macro";
import { useRouter } from "next/router";

const Search = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const submit = (e) => {
    e.preventDefault();
    router.push(`/search/${encodeURIComponent(search)}`);
  };

  return (
    <StyledSearchForm action="/" method="get" onSubmit={submit}>
      <SearchBar
        type="text"
        id="search"
        name="search"
        required
        minLength={2}
        placeholder="Search"
        value={search}
        onInput={(e) => setSearch(e.target.value)}
      />
      <SearchButton type="submit">Search</SearchButton>
    </StyledSearchForm>
  );
};

export default Search;

const StyledSearchForm = styled.form`
  ${tw`flex flex-col my-4`}
`;
const SearchBar = styled.input`
  ${tw`py-2 px-2 mb-4 rounded outline-none focus:(ring ring-main)`}
  background-color: ${theme`colors.bgDarker`};
  &::placeholder {
    color: ${theme`colors.main`};
  }
`;
const SearchButton = styled.button`
  ${tw`text-white m-auto font-semibold w-max py-2 px-4 rounded`} background-color:${theme`colors.main`};
`;
