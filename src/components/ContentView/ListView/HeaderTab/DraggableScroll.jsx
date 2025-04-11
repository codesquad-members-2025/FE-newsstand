import styled from "styled-components";
import { useRef, useState } from "react";

const StyledWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  background-color: ${({ theme }) => theme.surface.alt};
  border-bottom: 1px solid ${({ theme }) => theme.border.default};
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }
`;

export default function DraggableScroll({ children }) {
  const wrapperRef = useRef(null);
  const isDraggingRef = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  function handleMouseDown(e) {
    isDraggingRef.current = true;
    startX.current = e.pageX - wrapperRef.current.offsetLeft;
    scrollStart.current = wrapperRef.current.scrollLeft; // ✅ 현재 스크롤 위치 저장
  }

  function handleMouseMove(e) {
    if (!isDraggingRef.current) return;
    const x = e.pageX - wrapperRef.current.offsetLeft;
    const walk = x - startX.current;
    wrapperRef.current.scrollLeft = scrollStart.current - walk;
  }
  // function handleMouseDown(e) {
  //   isDraggingRef.current = true;
  //   startX.current = e.pageX - wrapperRef.current.offsetRight;
  //   scrollStart.current = wrapperRef.current.offsetRight; // ✅ 현재 스크롤 위치 저장
  // }

  // function handleMouseMove(e) {
  //   if (!isDraggingRef.current) return;
  //   const x = e.pageX - wrapperRef.current.offsetRight;
  //   const walk = x - startX.current;
  //   wrapperRef.current.offsetRight = scrollStart.current + walk;
  // }

  function endDrag() {
    isDraggingRef.current = false;
  }

  return (
    <StyledWrapper
      ref={wrapperRef}
      onMouseDown={(e) => handleMouseDown(e)}
      onMouseMove={(e) => handleMouseMove(e)}
      onMouseUp={endDrag}
      onMouseLeave={endDrag}
    >
      {children}
    </StyledWrapper>
  );
}
