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
  Bell,
  MessageSquare,
  BookOpen,
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
import { HelpDrawer } from './HelpDrawer';

export function HeaderUserMenu() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [messagesOpen, setMessagesOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);

  return (
    <>
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
      <MessageDrawer open={messagesOpen} onOpenChange={setMessagesOpen} />
      <NotificationDrawer open={notificationsOpen} onOpenChange={setNotificationsOpen} />
      <HelpDrawer open={helpOpen} onOpenChange={setHelpOpen} />
    </>
  );
}
