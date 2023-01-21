import { Box, CircularProgress } from "@mui/material";
import styled from "styled-components";

export const StyledCircularBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 185px;
`;

export const Circular = styled(CircularProgress)`
  display: flex;
  align-items: center;
  justify-content: center;
  .MuiCircularProgress-root {
    color: gray !important;
  }
`;
