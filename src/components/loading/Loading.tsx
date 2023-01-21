import { Circular,  StyledCircularBox } from "./loadingStyle";

export interface LoadingProps {}

export function Loading(props: LoadingProps) {
  return (
    <StyledCircularBox>
      <Circular  />
    <>loading</>
    </StyledCircularBox>
  
  );
}

export default Loading;
