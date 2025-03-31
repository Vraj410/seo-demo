// app/page.js
export default function Home() {
  return (
    <div className="container mx-auto p-5">
      {/* Multiple H1 tags are bad for SEO */}
      <h1>Welcome</h1>
      <h1>to my website</h1>

      {/* Keyword stuffing */}
      <p>
        Buy shoes online, best shoes online, cheap shoes online, shoes for sale, 
        discount shoes, shoes shoes shoes, best shoe deals, shoe store online
      </p>

      {/* Hidden text (bad SEO practice) */}
      <p style={{ color: 'white', fontSize: '0px' }}>
        Hidden keywords for search engines
      </p>

      {/* Unoptimized images: missing alt text, no lazy loading, no dimensions */}
      <img src="/image1.png" />
      <img src="/image2.png" />

      {/* Empty links with no context */}
      <a href="#">Click here</a>
      <a href="#">Read more</a>

      {/* Duplicate content */}
      <p>Welcome to our website. We sell shoes.</p>
      <p>Welcome to our website. We sell shoes.</p>

      {/* Non-semantic markup */}
      <div>This should be a heading</div>
      <div>This should be a navigation</div>

      {/* Inline styles instead of CSS classes */}
      <div style={{ fontSize: '24px', color: 'blue', marginTop: '20px' }}>
        Important content
      </div>
    </div>
  );
}
