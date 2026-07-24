# AI Chatbot

A simple web-based AI chatbot interface powered by Google's Gemini API. This application allows users to chat with an AI and upload images for analysis.

## Features

- Real-time text chat with AI responses
- Image upload and analysis capabilities
- Responsive design for desktop and mobile
- Clean, modern UI with dark theme

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Google Gemini API

## Setup

1. Clone or download this repository
2. Open `index.html` in your web browser

## API Configuration

The application uses Google's Gemini API. The API key is currently hardcoded in `script.js` for demonstration purposes.

**Important Security Note:** Never expose API keys in client-side code in production. For security:
- Get your own API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
- Replace the hardcoded key in `script.js` with your own
- Consider moving API calls to a backend server

## Usage

1. Type your message in the input field
2. Optionally upload an image using the upload button
3. Press Enter or click the send button
4. The AI will respond with text and/or image analysis

## File Structure

- `index.html` - Main HTML structure
- `style.css` - Styling and layout
- `script.js` - JavaScript logic and API integration
- `img.svg` - Upload icon
- `submit.svg` - Send button icon
- Various image assets for UI elements

## Browser Support

Works in modern browsers that support ES6 features and the Fetch API.

## Contributing

Feel free to submit issues and enhancement requests.

## License

This project is for educational purposes. Please respect API usage limits and terms of service.