import { Box, Typography } from "@mui/material";
import styled from "styled-components";

export const StyledContainerBox = styled(Box)`
  width: 100%;
  // align-items: center;
  // height: auto;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  @media screen and (max-width: 768px) {
    position: relative;
    flex-direction: column;
    align-items: flex-start;
  }
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
