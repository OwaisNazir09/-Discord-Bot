const { REST, Routes } = require('discord.js'); 
const rest = new REST({ version: '10' }).setToken("your tokrn here");


const commands = [
  {
      name: 'ping',
      description: 'Replies with Pong!',
  },
  {
      name: 'test',
      description: 'Test command registration!',
  },
  {
    name: 'test2',
    description: 'Test2 command registration!',
},
];
(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(


            // client id  this is avialabe at your auth. bot 
            Routes.applicationCommands(''), 
            { body: commands }
        );
        console.log('Commands to register:', commands);


        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();
