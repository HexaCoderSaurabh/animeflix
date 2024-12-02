import { create } from 'zustand'
import { User, UserState, UserStore } from './usre.types';

const initialState: UserState = {
  user: null,
};

export const useUserStore = create<UserStore>((set) => ({
  ...initialState,
  setUser: (user: User) => set({ user }),
  clearUser: () => set({ user: null }),
}));