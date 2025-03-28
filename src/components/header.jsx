import "../styles/header.css";

function date() {
  const today = new Date();
  const formattedDate = new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    weekday: "long",
  }).format(today);

  return formattedDate;
}
function Header() {
  return (
    <header>
      <div className="logo-container">
        <img src="/logo.png" className="logo-image" alt="logo" />
        <h1 className="logo">뉴스스탠드</h1>
      </div>
      <p className="today">{date()}</p>
    </header>
  );
}

export default Header;
