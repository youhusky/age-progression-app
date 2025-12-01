import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the API with the key from environment variables
// Note: In a production app, you should proxy requests through a backend to keep the key secure.
// For this demo/prototype, we'll use the client-side SDK directly.
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

let genAI = null;
let model = null;

if (API_KEY) {
    genAI = new GoogleGenerativeAI(API_KEY);
    // User requested "gemini 3 pro". Using the model name as requested.
    // If this model is not available, it might need to be changed to 'gemini-1.5-pro'
    model = genAI.getGenerativeModel({ model: "gemini-3-pro-image-preview" });
}

export const generateAgeProgression = async (imageBase64, age) => {
    if (!model) {
        console.warn("Gemini API Key not found or model not initialized.");
        // Return mock data or throw error
        throw new Error("API Key missing");
    }

    try {
        // Remove the data URL prefix (e.g., "data:image/jpeg;base64,")
        const base64Data = imageBase64.split(',')[1];
        const mimeType = imageBase64.split(';')[0].split(':')[1];

        const prompt = `Generate a photorealistic image of this person as they would look at age ${age}. Maintain facial features, ethnicity, and gender. The image should be high quality and realistic.`;

        const imagePart = {
            inlineData: {
                data: base64Data,
                mimeType: mimeType
            }
        };

        const result = await model.generateContent([prompt, imagePart]);
        const response = await result.response;

        let resultData = '';
        if (response.candidates && response.candidates.length > 0) {
            const candidate = response.candidates[0];
            if (candidate.content && candidate.content.parts && candidate.content.parts.length > 0) {
                // Check for image data first
                const imagePart = candidate.content.parts.find(p => p.inlineData);
                if (imagePart) {
                    const { mimeType, data } = imagePart.inlineData;
                    resultData = `data:${mimeType};base64,${data}`;
                } else {
                    // Fallback to text
                    resultData = candidate.content.parts.map(p => p.text).join('');
                }
            }
        }

        return resultData;
    } catch (error) {
        console.error("Error generating age progression:", error);
        throw error;
    }
};

export const isApiConfigured = () => {
    return !!API_KEY;
};
