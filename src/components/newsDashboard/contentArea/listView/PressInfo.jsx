import styled from "styled-components";
import BrandMarkImage from "../../../../assets/brandmark/Brandmark.png";
import PlusIcon from "../../../../assets/icons/plus.svg";

const flexRow = `
  display: flex;
  flex-direction: row;
`;

const Container = styled.div`
  ${flexRow}
  gap: 16px;
  align-items: center;
`;

const Button = styled.button`
  width: 72px;
  height: 24px;
  background-color: var(--surface-alt);
  border: 1px solid var(--border-default);
  border-radius: 999px;
  box-sizing: border-box;
  ${flexRow}
  gap:2px;
  padding: 0 6px;
  align-items: center;
  font: var(--available-medium12);
  color: var(--text-weak);
`;

const PlusBox = styled.div`
  width: 12px;
  height: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Plus = styled.div`
  width: 7px;
  height: 7px;
  mask-image: url("${PlusIcon}");
  mask-size: cover;
  background-color: var(--text-weak);
`;

function getEditedDate() {
  const formattedTime = new Date().toLocaleString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  return formattedTime;
}
function PressInfo() {
  return (
    <Container>
      <img src={BrandMarkImage} alt="BrandMark" />
      <span
        style={{
          font: "var(--display-medium12)",
          color: "var(--text-default)",
        }}
      >
        {getEditedDate()} 편집
      </span>
      <Button>
        <PlusBox>
          <Plus />
        </PlusBox>
        구독하기
      </Button>
    </Container>
  );
}

export default PressInfo;
