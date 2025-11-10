import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download, Eye, CreditCard } from 'lucide-react';

export default function Invoices() {
  const invoices = [
    {
      id: 'INV-2024-001',
      project: 'E-commerce Platform',
      amount: '$5,200',
      status: 'Paid',
      date: '2024-01-15',
      dueDate: '2024-01-30'
    },
    {
      id: 'INV-2024-002',
      project: 'Mobile App Development',
      amount: '$4,250',
      status: 'Pending',
      date: '2024-01-20',
      dueDate: '2024-02-05'
    },
    {
      id: 'INV-2024-003',
      project: 'Brand Identity Design',
      amount: '$2,800',
      status: 'Paid',
      date: '2024-01-10',
      dueDate: '2024-01-25'
    },
    {
      id: 'INV-2023-012',
      project: 'SEO Optimization',
      amount: '$1,500',
      status: 'Paid',
      date: '2023-12-15',
      dueDate: '2023-12-30'
    },
    {
      id: 'INV-2024-004',
      project: 'Mobile App Development',
      amount: '$4,250',
      status: 'Pending',
      date: '2024-02-01',
      dueDate: '2024-02-15'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Paid':
        return 'bg-green-500/20 text-green-500 border-green-500/50';
      case 'Pending':
        return 'bg-yellow-500/20 text-yellow-500 border-yellow-500/50';
      case 'Overdue':
        return 'bg-destructive/20 text-destructive border-destructive/50';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">Invoices & Payments</h1>
        <p className="text-muted-foreground">
          Manage your invoices and payment history
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="glass glass-hover border-border/50 transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Invoiced
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">$18,000</div>
            <p className="text-xs text-muted-foreground mt-1">Across 5 invoices</p>
          </CardContent>
        </Card>
        <Card className="glass glass-hover border-border/50 transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Paid Amount
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-500">$9,500</div>
            <p className="text-xs text-muted-foreground mt-1">3 invoices paid</p>
          </CardContent>
        </Card>
        <Card className="glass glass-hover border-border/50 transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Outstanding
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-yellow-500">$8,500</div>
            <p className="text-xs text-muted-foreground mt-1">2 invoices pending</p>
          </CardContent>
        </Card>
      </div>

      {/* Invoices Table */}
      <Card className="glass glass-hover border-border/50 transition-all duration-300">
        <CardHeader>
          <CardTitle>Invoice History</CardTitle>
          <CardDescription>View and download your invoices</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {invoices.map((invoice) => (
              <div
                key={invoice.id}
                className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-lg border border-border/50 bg-card/50 hover:bg-card/80 transition-colors gap-4"
              >
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-3">
                    <h4 className="font-medium text-foreground">{invoice.id}</h4>
                    <Badge className={getStatusColor(invoice.status)} variant="outline">
                      {invoice.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{invoice.project}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>Issued: {invoice.date}</span>
                    <span>•</span>
                    <span>Due: {invoice.dueDate}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-xl font-bold text-foreground">{invoice.amount}</div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" className="h-9 w-9 hover:border-primary/50 transition-all">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="h-9 w-9 hover:border-primary/50 transition-all">
                      <Download className="h-4 w-4" />
                    </Button>
                    {invoice.status === 'Pending' && (
                      <Button size="sm" className="glow-hover transition-all">
                        <CreditCard className="h-4 w-4 mr-2" />
                        Pay Now
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
