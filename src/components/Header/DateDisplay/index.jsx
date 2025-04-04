/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { useMemo } from 'react';

import getFormattedToday from '@/utils/getFormattedToday';

const DateDisplay = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text.default};
  ${({ theme }) => theme.typography.m16}
`;

const Header = () => {
  const today = useMemo(() => {
    const now = new Date();
    return getFormattedToday(now);
  }, []);

  return <DateDisplay>{today}</DateDisplay>;
};

export default Header;
