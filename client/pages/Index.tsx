import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Truck,
  RotateCcw,
  Shield,
  Star,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const featuredProducts = [
  {
    id: "1",
    name: "Premium Cotton T-Shirt",
    price: 29.99,
    originalPrice: 39.99,
    image: "/placeholder.svg",
    rating: 4.8,
    reviewCount: 124,
    category: "T-Shirts",
    isOnSale: true,
  },
  {
    id: "2",
    name: "Casual Denim Jeans",
    price: 79.99,
    originalPrice: 99.99,
    image: "/placeholder.svg",
    rating: 4.6,
    reviewCount: 89,
    category: "Pants",
    isOnSale: true,
  },
  {
    id: "3",
    name: "Elegant Button Shirt",
    price: 59.99,
    image: "/placeholder.svg",
    rating: 4.9,
    reviewCount: 156,
    category: "Shirts",
  },
  {
    id: "4",
    name: "Summer Polo Shirt",
    price: 39.99,
    image: "/placeholder.svg",
    rating: 4.7,
    reviewCount: 98,
    category: "Polo",
  },
];

const categories = [
  {
    name: "Men's Collection",
    href: "/men",
    image: "/placeholder.svg",
    productCount: 142,
    description: "Stylish and comfortable clothing for modern men",
  },
  {
    name: "Women's Collection",
    href: "/women",
    image: "/placeholder.svg",
    productCount: 189,
    description: "Trendy and elegant fashion for confident women",
  },
  {
    name: "Accessories",
    href: "/accessories",
    image: "/placeholder.svg",
    productCount: 76,
    description: "Complete your look with our premium accessories",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    rating: 5,
    comment:
      "Amazing quality and fast shipping! The t-shirt fits perfectly and the fabric is so soft.",
    avatar: "/placeholder.svg",
  },
  {
    name: "Mike Chen",
    rating: 5,
    comment:
      "Great customer service and high-quality products. Will definitely shop here again!",
    avatar: "/placeholder.svg",
  },
  {
    name: "Emma Davis",
    rating: 5,
    comment:
      "Love the variety of styles available. Found exactly what I was looking for.",
    avatar: "/placeholder.svg",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Features Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center gap-4 p-6 bg-background rounded-lg shadow-sm">
                <div className="h-12 w-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Truck className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Free Shipping
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    On orders over $75
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-background rounded-lg shadow-sm">
                <div className="h-12 w-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <RotateCcw className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Easy Returns
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    30-day return policy
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-background rounded-lg shadow-sm">
                <div className="h-12 w-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Secure Payment
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    256-bit SSL protection
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Shop by Category
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover our carefully curated collections designed for every
                style and occasion
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {categories.map((category) => (
                <CategoryCard key={category.name} {...category} />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  Featured Products
                </h2>
                <p className="text-lg text-muted-foreground">
                  Our most popular items this season
                </p>
              </div>
              <Button asChild variant="outline" className="hidden md:flex">
                <Link to="/shop" className="flex items-center gap-2">
                  View All
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            <div className="text-center mt-8 md:hidden">
              <Button asChild variant="outline">
                <Link to="/shop" className="flex items-center gap-2">
                  View All Products
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-foreground">50K+</div>
                <div className="text-sm text-muted-foreground">
                  Happy Customers
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-foreground">1000+</div>
                <div className="text-sm text-muted-foreground">Products</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-foreground">4.9</div>
                <div className="text-sm text-muted-foreground">
                  Average Rating
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What Our Customers Say
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it - hear from our satisfied
                customers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-0 shadow-sm">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      "{testimonial.comment}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-muted rounded-full flex items-center justify-center">
                        <Users className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <div className="font-medium text-sm">
                          {testimonial.name}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Verified Customer
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Stay in the Loop
              </h2>
              <p className="text-lg text-primary-foreground/80">
                Be the first to know about new arrivals, exclusive offers, and
                fashion tips
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border-0 text-foreground"
                />
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-primary-foreground/60">
                No spam, unsubscribe at any time
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
