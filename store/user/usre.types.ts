export type UserState = {
  user: User | null;
}

export type User = {
  id: string;
  name: string;
  email: string;
  role: string;
}

export type UserStore = {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}