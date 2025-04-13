import styled from '@emotion/styled';

import CarouselButton from './CarouselButton';

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled(CarouselButton)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ position }) => (position === 'prev' ? 'left: -80px;' : 'right: -80px;')}
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  font: inherit;
  color: inherit;
`;

const Carousel = ({
  children,
  goPrev,
  goNext,
  showPrev = true,
  showNext = true,
}) => {
  return (
    <CarouselContainer>
      {showPrev && <Button position="prev" handler={goPrev} />}
      {children}
      {showNext && <Button position="next" handler={goNext} />}
    </CarouselContainer>
  );
};

export default Carousel;
