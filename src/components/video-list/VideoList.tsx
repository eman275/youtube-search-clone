import { data, Items } from "../../apis/Types";
import ChannelName from "../channel/ChannelName";
import VideoItem from "../video-item/VideoItem";
import {
  StyledContainerBox,
  StyledTotalTypography,
  StyledVidioBox,
} from "./VideoListStyle";

export interface VideoItemsProps {
  results: data | undefined;
}

export function VideoList(props: VideoItemsProps) {
  const { results } = props;
  const total =results?.pageInfo.totalResults;
  const renderedVideos = results?.items.map((video: Items) => {
    return <VideoItem key={video.id.videoId} video={video} />;
  });
  return (
    <StyledVidioBox>
       {results&&
      <StyledTotalTypography>
         {`about  ${total}  results`}
      </StyledTotalTypography>
       }
      <ChannelName
        title={results?.items[1].snippet.channelTitle}
        description={results?.items[0].snippet.description}
        chanelPhotoUrl={results?.items[0].snippet.thumbnails.high.url}
      />
      <StyledContainerBox>{renderedVideos}</StyledContainerBox>
    </StyledVidioBox>
  );
}
export default VideoList;
