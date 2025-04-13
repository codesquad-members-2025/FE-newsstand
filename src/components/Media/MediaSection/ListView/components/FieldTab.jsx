/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

import { fieldMap } from '@/utils/constants/constants';

import ProgressBar from './ProgressBar';

const StyledFieldTab = styled.div`
  display: flex;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.surface.alt};
`;

const StyledButton = styled.button`
  position: relative;
  width: ${({ isActive }) => (isActive ? '166px' : 'auto')};
  display: flex;
  gap: 8px;
  align-items: center;
  height: 100%;
  padding: 11.5px 16px;
  font-size: 14px;
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.surface.brandAlt : theme.colors.surface.alt};

  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.text.whiteDefault : theme.colors.text.default};
`;

const LabelText = styled.span`
  display: flex;
  flex-grow: ${({ isActive }) => (isActive ? 1 : 0)};
  z-index: 1;
`;

const CountText = styled.span`
  ${({ theme }) => theme.typography.b12}
  color: ${({ theme }) => theme.colors.text.whiteWeak};
  z-index: 1;
`;

function TabButton({ label, isActive, onClick, count, progress }) {
  return (
    <StyledButton isActive={isActive} onClick={onClick}>
      <LabelText isActive={isActive}>{label}</LabelText>
      {isActive && (
        <>
          {count && <CountText>{count}</CountText>}
          <ProgressBar progress={progress} />
        </>
      )}
    </StyledButton>
  );
}

export default function FieldTab({
  currentCategory,
  handleCategory,
  totalPressCount,
  currentPressIndex,
  progress,
}) {
  const countLabel = `${currentPressIndex + 1}/${totalPressCount}`;

  return (
    <StyledFieldTab>
      {fieldMap.map(({ key, label }) => (
        <TabButton
          key={key}
          label={label}
          onClick={() => handleCategory(key)}
          isActive={currentCategory === key}
          count={countLabel}
          progress={progress}
        />
      ))}
    </StyledFieldTab>
  );
}
