import { Items } from "../../apis/Types";
import ChannelName from "../channel/ChannelName";
import VideoItem from "../video-item/VideoItem";
import { StyledContainerBox } from "./VideoListStyle";

export interface VideoItemsProps {
  videos: Items[];
}

export function VideoList(props: VideoItemsProps) {
  const { videos } = props;
  const renderedVideos = videos.map((video: Items) => {
    return <VideoItem key={video.id.videoId} video={video} />;
  });
  return (
    <>
      {/* <ChannelName 
      // title={"modamed"} 
      description={"mofofofkfokfofkfokfok"}     
         title={videos[1].snippet.channelTitle}
        // description={videos[0].snippet.description}
      /> */}
      <StyledContainerBox>{renderedVideos}</StyledContainerBox>
    </>
  );
}
export default VideoList;
