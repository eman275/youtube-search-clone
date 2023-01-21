export interface Search {
  part: string;
  maxResults: number;
  key: string;
  q: string;
}

export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface videoId {
  kind: string;
  videoId: string;
}

export interface Info {
  url: string;
  width: number;
  height: number;
}

export interface thumbnails {
  default: Info;
  medium: Info;
  high: Info;
}

export interface snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: thumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
}

export interface Items {
  kind: string;
  etag: string;
  id: videoId;
  snippet: snippet;
}

export interface ItemResults {

}

export interface data{
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: PageInfo;
  items:Items[];
}
