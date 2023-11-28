//client is the bot
//intents are a set of permmissions that your bot can use in order to get access to a set of events
require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on('ready', (c) => {
  console.log(`✅ ${c.user.username} is online.`);
});
client.on('messageCreate', (message) => {
  if (message.author.bot) {
    return;
  }

  if (message.content === 'Hello wif bot') {
    message.reply('Hellooo!! :D');
  }
});

client.on('messageCreate', (message) => {
  if (message.author.bot) {
    return;
  }

  if (message.content === 'Wif bot what is the meaning of life?') {
    message.reply('Well...to live your life then to die I guess. I am not human so therefore I have not lived. IDK yolo :)');
 }

 if (message.content === 'Wif bot you are so silly') {
  message.reply('Ill take that as a compliment so thanks!! My creator is silly too :)');
}
if (message.content === 'Wif bot who is your creator?') {
  message.reply('Her name is Marilyn, but she is also called Wif by her friends. Thats how I got my name! She is short and she is sometimes a dum dum. Gotta love a short dum dum tho');
}
if (message.content === 'Wif bot why?') {
  message.reply('Why not :/');
}
if (message.content === 'Goodnight Wif bot') {
  message.reply('Goodnight!!! :)');
}

});

client.on('interactionCreate', (interaction) => {
  if (!interaction.isChatInputCommand()) return;
  
  if (interaction.commandName==='add'){
    const num1 = interaction.options.get('first-number').value;
    const num2 = interaction.options.get('second-number').value;
    interaction.reply(`The sum is ${num1 + num2} `);
  }

  if (interaction.commandName === 'hey') {
    return interaction.reply('hey!');
  }

  if (interaction.commandName === 'ping') {
    return interaction.reply('Pong!');
  }

});

client.login(process.env.TOKEN);