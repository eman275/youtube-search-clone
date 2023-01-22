import { Box, Grid, Typography } from "@mui/material";
import styled from "styled-components";
import LegendToggleIcon from "@mui/icons-material/LegendToggle";

export const StyledVidioBox = styled(Box)`
  margin-bottom: 25px;
  max-width: 1440px;
`;

export const StyledContainerBox = styled(Box)`
  margin-bottom: 25px;
  max-width: 1250px;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const StyledTotalTypography = styled(Typography)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  font-size: 15px;
  font-weight: 700;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const StyledVidooItemBox = styled(Grid)`
margin-bottom: 10px;

`;

export const StyledFilterBox = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledLegendToggleIcon = styled(LegendToggleIcon)`
opacity:50%;
`;
