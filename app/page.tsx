// app/page.js
export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Semantic header with proper heading hierarchy */}
      <header>
        <h1 className="text-4xl font-bold mb-6">
          Welcome to Premium Shoe Store
        </h1>
      </header>

      {/* Main content section with semantic HTML */}
      <section className="featured-products mb-12">
        <h2 className="text-2xl font-semibold mb-4">Featured Collection</h2>
        
        {/* Properly optimized images with alt text */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img 
            src="/running-shoes.jpg" 
            alt="Premium running shoes with enhanced cushioning"
            width={400}
            height={300}
            loading="lazy"
          />
          <img 
            src="/casual-shoes.jpg" 
            alt="Comfortable casual shoes for everyday wear"
            width={400}
            height={300}
            loading="lazy"
          />
          <img 
            src="/formal-shoes.jpeg" 
            alt="Elegant formal shoes for special occasions"
            width={400}
            height={300}
            loading="lazy"
          />
        </div>
      </section>

      {/* Descriptive links with clear context */}
      <nav className="categories mb-12">
        <h2 className="text-2xl font-semibold mb-4">Shop by Category</h2>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <li>
            <a href="/running-shoes" className="hover:underline">
              Browse Running Shoes Collection
            </a>
          </li>
          <li>
            <a href="/casual-shoes" className="hover:underline">
              Explore Casual Footwear
            </a>
          </li>
          <li>
            <a href="/formal-shoes" className="hover:underline">
              View Formal Shoes Selection
            </a>
          </li>
          <li>
            <a href="/sports-shoes" className="hover:underline">
              Discover Sports Shoes Range
            </a>
          </li>
        </ul>
      </nav>

      {/* Rich, meaningful content */}
      <article className="about mb-12">
        <h2 className="text-2xl font-semibold mb-4">About Our Collection</h2>
        <p className="mb-4">
          Our carefully curated shoe collection combines style, comfort, and durability. 
          Each pair is selected for its quality craftsmanship and modern design.
        </p>
        <p>
          Whether you are looking for athletic performance, casual comfort, or formal elegance, 
          our extensive range ensures you&apos;ll find the perfect fit for every occasion.
        </p>
      </article>

      {/* Footer with additional navigation */}
      <footer className="border-t pt-8">
        <nav aria-label="Footer Navigation">
          <ul className="flex flex-wrap gap-6">
            <li>
              <a href="/size-guide" className="hover:underline">
                Size Guide
              </a>
            </li>
            <li>
              <a href="/shipping-info" className="hover:underline">
                Shipping Information
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact Support
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </main>
  );
}
