import React from 'react';
import { DashboardHeader } from './DashboardHeader';
import { MobileBottomNavbar } from './MobileBottomNavbar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <MobileBottomNavbar />
      {children}
    </div>
  );
}
