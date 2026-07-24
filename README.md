# AI Chatbot

A simple web-based AI chatbot interface powered by Google's Gemini API. Users can chat with an AI and upload images for analysis.

## Features

- Real-time text chat with AI responses
- Image upload and analysis capabilities
- Responsive design for desktop and mobile
- Clean, modern UI with dark theme

## Project Structure

```
AI Chatbot/
├── deployment/              # All files needed to deploy/run the app
│   ├── index.html           # Main HTML entry point
│   ├── script.js            # Application logic & Gemini API integration
│   ├── style.css            # Styling and layout
│   ├── img.svg              # Upload button icon
│   ├── submit.svg           # Send button icon
│   ├── ai image new.png     # AI avatar
│   ├── user image.png       # User avatar
│   └── Sandy Loading.gif    # Loading animation
│
├── non-deployment/          # Unused assets & documentation
│   ├── README.md            # Original project documentation
│   ├── ai image.jpg         # Unused alternate AI avatar
│   ├── cute-ai-robot-chatbot-...jpg  # Unused decorative image
│   └── Loading Dots Blue.gif         # Unused alternate loading animation
│
└── README.md                # This file
```

## Deployment Folder

The `deployment/` folder contains everything needed to run the application:

- **index.html** - Main HTML entry point (open this in a browser)
- **script.js** - All JavaScript logic and Gemini API integration
- **style.css** - Dark theme styling with responsive layout
- **Assets** - UI icons (SVGs), avatars (PNGs), and loading animation (GIF)

### To Run Locally

1. Open `deployment/index.html` in any modern web browser

### To Deploy

Upload the entire `deployment/` folder contents to any static hosting service:

- **GitHub Pages**: Push `deployment/` contents to a `gh-pages` branch
- **Netlify**: Drag and drop the `deployment/` folder
- **Vercel**: Connect repo and set root directory to `deployment/`
- **Any web server**: Copy files to the server's public directory

## Non-Deployment Folder

The `non-deployment/` folder contains:

- Unused image assets not referenced by any code
- Original README documentation

These files are not required for the application to function.

## Technologies

- HTML5
- CSS3
- JavaScript (ES6+)
- Google Gemini API

## API Configuration

The application uses Google's Gemini API. The API key is hardcoded in `script.js` for demonstration purposes.

> **Security Note:** Never expose API keys in client-side code in production. Get your own key from [Google AI Studio](https://makersuite.google.com/app/apikey) and consider moving API calls to a backend server.

## Usage

1. Open `deployment/index.html` in your browser
2. Type your message in the input field
3. Optionally upload an image using the upload button
4. Press Enter or click the send button
5. The AI will respond with text and/or image analysis

## Browser Support

Works in modern browsers that support ES6 features and the Fetch API.

## Contributing

Feel free to submit issues and enhancement requests.

## License

This project is for educational purposes. Please respect API usage limits and terms of service.
