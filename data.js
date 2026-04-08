// =============================================
//  MarketBot AI — data.js
//  All modes, quick action cards, and hint chips
// =============================================

const MODES = {
  all: {
    cards: [
      { i:'✍️', l:'Write content',    d:'Blog, ads, captions',   p:'Act as a digital marketing expert. Write a compelling blog post about the top 5 benefits of buying [your product] online. Make it SEO-friendly, 800 words, with H2 subheadings and a CTA at the end.' },
      { i:'🔍', l:'SEO strategy',     d:'Keywords & ranking',    p:'Act as an SEO expert. Give me a complete SEO strategy for an e-commerce store selling [product] — include 15 target keywords with search intent, on-page SEO tips, and a 3-month content plan.' },
      { i:'📢', l:'Google Ads',       d:'RSA headlines',         p:'Act as a Google Ads specialist. Write 15 headlines and 4 descriptions for a Responsive Search Ad for [product/service]. Follow Google Ads character limits strictly.' },
      { i:'📱', l:'Social calendar',  d:'30-day plan',           p:'Act as a social media manager. Create a 30-day Instagram + Facebook content calendar for a brand selling [product]. Include: day, post type, caption idea, and hashtags.' },
      { i:'📧', l:'Email sequence',   d:'Welcome flow',          p:'Act as an email marketing expert. Write a 5-email welcome sequence for new subscribers of my [product] store. Include subject line, preview text, and full email body for each.' },
      { i:'🛒', l:'Product listing',  d:'Amazon/Flipkart',       p:'Act as an Amazon SEO listing specialist. Write a fully optimized product listing for [product]: SEO title (max 200 chars), 5 bullet points starting with a benefit, and a 250-word description.' },
      { i:'📊', l:'KPI report',       d:'Metrics & growth',      p:'Act as an e-commerce analyst. Explain the 10 most important KPIs for an online store (ROAS, CAC, LTV, CVR, AOV, etc.) with formulas, industry benchmarks, and how to improve each one.' },
      { i:'🎯', l:'90-day plan',      d:'Growth roadmap',        p:'Act as a growth marketer. Create a detailed 90-day digital marketing roadmap for scaling an e-commerce brand in India from ₹1L to ₹10L/month revenue. Break it into 3 phases with weekly tasks.' },
    ],
    hints: [
      'How to start e-commerce with low budget in India',
      'Write Facebook ad for handmade jewellery',
      'SEO checklist for Shopify store',
      'Abandoned cart email template'
    ]
  },
  content: {
    cards: [
      { i:'📝', l:'Blog post',       d:'SEO long-form',          p:'Act as a content marketing expert. Write a 1200-word SEO-optimized blog post titled "[topic]" for my e-commerce brand. Include H2/H3 subheadings, intro, body sections, and a CTA.' },
      { i:'🎬', l:'Video script',    d:'YouTube/Reels 60s',      p:'Act as a video scriptwriter. Write a 60-second product demo script for [product name]. Include hook (first 3 seconds), problem, solution, key features, social proof, and CTA.' },
      { i:'🖼️', l:'Ad copy pack',   d:'5 variations',           p:'Act as a copywriter. Write 5 different Facebook/Instagram ad copy variations for [product]. Each: primary text (under 125 words) + punchy headline. Use angles: urgency, social proof, problem-solution, emotion, offer.' },
      { i:'💬', l:'Captions pack',   d:'10 Instagram captions',  p:'Act as a social media copywriter. Write 10 Instagram captions for a [product] brand. Mix educational, promotional, and entertaining. Include 15-20 relevant hashtags for each.' },
    ],
    hints: [
      'Blog post ideas for fitness brand',
      'WhatsApp broadcast message for Diwali sale',
      'YouTube script for product unboxing',
      'LinkedIn post for B2B brand'
    ]
  },
  seo: {
    cards: [
      { i:'🔑', l:'Keywords',        d:'Research + intent',      p:'Act as an SEO specialist. Find 20 high-value keywords for an e-commerce store selling [product] in India. For each: search volume estimate, intent (informational/commercial/transactional), difficulty (low/medium/high), and a content idea.' },
      { i:'🏷️', l:'Meta tags',       d:'Title & description',    p:'Act as an SEO expert. Write SEO-optimized meta title (under 60 chars) and meta description (under 155 chars) for 5 pages of a store selling [products]. Optimize for CTR and rankings.' },
      { i:'🔗', l:'Link building',   d:'Backlink strategy',      p:'Act as an SEO link-building expert. Create a 3-month backlink strategy for my e-commerce website in the [niche] space. Include: guest posts, HARO, directories, influencer collabs, PR, and broken link building.' },
      { i:'🗺️', l:'Site structure',  d:'URL hierarchy',          p:'Act as a technical SEO expert. Design the ideal category structure, URL hierarchy, and internal linking plan for a Shopify store selling [list your main product categories].' },
    ],
    hints: [
      'Long-tail keywords for supplements India',
      'On-page SEO checklist 2025',
      'Schema markup for product pages',
      'Local SEO for D2C brand'
    ]
  },
  ads: {
    cards: [
      { i:'📘', l:'Meta/FB ads',     d:'Full campaign copy',     p:'Act as a Meta Ads expert. Write a complete Facebook/Instagram ad campaign for [product]: 3 ad variations each with primary text, headline, description. Include 3 audience targeting suggestions and recommended campaign objective.' },
      { i:'🔎', l:'Google Search',   d:'RSA format',             p:'Act as a Google Ads specialist. Write a Responsive Search Ad for [product/service]: 15 headlines (max 30 chars each), 4 descriptions (max 90 chars each), and 3 ad extension suggestions.' },
      { i:'🎯', l:'Retargeting',     d:'Remarketing copy',       p:'Act as a performance marketer. Write 3 retargeting ad variations for warm audiences who saw my product but did not buy [product]. Use angles: urgency, social proof, and final offer with discount.' },
      { i:'📊', l:'Ad audit',        d:'Improve ROAS',           p:'Act as a paid ads auditor. Give me a complete checklist to audit my Facebook/Google ad campaigns and improve ROAS. Cover: creatives, targeting, landing page, bidding strategy, and conversion tracking.' },
    ],
    hints: [
      'Meta ads strategy for fashion brand India',
      'TikTok ad script for beauty product',
      'Google Shopping ads optimization tips',
      'Diwali sale campaign full plan'
    ]
  },
  social: {
    cards: [
      { i:'📅', l:'Content calendar', d:'30-day planner',        p:'Act as a social media strategist. Create a 30-day content calendar for [brand] selling [product] across Instagram, Facebook, and WhatsApp. For each day: platform, content type, topic, caption hook, and hashtags.' },
      { i:'🤝', l:'Influencer brief', d:'Collab pitch DM',       p:'Act as an influencer marketing manager. Write an influencer collaboration brief and outreach DM for my [product] brand. Target: micro-influencers (10k-100k followers) in India in the [niche] space.' },
      { i:'📈', l:'Growth tactics',   d:'Organic growth',        p:'Act as a social media growth expert. Give me 15 proven organic growth tactics for Instagram in 2025 for an e-commerce brand in India. Include content strategy, engagement tactics, and algorithm tips.' },
      { i:'🎥', l:'Reels ideas',      d:'Viral content',         p:'Act as a viral content creator. Give me 10 Instagram Reels ideas for a [product] brand. For each: hook (first 3 seconds), content structure, trending audio suggestion, and caption.' },
    ],
    hints: [
      'Pinterest strategy for home decor brand',
      'WhatsApp marketing for small business India',
      'YouTube Shorts ideas for e-commerce',
      'How to go viral on Instagram Reels'
    ]
  },
  email: {
    cards: [
      { i:'👋', l:'Welcome flow',    d:'5-email series',         p:'Act as an email marketing expert. Write a complete 5-email welcome series for new subscribers of my [product] store. For each: subject line, preview text, full body copy, and CTA. Space them: Day 0, 2, 4, 7, 14.' },
      { i:'🛒', l:'Abandoned cart',  d:'3-email recovery',       p:'Act as an e-commerce email strategist. Write a 3-part abandoned cart email sequence with subject lines, preview text, and full body copy. Use: reminder → social proof → final offer with urgency.' },
      { i:'🔄', l:'Win-back series', d:'Re-engage customers',    p:'Act as an email marketing specialist. Write a 3-email win-back campaign for customers who have not purchased in 90+ days from my [product] store. Include a special offer in email 3.' },
      { i:'📣', l:'Sale campaign',   d:'Festival promo',         p:'Act as an email copywriter. Write a Diwali/festive sale email campaign for [product] store: subject line (with emoji), preview text, hero copy, offer details, urgency elements, and CTA button text.' },
    ],
    hints: [
      'Post-purchase thank you email template',
      'Newsletter ideas for lifestyle brand',
      'Flash sale 3-email sequence',
      'Re-engagement campaign for inactive subscribers'
    ]
  },
  ecom: {
    cards: [
      { i:'📋', l:'Amazon listing',  d:'Title, bullets, desc',   p:'Act as an Amazon SEO expert. Write a fully optimized Amazon India listing for [product]: SEO-rich title (max 200 chars), 5 compelling bullet points (start with capital benefit), and a 250-word product description with keywords.' },
      { i:'💰', l:'Pricing strategy', d:'Competitive pricing',   p:'Act as an e-commerce strategist. Build a pricing strategy for [product] in the Indian market. Include: cost-plus pricing, competitor benchmarking, psychological pricing tactics, and discount/bundle strategy.' },
      { i:'⭐', l:'Review templates', d:'Response copy',         p:'Act as a customer success manager. Write professional review response templates for my [product] store: 1) enthusiastic 5-star review 2) mixed 3-star review 3) angry 1-star review. Be empathetic and brand-appropriate.' },
      { i:'🔄', l:'CRO audit',       d:'Boost conversions',      p:'Act as a CRO specialist. Give me a complete conversion rate optimization audit for my e-commerce store selling [product]. Cover: homepage, product page, cart, checkout — with specific fixes for each stage.' },
    ],
    hints: [
      'Meesho product listing tips and tricks',
      'Shopify store optimization checklist',
      'Upsell and cross-sell strategy for online store',
      'Return policy template India'
    ]
  },
  analytics: {
    cards: [
      { i:'📊', l:'KPIs guide',      d:'All key metrics',        p:'Act as an e-commerce analyst. Explain the 12 most critical e-commerce KPIs: ROAS, CAC, LTV, CVR, AOV, Cart Abandonment Rate, Repeat Purchase Rate, MER, Bounce Rate, CTR, NPS. Give formula + benchmark + how to improve each.' },
      { i:'🔄', l:'Funnel analysis',  d:'Conversion funnel',      p:'Act as a growth analyst. Map out and analyze the complete e-commerce conversion funnel for a [product] store: Awareness → Interest → Consideration → Purchase → Retention → Advocacy. Give optimization tips for each stage.' },
      { i:'📉', l:'CAC & LTV',       d:'Unit economics',          p:'Act as a DTC business analyst. Explain how to calculate CAC (Customer Acquisition Cost) and LTV (Lifetime Value) for my e-commerce brand. Include: formulas, example calculations, ideal LTV:CAC ratio, and 5 ways to improve each.' },
      { i:'🗓️', l:'Monthly report',  d:'Report template',         p:'Act as a digital marketing analyst. Create a complete monthly performance report template for an e-commerce brand. Sections: Executive Summary, Traffic, Conversions, Ads, Email, Social, SEO, Key Wins, Issues, Next Month Plan.' },
    ],
    hints: [
      'GA4 setup guide for Shopify store',
      'Attribution models explained simply',
      'How to reduce cart abandonment rate',
      'ROAS improvement strategies 2025'
    ]
  },
  strategy: {
    cards: [
      { i:'🗺️', l:'Go-to-market',   d:'Launch plan',             p:'Act as a marketing strategist. Create a complete go-to-market strategy for launching [product] in India. Include: target audience, positioning, channels, launch timeline, budget allocation, and success metrics.' },
      { i:'📆', l:'90-day roadmap',  d:'Scale plan',              p:'Act as a growth consultant. Build a detailed 90-day digital marketing roadmap to scale my [product] e-commerce brand in India. Break into 3 phases: Foundation (1-30), Growth (31-60), Scale (61-90) with weekly tasks.' },
      { i:'🏆', l:'Competitor analysis', d:'Market research',    p:'Act as a market research expert. Give me a complete competitor analysis framework for my e-commerce business in the [niche] space in India. What to analyze, tools to use, how to find gaps, and how to position against them.' },
      { i:'💡', l:'Brand positioning', d:'USP & messaging',      p:'Act as a brand strategist. Help me develop: 1) Brand positioning statement 2) Unique Value Proposition 3) Core messaging pillars 4) Brand voice & tone guide for my [product] brand targeting [describe your target customer].' },
    ],
    hints: [
      'Seasonal marketing calendar India 2025',
      'D2C brand launch strategy zero budget',
      'Multi-channel marketing plan small business',
      'How to find and define your target audience'
    ]
  }
};

