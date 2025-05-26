//modules
const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const LoadUserData = require("../Modules/LoadUserData");

//scripts
async function Verification(interaction) {
    const userID = interaction.user.id;
    var currentTechAccount = await LoadUserData(userID, "Verification");

    console.log(userID);
    console.log(currentTechAccount);

    await interaction.reply('Starting verification process!');

    const confirm = new ButtonBuilder()
        .setCustomId('confirm')
        .setLabel('Confirm verification')
        .setStyle(ButtonStyle.Success);

    const open = new ButtonBuilder()
        .setLabel('Open TechCode website')
        .setURL("http://localhost:5173")
        .setStyle(ButtonStyle.Link);

    let messageContent, components;
    if (currentTechAccount == null) {
        const row = new ActionRowBuilder().addComponents(open, confirm);
        messageContent = `Hey there <@${userID}>, We're gonna start verification so you can access our services from our server! Hit the Open TechCode website and follow the instructions! Thank you for choosing TechCode!`;
        components = [row];
    } else {
        const row = new ActionRowBuilder().addComponents(open);
        messageContent = `Hey there <@${userID}>, Your discord account seems to be connected to a Tech_ID already (Username from TechAccount: ${currentTechAccount})! To update your settings please hit the Open TechCode website button and follow the instructions! Thank you for your interest in our services!`;
        components = [row];
    }

    try {
        await interaction.user.send({
            content: messageContent,
            components: components,
        });
    } catch (error) {
        console.error(`Failed to send message to user ${userID}:`, error);
    }
}

module.exports = Verification;