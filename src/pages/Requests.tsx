import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, Clock, FileSearch, Shield } from "lucide-react";
import { toast } from "sonner";

interface Request {
  id: number;
  caseId: string;
  fileName: string;
  requestedBy: string;
  requestDate: string;
  reason: string;
  status: "pending" | "approved" | "rejected";
}

export default function Requests() {
  const [requests, setRequests] = useState<Request[]>([
    {
      id: 1,
      caseId: "CASE-2024-045",
      fileName: "evidence_images_045.zip",
      requestedBy: "Interpol - Agent J. Smith",
      requestDate: "2024-01-20 09:15:00",
      reason: "Cross-border investigation - human trafficking case",
      status: "pending",
    },
    {
      id: 2,
      caseId: "CASE-2024-012",
      fileName: "evidence_audio_012.wav",
      requestedBy: "Europol - Detective M. Johnson",
      requestDate: "2024-01-19 16:22:00",
      reason: "International cybercrime investigation",
      status: "pending",
    },
    {
      id: 3,
      caseId: "CASE-2023-892",
      fileName: "evidence_documents_892.pdf",
      requestedBy: "FBI - Special Agent K. Williams",
      requestDate: "2024-01-18 11:45:00",
      reason: "Financial fraud investigation - shared jurisdiction",
      status: "approved",
    },
  ]);

  const handleApprove = (id: number) => {
    setRequests(
      requests.map((req) =>
        req.id === id ? { ...req, status: "approved" as const } : req
      )
    );
    toast.success("Access request approved");
  };

  const handleReject = (id: number) => {
    setRequests(
      requests.map((req) =>
        req.id === id ? { ...req, status: "rejected" as const } : req
      )
    );
    toast.error("Access request rejected");
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "success";
      case "rejected":
        return "destructive";
      case "pending":
        return "warning";
      default:
        return "secondary";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return CheckCircle2;
      case "rejected":
        return XCircle;
      case "pending":
        return Clock;
      default:
        return FileSearch;
    }
  };

  const pendingCount = requests.filter((r) => r.status === "pending").length;

  return (
    <Layout>
      <div className="space-y-8 animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Access Requests</h1>
            <p className="text-muted-foreground">
              Review and manage evidence access requests from other agencies
            </p>
          </div>
          <Badge variant="warning" className="text-lg px-4 py-2">
            {pendingCount} Pending
          </Badge>
        </div>

        {/* Requests List */}
        <div className="space-y-4">
          {requests.map((request) => {
            const StatusIcon = getStatusIcon(request.status);
            return (
              <Card
                key={request.id}
                className="bg-card border-border hover:border-primary/30 transition-all"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <CardTitle className="text-xl">{request.caseId}</CardTitle>
                        <Badge variant={getStatusColor(request.status) as any}>
                          <StatusIcon className="h-3 w-3 mr-1" />
                          {request.status}
                        </Badge>
                      </div>
                      <CardDescription className="font-mono text-sm">
                        {request.fileName}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Requested By</p>
                      <p className="font-medium">{request.requestedBy}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Request Date</p>
                      <p className="font-medium">{request.requestDate}</p>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Reason for Access</p>
                    <p className="text-sm bg-secondary/50 p-3 rounded">{request.reason}</p>
                  </div>

                  {request.status === "pending" && (
                    <div className="flex gap-3 pt-2">
                      <Button
                        variant="hero"
                        onClick={() => handleApprove(request.id)}
                        className="flex-1 gap-2"
                      >
                        <CheckCircle2 className="h-4 w-4" />
                        Approve Access
                      </Button>
                      <Button
                        variant="destructive"
                        onClick={() => handleReject(request.id)}
                        className="flex-1 gap-2"
                      >
                        <XCircle className="h-4 w-4" />
                        Reject
                      </Button>
                    </div>
                  )}

                  {request.status === "approved" && (
                    <div className="flex items-center gap-2 text-sm text-success">
                      <Shield className="h-4 w-4" />
                      <span>Secure access granted via blockchain protocol</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Info Card */}
        <Card className="bg-card/50 border-border">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <Shield className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Privacy-Preserving Access Control</h3>
                <p className="text-sm text-muted-foreground">
                  All access requests are logged on the blockchain for full transparency. When approved,
                  agencies receive selective access to only the necessary evidence portions, maintaining
                  GDPR compliance while enabling international collaboration.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}