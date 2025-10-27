import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../lib/auth.tsx';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Avatar } from './ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import {
  Home,
  Search,
  Plus,
  Bell,
  MessageSquare,
  Heart,
  User,
  Package,
  DollarSign,
  Settings,
  CreditCard,
  LogOut,
} from 'lucide-react';

import { MessageDrawer } from './MessageDrawer';
import { NotificationDrawer } from './NotificationDrawer';

export function MobileBottomNavbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [messagesOpen, setMessagesOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-gray-200/50 md:hidden rounded-t-3xl shadow-2xl">
        <div className="flex items-end justify-around px-3 py-2 pb-1">
          {/* Home */}
          <Button
            variant="ghost"
            size="icon"
            className="flex flex-col h-auto py-2 px-2 rounded-xl hover:bg-gray-100/80 transition-all duration-200"
            onClick={() => navigate(`/home/${user?.id || '123'}`)}
          >
            <Home className="h-5 w-5 text-gray-600 mb-1" />
            <span className="text-xs text-gray-600">Home</span>
          </Button>

          {/* Search */}
          <Button
            variant="ghost"
            size="icon"
            className="flex flex-col h-auto py-2 px-2 rounded-xl hover:bg-gray-100/80 transition-all duration-200"
            onClick={() => navigate('/searchresults')}
          >
            <Search className="h-5 w-5 text-gray-600 mb-1" />
            <span className="text-xs text-gray-600">Search</span>
          </Button>

          {/* Post Project - Mountain Peak Style */}
          <div className="relative -mb-2">
            <Button
              className="flex flex-col h-auto py-3 px-4 rounded-2xl bg-gradient-to-t from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 border-2 border-white/20"
              onClick={() => navigate('/post-project')}
            >
              <Plus className="h-6 w-6 mb-1" />
              <span className="text-xs font-medium">Post</span>
            </Button>
            {/* Mountain peak shadow effect */}
            <div className="absolute inset-0 rounded-2xl bg-black/10 -z-10 transform translate-y-1"></div>
          </div>

          {/* Notifications */}
          <Button
            variant="ghost"
            size="icon"
            className="flex flex-col h-auto py-2 px-2 rounded-xl hover:bg-gray-100/80 transition-all duration-200 relative"
            onClick={() => setNotificationsOpen(true)}
          >
            <div className="relative">
              <Bell className="h-5 w-5 text-gray-600 mb-1" />
              <Badge className="absolute -top-1 -right-1 h-4 w-4 rounded-full p-0 flex items-center justify-center text-xs bg-red-500 text-white min-w-[16px] shadow-sm">
                3
              </Badge>
            </div>
            <span className="text-xs text-gray-600">Alerts</span>
          </Button>

          {/* Profile */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex flex-col h-auto py-2 px-2 rounded-xl hover:bg-gray-100/80 transition-all duration-200 relative">
                <Avatar className="h-6 w-6 border-2 border-gray-200 mb-1">
                  <img src={user?.avatar} alt={user?.name} />
                </Avatar>
                <span className="text-xs text-gray-600">Profile</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" side="top" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">{user?.name}</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    {user?.email}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => navigate('/user-profile')}>
                <User className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate('/my-orders')}>
                <Package className="mr-2 h-4 w-4" />
                My Orders
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate('/payment-history')}>
                <DollarSign className="mr-2 h-4 w-4" />
                Payment History
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate('/favorites')}>
                <Heart className="mr-2 h-4 w-4" />
                Favorites
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate('/account-settings')}>
                <Settings className="mr-2 h-4 w-4" />
                Account Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => logout()}>
                <LogOut className="mr-2 h-4 w-4" />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>

      <MessageDrawer open={messagesOpen} onOpenChange={setMessagesOpen} />
      <NotificationDrawer open={notificationsOpen} onOpenChange={setNotificationsOpen} />
    </>
  );
}
