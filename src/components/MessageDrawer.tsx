import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from './ui/sheet';
import { Button } from './ui/button';
import { Avatar } from './ui/avatar';
import { Badge } from './ui/badge';

type Conversation = {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread?: number;
  role: 'buyer' | 'seller';
};

const recentConversations: Conversation[] = [
  { id: '1', name: 'Dr. Emily Carter', avatar: 'https://i.pravatar.cc/100?img=5', lastMessage: 'Your report is ready.', time: '2m', unread: 1, role: 'seller' },
  { id: '2', name: 'You · Blood Test', avatar: 'https://i.pravatar.cc/100?img=10', lastMessage: 'Thanks! Will do.', time: '1h', role: 'buyer' },
  { id: '3', name: 'Robert Taylor', avatar: 'https://i.pravatar.cc/100?img=8', lastMessage: 'Approved your offer', time: '3h', unread: 2, role: 'seller' },
];

export function MessageDrawer({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  const [items] = useState(recentConversations);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-[380px] sm:w-[420px] p-0">
        <SheetHeader className="p-4 border-b">
          <SheetTitle>Recent Messages</SheetTitle>
        </SheetHeader>
        <div className="p-2">
          <div className="space-y-1">
            {items.map((c) => (
              <Link key={c.id} to={`/messages?open=${c.id}`} onClick={() => onOpenChange(false)}>
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent cursor-pointer">
                  <Avatar className="h-10 w-10">
                    <img src={c.avatar} alt={c.name} />
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-sm truncate">{c.name}</p>
                      <span className="text-xs text-muted-foreground">{c.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">{c.lastMessage}</p>
                  </div>
                  {c.unread ? (
                    <Badge className="bg-green-500 text-white">{c.unread}</Badge>
                  ) : null}
                </div>
              </Link>
            ))}
          </div>
          <div className="p-3 border-t mt-2">
            <Link to="/messages" onClick={() => onOpenChange(false)}>
              <Button className="w-full">View all messages</Button>
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
