async function LoadUserData(DiscordID, Reasoning) {
    try {
        const response = await fetch('http://localhost/TechCodeDatabase/ServerLogin.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ DiscordID }),
        });

        if (!response.ok) {
            throw new Error('Could not receive the right data!');
        }

        const data = await response.json();
        
        if(Reasoning == "Verification"){
            return data.GivenUsername || null;
        } else if(Reasoning == "Updating"){
            return `${data.GivenUsername},${data.GivenRol}` || null;
        }
    } catch (error) {
        console.error('Error:', error.message);
        return null;
    }
}

module.exports = LoadUserData;