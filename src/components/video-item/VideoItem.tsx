import { Items } from "../../apis/Types";
import VideoPlayer from "../video-player/VideoPlayerl";
import { StyledContainerBox, StyledInfoBox, StyledInfoTypography } from "./VideoStyle";

export interface VideoItemsProps {
  video: Items;
}

export function VideoItems(props: VideoItemsProps) {
  const {  video } = props;
  return (
    <StyledContainerBox>
     <VideoPlayer videoId={video.id.videoId} /> 
      <StyledInfoBox>
        <StyledInfoTypography>{video.snippet.title}</StyledInfoTypography>
        <StyledInfoTypography>{video.snippet.description}</StyledInfoTypography>
      </StyledInfoBox>
    </StyledContainerBox>
  );
}
export default VideoItems;
