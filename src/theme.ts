// 다크 모드 적용하기 위한 테마 설정
const theme = {
  colors: {
    primary: "#646cff",
    secondary: "#535bf2",
    background: "#f8f9fa",
    text: "#212529",
  },
  spacing: (factor: number) => `${0.25 * factor}rem`,
  /* etc... 원하는 만큼 추가 */
};

export default theme;
