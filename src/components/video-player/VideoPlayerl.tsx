
export interface VideoDetailProps {
  videoId: string;
}

export function VideoPlayer(props: VideoDetailProps) {
  const {  videoId } = props;
  const videoSrc = `https://www.youtube.com/embed/${videoId}`;

  return (
    <iframe src={videoSrc} allowFullScreen title="Video player" />
  );
}
export default VideoPlayer;
