// ─── SQFT AN YARDS — DATA STORE ───────────────────────────────────────────
//  All data persisted in localStorage. Seed data loaded on first run.

const PROPERTIES_KEY = 'sqft_properties';
const BLOGS_KEY = 'sqft_blogs';

// ─── SEED PROPERTIES ──────────────────────────────────────────────────────
const SEED_PROPERTIES = [
  {
    id: 'p1',
    title: 'Luxurious 4 BHK Penthouse',
    location: 'Greater Kailash I, South Delhi',
    price: 8500000,
    priceLabel: '₹85 Lakh',
    type: 'Apartment',
    status: 'For Sale',
    bedrooms: 4,
    bathrooms: 4,
    area: 3200,
    floor: '12th (Top)',
    facing: 'East',
    age: 'New',
    description: 'An exquisite penthouse offering panoramic views of South Delhi. This stunning 4 BHK residence features Italian marble flooring, modular kitchen, private terrace with jacuzzi, home automation, and 24/7 concierge service. Located in the heart of GK1, minutes from M-Block Market.',
    amenities: ['Private Terrace','Jacuzzi','Modular Kitchen','Home Automation','2 Car Parks','Gym Access','Swimming Pool','24/7 Security','Power Backup','CCTV'],
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80'
    ],
    featured: true,
    createdAt: '2025-11-01'
  },
  {
    id: 'p2',
    title: 'Premium 3 BHK Apartment',
    location: 'Saket, South Delhi',
    price: 4500000,
    priceLabel: '₹45 Lakh',
    type: 'Apartment',
    status: 'For Sale',
    bedrooms: 3,
    bathrooms: 2,
    area: 1850,
    floor: '6th',
    facing: 'North-East',
    age: '5 Years',
    description: 'Beautifully appointed 3 BHK apartment in Saket with modern interiors, open kitchen concept, and sweeping garden views. Close to Select City Walk Mall and excellent metro connectivity. Ideal for families seeking quality living in South Delhi.',
    amenities: ['Club House','Swimming Pool','Children Play Area','Gym','24/7 Security','Visitor Parking','Garden','Power Backup','Intercom','CCTV'],
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=800&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80'
    ],
    featured: true,
    createdAt: '2025-11-05'
  },
  {
    id: 'p3',
    title: 'Independent Builder Floor',
    location: 'Vasant Kunj, South Delhi',
    price: 6200000,
    priceLabel: '₹62 Lakh',
    type: 'Builder Floor',
    status: 'For Sale',
    bedrooms: 3,
    bathrooms: 3,
    area: 2200,
    floor: 'Ground + 1',
    facing: 'South',
    age: '3 Years',
    description: 'Spacious corner builder floor with private entrance, large garden and separate servant quarter. Beautifully designed interiors with premium fittings throughout. Located in the green pocket of Vasant Kunj, close to DLF Promenade.',
    amenities: ['Private Garden','Servant Quarter','Two Car Parks','Modular Kitchen','Wardrobes','Power Backup','Security Guard','CCTV','Water Storage','Terrace Access'],
    images: [
      'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
      'https://images.unsplash.com/photo-1521783988139-89397d761dce?w=800&q=80'
    ],
    featured: true,
    createdAt: '2025-11-10'
  },
  {
    id: 'p4',
    title: 'Ultra-Luxury Villa',
    location: 'Shanti Niketan, South Delhi',
    price: 35000000,
    priceLabel: '₹3.5 Cr',
    type: 'Villa',
    status: 'For Sale',
    bedrooms: 6,
    bathrooms: 6,
    area: 7500,
    floor: 'G+2',
    facing: 'West',
    age: 'New',
    description: 'A masterpiece of architecture in the most prestigious enclave of South Delhi. This ultra-luxury villa on a 500 sq yd plot features an infinity pool, home theatre, wine cellar, 6 en-suite bedrooms, staff quarters, and a triple-level car park. No expense spared in materials or finishes.',
    amenities: ['Infinity Pool','Home Theatre','Wine Cellar','Staff Quarters','Triple Garage','Elevator','Landscaped Garden','Solar Panels','Smart Home','24/7 Guard'],
    images: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80',
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80',
      'https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?w=800&q=80',
      'https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=800&q=80'
    ],
    featured: true,
    createdAt: '2025-11-15'
  },
  {
    id: 'p5',
    title: '2 BHK Ready to Move Flat',
    location: 'Malviya Nagar, South Delhi',
    price: 2800000,
    priceLabel: '₹28 Lakh',
    type: 'Apartment',
    status: 'For Sale',
    bedrooms: 2,
    bathrooms: 2,
    area: 1100,
    floor: '3rd',
    facing: 'East',
    age: '8 Years',
    description: 'Well-maintained 2 BHK apartment in a gated society in Malviya Nagar. Ready to move in with fresh paint, new fittings, and fully functional modular kitchen. Close to Shri Ram School, IIT Delhi, and Hauz Khas market.',
    amenities: ['24/7 Security','Power Backup','Car Parking','Intercom','CCTV','Water Supply','Lift','Park'],
    images: [
      'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=800&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80',
      'https://images.unsplash.com/photo-1501183638710-841dd1904471?w=800&q=80',
      'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&q=80'
    ],
    featured: false,
    createdAt: '2025-11-18'
  },
  {
    id: 'p6',
    title: 'Prime Commercial Office Space',
    location: 'Nehru Place, South Delhi',
    price: 9800000,
    priceLabel: '₹98 Lakh',
    type: 'Commercial',
    status: 'For Sale',
    bedrooms: 0,
    bathrooms: 4,
    area: 3500,
    floor: '8th',
    facing: 'North',
    age: '10 Years',
    description: 'Fully furnished Grade-A office space at the iconic Nehru Place commercial hub. Features false ceiling, centralized AC, server room, multiple cabins, conference room, reception lobby, and ample parking. Excellent frontage and signage rights.',
    amenities: ['Centralized AC','Conference Room','Server Room','Reception','Cafeteria','Lift','2 Car Parks','24/7 Security','Power Backup','High Speed Internet'],
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80',
      'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=800&q=80',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80'
    ],
    featured: false,
    createdAt: '2025-11-22'
  },
  {
    id: 'p7',
    title: 'Fully Furnished Studio Apartment',
    location: 'Hauz Khas, South Delhi',
    price: 900000,
    priceLabel: '₹9 Lakh',
    type: 'Apartment',
    status: 'For Rent',
    bedrooms: 1,
    bathrooms: 1,
    area: 550,
    floor: '2nd',
    facing: 'South-East',
    age: '6 Years',
    description: 'Chic studio apartment steps from Hauz Khas Village. Fully furnished with premium fittings, split AC, high-speed WiFi ready, and beautiful decor. Perfect for young professionals and couples. Walking distance to Hauz Khas metro.',
    amenities: ['Furnished','AC','Power Backup','Security','WiFi Ready','Housekeeping','Gym','Swimming Pool'],
    images: [
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&q=80',
      'https://images.unsplash.com/photo-1594563703937-fdc640497dcd?w=800&q=80',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
      'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=800&q=80'
    ],
    featured: false,
    createdAt: '2025-11-28'
  },
  {
    id: 'p8',
    title: '4 BHK Builder Floor with Terrace',
    location: 'Defence Colony, South Delhi',
    price: 12500000,
    priceLabel: '₹1.25 Cr',
    type: 'Builder Floor',
    status: 'For Sale',
    bedrooms: 4,
    bathrooms: 4,
    area: 4100,
    floor: 'First Floor + Terrace',
    facing: 'East-West',
    age: '2 Years',
    description: 'Exquisitely designed 4 BHK floor in upscale Defence Colony with exclusive terrace rights. Triple-height double-glass windows, premium oak wood flooring, designer bathrooms, and a chef-grade island kitchen. Walking distance to Defence Colony Market and Khan Market.',
    amenities: ['Exclusive Terrace','Two Car Parks','Premium Flooring','Designer Bathrooms','Island Kitchen','Servant Quarter','Power Backup','CCTV','Smart Locks','Garden View'],
    images: [
      'https://images.unsplash.com/photo-1616137466211-f939a420be84?w=800&q=80',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80',
      'https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-df78b94c1030?w=800&q=80'
    ],
    featured: true,
    createdAt: '2025-12-01'
  }
];

