import { Box, Typography } from "@mui/material";
import styled from "styled-components";

export const StyledVidioBox = styled(Box)`
  margin-bottom: 25px;
  max-width: 1440px;
  `;

export const StyledContainerBox = styled(Box)`
  margin-bottom: 25px;
  max-width: 1250px; 

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
