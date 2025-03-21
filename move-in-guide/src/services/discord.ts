import axios from 'axios';
import { useEffect, useState } from 'react';
import { server_id, voice_channel_id } from '../utils/config';

const DISCORD_API_BASE_URL = 'https://discord.com/api/v10';

export const getVoiceChannelMembers = async () => {
    try {
        const response = await axios.get(`${DISCORD_API_BASE_URL}/guilds/${server_id}/voice-channels/${voice_channel_id}/members`, {
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

export const getDiscordEvents = async () => {
    try {
        const response = await axios.get(`${DISCORD_API_BASE_URL}/guilds/${server_id}/scheduled-events`, {
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