// ─── SEED BLOGS ───────────────────────────────────────────────────────────
const SEED_BLOGS = [
  {
    id: 'b1',
    title: 'South Delhi Real Estate: Why 2025 Is the Year to Buy',
    category: 'Market Trends',
    excerpt: 'South Delhi property values have appreciated 18% over the past year. We break down which micro-markets offer the best returns and why savvy investors are doubling down.',
    content: `South Delhi remains one of the most coveted real estate destinations in the National Capital Region, and 2025 is shaping up to be a landmark year for buyers and investors alike.

**Why South Delhi Outperforms**

Micro-markets like Greater Kailash, Defence Colony, Vasant Kunj, and Saket have consistently delivered above-average capital appreciation. Several factors are driving this trend:

1. **Infrastructure push** — The completed extension of the Metro Phase IV through key South Delhi corridors has dramatically reduced commute times to the CBD.
2. **Supply constraints** — Land availability in South Delhi is extremely limited, keeping supply tight even as demand grows.
3. **NRI demand** — Post-pandemic, returning NRIs have been particularly active in the ₹3–10 crore segment.

**Best Options by Budget**

- **Under ₹50 Lakh**: Malviya Nagar and Saket 2–3 BHK apartments
- **₹50 Lakh – ₹1.5 Cr**: Vasant Kunj builder floors and GK II apartments
- **₹1.5 Cr+**: Defence Colony, Shanti Niketan, and GK I independent floors and villas

At Sqft an Yards, we've seen 40% more buyer enquiries in Q1 2025 versus Q4 2024 — a strong leading indicator.

**Our Advice**

Don't wait for the "perfect" moment. In South Delhi, the perfect moment was always yesterday. Reach out to our advisors for a complimentary market assessment customised to your budget and requirements.`,
    image: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=800&q=80',
    author: 'Rahul Sharma',
    date: '2025-03-01',
    readTime: '5 min read'
  },
  {
    id: 'b2',
    title: 'Top 10 Questions to Ask Before Buying a Builder Floor in Delhi',
    category: 'Buying Guide',
    excerpt: 'Builder floors are hugely popular in South Delhi, but they come with unique legal and structural considerations. Our experts outline the must-ask questions.',
    content: `Builder floors — independent floors of a property built by a developer on a plotted site — are wildly popular in Delhi. They offer larger spaces, more privacy, and direct ownership compared to multi-storey apartments.

But before signing on the dotted line, ask these 10 essential questions:

**1. What is the ownership structure?**
Is it a GPA (General Power of Attorney) sale or a registry-based sale? Always insist on a registry-backed transaction.

**2. Has the building plan been sanctioned?**
Request a copy of the approved building plan from the MCD or DDA. Unsanctioned construction is riskier.

**3. Is RERA registration applicable?**
For projects with more than 8 units or complex structures, RERA registration is mandatory.

**4. What are the mutation and electricity connection statuses?**
Ensure there is no dispute on mutation (property records at the local body level) and that electricity connections are individual, not shared.

**5. Are there society maintenance charges?**
Builder floors in colonies often have unofficial RWA charges. Clarify what's included.

**6. What is the approved FSI / FAR?**
Floor Space Index determines how much of the plot can be built. Violations create legal risks.

**7. What is the age of the building and roof slab quality?**
Older construction may require structural assessment. Ask for a waterproofing guarantee for the roof.

**8. Are the plans for remaining floors known?**
Will the ground floor owner develop further? Noise, dust, and loss of light are real concerns.

**9. What are the parking arrangements?**
Is parking designated, legally allocated, or informal?

**10. Who handles maintenance post-purchase?**
For builder floors, maintenance responsibility is typically the owner's — budget for this accordingly.

At Sqft an Yards, we handle all legal due diligence as part of our end-to-end buyer advisory service. Call us on +91-70-659-77751 to speak with an advisor.`,
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80',
    author: 'Priya Kapoor',
    date: '2025-02-15',
    readTime: '7 min read'
  },
  {
    id: 'b3',
    title: 'Interior Design Trends Transforming Delhi Homes in 2025',
    category: 'Home & Design',
    excerpt: 'From biophilic living walls to AI-powered smart kitchens — interior design in Delhi is taking a bold leap forward. Here\'s what\'s defining luxury interiors this year.',
    content: `The way Delhi's premium homeowners furnish and design their spaces is evolving rapidly, blending global aesthetics with quintessentially Indian touches.

**1. Biophilic Design — Bringing Nature Indoors**
Living walls, indoor water features, and natural stone surfaces are dominating high-end interiors in GK, Defence Colony, and Vasant Kunj residences.

**2. Japandi Minimalism**
The fusion of Japanese wabi-sabi and Scandinavian minimalism — warm wood tones, clean lines, and uncluttered spaces — is a dominant aesthetic in 2025.

**3. Smart & AI-Powered Kitchens**
Integrated appliances with voice control, AI-powered ovens, and app-controlled lighting are becoming standard in ₹1 crore+ properties.

**4. Statement Marble**
Book-matched marble feature walls in living rooms and island tops are the ultimate luxury flex in 2025 Delhi interiors.

**5. Curves Are Back**
Arched doorways, curved sofas, and organic shapes are replacing straight-edged modernism.

**6. Multifunctional Spaces**
With the work-from-home model persisting, premium buyers are prioritising dedicated home office nooks, soundproofed study rooms, and collapsible dining room extensions.

Our design partners at Sqft an Yards can connect you with Delhi's top interior design studios post-purchase.`,
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
    author: 'Ananya Bose',
    date: '2025-01-28',
    readTime: '4 min read'
  },
  {
    id: 'b4',
    title: 'NRI Guide: Buying Property in South Delhi from Abroad',
    category: 'NRI Corner',
    excerpt: 'Navigating Indian property laws as an NRI can be complex. Our comprehensive guide covers FEMA regulations, repatriation rules, and the safest ways to invest in South Delhi real estate.',
    content: `As a Non-Resident Indian, investing in South Delhi property is entirely possible — and can be highly rewarding — provided you understand the regulatory framework.

**Who Can Buy Property in India?**
NRIs (Indian passport holders living abroad) and PIOs (Person of Indian Origin) with an OCI card can purchase residential and commercial property in India without RBI approval. Agricultural land and farmhouses require special permission.

**Payment Rules Under FEMA**
All property transactions must be paid via:
- NRE (Non-Resident External) account — proceeds repatriable
- NRO (Non-Resident Ordinary) account — subject to repatriation limits
- Foreign currency inward remittances via banking channels

You CANNOT make payment in cash or via traveller's cheques.

**TDS Rules**
If buying from a resident Indian, you must deduct 1% TDS on sales consideration exceeding ₹50 Lakh under Section 194IA.
If buying from another NRI, TDS rates are significantly higher (20% + surcharge on capital gains).

**Power of Attorney**
NRIs frequently use a trusted POA (Power of Attorney holder) in India to execute transactions. Ensure the POA is notarised, apostilled, and registered.

**Loan Eligibility**
NRIs can take home loans from Indian banks, typically up to 80% of property value, repayable via NRE/NRO accounts.

**Repatriation on Sale**
You can repatriate up to USD 1 million per financial year from the sale proceeds of up to 2 residential properties.

At Sqft an Yards, we have dedicated NRI advisors to guide you through every step — from property selection to registration. WhatsApp us on +91-70-659-77751.`,
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80',
    author: 'Vikram Menon',
    date: '2025-01-10',
    readTime: '8 min read'
  }
];

