import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Search, CheckCircle2, XCircle, Shield, Clock, FileText } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function VerifyEvidence() {
  const [verifying, setVerifying] = useState(false);
  const [verified, setVerified] = useState<boolean | null>(null);
  const [evidenceHash, setEvidenceHash] = useState("");

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setVerifying(true);

    // Simulate verification
    setTimeout(() => {
      setVerifying(false);
      setVerified(Math.random() > 0.2); // 80% success rate for demo
    }, 1500);
  };

  const mockEvidenceData = {
    caseId: "CASE-2024-001",
    fileName: "evidence_video_001.mp4",
    uploadedBy: "Metropolitan Police",
    uploadDate: "2024-01-15 14:32:00 UTC",
    fileSize: "245 MB",
    blockchainHash: "0x7a8f9b2c4e1d3a5f6e8c9b4a2d7f1e3c5b8a4f2d9e6c1a8f3b7d4e2c6a9f5b1",
    verifications: 12,
    lastVerified: "2 minutes ago",
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold mb-2">Verify Evidence</h1>
          <p className="text-muted-foreground">
            Check blockchain integrity and verify evidence authenticity using cryptographic hashes.
          </p>
        </div>

        {/* Verification Form */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle>Evidence Verification</CardTitle>
            <CardDescription>
              Enter the blockchain hash or case ID to verify evidence integrity
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleVerify} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="hash">Blockchain Hash or Case ID</Label>
                <div className="flex gap-2">
                  <Input
                    id="hash"
                    placeholder="0x7a8f9b2c... or CASE-2024-001"
                    value={evidenceHash}
                    onChange={(e) => setEvidenceHash(e.target.value)}
                    className="font-mono text-sm"
                    required
                  />
                  <Button
                    type="submit"
                    variant="hero"
                    disabled={verifying}
                    className="gap-2"
                  >
                    <Search className="h-4 w-4" />
                    {verifying ? "Verifying..." : "Verify"}
                  </Button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Verification Results */}
        {verified !== null && (
          <Card className="bg-card border-border animate-fade-in">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Verification Results</CardTitle>
                <Badge
                  variant={verified ? "success" : "destructive"}
                  className="text-sm px-3 py-1"
                >
                  {verified ? (
                    <>
                      <CheckCircle2 className="h-4 w-4 mr-1" />
                      Verified
                    </>
                  ) : (
                    <>
                      <XCircle className="h-4 w-4 mr-1" />
                      Verification Failed
                    </>
                  )}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {verified ? (
                <>
                  <Alert className="border-success bg-success/10">
                    <CheckCircle2 className="h-4 w-4 text-success" />
                    <AlertDescription className="text-success">
                      Evidence integrity confirmed. No tampering detected. Blockchain verification passed.
                    </AlertDescription>
                  </Alert>

                  <div className="grid gap-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Case ID</p>
                        <p className="font-mono font-semibold">{mockEvidenceData.caseId}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">File Name</p>
                        <p className="font-medium">{mockEvidenceData.fileName}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Uploaded By</p>
                        <p className="font-medium">{mockEvidenceData.uploadedBy}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Upload Date</p>
                        <p className="font-medium">{mockEvidenceData.uploadDate}</p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Blockchain Hash</p>
                      <p className="font-mono text-xs bg-secondary p-2 rounded break-all">
                        {mockEvidenceData.blockchainHash}
                      </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 pt-4 border-t border-border">
                      <div className="flex items-center gap-2">
                        <Shield className="h-5 w-5 text-success" />
                        <div>
                          <p className="text-xs text-muted-foreground">Status</p>
                          <p className="font-semibold text-success">Verified</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-xs text-muted-foreground">Total Verifications</p>
                          <p className="font-semibold">{mockEvidenceData.verifications}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="text-xs text-muted-foreground">Last Verified</p>
                          <p className="font-semibold">{mockEvidenceData.lastVerified}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <Alert variant="destructive">
                  <XCircle className="h-4 w-4" />
                  <AlertDescription>
                    Verification failed. The evidence hash does not match blockchain records, or the file
                    may have been tampered with. Please contact your system administrator.
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>
        )}

        {/* Info Section */}
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="bg-card/50 border-border">
            <CardContent className="pt-6">
              <FileText className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold mb-2">How Verification Works</h3>
              <p className="text-sm text-muted-foreground">
                Each file generates a unique cryptographic hash stored on the blockchain. Verification
                compares the current file hash against the blockchain record to detect any modifications.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card/50 border-border">
            <CardContent className="pt-6">
              <Shield className="h-8 w-8 text-success mb-3" />
              <h3 className="font-semibold mb-2">Tamper Detection</h3>
              <p className="text-sm text-muted-foreground">
                Even the smallest change to a file will result in a completely different hash, making
                tampering immediately detectable through blockchain comparison.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}