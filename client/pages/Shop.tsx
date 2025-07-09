import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Shop() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Shop All Products
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            This page is coming soon! We're working on building an amazing
            shopping experience for you.
          </p>
          <Button asChild>
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
