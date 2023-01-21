import {
  StyledChannelImg,
  StyledChannelNameBox,
  StyledInfoBox,
  StyledInfoTypography,
} from "./ChannelNameStyle";

export interface ChannelNameProps {
  title: string |undefined;
  description: string|undefined;
   chanelPhotoUrl : string |undefined;
}

export function ChannelName(props: ChannelNameProps) {
  const {  title, description , chanelPhotoUrl } = props;

  return (
    <StyledChannelNameBox>
         <StyledChannelImg src={chanelPhotoUrl}/>
         <StyledInfoBox>
        <StyledInfoTypography>{title}</StyledInfoTypography>
        <StyledInfoTypography>{description}</StyledInfoTypography>
      </StyledInfoBox>
    </StyledChannelNameBox>
  );
}
export default ChannelName;
