import HomeLogo from "../../assets/HomeSvg.svg";
import { CharacterCard } from "./components/CharacterCard";
import {
  ButtonLoadMore,
  CharactersContainer,
  CharactersContent,
  InputsSearch,
  InputsSearchContainer,
} from "./styles";

export function Characters() {
  return (
    <CharactersContainer> 
      <img src={HomeLogo} alt="" />
      <InputsSearchContainer>
        <InputsSearch type="text" placeholder="Filter by name" />
        <InputsSearch type="text" placeholder="Species" />
        <InputsSearch type="text" placeholder="Gender" />
        <InputsSearch type="text" placeholder="Status" />
      </InputsSearchContainer>
      <CharactersContent>
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
      </CharactersContent>

      <ButtonLoadMore>Load More</ButtonLoadMore>
    </CharactersContainer>
  );
}
