import React from 'react';
import { DashboardHeader } from './DashboardHeader';
import { MobileBottomNavbar } from './MobileBottomNavbar';

interface SellerDashboardLayoutProps {
  children: React.ReactNode;
}

export function SellerDashboardLayout({ children }: SellerDashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <MobileBottomNavbar />
      {children}
    </div>
  );
}
