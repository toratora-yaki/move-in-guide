import { useEffect, useState } from 'react';
import { fetchVoiceChannelUsers } from '../services/discord';
import UserList from '../components/UserList';
import { useStore } from '../store/useStore';

const IndexPage = () => {
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

  return (
    <div>
      <h1>Voice Channel Users</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>Connected Users: {users.length}</p>
          <UserList users={users} />
        </>
      )}
    </div>
  );
};

export default IndexPage;