// ─── DATA API ──────────────────────────────────────────────────────────────
function initData() {
  if (!localStorage.getItem(PROPERTIES_KEY)) {
    localStorage.setItem(PROPERTIES_KEY, JSON.stringify(SEED_PROPERTIES));
  }
  if (!localStorage.getItem(BLOGS_KEY)) {
    localStorage.setItem(BLOGS_KEY, JSON.stringify(SEED_BLOGS));
  }
}

function getProperties() {
  return JSON.parse(localStorage.getItem(PROPERTIES_KEY) || '[]');
}

function getBlogs() {
  return JSON.parse(localStorage.getItem(BLOGS_KEY) || '[]');
}

function saveProperties(data) {
  localStorage.setItem(PROPERTIES_KEY, JSON.stringify(data));
}

function saveBlogs(data) {
  localStorage.setItem(BLOGS_KEY, JSON.stringify(data));
}

function addProperty(prop) {
  const props = getProperties();
  prop.id = 'p' + Date.now();
  prop.createdAt = new Date().toISOString().split('T')[0];
  prop.images = prop.images || ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80'];
  props.unshift(prop);
  saveProperties(props);
  return prop;
}

function updateProperty(id, updates) {
  const props = getProperties();
  const idx = props.findIndex(p => p.id === id);
  if (idx > -1) { props[idx] = { ...props[idx], ...updates }; saveProperties(props); }
}

