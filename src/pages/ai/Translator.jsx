import { useState } from "react";
import "../../styles/translator.css";

function Translator() {
  const [text, setText] = useState("");
  const [language, setLanguage] = useState("Kannada");
  const [translation, setTranslation] = useState("");

  const translateText = () => {
    if (!text.trim()) {
      alert("Please enter some text first!");
      return;
    }

    // Demo translation
    const demoTranslations = {
      Kannada: `ಇದು ನಿಮ್ಮ ಪಠ್ಯದ ಕನ್ನಡ ಅನುವಾದವಾಗಿದೆ: ${text}`,
      Hindi: `यह आपके पाठ का हिंदी अनुवाद है: ${text}`,
      Telugu: `ఇది మీ వచనం యొక్క తెలుగు అనువాదం: ${text}`,
      Tamil: `இது உங்கள் உரையின் தமிழ் மொழிபெயர்ப்பு: ${text}`,
      Malayalam: `ഇത് നിങ്ങളുടെ വാചകത്തിന്റെ മലയാളം വിവർത്തനമാണ്: ${text}`,
    };

    setTranslation(
      demoTranslations[language] || `Translated to ${language}: ${text}`
    );
  };

  const clearText = () => {
    setText("");
    setTranslation("");
  };

  return (
    <div className="translator-page">

      <div className="page-header">
        <h1>🌐 Translator</h1>
        <p>
          Translate your study notes into different languages.
        </p>
      </div>

      <div className="translator-card">

        <h2>🌍 Translate Your Notes</h2>

        <p className="subtitle">
          Enter your notes and choose the language you want to translate them into.
        </p>

        <div className="translator-form">

          <div>
            <label>Enter Text</label>

            <textarea
              placeholder="Type your notes or text here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>

          <div className="language-row">

            <label>Translate To</label>

            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="Kannada">Kannada</option>
              <option value="Hindi">Hindi</option>
              <option value="Telugu">Telugu</option>
              <option value="Tamil">Tamil</option>
              <option value="Malayalam">Malayalam</option>
            </select>

          </div>

          <div className="translator-buttons">

            <button
              className="translate-button"
              onClick={translateText}
            >
              🌐 Translate
            </button>

            <button
              className="clear-button"
              onClick={clearText}
            >
              ✕ Clear
            </button>

          </div>

        </div>

        {translation && (
          <div className="translation-result">

            <h3>
              Translation — {language}
            </h3>

            <p>{translation}</p>

          </div>
        )}

      </div>

    </div>
  );
}

export default Translator;