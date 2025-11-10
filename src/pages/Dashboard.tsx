import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { FolderKanban, DollarSign, FileText, MessageSquare, TrendingUp, Clock } from 'lucide-react';

export default function Dashboard() {
  const { user } = useAuth();

  const stats = [
    {
      title: 'Active Projects',
      value: '4',
      change: '+2 this month',
      icon: FolderKanban,
      color: 'text-primary'
    },
    {
      title: 'Total Spend',
      value: '$12,450',
      change: '+18% from last month',
      icon: DollarSign,
      color: 'text-primary'
    },
    {
      title: 'Invoices Due',
      value: '2',
      change: 'Due in 7 days',
      icon: FileText,
      color: 'text-destructive'
    },
    {
      title: 'Support Tickets',
      value: '1',
      change: 'Open ticket',
      icon: MessageSquare,
      color: 'text-primary'
    }
  ];

  const recentProjects = [
    {
      name: 'E-commerce Platform',
      progress: 75,
      status: 'In Progress',
      dueDate: '2024-02-15',
      value: '$5,200'
    },
    {
      name: 'Mobile App Development',
      progress: 45,
      status: 'In Progress',
      dueDate: '2024-03-01',
      value: '$8,500'
    },
    {
      name: 'Brand Identity Design',
      progress: 90,
      status: 'Review',
      dueDate: '2024-01-20',
      value: '$2,800'
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">
          Welcome back, {user?.name}! 👋
        </h1>
        <p className="text-muted-foreground">
          Here's an overview of your projects and activities
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="glass glass-hover border-border/50 transition-all duration-300 hover:scale-[1.02]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Projects */}
      <Card className="glass glass-hover border-border/50 transition-all duration-300">
        <CardHeader>
          <CardTitle className="text-2xl">Recent Projects</CardTitle>
          <CardDescription>Track your ongoing projects and their progress</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {recentProjects.map((project) => (
              <div key={project.name} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h4 className="text-sm font-medium text-foreground">{project.name}</h4>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        Due {project.dueDate}
                      </span>
                      <span>•</span>
                      <span>{project.value}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-foreground">{project.progress}%</div>
                    <div className="text-xs text-muted-foreground">{project.status}</div>
                  </div>
                </div>
                <Progress value={project.progress} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
