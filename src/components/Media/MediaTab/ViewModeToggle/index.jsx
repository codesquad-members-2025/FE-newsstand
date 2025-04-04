import styled from '@emotion/styled';

import ViewButton from './ViewButton';

const StyledViewModeToggle = styled.div`
  display: flex;
  gap: 8px;
`;

const ViewModeToggle = ({ viewType, setViewType }) => {
  return (
    <StyledViewModeToggle>
      <ViewButton
        type="list"
        isActive={viewType === 'list'}
        onClick={() => setViewType('list')}
      />
      <ViewButton
        type="grid"
        isActive={viewType === 'grid'}
        onClick={() => setViewType('grid')}
      />
    </StyledViewModeToggle>
  );
};

export default ViewModeToggle;
