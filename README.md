## 1. Overview

### Translation API Server

This is a simple Node.js server built using Express that provides an API for translating text using the `google-translate-api-browser` package.
The API supports translation to a specified target language by leveraging Google Translate.

### Features

- **Translation API**: Translate any text to a specified target language.
- **CORS Enabled**: Cross-origin requests are supported for external API calls.
- **Error Handling**: Provides error messages for missing parameters or failed translations.

### Prerequisites

Before starting, ensure you have the following installed:

- **Node.js** (version 14 or higher)
- **npm** (version 6 or higher)

### Getting Started

Follow the steps below to set up the project locally.

#### 1. Clone the Repository

git clone https://github.com/NguyenQuocAnDev27/translation-api.git
cd translation-api

#### 2. Install Dependencies

Run the following command to install the required Node.js dependencies:

```bash
npm install express google-translate-api-browser cors
```

#### 3. Start the Server

Start the server by running the following command:

```bash
node server.js
```

The server will be running on `http://localhost:9000`.

## API Endpoints

### Translation API

**Endpoint**: `/translate`  
**Method**: `POST`  
**Description**: This endpoint accepts text and target language code, returning the translated version of the text.

#### Request Body Parameters:

- `text` (String, required): The text to be translated.
- `targetLang` (String, required): The language code to translate the text into (e.g., 'en' for English, 'fr' for French).

#### Example Request:

```json
{
  "text": "Bonjour",
  "targetLang": "en"
}
```

#### Example Response:

```json
{
  "originalText": "Bonjour",
  "translatedText": "Hello"
}
```

### Error Handling

- **400 Bad Request**: If the required `text` or `targetLang` is missing from the request body, the API will respond with:

```json
{
  "error": "Missing required parameters"
}
```

- **500 Internal Server Error**: If the translation fails for any reason, such as an external API issue, the API will return:

```json
{
  "error": "Translation failed"
}
```

## Using the API in Postman

You can test the API easily using **Postman**. Follow these steps:

### 1. Open Postman

Download and open Postman from [here](https://www.postman.com/downloads/) if you don’t already have it installed.

### 2. Create a new POST request

- Set the **Method** to `POST`.
- Set the **URL** to `http://localhost:9000/translate`.

### 3. Set the Request Body

- Under the **Body** tab, select **raw**.
- Choose **JSON** from the dropdown.
- Add the following JSON object:

```json
{
  "text": "Hola",
  "targetLang": "en"
}
```

### 4. Send the Request

Click **Send**. If everything is working, you should receive a response similar to this:

```json
{
  "originalText": "Hola",
  "translatedText": "Hello"
}
```

### Postman Request Summary:

- **Method**: `POST`
- **URL**: `http://localhost:9000/translate`
- **Headers**: 
  - Content-Type: `application/json`
- **Body (JSON)**:
  ```json
  {
    "text": "Bonjour",
    "targetLang": "en"
  }
  ```

## Deployment

To deploy this application on a cloud platform or VPS, follow these steps:

1. **Install Node.js**: Make sure Node.js is installed on your server.
2. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/translation-api.git
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start the server** using a process manager like PM2 (recommended for production):
   ```bash
   pm2 start index.js
   ```

## Troubleshooting

### Common Errors

- **Missing Required Parameters**: Ensure that both `text` and `targetLang` are present in the request body. This error will return a 400 status with the message:

```json
{
  "error": "Missing required parameters"
}
```

- **Translation Failed**: This can occur if the translation service is down or there is an issue with the external API. It will return a 500 status with the message:

```json
{
  "error": "Translation failed"
}
```

### Potential CORS Issues

If you're accessing the API from a front-end app and facing CORS issues, ensure that CORS is properly configured on your front-end.

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express**: Web framework for Node.js.
- **google-translate-api-browser**: A lightweight package to handle Google Translate requests.
- **CORS**: Middleware to enable cross-origin resource sharing.

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute it as per the terms of the license.

---
