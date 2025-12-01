# TimeCapsule AI 🚀👶➡️👴

**Journey through time. See your future in seconds.**

TimeCapsule AI is a futuristic web application that uses advanced generative AI to predict and visualize age progression. Upload a photo of a baby or child, and watch as the AI generates photorealistic images of what they might look like at ages 5, 15, and 20.

Authored by **Joshua Li** • Created **Dec 2025**

![TimeCapsule AI Demo](public/screenshot.png) 
*(Replace this with a screenshot of your app!)*

## ✨ Features

*   **AI-Powered Age Progression:** Utilizes Google's Gemini 3 Pro Vision model to generate realistic aging effects.
*   **Premium "Cosmic" Design:** A stunning, modern UI with glassmorphism, neon accents, and smooth animations.
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
*   **AI Model:** Google Gemini 3 Pro (via `@google/generative-ai` SDK)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
