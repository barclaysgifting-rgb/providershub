import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../lib/auth.tsx';
import { useSearch } from '../contexts/SearchContext';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Avatar } from './ui/avatar';
import { Badge } from './ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import {
  Bell,
  MessageSquare,
  Package,
  Search,
  MapPin,
  Plus,
  TrendingUp,
  DollarSign,
  Star,
  User,
  Settings,
  CreditCard,
  BookOpen,
  Heart,
  LogOut,
  Menu
} from 'lucide-react';

import { MessageDrawer } from './MessageDrawer';
import { NotificationDrawer } from './NotificationDrawer';
import { HelpDrawer } from './HelpDrawer';
import { HeaderLogo } from './HeaderLogo';
import { HeaderSearchBar } from './HeaderSearchBar';
import { HeaderActionButtons } from './HeaderActionButtons';
import { HeaderUserMenu } from './HeaderUserMenu';

export function DashboardHeader() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const {
    searchQuery,
    setSearchQuery,
    location,
    setLocation,
    suggestions,
    showSuggestions,
    setShowSuggestions,
    performSearch
  } = useSearch();
  const [messagesOpen, setMessagesOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);

  // Ref for search input to control focus
  const searchInputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
        <div className="container mx-auto px-4">
          {/* Top Bar with Stats */}
          <div className="h-12 flex items-center justify-between border-b border-gray-100">
            <div className="flex items-center space-x-3 md:space-x-6">
              <div className="hidden sm:flex items-center space-x-2">
                <TrendingUp className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium">12</span>
                <span className="text-xs text-gray-500">active orders</span>
              </div>
              <div className="hidden sm:flex items-center space-x-2">
                <MessageSquare className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium">5</span>
                <span className="text-xs text-gray-500">unread messages</span>
              </div>
              <div className="hidden md:flex items-center space-x-2">
                <Package className="h-4 w-4 text-purple-600" />
                <span className="text-sm font-medium">£8,450</span>
                <span className="text-xs text-gray-500">total spent</span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                Active
              </Badge>
              <span className="hidden md:inline text-sm text-gray-600">Last login: 2 hours ago</span>
            </div>
          </div>

          {/* Main Header - Hidden on mobile */}
          <div className="hidden md:flex h-16 items-center justify-between">
            {/* Left - Logo */}
            <HeaderLogo />

            {/* Center - Search */}
            <HeaderSearchBar />

            {/* Right - User Menu */}
            <HeaderUserMenu />
          </div>

          {/* Mobile Header - Simple version */}
          <div className="md:hidden h-16 flex items-center justify-between">
            <div className="flex items-center flex-1">
              <HeaderLogo />
            </div>
            <div className="flex items-center space-x-1">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate('/messages')}
                className="relative"
              >
                <MessageSquare className="h-5 w-5" />
                <Badge className="hidden md:flex absolute -top-1 -right-1 h-4 w-4 rounded-full p-0 items-center justify-center text-xs bg-red-500 text-white">
                  5
                </Badge>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate('/post-project')}
              >
                <Plus className="h-5 w-5" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <img src={user?.avatar} alt={user?.name} />
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
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
                  <DropdownMenuItem onClick={() => navigate('/favorites')}>
                    <Heart className="mr-2 h-4 w-4" />
                    Favorites
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => logout()}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>

      <MessageDrawer open={messagesOpen} onOpenChange={setMessagesOpen} />
      <NotificationDrawer open={notificationsOpen} onOpenChange={setNotificationsOpen} />
      <HelpDrawer open={helpOpen} onOpenChange={setHelpOpen} />
    </>
  );
}