import { useAuth } from '../lib/auth.tsx';
import Dashboard from './Dashboard';
import SellerDashboard from './SellerDashboard';

export default function Home() {
  const { user } = useAuth();
  const role = user?.role;

  if (role === 'provider') {
    return <SellerDashboard />;
  }

  // Default to buyer dashboard
  return <Dashboard />;
}
