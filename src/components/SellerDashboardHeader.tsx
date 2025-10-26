import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../lib/auth.tsx';
import { useProjectSearch } from '../contexts/ProjectSearchContext';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Avatar } from './ui/avatar';
import { Input } from './ui/input';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import { MessageDrawer } from './MessageDrawer';
import { NotificationDrawer } from './NotificationDrawer';
import { HelpDrawer } from './HelpDrawer';
import {
  Search,
  Bell,
  MessageSquare,
  User,
  Settings,
  CreditCard,
  BookOpen,
  Heart,
  LogOut,
  Menu,
  MapPin,
  Plus,
  Filter,
  Briefcase,
  Target,
  TrendingUp,
  Package,
  DollarSign
} from 'lucide-react';

export function SellerDashboardHeader() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [messagesOpen, setMessagesOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const {
    projectQuery,
    setProjectQuery,
    projectLocation,
    setProjectLocation,
    specialty,
    setSpecialty,
    searchProjects
  } = useProjectSearch();

  // Ref for search input to control focus
  const searchInputRef = useRef<HTMLInputElement>(null);

  const specialtyOptions = [
    'CQC Registration',
    'Business Consulting',
    'Care Software',
    'Training Services',
    'Accounting',
    'Immigration Services',
    'Healthcare Compliance',
    'Nursing Home Setup'
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top Bar with Stats */}
        <div className="h-12 flex items-center justify-between border-b border-gray-100">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium">£12,450</span>
              <span className="text-xs text-gray-500">monthly earnings</span>
            </div>
            <div className="flex items-center space-x-2">
              <Package className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium">24</span>
              <span className="text-xs text-gray-500">active projects</span>
            </div>
            <div className="flex items-center space-x-2">
              <Target className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-medium">4.9</span>
              <span className="text-xs text-gray-500">avg rating</span>
            </div>
          </div>

          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => navigate(`/home/sellers/${user?.id || '123'}`)}
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">PH</span>
              </div>
              <span className="font-bold text-lg">Providers Hub</span>
            </button>
          </div>
        </div>

        {/* Main Header */}
        <div className="h-16 flex items-center justify-between">
          {/* Left - Project Search */}
          <div className="flex-1 max-w-4xl mx-8">
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search projects by keyword..."
                  className="w-full pl-10"
                  value={projectQuery}
                  name="project-search"
                  id="project-search-input"
                  onChange={(e) => setProjectQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      searchInputRef.current?.blur();
                      searchProjects();
                    }
                  }}
                />
              </div>
              <div className="relative w-40">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Location"
                  className="w-full pl-10"
                  value={projectLocation}
                  name="project-location"
                  id="project-location-input"
                  onChange={(e) => setProjectLocation(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      searchProjects();
                    }
                  }}
                />
              </div>
              <select
                className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
              >
                <option value="">All Specialties</option>
                {specialtyOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              <Button onClick={() => {
                searchInputRef.current?.blur();
                searchProjects();
              }}>
                <Search className="mr-2 h-4 w-4" /> Find Projects
              </Button>
              <Button onClick={() => navigate('/create-service')} variant="outline">
                <Plus className="mr-2 h-4 w-4" /> Create Service
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
            <Button variant="ghost" size="icon">
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
                        Premium Seller
                      </Badge>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Package className="mr-2 h-4 w-4" />
                  My Projects
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <DollarSign className="mr-2 h-4 w-4" />
                  Earnings
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/seller/portfolio')}>
                  <BookOpen className="mr-2 h-4 w-4" />
                  Portfolio
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Account Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CreditCard className="mr-2 h-4 w-4" />
                  Payment Methods
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Heart className="mr-2 h-4 w-4" />
                  Saved Projects
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
