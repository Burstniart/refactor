const TelegramBot = require("node-telegram-bot-api");
const ExplorerController = require("./controllers/ExplorerController");
require("dotenv").config();

// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message

    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on("message", (msg) => {
    const chatId = msg.chat.id;

    // console.log(`Message: ${msg.text}`);
    // console.log(`Message parseInt: ${numberToApplyFb}`);
    
    // work in progress
    if(!isNaN(parseInt(msg.text))){
        const numberToApplyFb = parseInt(msg.text);
        const fizzbuzzTrick = ExplorerController.getTrickByScore(numberToApplyFb);
        const responseBot = `Tu número es: ${numberToApplyFb}. Validación: ${fizzbuzzTrick}`;
        bot.sendMessage(chatId, responseBot);
    } else {
        const theCall = msg.text;
        const getUsernames = ExplorerController.getExplorersUsernamesByMission(theCall);
        const responseBot = `Explorers in ${theCall} mission: ${getUsernames}`;
        bot.sendMessage(chatId, responseBot);
        // // bot.sendMessage(chatId, "Envía un número válido");
        // const theCall = msg.text;
        // if (theCall === "node" || "java") {
        //     const getUsernames = ExplorerController.getExplorersUsernamesByMission(theCall);
        //     const responseBot = `Explorers in ${theCall} mission: ${getUsernames}`;
        //     bot.sendMessage(chatId, responseBot);
        // } else {
        //     bot.sendMessage("Te entiendo perfectamente ;)");
        // }
    }
    

    // export this logic to the servces


    
});