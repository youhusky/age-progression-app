import React, { useState, useEffect } from 'react';
import Upload from './components/Upload';
import Gallery from './components/Gallery';
import { generateAgeProgression, isApiConfigured } from './services/geminiService';

function App() {
  const [originalImage, setOriginalImage] = useState(null);
  const [generatedImages, setGeneratedImages] = useState({});
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState(null);

  const handleUpload = (imageData) => {
    setOriginalImage(imageData);
    setGeneratedImages({});
    setError(null);
    startGeneration(imageData);
  };

  const startGeneration = async (imageData) => {
    setIsGenerating(true);

    if (!isApiConfigured()) {
      console.warn("Gemini API Key is missing. Falling back to simulation.");
      // Fallback to simulation if no key
      simulateGeneration(imageData);
      return;
    }

    const ages = [5, 15, 20];

    // We'll process ages sequentially or in parallel depending on rate limits.
    // For this demo, we'll try to do them with a slight delay to avoid hitting rate limits instantly
    // and to show the UI progression.

    try {
      for (let i = 0; i < ages.length; i++) {
        const age = ages[i];

        // Artificial delay for UI feel
        await new Promise(resolve => setTimeout(resolve, 1000));

        try {
          const result = await generateAgeProgression(imageData, age);

          // Check if result looks like an image
          const isImage = result && (typeof result === 'string') && (result.startsWith('data:') || result.startsWith('http'));

          setGeneratedImages(prev => ({
            ...prev,
            [age]: isImage ? result : `Text response: ${result ? result.substring(0, 100) : 'No result'}...`
          }));
        } catch (err) {
          console.error(`Failed to generate for age ${age}`, err);
          setGeneratedImages(prev => ({
            ...prev,
            [age]: "Error: Failed to generate"
          }));
        }
      }
    } catch (err) {
      setError("An error occurred during generation.");
      console.error(err);
    } finally {
      setIsGenerating(false);
    }
  };

  const simulateGeneration = (imageData) => {
    const ages = [5, 15, 20];
    ages.forEach((age, index) => {
      setTimeout(() => {
        setGeneratedImages(prev => ({
          ...prev,
          [age]: imageData
        }));
        if (index === ages.length - 1) {
          setIsGenerating(false);
        }
      }, (index + 1) * 1500);
    });
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>TimeCapsule AI</h1>
        <p>Journey through time. See your future in seconds.</p>
        {!isApiConfigured() && (
          <div className="api-warning">
            ⚠️ API Key missing. Running in simulation mode.
          </div>
        )}
      </header>

      <main className="main-content">
        <section className="upload-section">
          <Upload onUpload={handleUpload} />
        </section>

        {error && <div className="error-message">{error}</div>}

        {(originalImage || isGenerating) && (
          <section className="results-section">
            <h2>Age Progression</h2>
            <Gallery images={generatedImages} loading={isGenerating && Object.keys(generatedImages).length === 0} />
          </section>
        )}
      </main>

      <div className="background-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <footer className="app-footer">
        <p>Authored by Joshua Li • Created Dec 2025</p>
      </footer>
    </div>
  );
}

export default App;
