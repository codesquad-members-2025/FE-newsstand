/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const StackWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

function StackLayout({ children, spacing = [] }) {
  return (
    <StackWrapper>
      {children.map((child, index) => (
        <div key={index} style={{ marginBottom: spacing[index] ?? 0 }}>
          {child}
        </div>
      ))}
    </StackWrapper>
  );
}

export default StackLayout;