const SYSTEM_PROMPT = `You are MarketBot — an expert AI agent for digital marketing and e-commerce with deep knowledge in:

DIGITAL MARKETING: SEO, Google Ads, Meta/Facebook/Instagram Ads, TikTok Ads, content marketing, email marketing (Klaviyo, Mailchimp), social media marketing, influencer marketing, affiliate marketing, CRO, video marketing.

E-COMMERCE: Product listing optimization for Amazon, Flipkart, Meesho, Shopify, WooCommerce. Marketplace strategies, pricing, customer retention, reviews, upselling, cross-selling.

ANALYTICS: Google Analytics 4, Meta Business Suite, Shopify Analytics. KPIs: ROAS, CAC, LTV, CTR, CVR, AOV, MER. A/B testing, attribution modeling.

STRATEGY: Go-to-market plans, growth hacking, brand positioning, competitor analysis, seasonal campaigns (Diwali, BFCM), D2C strategy.

INDIA-SPECIFIC: WhatsApp marketing, Flipkart/Meesho/Amazon India, Indian festival campaigns, COD strategy, Tier 2/3 city targeting, regional languages.

Rules:
- Always give ACTIONABLE, specific, ready-to-use output
- When writing copy (ads, emails, listings) — provide COMPLETE, publish-ready content
- Include specific numbers, benchmarks, and examples where relevant
- Format clearly with sections and bullets when helpful
- End every response with 1-2 clear next steps the user can take immediately
- Be direct and expert — no generic fluff`;
