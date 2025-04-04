import styled from "styled-components";
import NewsWrapper from "./News_wrapper";
const StyledDiv = styled.div`
  width: 22.75rem;
  height: 1.06rem;
  overflow: hidden;
`;

export default function NewsContainer() {
  return (
    <>
      <StyledDiv>
        <NewsWrapper />
      </StyledDiv>
    </>
  );
}

// const wrapper = document.querySelector(".news-wrapper");
// let rollingTimer = null;
// function autoRollingDefault(wrapper) {
//   rollingTimer = setInterval(() => {
//     wrapper.style.animationPlayState = "paused";

//     setTimeout(() => {
//       wrapper.style.animationPlayState = "running";
//     }, 5000);
//   }, 6000);
// }
// setTimeout(()=>{
//   autoRollingDefault(wrapper);

// },)

// wrapper.addEventListener("mouseenter", () => {
//   wrapper.style.animationPlayState = "paused";
//   clearInterval(rollingTimer);
//   rollingTimer = null;
// });

// wrapper.addEventListener("mouseleave", () => {
//   wrapper.style.animationPlayState = "running";
//   if (!rollingTimer) {
//     autoRollingDefault(wrapper);
//   }
// });
