import { Box, Grid } from "@mui/material";
import { data, Items } from "../../apis/Types";
import ChannelName from "../channel/ChannelName";
import VideoItem from "../video-item/VideoItem";
import {
  StyledContainerBox,
  StyledFilterBox,
  StyledLegendToggleIcon,
  StyledTotalTypography,
  StyledVidioBox,
  StyledVidooItemBox,
} from "./VideoListStyle";

export interface VideoItemsProps {
  results: data | undefined;
}

export function VideoList(props: VideoItemsProps) {
  const { results } = props;
  const total = results?.pageInfo.totalResults;
  const renderedVideos = results?.items.map((video: Items) => {
    return <StyledVidooItemBox>
      <VideoItem key={video.id.videoId} video={video} />;
    </StyledVidooItemBox>
  });

  const totle = (
    <StyledContainerBox >
      <Grid item xs={4}>
        <StyledTotalTypography>
          {`about  ${total}  results`}
        </StyledTotalTypography>
      </Grid>
      <StyledFilterBox item xs={4}>
        <StyledLegendToggleIcon/>
        <>filter</>
      </StyledFilterBox>
    </StyledContainerBox>
  );

  return (
    <Grid container spacing={2}>
      <Box sx={{ flexGrow: 1 }}>
        <StyledVidioBox>
        <Grid item xs={12}>

          {results && <>{totle}</>}
          </Grid>
          <Grid item xs={12}>
          <ChannelName
            title={results?.items[1].snippet.channelTitle}
            description={results?.items[0].snippet.description}
            chanelPhotoUrl={results?.items[0].snippet.thumbnails.high.url}
          />
          </Grid>
          <Grid item xs={12}>
            {renderedVideos}
          </Grid>
        </StyledVidioBox>
      </Box>
    </Grid>
  );
}
export default VideoList;
