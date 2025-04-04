/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const StyledFieldTab = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  background-color: ${({ theme }) => theme.colors.surface.alt};
`;

const StyledButton = styled.button`
  width: ${({ isActive }) => (isActive ? '166px' : 'auto')};
  display: flex;
  gap: 8px;
  align-items: center;
  height: 100%;
  padding: 11.5px 16px;
  border: none;
  font-size: 14px;
  cursor: pointer;
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.surface.brandAlt : theme.colors.surface.alt};

  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.text.whiteDefault : theme.colors.text.default};
`;

const LabelText = styled.span`
  display: flex;
  flex-grow: ${({ isActive }) => (isActive ? 1 : 0)};
`;

const CountText = styled.span`
  ${({ theme }) => theme.typography.b12}
  color: ${({ theme }) => theme.colors.text.whiteWeak};
`;

function TabButton({ label, isActive, onClick, count }) {
  return (
    <StyledButton isActive={isActive} onClick={onClick}>
      <LabelText isActive={isActive}>{label}</LabelText>
      {isActive && count != null && <CountText>{count}</CountText>}
    </StyledButton>
  );
}

export default function FieldTab({
  category,
  setCategory,
  pressLength,
  currentIndex,
}) {
  const fieldMap = [
    { id: 1, label: '종합/경제', key: 'generalEconomy' },
    { id: 2, label: '방송/통신', key: 'broadcastMedia' },
    { id: 3, label: 'IT', key: 'it' },
    { id: 4, label: '영자지', key: 'english' },
    { id: 5, label: '스포츠/연예', key: 'sportsEntertainment' },
    { id: 6, label: '매거진/전문지', key: 'magazine' },
    { id: 7, label: '지역', key: 'local' },
  ];

  const countLabel = `${currentIndex + 1}/${pressLength}`;

  return (
    <StyledFieldTab>
      {fieldMap.map(({ key, label }) => (
        <TabButton
          key={key}
          label={label}
          onClick={() => setCategory(key)}
          isActive={category === key}
          count={countLabel}
        />
      ))}
    </StyledFieldTab>
  );
}
