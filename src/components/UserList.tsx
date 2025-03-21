import React, { useEffect, useState } from 'react';
import { fetchVoiceChannelUsers } from '../services/discord';
import { useStore } from '../store/useStore';

const UserList: React.FC = () => {
    const [users, setUsers] = useState<string[]>([]);
    const { voiceChannelId } = useStore(state => state);

    useEffect(() => {
        const getUsers = async () => {
            if (voiceChannelId) {
                const usersInChannel = await fetchVoiceChannelUsers(voiceChannelId);
                setUsers(usersInChannel);
            }
        };

        getUsers();
    }, [voiceChannelId]);

    return (
        <div>
            <h2>Connected Users</h2>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>{user}</li>
                ))}
            </ul>
            <p>Total Users: {users.length}</p>
        </div>
    );
};

export default UserList;