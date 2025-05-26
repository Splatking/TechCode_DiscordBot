async function Ban(interaction) {
    const targetUserId = interaction.options.get('user').value;
    const reason = interaction.options.get('reason')?.value || "No reason provided";
    const duration = interaction.options.get('duration').value;
    const daysInMonth = 30;
    const durationInDays = duration * daysInMonth;
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
        await interaction.editReply("You can't ban that user. Because he/she has the same or higher level than you!");
        return;
    }

    if (targetUserRolePosition >= botRolePosition) {
        await interaction.editReply("I can't ban that user. Because he/she has the same or higher level than me!");
        return;
    }

    try {
        await targetUser.send(`You've been banned from the TechCode server by: <@${interaction.user.id}>, with a duration of: ${duration} months and the following reason: ${reason}`);
        await targetUser.ban({days: durationInDays, reason });
        await interaction.editReply(`${targetUser} is successfully banned!\n Reason: ${reason}`);
    } catch (error) {
        console.error(`There was an error when banning: ${error}`);
        await interaction.reply("An error occurred while banning the user.");
    }
}

module.exports = Ban;