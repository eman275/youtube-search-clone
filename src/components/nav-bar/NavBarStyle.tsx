import { Box } from "@mui/material";
import styled from "styled-components";
import { Button, Form } from "react-bootstrap";
import SearchIcon from "@mui/icons-material/Search";


export const StyledContainerNavBarBox = styled(Box)`
  width: 100%;
  height: auto;
  align-items: center;
  display: flex;
  // justify-content: center;
  @media screen and (max-width: 768px) {
    background-color: red;
  }
`;

export const StyledwrapperBox = styled(Box)`
  width: 100%;
  // max-width: 1250px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLeftBox = styled(Box)`
  display: flex;
  align-items: center;
  flex: 1;
`;

export const StyledImg = styled.img`
  margin-left: 2rem;
  width: 90px;
`;

export const StylFrom = styled(Form)`
  width: 70%;
  max-width: 600px;
  border: 1px solid #313131;
  outline: none;
  font-size: 1em;
  padding-right: 101px !important;
  padding-left: 5px !important;
  .form-control{
     padding-right: 101px !important;
  padding-left: 5px !important;
  }
`;

export const StyledCenterBox = styled(Box)`
  display: flex;
  justify-content: center;
  margin: 0;
  flex: 6;
`;

export const StyledSearchButon = styled(Button)`
padding: 6px 30px;
max-width: 10%;
font-size: 1em;
margin: 0;
max-width: 20%;
display: flex;
align-items: center;
justify-content: center;
  
`;

export const StyledSearchIcon = styled(SearchIcon)`
opacity: 50%;

`;