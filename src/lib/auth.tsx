import { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'provider' | 'client';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role?: 'provider' | 'client') => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // Dummy login function - replace with real auth later
  const login = async (email: string, password: string, role: 'provider' | 'client' = 'client') => {
    // Simulate API call
    const dummyUser: User = {
      id: 'user123',
      name: 'Sarah Johnson',
      email: email,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
      role: role,
    };
    setUser(dummyUser);
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};