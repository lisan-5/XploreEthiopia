import { create } from 'zustand';

interface User {
  id: string;
  email: string;
  username: string;
}

interface AuthState {
  user: User | null;
  setUser: (user: User | null) => void;
  signUp: (email: string, password: string, username: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
}

// Helper function to generate a random ID
const generateId = () => Math.random().toString(36).substr(2, 9);

export const useAuthStore = create<AuthState>((set) => {
  // Try to get user from localStorage on initialization
  const storedUser = localStorage.getItem('user');
  const initialUser = storedUser ? JSON.parse(storedUser) : null;

  return {
    user: initialUser,
    setUser: (user) => {
      set({ user });
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        localStorage.removeItem('user');
      }
    },
    signUp: async (email, password, username) => {
      // Store user credentials
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const existingUser = users.find((u: any) => u.email === email);
      
      if (existingUser) {
        throw new Error('User already exists');
      }

      const newUser = {
        id: generateId(),
        email,
        password, // In a real app, this should be hashed
        username
      };

      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));

      // Set current user
      const userWithoutPassword = {
        id: newUser.id,
        email: newUser.email,
        username: newUser.username
      };
      set({ user: userWithoutPassword });
      localStorage.setItem('user', JSON.stringify(userWithoutPassword));
    },
    signIn: async (email, password) => {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find((u: any) => u.email === email && u.password === password);

      if (!user) {
        throw new Error('Invalid email or password');
      }

      const userWithoutPassword = {
        id: user.id,
        email: user.email,
        username: user.username
      };
      set({ user: userWithoutPassword });
      localStorage.setItem('user', JSON.stringify(userWithoutPassword));
    },
    signOut: () => {
      set({ user: null });
      localStorage.removeItem('user');
    }
  };
});