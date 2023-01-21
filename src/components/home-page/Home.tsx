import { useCallback, useEffect, useState } from "react";
import { data } from "../../apis/Types";
import youtube from "../../apis/youtube";
import Loading from "../loading/Loading";
import NavBar from "../nav-bar/NavBar";
import VideoList from "../video-list/VideoList";
import { StyledContainerBox, StyledTotalTypography } from "./HomeStyle";

function Home() {
  const [searchInput, setSearchInput] = useState("");
  const [results, SetResults] = useState<data>();

  const onchangeSearchInput = (value: string) => {
    setSearchInput(value);
  };

  const searchResults = useCallback(async () => {
    const response = await youtube.get("", {
      params: {
        q: searchInput,
      },
    });
    SetResults(response.data);
  }, [searchInput]);

  const onClickSearch = () => {
    searchResults();
  };

  useEffect(() => {
    if (searchInput) {
      const getData = setTimeout(searchResults, 1000);
      return () => clearTimeout(getData);
    }
  }, [searchResults, searchInput]);

  const total = () => {
    if (!results) {
      return;
    }
    console.log("total", results);
    return <> {`about  ${results?.pageInfo.totalResults}  results`}</>;
  };

  const enableLodaing = () => {
    if (searchInput && !results) {
      return <Loading />;
    } else {
      return (
        <>
        <StyledTotalTypography>
        {total()}
        </StyledTotalTypography> 
          <VideoList  results={results} />
        </>
      );
    }
  };
  return (
    <>
      <NavBar
        searchInpUt={searchInput}
        onchangeSearchInput={onchangeSearchInput}
        onClickSearch={onClickSearch}
      />

      <StyledContainerBox>{enableLodaing()}</StyledContainerBox>
    </>
  );
}

export default Home;
