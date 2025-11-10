import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

export default function Analytics() {
  const spendingData = [
    { month: 'Jan', amount: 2400 },
    { month: 'Feb', amount: 1398 },
    { month: 'Mar', amount: 4800 },
    { month: 'Apr', amount: 3908 },
    { month: 'May', amount: 4800 },
    { month: 'Jun', amount: 3800 }
  ];

  const projectTypeData = [
    { name: 'Web Development', value: 45 },
    { name: 'Mobile Apps', value: 25 },
    { name: 'Design', value: 20 },
    { name: 'Marketing', value: 10 }
  ];

  const performanceData = [
    { month: 'Jan', projects: 2 },
    { month: 'Feb', projects: 3 },
    { month: 'Mar', projects: 4 },
    { month: 'Apr', projects: 3 },
    { month: 'May', projects: 5 },
    { month: 'Jun', projects: 4 }
  ];

  const COLORS = [
    'hsl(72 65% 66%)',   // Lime Mist
    'hsl(122 21% 55%)',  // Verdant Slate
    'hsl(72 55% 56%)',   // Darker Lime
    'hsl(122 21% 45%)'   // Darker Verdant
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">Analytics</h1>
        <p className="text-muted-foreground">
          Track your spending, project performance, and business insights
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Spending Over Time */}
        <Card className="glass glass-hover border-border/50 transition-all duration-300">
          <CardHeader>
            <CardTitle>Monthly Spending</CardTitle>
            <CardDescription>Your investment over the last 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={spendingData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="amount" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Project Distribution */}
        <Card className="glass glass-hover border-border/50 transition-all duration-300">
          <CardHeader>
            <CardTitle>Project Distribution</CardTitle>
            <CardDescription>Breakdown by project type</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={projectTypeData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {projectTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Project Performance */}
        <Card className="glass glass-hover border-border/50 md:col-span-2 transition-all duration-300">
          <CardHeader>
            <CardTitle>Project Completion Trend</CardTitle>
            <CardDescription>Number of projects completed per month</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="projects"
                  stroke="hsl(var(--primary))"
                  strokeWidth={3}
                  dot={{ fill: 'hsl(var(--primary))', r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
