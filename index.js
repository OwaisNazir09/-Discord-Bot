

const { Client, GatewayIntentBits, REST, Routes } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.on('messageCreate', (message) => {
  if (message.author.bot) return;

  //if you wana makw your customm replays simply add a  condtion
  if (message.content === 'hey') {
      message.reply('chala ja');
  } else {
      message.reply('This is a message for you');
  }

  console.log(message.content);
});


//here put your id  but remember dont share it with anybodoy
client.login(""); 



client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    //these are /commands thatr are regitered 

    if (commandName === 'ping') {
        await interaction.reply('Pong!');
    } else if (commandName === 'test') {
        await interaction.reply('This bot is under maintenance.');
    } else if (commandName === 'test2') {
      await interaction.reply('This www is under maintenance.');
  }
});
