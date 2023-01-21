import { Form } from "react-bootstrap";
import "./navbar.css";
import logo from "../../images/YouTube-Logo.wine.svg";
import SearchIcon from "@mui/icons-material/Search";
import { StyledContainerNavBarBox } from "./NavBarStyle";

export interface NavBarProps {
  searchInpUt: string;
  onchangeSearchInput(searchInpUt : string): void;
  onClickSearch(): void;
}

export function NavBar(props: NavBarProps) {
  const { onchangeSearchInput, onClickSearch, searchInpUt } = props;

  return (
    <StyledContainerNavBarBox >
      <div className="wrapper d-flex space-between justify-content align-items">
        <div className="navbar__left">
          <img
            src={logo}
            alt="youtube"
            width="60px"
            className="navbar__left__logo"
          />
        </div>
        <div className="navbar__center">
          <Form.Control
            type="text"
            className="navbar__center__input"
            placeholder="Search"
            onChange={(event) => onchangeSearchInput( event.target.value)}
            value={searchInpUt}
          />

          <button
            className="navbar__center__search-btn"
            onClick={onClickSearch}
          >
            <SearchIcon className="searchIcon" />
          </button>
        </div>
      </div>
    </StyledContainerNavBarBox>
  );
}
export default NavBar;
