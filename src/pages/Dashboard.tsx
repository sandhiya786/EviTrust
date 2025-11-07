import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, CheckCircle2, Clock, AlertTriangle, TrendingUp, Shield } from "lucide-react";

export default function Dashboard() {
  const stats = [
    {
      title: "Total Evidence Files",
      value: "1,247",
      change: "+12.5%",
      icon: FileText,
      color: "text-primary",
    },
    {
      title: "Verified Evidence",
      value: "1,189",
      change: "+8.2%",
      icon: CheckCircle2,
      color: "text-success",
    },
    {
      title: "Pending Requests",
      value: "23",
      change: "-5.1%",
      icon: Clock,
      color: "text-warning",
    },
    {
      title: "Tamper Alerts",
      value: "3",
      change: "-15.3%",
      icon: AlertTriangle,
      color: "text-destructive",
    },
  ];

  const recentActivity = [
    {
      id: 1,
      action: "Evidence Uploaded",
      file: "Case_2024_001_Video.mp4",
      agency: "Metropolitan Police",
      time: "2 minutes ago",
      status: "verified",
    },
    {
      id: 2,
      action: "Access Granted",
      file: "Case_2024_045_Images.zip",
      agency: "Interpol",
      time: "15 minutes ago",
      status: "approved",
    },
    {
      id: 3,
      action: "Verification Complete",
      file: "Case_2023_892_Documents.pdf",
      agency: "FBI",
      time: "1 hour ago",
      status: "verified",
    },
    {
      id: 4,
      action: "Access Request",
      file: "Case_2024_012_Audio.wav",
      agency: "Europol",
      time: "3 hours ago",
      status: "pending",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "verified":
        return "success";
      case "approved":
        return "success";
      case "pending":
        return "warning";
      default:
        return "secondary";
    }
  };

  return (
    <Layout>
      <div className="space-y-8 animate-fade-in">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's an overview of your evidence management activity.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="bg-card border-border hover:border-primary/30 transition-all">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                  <Icon className={`h-4 w-4 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    <span className={stat.change.startsWith("+") ? "text-success" : "text-destructive"}>
                      {stat.change}
                    </span>{" "}
                    from last month
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Recent Activity */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest evidence transactions and verifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-start justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <div className="space-y-1 flex-1">
                      <p className="text-sm font-medium">{activity.action}</p>
                      <p className="text-xs text-muted-foreground font-mono">{activity.file}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">{activity.agency}</span>
                        <span className="text-xs text-muted-foreground">•</span>
                        <span className="text-xs text-muted-foreground">{activity.time}</span>
                      </div>
                    </div>
                    <Badge variant={getStatusColor(activity.status) as any}>
                      {activity.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* System Status */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>System Status</CardTitle>
              <CardDescription>Blockchain and ML analytics overview</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-success" />
                    <span className="text-sm font-medium">Blockchain Network</span>
                  </div>
                  <Badge variant="success">Active</Badge>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-success h-2 rounded-full" style={{ width: "98%" }} />
                </div>
                <p className="text-xs text-muted-foreground">98% uptime • 247 nodes active</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">ML Analysis Engine</span>
                  </div>
                  <Badge variant="success">Operational</Badge>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "95%" }} />
                </div>
                <p className="text-xs text-muted-foreground">95% accuracy • 1,203 files processed today</p>
              </div>

              <div className="pt-4 border-t border-border">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Storage Used</span>
                  <span className="font-medium">2.4 TB / 10 TB</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2 mt-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "24%" }} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}