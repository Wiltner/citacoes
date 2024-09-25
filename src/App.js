import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const fetchQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((error) => console.error("Erro ao buscar citação:", error));
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Citações Aleatórias</h1>
        <div id="quote">
          <p>{quote}</p>
          <h3>- {author}</h3>
        </div>
        <button onClick={fetchQuote}>Nova Citação</button>
      </header>
    </div>
  );
}

export default App;