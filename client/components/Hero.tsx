import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-primary via-primary/90 to-accent/20 text-primary-foreground overflow-hidden">
      <div
        className={
          'absolute inset-0 bg-[url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')] opacity-50'
        }
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center min-h-[80vh] py-16">
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Trending
                <span className="block text-accent">Fashion</span>
                <span className="block">for Everyone</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto lg:mx-0">
                Discover the latest trends in clothing. From casual tees to
                premium pants, find your perfect style at WeTrends.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg"
              >
                <Link to="/shop" className="flex items-center gap-2">
                  Shop Now
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg"
              >
                View Collections
              </Button>
            </div>

            <div className="flex items-center gap-8 justify-center lg:justify-start text-sm">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-accent rounded-full"></div>
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-accent rounded-full"></div>
                <span>30-Day Returns</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-accent rounded-full"></div>
                <span>Premium Quality</span>
              </div>
            </div>
          </div>

          <div className="flex-1 mt-12 lg:mt-0">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-transparent rounded-2xl blur-xl"></div>
              <div className="relative bg-card/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="h-40 bg-accent/20 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">👕</span>
                    </div>
                    <div className="h-32 bg-primary-foreground/10 rounded-lg flex items-center justify-center">
                      <span className="text-xl">👖</span>
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="h-32 bg-primary-foreground/10 rounded-lg flex items-center justify-center">
                      <span className="text-xl">👔</span>
                    </div>
                    <div className="h-40 bg-accent/20 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🧥</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground rounded-full h-16 w-16 flex items-center justify-center font-bold text-sm">
                  50%
                  <br />
                  OFF
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
