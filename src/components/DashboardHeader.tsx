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
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top Bar with Stats */}
        <div className="h-12 flex items-center justify-between border-b border-gray-100">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium">12</span>
              <span className="text-xs text-gray-500">active orders</span>
            </div>
            <div className="flex items-center space-x-2">
              <MessageSquare className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium">5</span>
              <span className="text-xs text-gray-500">unread messages</span>
            </div>
            <div className="flex items-center space-x-2">
              <Package className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-medium">£8,450</span>
              <span className="text-xs text-gray-500">total spent</span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              Active
            </Badge>
            <span className="text-sm text-gray-600">Last login: 2 hours ago</span>
          </div>
        </div>

        {/* Main Header */}
        <div className="h-16 flex items-center justify-between">
          {/* Left - Logo */}
          <div className="flex items-center">
            <button
              onClick={() => navigate(`/home/${user?.id || '123'}`)}
              className="text-xl font-bold text-primary hover:text-primary/80 transition-colors"
            >
              Providers Hub
            </button>
          </div>

          {/* Center - Search */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search services..."
                  className="w-full pl-10"
                  value={searchQuery}
                  name="search"
                  id="search-input"
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      searchInputRef.current?.blur();
                      performSearch();
                    }
                  }}
                  onFocus={() => setShowSuggestions(true)}
                  onBlur={() => {
                    // Delay hiding suggestions to allow clicking on them
                    setTimeout(() => setShowSuggestions(false), 150);
                  }}
                />
                {/* Suggestions Dropdown */}
                {showSuggestions && suggestions.length > 0 && (
                  <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-md shadow-lg mt-1 z-50 max-h-60 overflow-y-auto">
                    {suggestions.map((suggestion, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm"
                        onMouseDown={(e) => {
                          e.preventDefault();
                          setSearchQuery(suggestion);
                          setShowSuggestions(false);
                          // Blur input and perform search with the selected suggestion
                          searchInputRef.current?.blur();
                          performSearch(suggestion);
                        }}
                      >
                        <Search className="inline h-3 w-3 mr-2 text-gray-400" />
                        {suggestion}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="relative w-36">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Postcode"
                  className="w-full pl-10"
                  value={location}
                  name="location"
                  id="location-input"
                  onChange={(e) => setLocation(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      performSearch();
                    }
                  }}
                />
              </div>
              <Button onClick={() => {
                searchInputRef.current?.blur();
                performSearch();
              }}>
                <Search className="mr-2 h-4 w-4" /> Search
              </Button>
              <Button onClick={() => {
                searchInputRef.current?.blur();
                navigate('/post-project');
              }}>
                <Plus className="mr-2 h-4 w-4" /> Post a Project
              </Button>
            </div>
          </div>

          {/* Right - User Menu */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="relative" onClick={() => setNotificationsOpen(true)}>
              <Bell className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-red-500 text-white">
                3
              </Badge>
            </Button>
            <Button variant="ghost" size="icon" className="relative" onClick={() => setMessagesOpen(true)}>
              <MessageSquare className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-red-500 text-white">
                5
              </Badge>
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setHelpOpen(true)}>
              <BookOpen className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => navigate('/favorites')}>
              <Heart className="h-5 w-5" />
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
                    <div className="flex items-center space-x-2 mt-2">
                      <Badge variant="secondary" className="text-xs">
                        Premium Member
                      </Badge>
                    </div>
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
                <DropdownMenuItem onClick={() => navigate('/saved-services')}>
                  <BookOpen className="mr-2 h-4 w-4" />
                  Saved Services
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/account-settings')}>
                  <Settings className="mr-2 h-4 w-4" />
                  Account Settings
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/payment-methods')}>
                  <CreditCard className="mr-2 h-4 w-4" />
                  Payment Methods
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
      <MessageDrawer open={messagesOpen} onOpenChange={setMessagesOpen} />
      <NotificationDrawer open={notificationsOpen} onOpenChange={setNotificationsOpen} />
      <HelpDrawer open={helpOpen} onOpenChange={setHelpOpen} />
    </header>
  );
}