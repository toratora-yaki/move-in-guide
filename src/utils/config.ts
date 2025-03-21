import { config } from 'dotenv';

config();

const DISCORD_SERVER_ID = process.env.DISCORD_SERVER_ID || '';
const DISCORD_VOICE_CHANNEL_ID = process.env.DISCORD_VOICE_CHANNEL_ID || '';

const API_BASE_URL = process.env.API_BASE_URL || 'https://api.example.com';

export const discordConfig = {
  serverId: DISCORD_SERVER_ID,
  voiceChannelId: DISCORD_VOICE_CHANNEL_ID,
};

export const apiConfig = {
  baseUrl: API_BASE_URL,
};