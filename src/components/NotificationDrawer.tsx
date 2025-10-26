import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from './ui/sheet';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Bell } from 'lucide-react';

type NotificationItem = {
  id: string;
  title: string;
  description: string;
  time: string;
  unread?: boolean;
  type: 'order' | 'message' | 'system';
};

const recentNotifications: NotificationItem[] = [
  { id: 'n1', title: 'Order #2431 updated', description: 'Seller sent a delivery update', time: '5m', unread: true, type: 'order' },
  { id: 'n2', title: 'New message from Emily', description: 'Can we reschedule?', time: '45m', type: 'message' },
  { id: 'n3', title: 'Payout processed', description: '£240.00 has been sent to your account', time: '2h', type: 'system' },
];

export function NotificationDrawer({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  const [items] = useState(recentNotifications);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-[360px] sm:w-[400px] p-0">
        <SheetHeader className="p-4 border-b">
          <SheetTitle className="flex items-center gap-2">
            <Bell className="h-4 w-4" /> Notifications
          </SheetTitle>
        </SheetHeader>
        <div className="p-2">
          <div className="space-y-1">
            {items.map((n) => (
              <div key={n.id} className="p-3 rounded-lg hover:bg-accent cursor-pointer">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-sm">{n.title}</p>
                  <span className="text-xs text-muted-foreground">{n.time}</span>
                </div>
                <p className="text-sm text-muted-foreground">{n.description}</p>
                {n.unread ? <Badge className="mt-2 bg-blue-600 text-white">New</Badge> : null}
              </div>
            ))}
          </div>
          <div className="p-3 border-t mt-2">
            <Link to="/notifications" onClick={() => onOpenChange(false)}>
              <Button className="w-full">View all notifications</Button>
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
