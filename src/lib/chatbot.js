import { siteConfig } from './site';

export const CHAT_QUICK_REPLIES = [
  { id: 'pricing', label: 'Solar pricing' },
  { id: 'calculator', label: 'Savings calculator' },
  { id: 'residential', label: 'Home solar' },
  { id: 'commercial', label: 'Commercial solar' },
  { id: 'contact', label: 'Contact team' },
];

const RESPONSES = {
  greeting: `Welcome to ${siteConfig.name}! 👋\n\nWe provide engineering-led solar solutions for residential, commercial, and industrial projects across Pakistan.\n\nHow can I help you today?`,

  about: `${siteConfig.name} designs high-performance solar systems around your energy use, property, and long-term goals.\n\nWe cover:\n• System design & engineering\n• Premium component selection\n• Installation & net metering support\n• Residential, commercial & industrial projects`,

  residential:
    'Our residential solar systems are planned around household consumption, rooftop space, backup needs, and future energy requirements.\n\nTypical home systems range from 3 kW to 15 kW depending on your monthly electricity bill.\n\n→ Use our calculator: /calculator\n→ Request a review: /contact?sector=residential#contact-form',

  commercial:
    'Commercial solar is evaluated around daytime load profiles, rooftop conditions, system capacity, and business continuity.\n\nWe help offices, retail, warehouses, and commercial buildings reduce operating costs with engineered solar.\n\n→ Request consultation: /contact?sector=commercial#contact-form',

  industrial:
    'Industrial systems require careful planning for larger loads, equipment compatibility, generation profiles, and operating conditions.\n\nWe engineer solutions for factories, plants, and high-demand facilities.\n\n→ Schedule audit: /contact?sector=industrial#contact-form',

  pricing:
    'Solar system cost depends on capacity, equipment brand, roof structure, and installation scope.\n\nAs a guide for Pakistan:\n• 3–5 kW residential: commonly PKR 400k–700k+\n• 10 kW+: PKR 1.2M+\n• Commercial/industrial: custom engineered quote\n\nAll figures are indicative. For an accurate quote, share your monthly bill and property details.\n\n→ Get estimate: /calculator\n→ Request quote: /contact#contact-form',

  calculator:
    'Our Solar Savings Calculator estimates:\n• Recommended system size (kW)\n• Estimated monthly & annual savings\n• Approximate payback period\n\nIt uses your monthly electricity bill to generate a preliminary assessment.\n\n→ Open calculator: /calculator',

  netmetering:
    'We support net metering-ready solar systems for eligible grid-connected installations in Pakistan.\n\nOur team can guide you through feasibility, system design, and the documentation process for your DISCO/utility requirements.\n\n→ Discuss your site: /contact#contact-form',

  installation:
    'Our process typically includes:\n1. Initial consultation & bill review\n2. Site survey & load analysis\n3. Engineered system design\n4. Equipment procurement\n5. Professional installation\n6. Net metering & commissioning support\n\n→ Start your feasibility review: /contact#contact-form',

  products:
    'We supply and integrate premium solar technology including panels, inverters, lithium batteries, and related equipment from established manufacturers.\n\nBrowse our product catalog:\n→ /solutions',

  contact: `You can reach ${siteConfig.name} here:\n\n📧 ${siteConfig.email}${siteConfig.phone ? `\n📞 ${siteConfig.phone}` : ''}\n🕐 ${siteConfig.hours}\n\n→ Contact form: /contact#contact-form`,

  hours: `Our business hours:\n${siteConfig.hours}\n\nFor urgent inquiries, use our contact form and our team will respond promptly.\n\n→ /contact#contact-form`,

  quote:
    'To request a solar feasibility review, share:\n• Your name & phone\n• Property type (home / business / factory)\n• Approximate monthly electricity bill\n• Location\n\n→ Submit inquiry: /contact#contact-form',

  projects:
    'View our completed and reference projects across residential, commercial, and industrial sectors.\n\n→ /projects',

  fallback: `Thanks for your message! For detailed or site-specific questions, our engineering team can help directly.\n\n→ Contact us: /contact#contact-form\n→ Calculator: /calculator\n→ WhatsApp: available via the green button below`,
};

function matchTopic(text) {
  const q = text.toLowerCase().trim();
  if (!q) return 'greeting';

  if (/^(hi|hello|hey|salam|aoa|assalam)/.test(q)) return 'greeting';
  if (/about|who are|company|es energy/.test(q)) return 'about';
  if (/home|house|residential/.test(q)) return 'residential';
  if (/commercial|office|business|shop|warehouse/.test(q)) return 'commercial';
  if (/industrial|factory|plant|manufacturing/.test(q)) return 'industrial';
  if (/price|cost|rate|pkr|rupee|expensive|cheap|kitne|kitna/.test(q)) return 'pricing';
  if (/calculat|saving|estimate|bill|payback|kw|kilowatt/.test(q)) return 'calculator';
  if (/net.?meter|grid|unit|export/.test(q)) return 'netmetering';
  if (/install|setup|process|how long|timeline/.test(q)) return 'installation';
  if (/product|panel|inverter|battery|equipment|brand/.test(q)) return 'products';
  if (/contact|email|phone|call|reach|number|address/.test(q)) return 'contact';
  if (/hour|time|open|when/.test(q)) return 'hours';
  if (/quote|feasib|consult|survey|audit/.test(q)) return 'quote';
  if (/project|portfolio|work|reference/.test(q)) return 'projects';

  return 'fallback';
}

export function getChatGreeting() {
  return {
    text: RESPONSES.greeting,
    quickReplies: CHAT_QUICK_REPLIES,
  };
}

export function getChatResponse(input, quickReplyId) {
  const topic = quickReplyId || matchTopic(input);
  const text = RESPONSES[topic] || RESPONSES.fallback;

  let quickReplies = [];
  if (topic === 'greeting' || topic === 'fallback') {
    quickReplies = CHAT_QUICK_REPLIES;
  } else if (topic !== 'contact') {
    quickReplies = [
      { id: 'contact', label: 'Contact team' },
      { id: 'calculator', label: 'Calculator' },
    ];
  }

  return { text, quickReplies, topic };
}

/** Convert markdown-style links like → /contact#contact-form to clickable paths */
export function parseChatLinks(text) {
  const parts = [];
  const regex = /(→\s*)(\/[\w\-/?=&%#]+)/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push({ type: 'text', value: text.slice(lastIndex, match.index) });
    }
    parts.push({ type: 'link', prefix: match[1], href: match[2] });
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push({ type: 'text', value: text.slice(lastIndex) });
  }

  return parts.length ? parts : [{ type: 'text', value: text }];
}
