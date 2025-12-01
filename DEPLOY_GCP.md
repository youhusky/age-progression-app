
# Deploying TimeCapsule AI to Google Cloud Run

This guide will walk you through deploying your React + Vite application to Google Cloud Run.

## Prerequisites

1.  **Google Cloud Project:** You need a Google Cloud project with billing enabled.
2.  **Google Cloud SDK:** Install the `gcloud` CLI tool on your machine.
3.  **Docker:** You need Docker installed to build the container image.

## Steps

### 1. Create a `Dockerfile`

Create a file named `Dockerfile` in the root of your project with the following content:

```dockerfile
# Step 1: Build the React application
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Step 2: Serve the application using Nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
```

### 2. Create an `nginx.conf`

Create a file named `nginx.conf` in the root of your project:

```nginx
server {
    listen 8080;
    server_name localhost;

    location / {
        root /usr/share/nginx/html;
        index index.html index.htm;
        try_files $uri $uri/ /index.html;
    }
}
```

### 3. Build and Submit the Container

Run the following command in your terminal to build your container image and submit it to Google Container Registry (GCR). Replace `PROJECT_ID` with your actual Google Cloud Project ID.

```bash
gcloud builds submit --tag gcr.io/gen-lang-client-0844161101/age-progression-app
```

### 4. Deploy to Cloud Run

Run the following command to deploy the image to Cloud Run:

```bash
gcloud run deploy age-progression-app \
  --image gcr.io/gen-lang-client-0844161101/age-progression-app \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

### 5. Configure Environment Variables

Since your app uses an API key, you need to set it in Cloud Run:

1.  Go to the [Cloud Run Console](https://console.cloud.google.com/run).
2.  Click on your service (`age-progression-app`).
3.  Click **Edit & Deploy New Revision**.
4.  Go to the **Variables & Secrets** tab.
5.  Add a new environment variable:
    *   **Name:** `VITE_GEMINI_API_KEY`
    *   **Value:** `your_actual_api_key_here`
6.  Click **Deploy**.

🎉 **Success!** Your app will now be live at the URL provided by Cloud Run.
