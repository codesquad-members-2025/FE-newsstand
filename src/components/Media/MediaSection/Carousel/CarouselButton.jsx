import LeftArrow from '@/assets/icons/LeftButton.svg?react';
import RightArrow from '@/assets/icons/RightButton.svg?react';

export default function CarouselButton({ position, handler, className }) {
  const Icon = position === 'prev' ? LeftArrow : RightArrow;

  return (
    <button
      onClick={handler}
      type="button"
      aria-label={position === 'prev' ? 'Previous slide' : 'Next slide'}
      className={className}
    >
      <Icon />
    </button>
  );
}
