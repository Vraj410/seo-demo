// app/page.js
import Image from 'next/image';
import Link from 'next/link';

// Define image dimensions
const PRODUCT_IMAGE_CONFIG = {
  width: 400,
  height: 300,
  quality: 75,
};

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
        
        {/* Use Next.js Image component for optimized images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Image 
            src="/running-shoes.jpg" // Use WebP format
            alt="Premium running shoes with enhanced cushioning"
            {...PRODUCT_IMAGE_CONFIG}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
            priority // Load first image immediately
          />
          <Image 
            src="/casual-shoes.jpg"
            alt="Comfortable casual shoes for everyday wear"
            {...PRODUCT_IMAGE_CONFIG}
          />
          <Image 
            src="/formal-shoes.jpeg"
            alt="Elegant formal shoes for special occasions"
            {...PRODUCT_IMAGE_CONFIG}
          />
        </div>
      </section>

      {/* Use Next.js Link component for client-side navigation */}
      <nav className="categories mb-12">
        <h2 className="text-2xl font-semibold mb-4">Shop by Category</h2>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { href: '/running-shoes', text: 'Browse Running Shoes Collection' },
            { href: '/casual-shoes', text: 'Explore Casual Footwear' },
            { href: '/formal-shoes', text: 'View Formal Shoes Selection' },
            { href: '/sports-shoes', text: 'Discover Sports Shoes Range' },
          ].map(({ href, text }) => (
            <li key={href}>
              <Link 
                href={href} 
                className="hover:underline transition-colors"
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Rich, meaningful content */}
      <article className="about mb-12 prose prose-lg max-w-none">
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
            {[
              { href: '/size-guide', text: 'Size Guide' },
              { href: '/shipping-info', text: 'Shipping Information' },
              { href: '/contact', text: 'Contact Support' },
            ].map(({ href, text }) => (
              <li key={href}>
                <Link 
                  href={href} 
                  className="hover:underline transition-colors"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </footer>
    </main>
  );
}
