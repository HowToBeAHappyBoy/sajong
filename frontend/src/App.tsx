import { useRef } from "react";
import "./App.css";
import { Input } from "./components/input";
import logo from "./logo.svg";
import { createQueryClient, QueryClientProvider } from "./react-query";

function App() {
  const queryClientRef = useRef(createQueryClient());

  return (
    <QueryClientProvider client={queryClientRef.current} contextSharing>
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
          <Input value="123" onChange={() => {}} label="라벨" />
        </header>
      </div>
    </QueryClientProvider>
  );
}

export default App;
