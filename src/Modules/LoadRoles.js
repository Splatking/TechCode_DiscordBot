function LoadRoles(interaction){
    const Roles = {
        HeadOfManager: interaction.guild.roles.cache.get("1240204171437674506"),
        HeadOfDevelopers: interaction.guild.roles.cache.get("1240231548339617792"),
        HeadOfDesigners: interaction.guild.roles.cache.get("1240231657756426260"),
        HeadOfMusicProducers: interaction.guild.roles.cache.get("1240231697488937021"),
        HeadOfTranslators: interaction.guild.roles.cache.get("1240231747611004958"),
        HeadOfCommunityEngagment: interaction.guild.roles.cache.get("1240231848198803487"),
        HeadOfTesters: interaction.guild.roles.cache.get("1240236196941140059"),
        PeopleRelationshipAdvisor: interaction.guild.roles.cache.get("1240231907141095435"),
        Developer: interaction.guild.roles.cache.get("1240231989177487381"),
        Designer: interaction.guild.roles.cache.get("1240232022127935508"),
        MusicProducer: interaction.guild.roles.cache.get("1240232061994926170"),
        Translator: interaction.guild.roles.cache.get("1240232099827552367"),
        Tester: interaction.guild.roles.cache.get("1240232135223410770"),
    }

    return Roles;
}

module.exports = LoadRoles;