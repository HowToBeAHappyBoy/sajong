import React from "react";
import logo from "./logo.svg";
import "./App.css";
import KakaoLogin from "react-kakao-login";

function App() {
  const token = "a25aec0e87735af7215c57699dd6fce1";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <KakaoLogin
          token={token}
          onSuccess={console.log}
          onFail={console.error}
          onLogout={console.info}
        />
      </header>
    </div>
  );
}

export default App;
