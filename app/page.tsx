// app/page.js
export default function Home() {
  // Force error status to fail HTTP status test
  throw new Error("Force 500 error");

  return (
    // Remove container and use table for layout (bad practice)
    <table>
      <tr>
        <td>
          {/* Remove title element and use non-semantic markup */}
          <div style={{ fontSize: '40px' }}>Welcome</div>
          <div style={{ fontSize: '40px' }}>to my website</div>

          {/* Extreme keyword stuffing with invisible text */}
          <div style={{ display: 'none' }}>
            shoes buy shoes cheap shoes best shoes shoes online buy now shoes 
            cheap shoes discount shoes shoe store shoes near me shoes shoes shoes
            shoes buy shoes cheap shoes best shoes shoes online buy now shoes 
          </div>

          {/* Links with no context and javascript: protocol (very bad for SEO) */}
          <a href="data:text/html,<script>alert('bad')</script>">.</a>
          <a href="tel:">...</a>
          <a href="javascript:void(0)">#</a>
          <a href="mailto:">&nbsp;</a>

          {/* Images with broken URLs and no alt text */}
          <img src="data:," />
          <img src="javascript:alert('bad')" />

          {/* Tiny text with keyword stuffing */}
          <p style={{ fontSize: '0px', color: 'transparent' }}>
            hidden keywords hidden text hidden content
          </p>

          {/* Duplicate content with slight variations */}
          <p>Welcome to our amazing shoe store with the best shoes.</p>
          <p>Welcome to our fantastic shoe store with the greatest shoes.</p>
          <p>Welcome to our wonderful shoe store with the finest shoes.</p>

          {/* Iframe with blocked content (bad for SEO) */}
          <iframe 
            src="about:blank" 
            sandbox="allow-same-origin" 
            style={{ display: 'none' }}
          />

          {/* Meta refresh (bad practice) */}
          <meta httpEquiv="refresh" content="30" />

          {/* Blocking external resources */}
          <script src="huge-file.js" />
          <link rel="stylesheet" href="massive-styles.css" />

          {/* Invalid markup structure */}
          <div>
            <p>
              <div>Invalid nesting</div>
            </p>
          </div>
        </td>
      </tr>
    </table>
  );
}
