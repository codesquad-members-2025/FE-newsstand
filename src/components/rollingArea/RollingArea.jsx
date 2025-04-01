import styled from "styled-components";

const Container = styled.div`
  margin-top: 40px;
  width: 930px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 8px;
`;

const RollingArea = styled.div`
  background-color: var(--surface-alt);
  padding: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  border: 1px solid var(--border-default);
`;

const Title = styled.div`
  font: var(--display-bold14);
  color: var(--text-strong);
`;

const Headline = styled.div`
  width: 362px;
  font: var(--available-medium14);
  color: var(--text-default);
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

function rollingArea() {
  return (
    <Container>
      <RollingArea>
        <Title>연합뉴스</Title>
        <Headline as="a">
          [1보] 김기현·안철수·천하람·황교안, 與전대 본경선 진출
        </Headline>
      </RollingArea>
      <RollingArea>
        <Title>연합뉴스</Title>
        <Headline as="a">
          [속보] 與최고위원 본경선, 김병민·김용태·김재원·민영삼
        </Headline>
      </RollingArea>
    </Container>
  );
}

export default rollingArea;
