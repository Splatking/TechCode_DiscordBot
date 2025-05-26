//modules
const LoadUserData = require("../Modules/LoadUserData");
const LoadRoles = require("../Modules/LoadRoles");

//scripts
async function UpdateUser(interaction){
    const userID = interaction.user.id;
    const User = await interaction.guild.members.fetch(interaction.user.id);
    const DataProvided = await LoadUserData(userID, "Updating");
    const DataArray = DataProvided.split(",");
    const Roles = LoadRoles(interaction);
    let ShortendRol = "";

    const match = DataArray[1].match(/\[([^\]]+)\]/);
    console.log(DataArray + DataArray[1]);

    if (match && match[1]) {
        ShortendRol = match[1];
    } else {
        console.log("No match found");
    }

    if(DataArray[1] == "[HOM]Head Of Managers"){
        await User.roles.add(Roles.HeadOfManager).catch(console.error);
    } else if(DataArray[1] == "[HOD]Head Of Developers"){
        await User.roles.add(Roles.HeadOfDevelopers).catch(console.error);
    } else if(DataArray[1] == "[HDS]Head of Designers"){
        await User.roles.add(Roles.HeadOfDesigners).catch(console.error);
    } else if(DataArray[1] == "[HMP]Head of Music Producers"){
        await User.roles.add(Roles.HeadOfMusicProducers).catch(console.error);
    } else if(DataArray[1] == "[HTR]Head of Translators"){
        await User.roles.add(Roles.HeadOfTranslators).catch(console.error);
    } else if(DataArray[1] == "[HCE]Head of Community Engagment"){
        await User.roles.add(Roles.HeadOfCommunityEngagment).catch(console.error);
    } else if(DataArray[1] == "[PRA]People Relationship Advisor"){
        await User.roles.add(Roles.PeopleRelationshipAdvisor).catch(console.error);
    } else if(DataArray[1] == "[D]Developer"){
        await User.roles.add(Roles.Developer).catch(console.error);
    } else if(DataArray[1] == "[DS]Designer"){
        await User.roles.add(Roles.Designer).catch(console.error);
    } else if(DataArray[1] == "[MP]Music Producer"){
        await User.roles.add(Roles.MusicProducer).catch(console.error);
    } else if(DataArray[1] == "[TR]Translator"){
        await User.roles.add(Roles.Translator).catch(console.error);
    } else if(DataArray[1] == "[T]Tester"){
        await User.roles.add(Roles.Tester).catch(console.error);
    }

    await User.setNickname(`[${ShortendRol}] ${DataArray[0]}`).catch(console.error);
    await interaction.reply('Successfully updated!');
}

module.exports = UpdateUser;