#!/bin/sh

# Create env-config.js
echo "window._env_ = {" > /usr/share/nginx/html/env-config.js
echo "  VITE_GEMINI_API_KEY: \"$VITE_GEMINI_API_KEY\"" >> /usr/share/nginx/html/env-config.js
echo "};" >> /usr/share/nginx/html/env-config.js

# Start Nginx
exec nginx -g "daemon off;"
