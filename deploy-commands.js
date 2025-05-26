require('dotenv').config();
const { REST, Routes, PermissionFlagsBits } = require('discord.js');

const commands = [
    {
        name: 'ping',
        description: 'Replies with Pong!',
    },
    {
        name: 'hello',
        description: 'Replies with a greeting!',
    },
    {
        name: 'verify',
        description: "This command makes you able to connect your discord account to your Tech_ID!",
    },
    {
        name: 'update',
        description: "Use this command to update your values within the server!",
    },
    {
        name: 'ban',
        description: "Use this command wisely. This is being used to ban people...",
        options: [{
            name: 'user',
            description: 'Mention the user that gets a ban',
            required: true,
            type: 9,
        },
        {
            name: 'duration',
            description: 'How long does the ban needs to be? (In months)',
            required: true,
            type: 4,
        },
        {
            name: 'reason',
            description: 'Give the reason for the ban here',
            required: true,
            type: 3,
        }],
        permissions: [PermissionFlagsBits.BAN_MEMBERS],
        botPermissions: [PermissionFlagsBits.BAN_MEMBERS],
    },
    {
        name: 'kick',
        description: "Gives people a kick out of the server!",
        options: [{
            name: 'user',
            description: 'Mention the user that gets a ban',
            required: true,
            type: 9,
        },
        {
            name: 'reason',
            description: 'Give the reason for the ban here',
            required: true,
            type: 3,
        }],
        permissions: [PermissionFlagsBits.KICK_MEMBERS],
        botPermissions: [PermissionFlagsBits.KICK_MEMBERS],
    }
];

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands },
        );

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();
