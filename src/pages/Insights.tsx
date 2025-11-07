import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, AlertTriangle, CheckCircle2, TrendingUp, FileText } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function Insights() {
  const mlAnalytics = [
    {
      title: "Tamper Detection Accuracy",
      value: "97.8%",
      change: "+2.1%",
      status: "success",
    },
    {
      title: "Files Analyzed Today",
      value: "1,203",
      change: "+15%",
      status: "success",
    },
    {
      title: "Suspicious Activities",
      value: "3",
      change: "-8%",
      status: "warning",
    },
    {
      title: "Processing Speed",
      value: "2.4s avg",
      change: "-12%",
      status: "success",
    },
  ];

  const recentAnalysis = [
    {
      id: 1,
      fileName: "evidence_video_089.mp4",
      caseId: "CASE-2024-089",
      analysis: "No tampering detected",
      confidence: 98,
      status: "clean",
      timestamp: "5 minutes ago",
    },
    {
      id: 2,
      fileName: "evidence_images_045.zip",
      caseId: "CASE-2024-045",
      analysis: "Metadata inconsistency detected",
      confidence: 76,
      status: "suspicious",
      timestamp: "12 minutes ago",
    },
    {
      id: 3,
      fileName: "evidence_audio_067.wav",
      caseId: "CASE-2024-067",
      analysis: "Audio editing signatures found",
      confidence: 94,
      status: "tampered",
      timestamp: "1 hour ago",
    },
    {
      id: 4,
      fileName: "evidence_docs_112.pdf",
      caseId: "CASE-2024-112",
      analysis: "No tampering detected",
      confidence: 99,
      status: "clean",
      timestamp: "2 hours ago",
    },
  ];

  const getStatusVariant = (status: string): any => {
    switch (status) {
      case "clean":
        return "success";
      case "suspicious":
        return "warning";
      case "tampered":
        return "destructive";
      default:
        return "secondary";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "clean":
        return CheckCircle2;
      case "suspicious":
      case "tampered":
        return AlertTriangle;
      default:
        return FileText;
    }
  };

  return (
    <Layout>
      <div className="space-y-8 animate-fade-in">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold mb-2">ML Insights</h1>
          <p className="text-muted-foreground">
            AI-powered analysis for tamper detection and evidence verification
          </p>
        </div>

        {/* Analytics Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {mlAnalytics.map((metric, index) => (
            <Card key={index} className="bg-card border-border">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                <Brain className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  <span className={metric.status === "success" ? "text-success" : "text-warning"}>
                    {metric.change}
                  </span>{" "}
                  from yesterday
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Analysis */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle>Recent ML Analysis</CardTitle>
            <CardDescription>Latest tamper detection results from the AI engine</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAnalysis.map((item) => {
                const StatusIcon = getStatusIcon(item.status);
                return (
                  <div
                    key={item.id}
                    className="p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors space-y-3"
                  >
                    <div className="flex items-start justify-between">
                      <div className="space-y-1 flex-1">
                        <div className="flex items-center gap-3">
                          <p className="font-medium">{item.caseId}</p>
                          <Badge variant={getStatusVariant(item.status)}>
                            <StatusIcon className="h-3 w-3 mr-1" />
                            {item.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground font-mono">{item.fileName}</p>
                      </div>
                      <span className="text-xs text-muted-foreground">{item.timestamp}</span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Analysis Result:</span>
                        <span className="font-medium">{item.analysis}</span>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-muted-foreground">Confidence Level</span>
                          <span className="font-medium">{item.confidence}%</span>
                        </div>
                        <Progress value={item.confidence} className="h-2" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* ML Capabilities */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                Detection Capabilities
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">Image Manipulation Detection</p>
                  <p className="text-xs text-muted-foreground">
                    Identifies edited pixels, cloning, and composites
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">Video Integrity Analysis</p>
                  <p className="text-xs text-muted-foreground">
                    Detects frame splicing and timestamp manipulation
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">Audio Authentication</p>
                  <p className="text-xs text-muted-foreground">
                    Identifies editing artifacts and unnatural splices
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">Metadata Analysis</p>
                  <p className="text-xs text-muted-foreground">
                    Verifies timestamps, device info, and location data
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Smart Suggestions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                <p className="text-sm font-medium mb-1">Similar Case Pattern Detected</p>
                <p className="text-xs text-muted-foreground">
                  Evidence in CASE-2024-045 shows patterns similar to CASE-2023-892. Consider
                  linking investigations.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-warning/10 border border-warning/20">
                <p className="text-sm font-medium mb-1">Metadata Inconsistency Alert</p>
                <p className="text-xs text-muted-foreground">
                  3 files have timestamp gaps that may indicate manipulation. Review recommended.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-success/10 border border-success/20">
                <p className="text-sm font-medium mb-1">High Confidence Verification</p>
                <p className="text-xs text-muted-foreground">
                  Latest batch of 24 evidence files passed integrity checks with 98%+ confidence.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}