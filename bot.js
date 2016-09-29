var TelegramBot = require('node-telegram-bot-api');
var token = '261616755:AAESRIo8FRUhZmftTHOklXERBrUMlYXGNk0';

var bot = new TelegramBot(token, {polling: true});
bot.getMe().then(function (me) {
  console.log('Hi my name is %s!', me.username);
});