import { Box, Typography } from "@mui/material";
import styled from "styled-components";

export const StyledChannelNameBox = styled(Box)`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    margin-top: 30px;
    align-items: center;
    width: 80%;
    margin-inline-start: 39px;
  }
`;

export const StyledChannelImg = styled.img`
  width: 200px;
  height: 200px;
  border: 1px solid;
  border-radius: 50%;
`;

export const StyledInfoBox = styled(Box)`
  margin-inline-start: 25px;
`;

export const StyledInfoTypography = styled(Typography)``;
