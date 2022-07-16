import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

function App() {
  const [markdown, setMarkdown] = useState("");

  const fetchFile = (file) => {
    let request = new Request(file, {
      headers: new Headers({
        "Content-Type": "text/plain",
      }),
    });

    return fetch(request)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }

        return res.text().then((text) => {
          return text;
        });
      })
      .catch((err) => {
        throw new Error("Failed fetching file: " + err.message);
      });
  };

  useEffect(() => {
    fetchFile("README.md").then((text) => {
      setMarkdown(text);
    });
  }, []);

  return (
    <div className="result">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}

export default App;
