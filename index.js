const Discord = require('discord.js');
const bot = new Discord.Client();

// Key of the bot sing up on personal discord apps
const token = '';

bot.once('ready', () => {
    console.log('Bot is ready!')
});

bot.on('message', msg => {
    if(msg.content === "TELL_RND_NUM"){
        msg.reply('The number is: ' + getRandomIntInclusive(1, 5));
    }
})

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

bot.login(token);