function deleteProperty(id) {
  saveProperties(getProperties().filter(p => p.id !== id));
}

function addBlog(blog) {
  const blogs = getBlogs();
  blog.id = 'b' + Date.now();
  blog.date = new Date().toISOString().split('T')[0];
  blogs.unshift(blog);
  saveBlogs(blogs);
  return blog;
}

function updateBlog(id, updates) {
  const blogs = getBlogs();
  const idx = blogs.findIndex(b => b.id === id);
  if (idx > -1) { blogs[idx] = { ...blogs[idx], ...updates }; saveBlogs(blogs); }
}

function deleteBlog(id) {
  saveBlogs(getBlogs().filter(b => b.id !== id));
}

function formatPrice(num) {
  if (num >= 10000000) return '₹' + (num / 10000000).toFixed(2) + ' Cr';
  if (num >= 100000) return '₹' + (num / 100000).toFixed(0) + ' Lakh';
  return '₹' + num.toLocaleString('en-IN');
}

function formatDate(str) {
  const d = new Date(str);
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
}

// Shared nav scroll behaviour
function initNav() {
  const nav = document.querySelector('.navbar');
  if (!nav) return;
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', onScroll);
  onScroll();
  const ham = document.querySelector('.hamburger');
  const mob = document.querySelector('.nav-mobile');
  if (ham && mob) {
    ham.addEventListener('click', () => {
      mob.classList.toggle('open');
      const [a,b,c] = ham.querySelectorAll('span');
      if (mob.classList.contains('open')) {
        a.style.transform = 'rotate(45deg) translate(5px,5px)';
        b.style.opacity = '0';
        c.style.transform = 'rotate(-45deg) translate(5px,-5px)';
      } else {
        [a,b,c].forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
      }
    });
  }
}

// Reveal on scroll
function initReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 100) {
      el.classList.add('visible');
    } else {
      obs.observe(el);
    }
  });
}

// Counter animation
function animateCounter(el, target, suffix = '') {
  let current = 0;
  const step = target / 60;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) { current = target; clearInterval(timer); }
    el.textContent = Math.floor(current) + suffix;
  }, 25);
}

function showToast(msg, type = 'success') {
  let t = document.querySelector('.toast');
  if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.appendChild(t); }
  t.style.borderLeftColor = type === 'error' ? '#e74c3c' : 'var(--gold)';
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3200);
}
