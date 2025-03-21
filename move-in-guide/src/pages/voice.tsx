import React, { useEffect, useState } from 'react';
import { fetchVoiceChannelUsers } from '../services/discord';
import { useStore } from '../store/useStore';

const VoicePage = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const { voiceChannelId } = useStore(state => state);

    useEffect(() => {
        const getUsers = async () => {
            setLoading(true);
            const fetchedUsers = await fetchVoiceChannelUsers(voiceChannelId);
            setUsers(fetchedUsers);
            setLoading(false);
        };

        getUsers();
    }, [voiceChannelId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Voice Channel Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.username}</li>
                ))}
            </ul>
            <p>Total Users: {users.length}</p>
        </div>
    );
};

export default VoicePage;