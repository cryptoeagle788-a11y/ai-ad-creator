import React, { useState } from "react";

function App() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");

  const generateAd = async () => {
    const response = await fetch("/api/generate-image.js", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    const data = await response.json();
    setResult(data.image || "Generated image will show here.");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>AI Ad Creator</h1>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter product name or ad idea"
        style={{ width: "300px", padding: "8px" }}
      />
      <button onClick={generateAd} style={{ marginLeft: "10px", padding: "8px" }}>
        Generate
      </button>
      <div style={{ marginTop: "2rem" }}>{result && <p>{result}</p>}</div>
    </div>
  );
}

export default App;
