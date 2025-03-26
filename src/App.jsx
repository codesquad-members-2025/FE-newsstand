import "./style/reset.css";
import "./style/App.css";
function App() {
  return (
    <>
      <header>
        <div>
          <img src="/logo.png" className="logo-image" />
          <h1>뉴스스탠드</h1>
        </div>
        <p>오늘의 날짜</p>
      </header>
      <article>
        <div>자동 롤링 영역 1</div>
        <div>자동 롤링 영역 2</div>
      </article>
      <div>
        <div>
          <p>AllPress</p>
          <p>subscribedPress</p>
          <p>badge</p>
        </div>
        <div>
          <p>listView</p>
          <p>gridView</p>
        </div>
      </div>
      <main>
        <p>left</p>
        <div>grid</div>
        <p>right</p>
      </main>
    </>
  );
}

export default App;
