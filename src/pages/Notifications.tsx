import { DashboardHeader } from '../components/DashboardHeader';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';

type NotificationItem = {
  id: string;
  title: string;
  description: string;
  time: string;
  unread?: boolean;
  type: 'order' | 'message' | 'system';
};

const allNotifications: NotificationItem[] = [
  { id: 'n1', title: 'Order #2431 updated', description: 'Seller sent a delivery update', time: '5m', unread: true, type: 'order' },
  { id: 'n2', title: 'New message from Emily', description: 'Can we reschedule?', time: '45m', type: 'message' },
  { id: 'n3', title: 'Payout processed', description: '£240.00 has been sent to your account', time: '2h', type: 'system' },
  { id: 'n4', title: 'New review received', description: '5.0 stars from Robert Taylor', time: '1d', type: 'system' },
];

export default function NotificationsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <main className="container mx-auto px-4 py-6">
        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" className="w-full">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="order">Orders</TabsTrigger>
                <TabsTrigger value="message">Messages</TabsTrigger>
                <TabsTrigger value="system">System</TabsTrigger>
              </TabsList>

              {['all','order','message','system'].map((tab) => (
                <TabsContent key={tab} value={tab}>
                  <div className="space-y-2">
                    {allNotifications
                      .filter(n => tab==='all' ? true : n.type === tab)
                      .map(n => (
                        <div key={n.id} className="p-3 rounded-lg border hover:bg-accent">
                          <div className="flex items-center justify-between">
                            <p className="font-medium text-sm">{n.title}</p>
                            <span className="text-xs text-muted-foreground">{n.time}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{n.description}</p>
                          {n.unread ? <Badge className="mt-2 bg-blue-600 text-white">New</Badge> : null}
                        </div>
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
