import { Box, Grid } from "@mui/material";
import logo from "../../images/YouTube-Logo.wine.svg";
import {
  StyledCenterBox,
  StyledContainerNavBarBox,
  StyledImg,
  StyledLeftBox,
  StyledSearchButon,
  StyledSearchIcon,
  StyledwrapperBox,
  StylFrom,
} from "./NavBarStyle";

export interface NavBarProps {
  searchInpUt: string;
  onchangeSearchInput(searchInpUt: string): void;
  onClickSearch(): void;
}

export function NavBar(props: NavBarProps) {
  const { onchangeSearchInput, onClickSearch, searchInpUt } = props;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <StyledContainerNavBarBox>
            <StyledwrapperBox>
              <StyledLeftBox>
                <StyledImg src={logo} alt="youtubelogo" width="60px" />
              </StyledLeftBox>
              <StyledCenterBox>
                <StylFrom.Control
                  type="text"
                  placeholder="Search"
                  onChange={(event) => onchangeSearchInput(event.target.value)}
                  value={searchInpUt}
                />

                <StyledSearchButon onClick={onClickSearch}>
                  <StyledSearchIcon />
                </StyledSearchButon>
              </StyledCenterBox>
            </StyledwrapperBox>
          </StyledContainerNavBarBox>
        </Grid>
      </Grid>
    </Box>
  );
}
export default NavBar;
