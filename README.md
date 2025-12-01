# GrowLens AI 🚀👶➡️🧑

**Future Portraits of Your Child**

GrowLens AI reveals how your child may look as they grow — through ultra-realistic, cinematic future portraits crafted with advanced generative models. From age 5 to young adulthood, each projection blends developmental science with premium visual artistry to deliver future images that feel both magical and authentic.

Authored by **Joshua Li** • Created **Dec 2025**

![GrowLens AI Demo](public/screenshot.png) 
*(Replace this with a screenshot of your app!)*

## ✨ Key Features

*   **Future Age Portraits:** See your child’s progression from early childhood to adolescence.
*   **Cinematic Realism:** Uses the advanced `gemini-2.5-flash-image` model for high-fidelity, photorealistic results.
*   **Premium Experience:** A beautiful, "Cosmic" themed UI with glassmorphism and smooth animations.
*   **Instant Visualization:** Generates images for multiple age milestones (5, 15, 20 years) in parallel.
*   **Secure & Private:** Images are processed securely via the Gemini API.

## 🚀 How to Use

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/youhusky/age-progression-app.git
    cd age-progression-app
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Set Up Environment Variables:**
    *   Create a `.env` file in the root directory.
    *   Add your Google Gemini API key:
        ```env
        VITE_GEMINI_API_KEY=your_actual_api_key_here
        ```
    *   *Note: You can get an API key from [Google AI Studio](https://aistudio.google.com/).*

4.  **Run the App:**
    ```bash
    npm run dev
    ```
    *   Open your browser and navigate to `http://localhost:5173`.

5.  **Upload & Generate:**
    *   Drag and drop a clear photo of a face into the upload zone.
    *   Wait a few seconds for the AI to work its magic.
    *   View the age-progressed results in the gallery below!

## 🛠️ Tech Stack

*   **Frontend:** React, Vite
*   **Styling:** CSS3 (Glassmorphism, Animations, Responsive Design)
*   **AI Model:** Google Gemini 2.5 Flash Image (via `@google/generative-ai` SDK)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
