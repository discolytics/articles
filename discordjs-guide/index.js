require('dotenv').config();
const { Client } = require('discord.js');

const client = new Client({
	intents: ['Guilds'],
});

client.login(process.env.TOKEN);

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);

	client.application.commands.set(
		[
			{
				name: 'ping',
				description: 'Replies with Pong!',
			},
		],
		'YOUR_GUILD_ID'
	);
});

client.on('interactionCreate', async (interaction) => {
	if (!interaction.isChatInputCommand()) return;

	if (interaction.commandName === 'ping') {
		interaction.reply({ content: 'Pong!' });
	}
});
