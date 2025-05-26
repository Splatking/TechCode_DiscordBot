async function Kick(interaction) {
    const targetUserId = interaction.options.get('user').value;
    const reason = interaction.options.get('reason')?.value || "No reason provided";
    let targetUser;

    try {
        targetUser = await interaction.guild.members.fetch(targetUserId);
    } catch (error) {
        console.error(`Error fetching target user: ${error}`);
        await interaction.reply("An error occurred while fetching the target user.");
        return;
    }

    if (!targetUser) {
        await interaction.reply("That user doesn't exist in this server.");
        return;
    }

    const targetUserRolePosition = targetUser.roles.highest.position;
    const requestUserRolePosition = interaction.member.roles.highest.position;
    const botRolePosition = interaction.guild.members.me.roles.highest.position;

    await interaction.deferReply();

    if (targetUser.id === interaction.guild.ownerId) {
        await interaction.editReply("That's your boss >:(");
        return;
    }

    if (targetUserRolePosition >= requestUserRolePosition) {
        await interaction.editReply("You can't kick that user. Because he/she has the same or higher level than you!");
        return;
    }

    if (targetUserRolePosition >= botRolePosition) {
        await interaction.editReply("I can't kick that user. Because he/she has the same or higher level than me!");
        return;
    }

    try {
        await targetUser.send(`You've been kicked from the TechCode server by: <@${interaction.user.id}>, with the following reason: ${reason}`);
        await targetUser.kick({ reason });
        await interaction.editReply(`${targetUser} is successfully kicked!\n Reason: ${reason}`);
    } catch (error) {
        console.error(`There was an error when kickning: ${error}`);
        await interaction.reply("An error occurred while kicking the user.");
    }
}

module.exports = Kick;