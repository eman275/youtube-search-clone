import { Box, Divider, Typography } from "@mui/material";
import styled from "styled-components";

export const StyledContainerBox = styled(Box)`
  width: 100%;
  height: auto;
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const DividerBoxStyle = styled(Box)`
height: 4px;
background-color: RGBA(0, 0, 0, 0.14);
overflow: hidden;
border-radius: 5px;
`;

export const DividerStyle = styled(Divider)`
height: 4px;
background-color: red ; 
width:15%;
`;


