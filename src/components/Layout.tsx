import { Link, useLocation } from "react-router-dom";
import { Shield, Upload, CheckCircle2, FileSearch, Brain, LayoutDashboard, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
}

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Upload Evidence", href: "/upload", icon: Upload },
  { name: "Verify Evidence", href: "/verify", icon: CheckCircle2 },
  { name: "Access Requests", href: "/requests", icon: FileSearch },
  { name: "ML Insights", href: "/insights", icon: Brain },
];

export function Layout({ children }: LayoutProps) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-dark">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <Shield className="h-8 w-8 text-primary group-hover:animate-glow" />
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              EviTrust
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary",
                    isActive ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <Button variant="ghost" size="sm">
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}