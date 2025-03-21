import create from 'zustand';

interface User {
  id: string;
  username: string;
}

interface StoreState {
  users: User[];
  setUsers: (users: User[]) => void;
  voiceChannelUserCount: number;
  setVoiceChannelUserCount: (count: number) => void;
}

const useStore = create<StoreState>((set) => ({
  users: [],
  setUsers: (users) => set({ users }),
  voiceChannelUserCount: 0,
  setVoiceChannelUserCount: (count) => set({ voiceChannelUserCount: count }),
}));

export default useStore;