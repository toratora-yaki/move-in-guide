import axios from 'axios';
import { discordConfig } from '../utils/config';

const DISCORD_API_BASE_URL = 'https://discord.com/api/v10';

export const fetchVoiceChannelUsers = async () => {
    try {
        const response = await axios.get(`${DISCORD_API_BASE_URL}/guilds/${discordConfig.serverId}/voice-channels/${discordConfig.voiceChannelId}/members`, {
            headers: {
                'Authorization': `Bot ${process.env.DISCORD_BOT_TOKEN}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching voice channel members:', error);
        throw error;
    }
};

export const fetchDiscordEvents = async () => {
    try {
        const response = await axios.get(`${DISCORD_API_BASE_URL}/guilds/${discordConfig.serverId}/scheduled-events`, {
            headers: {
                'Authorization': `Bot ${process.env.DISCORD_BOT_TOKEN}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching Discord events:', error);
        throw error;
    }
};