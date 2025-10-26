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

const allNotifications: NotificationItem[] = [];
// Database queries will populate this array; currently empty

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
