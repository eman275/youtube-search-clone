import { Box, Typography } from "@mui/material";
import styled from "styled-components";

export const StyledContainerNavBarBox = styled(Box)`
  width: 100%;
  height: auto;
//   align-items: center;
//   display: flex;
//   justify-content: center;

`;

export const StyledTotalTypography = styled(Typography)`
display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 26px;
    font-size: 15px;
    font-weight: 700;
    @media screen and (max-width: 768px) {
      display: none;
    }

`;
