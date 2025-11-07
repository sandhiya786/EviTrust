import { Link } from "react-router-dom";
import { Shield, Lock, Globe, Zap, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-blockchain.jpg";

export default function Landing() {
  const features = [
    {
      icon: Shield,
      title: "Blockchain Security",
      description: "Immutable chain-of-custody with cryptographic verification for every evidence transaction.",
    },
    {
      icon: Lock,
      title: "GDPR Compliant",
      description: "Privacy-first architecture with selective sharing and encrypted storage systems.",
    },
    {
      icon: Globe,
      title: "Cross-Border Ready",
      description: "Seamless international collaboration between law enforcement agencies worldwide.",
    },
    {
      icon: Zap,
      title: "AI-Powered Analysis",
      description: "Machine learning detects tampering and suggests relevant evidence automatically.",
    },
  ];

  const benefits = [
    "Reduces verification time from weeks to minutes",
    "Transparent audit trails prevent data tampering",
    "Builds trust between global agencies",
    "Privacy-preserving collaboration",
  ];

  return (
    <div className="min-h-screen bg-gradient-dark">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-primary animate-glow" />
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              EviTrust
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/auth">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link to="/auth">
              <Button variant="hero">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={heroImage} alt="Blockchain Security" className="w-full h-full object-cover" />
        </div>
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Secure, Fast, and Trusted{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Digital Evidence Sharing
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Blockchain-powered platform enabling law enforcement agencies to share, verify, and store
              digital evidence securely across borders with tamper-proof integrity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth">
                <Button variant="hero" size="lg" className="gap-2">
                  Start Securing Evidence
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built for Global Law Enforcement
          </h2>
          <p className="text-muted-foreground text-lg">
            Enterprise-grade security meets intuitive design
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/50 backdrop-blur-sm border-border">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Impact & Benefits</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    <p className="text-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Link to="/auth">
                  <Button variant="hero" size="lg">
                    Join EviTrust Platform
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-semibold">EviTrust</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 EviTrust. Securing digital evidence globally.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}