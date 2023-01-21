import logo from "../../images/YouTube-Logo.wine.svg";
import { StyledCenterBox, StyledContainerNavBarBox, StyledImg, StyledLeftBox, StyledSearchButon, StyledSearchIcon, StyledwrapperBox, StylFrom } from "./NavBarStyle";

export interface NavBarProps {
  searchInpUt: string;
  onchangeSearchInput(searchInpUt : string): void;
  onClickSearch(): void;
}

export function NavBar(props: NavBarProps) {
  const { onchangeSearchInput, onClickSearch, searchInpUt } = props;

  return (
    <StyledContainerNavBarBox >
      <StyledwrapperBox >
        <StyledLeftBox >
          <StyledImg
            src={logo}
            alt="youtubelogo"
            width="60px"/>
        </StyledLeftBox>
        <StyledCenterBox >
          <StylFrom.Control
            type="text"
            placeholder="Search"
            onChange={(event) => onchangeSearchInput( event.target.value)}
            value={searchInpUt}
          />

          <StyledSearchButon
            onClick={onClickSearch}
          >
            <StyledSearchIcon className="searchIcon" />
          </StyledSearchButon>
        </StyledCenterBox>
      </StyledwrapperBox>
    </StyledContainerNavBarBox>
  );
}
export default NavBar;
