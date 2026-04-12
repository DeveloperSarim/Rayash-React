export const blogPosts = [
  {
    id: 1,
    title: "Jeddah Real Estate Market Outlook 2026: Setting the Right Price",
    slug: "jeddah-real-estate-market-outlook-2026",
    date: "2026-02-10",
    author: "Rayash Team",
    category: "Market Analysis",
    image: "/images/blog/blog-1.jpg",
    excerpt: "Do not guess your home price! Get an accurate and free property valuation in Jeddah. Learn how we determine the true market value based on 2026 real estate transactions.",
    content: `
      <p>The Jeddah real estate market in 2026 is showing remarkable growth, with villa prices increasing by 15% and apartment values up by 10% compared to the previous year.</p>
      <h2>Key Market Insights</h2>
      <p>North Jeddah areas, particularly Obhur and Al Shati, command premium prices due to their proximity to the Red Sea. Well-maintained properties in these areas can fetch up to 20% more than average market values.</p>
      <h2>Pricing Factors</h2>
      <ul>
        <li>Location and neighborhood prestige</li>
        <li>Property age and maintenance condition</li>
        <li>Amenities and finishes quality</li>
        <li>Market demand and supply dynamics</li>
        <li>Proximity to key facilities</li>
      </ul>
      <p>Our expert team uses a data-driven approach combining recent transaction data, market trends, and property-specific factors to provide accurate valuations.</p>
    `,
  },
  {
    id: 2,
    title: "Cash or Bank? Your Smart Guide to Home Ownership in Saudi Arabia 2026",
    slug: "cash-or-bank-home-ownership-guide-2026",
    date: "2026-02-05",
    author: "Abdullah Al-Zahrani",
    category: "Buying Guide",
    image: "/images/blog/blog-2.jpg",
    excerpt: "Making the right financing decision is crucial when buying property. Learn about the pros and cons of cash purchases versus mortgage financing in Saudi Arabia.",
    content: `
      <p>Choosing between cash purchase and mortgage financing is one of the most important decisions you'll make when buying property in Saudi Arabia.</p>
      <h2>Cash Purchase Benefits</h2>
      <ul>
        <li>Immediate ownership without debt</li>
        <li>Stronger negotiating position</li>
        <li>No interest payments</li>
        <li>Faster transaction completion</li>
      </ul>
      <h2>Mortgage Financing Benefits</h2>
      <ul>
        <li>Preserve liquidity for investments</li>
        <li>Tax benefits in some cases</li>
        <li>Access to properties beyond immediate budget</li>
        <li>Leverage for wealth building</li>
      </ul>
      <p>Our financial advisors can help you analyze your specific situation and make the most informed decision for your real estate investment.</p>
    `,
  },
  {
    id: 3,
    title: "Complete Guide to Buying a Villa in Jeddah: Step by Step",
    slug: "complete-guide-buying-villa-jeddah",
    date: "2026-01-28",
    author: "Mohammed Al-Muqbel",
    category: "Buying Guide",
    image: "/images/blog/blog-3.jpg",
    excerpt: "Buying a villa is a significant investment. Follow our comprehensive guide to navigate the process smoothly and make an informed decision.",
    content: `
      <p>Purchasing a villa in Jeddah is a significant milestone. This step-by-step guide will help you navigate the process with confidence.</p>
      <h2>Step 1: Define Your Requirements</h2>
      <p>Start by clearly defining your needs: location preference, size, budget, and must-have features.</p>
      <h2>Step 2: Financial Planning</h2>
      <p>Determine your budget including purchase price, transaction fees, and renovation costs if needed.</p>
      <h2>Step 3: Property Search</h2>
      <p>Work with our experienced agents to find properties matching your criteria.</p>
      <h2>Step 4: Due Diligence</h2>
      <p>Verify all legal documents, title deeds, and property history before proceeding.</p>
      <h2>Step 5: Negotiation and Closing</h2>
      <p>Our team will guide you through price negotiation and all closing procedures.</p>
    `,
  },
  {
    id: 4,
    title: "Millionaire Strategy: Why Everyone is Buying Land in North Jeddah",
    slug: "millionaire-strategy-land-north-jeddah",
    date: "2026-01-20",
    author: "Ayman Al-Ghamdi",
    category: "Investment",
    image: "/images/blog/blog-4.jpg",
    excerpt: "Land investment in North Jeddah is becoming increasingly popular among savvy investors. Discover why this area offers exceptional returns.",
    content: `
      <p>North Jeddah has emerged as the premier destination for land investment, with prices appreciating 25% annually over the past three years.</p>
      <h2>Why North Jeddah?</h2>
      <p>Saudi Vision 2030 designated North Jeddah as a key development zone, triggering massive infrastructure investments and development projects.</p>
      <h2>Investment Returns</h2>
      <ul>
        <li>Land prices: 25% annual appreciation</li>
        <li>Rental yields: 8-10% annually on developed properties</li>
        <li>Strategic location near Red Sea</li>
        <li>Government-backed development projects</li>
      </ul>
      <h2>Best Areas to Invest</h2>
      <p>Obhur Al-Shamaliyah, Al Shati, and surrounding coastal areas offer the highest growth potential based on current development plans.</p>
    `,
  },
  {
    id: 5,
    title: "Ready Property or Under Construction? Your Decision Guide for Jeddah",
    slug: "ready-property-vs-under-construction-jeddah",
    date: "2026-01-15",
    author: "Rayash Team",
    category: "Buying Guide",
    image: "/images/blog/blog-5.jpg",
    excerpt: "Choosing between a ready-to-move-in property and one under construction can be challenging. Here is what you need to consider.",
    content: `
      <p>Both ready properties and off-plan developments have their merits. Understanding the trade-offs will help you make the right choice for your situation.</p>
      <h2>Ready Properties</h2>
      <p><strong>Advantages:</strong> Immediate occupancy, visible quality, established neighborhood, predictable costs.</p>
      <p><strong>Disadvantages:</strong> Higher upfront cost, less customization, may require renovation.</p>
      <h2>Under Construction Properties</h2>
      <p><strong>Advantages:</strong> Lower entry price, payment flexibility, modern designs, customization options.</p>
      <p><strong>Disadvantages:</strong> Delivery risk, longer wait time, market uncertainty during construction period.</p>
      <h2>Our Recommendation</h2>
      <p>For end-users who need immediate housing, ready properties are ideal. For investors with a longer time horizon, off-plan offers superior returns potential.</p>
    `,
  },
]

export const getBlogPostById = (id) => blogPosts.find(p => p.id === parseInt(id))
export const getBlogPostBySlug = (slug) => blogPosts.find(p => p.slug === slug)
