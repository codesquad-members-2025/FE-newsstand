/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const ProgressWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.surface.brandAlt};
`;

const ProgressFill = styled.div`
  width: ${({ progress }) => `${progress}%`};
  height: 100%;
  background-color: ${({ theme }) => theme.colors.surface.brandDefault};
  transition: width 0.1s ease-in-out;
`;

function ProgressBar({ progress }) {
  return (
    <ProgressWrapper>
      <ProgressFill progress={progress} />
    </ProgressWrapper>
  );
}

export default ProgressBar;
