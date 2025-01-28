# BDZone AFK Bot

A dedicated bot developed exclusively for BDZONE minecraft server, designed specifically to manage AFK (Away From Keyboard) functionality.

## Features

- Automatically detects and manages AFK status.
- Sends appropriate responses when a user is AFK.
- Easy to configure and integrate.

## Prerequisites

- **Node.js** (Ensure you have Node.js installed on your system. [Download Node.js](https://nodejs.org/))
- Basic understanding of JavaScript and Node.js.

## Installation

1. Clone this repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd bdzone-afkbot 
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```

## Usage

1. Configure the bot settings in the `.env` file:
   ```env
   BOT_USERNAME=YourBotUsername
   BOT_PASSWORD=YourBotPassword
   SERVER_HOST=play.bdzonemc.com
   SERVER_PORT=25565
   ```
2. Start the bot:
   ```bash
   node bot.js
   ```
3. The bot will now be active and ready to manage AFK functionality for BDZone.

## Contributing

We welcome contributions! If you'd like to contribute, please follow these steps:

1. Fork this repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes and push the branch:
   ```bash
   git commit -m "Add feature-name"
   git push origin feature-name
   ```
4. Create a pull request, and we’ll review your changes.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- Special thanks to the BDZONE community for their support and inspiration.
- Developed using **Node.js** for efficient and scalable performance.

