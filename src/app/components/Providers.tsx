'use client';

import { ReactNode } from 'react';
import { NotificationProvider } from '../contexts/NotificationContext';
import { UserProvider } from '../../contexts/UserContext';
import { Toaster } from 'react-hot-toast';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <UserProvider>
      <NotificationProvider>
        {children}
        <Toaster position="top-right" />
      </NotificationProvider>
    </UserProvider>
  );
} 