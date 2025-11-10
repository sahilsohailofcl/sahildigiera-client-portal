import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, DollarSign, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration',
      status: 'In Progress',
      progress: 75,
      startDate: '2024-01-10',
      dueDate: '2024-02-15',
      value: '$5,200',
      type: 'Web Development'
    },
    {
      id: 2,
      name: 'Mobile App Development',
      description: 'Cross-platform mobile application for iOS and Android',
      status: 'In Progress',
      progress: 45,
      startDate: '2024-01-15',
      dueDate: '2024-03-01',
      value: '$8,500',
      type: 'Mobile Development'
    },
    {
      id: 3,
      name: 'Brand Identity Design',
      description: 'Complete brand identity package including logo and guidelines',
      status: 'Review',
      progress: 90,
      startDate: '2023-12-20',
      dueDate: '2024-01-20',
      value: '$2,800',
      type: 'Design'
    },
    {
      id: 4,
      name: 'SEO Optimization',
      description: 'Comprehensive SEO audit and implementation',
      status: 'Completed',
      progress: 100,
      startDate: '2023-12-01',
      dueDate: '2023-12-30',
      value: '$1,500',
      type: 'Marketing'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Progress':
        return 'bg-primary/20 text-primary border-primary/50';
      case 'Review':
        return 'bg-yellow-500/20 text-yellow-500 border-yellow-500/50';
      case 'Completed':
        return 'bg-green-500/20 text-green-500 border-green-500/50';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">Projects</h1>
        <p className="text-muted-foreground">
          View and manage all your active and completed projects
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.id} className="glass glass-hover border-border/50">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-xl">{project.name}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </div>
                <Badge className={getStatusColor(project.status)} variant="outline">
                  {project.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium text-foreground">{project.progress}%</span>
                </div>
                <Progress value={project.progress} className="h-2" />
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Due Date</span>
                  </div>
                  <p className="font-medium text-foreground">{project.dueDate}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <DollarSign className="h-4 w-4" />
                    <span>Value</span>
                  </div>
                  <p className="font-medium text-foreground">{project.value}</p>
                </div>
              </div>

              <div className="pt-2">
                <Button variant="outline" className="w-full group">
                  View Details
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
