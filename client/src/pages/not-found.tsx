import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Home, AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-12 pb-12 text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
            <AlertCircle className="h-8 w-8 text-primary" />
          </div>
          <h1 className="font-heading font-bold text-4xl text-foreground mb-4">404</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Oops! The page you're looking for doesn't exist.
          </p>
          <Link href="/">
            <Button className="font-semibold" data-testid="button-back-home">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
