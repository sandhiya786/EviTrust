import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, FileText, AlertCircle, CheckCircle2 } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { toast } from "sonner";

export default function UploadEvidence() {
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);

    // Simulate upload process
    setTimeout(() => {
      setUploading(false);
      setUploaded(true);
      toast.success("Evidence uploaded and encrypted successfully");
    }, 2000);
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold mb-2">Upload Evidence</h1>
          <p className="text-muted-foreground">
            Upload digital evidence securely. Files are encrypted and stored with blockchain verification.
          </p>
        </div>

        {/* Upload Form */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle>Evidence Details</CardTitle>
            <CardDescription>
              Provide case information and upload evidence files
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleUpload} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="caseId">Case ID</Label>
                  <Input id="caseId" placeholder="CASE-2024-001" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="agency">Agency</Label>
                  <Input id="agency" placeholder="Your Agency Name" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="evidenceType">Evidence Type</Label>
                <Select required>
                  <SelectTrigger id="evidenceType">
                    <SelectValue placeholder="Select evidence type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="video">Video Recording</SelectItem>
                    <SelectItem value="image">Images/Photos</SelectItem>
                    <SelectItem value="audio">Audio Recording</SelectItem>
                    <SelectItem value="document">Documents</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Provide details about the evidence..."
                  rows={4}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>Upload Files</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                  <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-sm text-muted-foreground mb-2">
                    Drag and drop files here, or click to browse
                  </p>
                  <Input
                    type="file"
                    className="hidden"
                    id="fileUpload"
                    multiple
                  />
                  <Label htmlFor="fileUpload">
                    <Button type="button" variant="outline" size="sm" asChild>
                      <span>Select Files</span>
                    </Button>
                  </Label>
                  <p className="text-xs text-muted-foreground mt-2">
                    Supported: Images, Videos, Audio, Documents (Max 500MB)
                  </p>
                </div>
              </div>

              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  All uploaded files are encrypted with AES-256 and stored securely. A cryptographic hash
                  will be recorded on the blockchain for verification.
                </AlertDescription>
              </Alert>

              {uploaded && (
                <Alert variant="default" className="border-success bg-success/10">
                  <CheckCircle2 className="h-4 w-4 text-success" />
                  <AlertDescription className="text-success">
                    Evidence uploaded successfully! Blockchain hash: <span className="font-mono text-xs">0x7a8f9b2c...</span>
                  </AlertDescription>
                </Alert>
              )}

              <div className="flex gap-4">
                <Button
                  type="submit"
                  variant="hero"
                  disabled={uploading}
                  className="flex-1"
                >
                  {uploading ? "Uploading & Encrypting..." : "Upload Evidence"}
                </Button>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="bg-card/50 border-border">
            <CardContent className="pt-6">
              <FileText className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold mb-1">Encrypted Storage</h3>
              <p className="text-sm text-muted-foreground">
                Files encrypted with military-grade AES-256
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card/50 border-border">
            <CardContent className="pt-6">
              <CheckCircle2 className="h-8 w-8 text-success mb-3" />
              <h3 className="font-semibold mb-1">Blockchain Verified</h3>
              <p className="text-sm text-muted-foreground">
                Immutable proof of authenticity recorded
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card/50 border-border">
            <CardContent className="pt-6">
              <AlertCircle className="h-8 w-8 text-warning mb-3" />
              <h3 className="font-semibold mb-1">GDPR Compliant</h3>
              <p className="text-sm text-muted-foreground">
                Privacy-first with selective sharing controls
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}