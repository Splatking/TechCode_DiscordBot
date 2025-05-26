//bot settup
require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

//Commands
const Verification = require('./src/Commands/Verification');
const UpdateUser = require('./src/Commands/UpdateUser');
const Kick = require('./src/Commands/Kick');
const Ban = require('./src/Commands/Ban');


const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'ping') {
        await interaction.reply('Pong!');
    } else if (commandName === 'hello') {
        await interaction.reply('Hello there!');
    } else if (commandName === 'verify') {
        await Verification(interaction);
    } else if (commandName === 'update'){
        await UpdateUser(interaction);
    } else if (commandName === 'kick'){
        await Kick(interaction);
    } else if (commandName === 'ban'){
        await Ban(interaction);
    }
});

client.login(process.env.DISCORD_TOKEN).catch(console.error);