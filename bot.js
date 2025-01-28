require('dotenv').config(); 
const mineflayer = require('mineflayer');

function createBot() {
    const bot = mineflayer.createBot({
        host: process.env.SERVER_HOST, 
        port: parseInt(process.env.SERVER_PORT), 
        username: process.env.BOT_USERNAME, 
        version: '1.20.1',
    });
    bot.on('message', (message) => {
        handleServerMessage(message);
    });
    function handleServerMessage(message) {
        const messageText = message.toString();
        if (messageText.includes('Please login using:')) {
            console.log('Sending server password...');
            bot.chat(`/login ${process.env.BOT_PASSWORD}`); 
        }
        if (!messageText.includes('XYZ')) {
            console.log(message.toString());
        }
    }
    function displayCredits() {
        console.log('made by whyREX (aka ASSIf)');
    }
    function displayCreditsRandomly() {
        const randomDelay = Math.random() * 60000; 
        setTimeout(() => {
            displayCredits();
            displayCreditsRandomly();
        }, randomDelay);
    }
    bot.on('login', () => {
        console.log('Bot logged in');
        displayCredits();
        displayCreditsRandomly();
    });
    bot.on('end', () => {
        console.log('Bot has been disconnected');
        setTimeout(createBot, 60000);
    });
    bot.on('error', (err) => {
        console.error(`Error: ${err.message}`);
    });
    bot.on('kicked', (reason, loggedIn) => {
        console.log(`Kicked: ${reason} ${loggedIn ? '(logged in)' : '(not logged in)'}`);
    });
    bot.on('death', () => {
        console.log('Bot has died');
    });
    bot.on('disconnect', (packet) => {
        console.log(`Disconnected: ${packet.reason}`);
    });
    bot.on('command_error', (command, err) => {
        console.log(`Command error: ${command}, Error: ${err}`);
    });
}
createBot();