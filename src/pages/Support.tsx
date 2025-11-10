import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MessageSquare, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

export default function Support() {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const tickets = [
    {
      id: 'TKT-2024-001',
      subject: 'Question about project timeline',
      status: 'Open',
      priority: 'Medium',
      date: '2024-01-22',
      lastReply: '2 hours ago'
    },
    {
      id: 'TKT-2024-002',
      subject: 'Payment confirmation needed',
      status: 'Resolved',
      priority: 'High',
      date: '2024-01-20',
      lastReply: '1 day ago'
    },
    {
      id: 'TKT-2023-045',
      subject: 'Feature request for mobile app',
      status: 'In Progress',
      priority: 'Low',
      date: '2024-01-18',
      lastReply: '3 days ago'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Open':
        return <AlertCircle className="h-4 w-4" />;
      case 'In Progress':
        return <Clock className="h-4 w-4" />;
      case 'Resolved':
        return <CheckCircle className="h-4 w-4" />;
      default:
        return <MessageSquare className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open':
        return 'bg-primary/20 text-primary border-primary/50';
      case 'In Progress':
        return 'bg-yellow-500/20 text-yellow-500 border-yellow-500/50';
      case 'Resolved':
        return 'bg-green-500/20 text-green-500 border-green-500/50';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'bg-destructive/20 text-destructive border-destructive/50';
      case 'Medium':
        return 'bg-yellow-500/20 text-yellow-500 border-yellow-500/50';
      case 'Low':
        return 'bg-green-500/20 text-green-500 border-green-500/50';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Ticket submitted!",
      description: "Our team will respond within 24 hours.",
    });
    setSubject('');
    setMessage('');
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">Support & Messages</h1>
        <p className="text-muted-foreground">
          Get help and communicate with our team
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* New Ticket Form */}
        <Card className="glass glass-hover border-border/50 transition-all duration-300">
          <CardHeader>
            <CardTitle>Create New Ticket</CardTitle>
            <CardDescription>Submit your question or issue</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  placeholder="Brief description of your issue"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  className="bg-input/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Provide detailed information about your question or issue"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={6}
                  className="bg-input/50 resize-none"
                />
              </div>
              <Button type="submit" className="w-full glow-hover transition-all">
                Submit Ticket
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Active Tickets */}
        <Card className="glass glass-hover border-border/50 transition-all duration-300">
          <CardHeader>
            <CardTitle>Your Tickets</CardTitle>
            <CardDescription>View and manage your support tickets</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {tickets.map((ticket) => (
                <div
                  key={ticket.id}
                  className="p-4 rounded-lg border border-border/50 bg-card/50 hover:bg-card/80 transition-colors space-y-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(ticket.status)}
                        <h4 className="font-medium text-foreground text-sm">
                          {ticket.subject}
                        </h4>
                      </div>
                      <p className="text-xs text-muted-foreground">{ticket.id}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Badge className={getStatusColor(ticket.status)} variant="outline">
                      {ticket.status}
                    </Badge>
                    <Badge className={getPriorityColor(ticket.priority)} variant="outline">
                      {ticket.priority}
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Created {ticket.date}</span>
                    <span>Last reply {ticket.lastReply}</span>
                  </div>

                  <Button variant="outline" size="sm" className="w-full hover:border-primary/50 transition-all">
                    View Conversation
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
