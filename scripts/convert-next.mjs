import fs from 'fs';
import path from 'path';

const root = process.cwd();

const files = [
  'src/views/About.jsx',
  'src/views/Contact.jsx',
  'src/views/Home.jsx',
  'src/views/Industries.jsx',
  'src/views/Insights.jsx',
  'src/views/PrivacyPolicy.jsx',
  'src/views/Projects.jsx',
  'src/views/Solutions.jsx',
  'src/views/Terms.jsx',
  'src/views/WhyUs.jsx',
  'src/components/Breadcrumbs.jsx',
  'src/components/ProjectCard.jsx',
  'src/components/ProductSearch.jsx',
  'src/components/SolarSavingsCalculator.jsx',
  'src/components/CartDrawer.jsx',
  'src/components/CustomCursor.jsx',
  'src/components/FAQAccordion.jsx',
  'src/components/ProductCard.jsx',
  'src/components/BlogCard.jsx',
  'src/components/Card.jsx',
  'src/components/SectionHeader.jsx',
  'src/components/ScrollReveal.jsx',
  'src/components/BeforeAfterBill.jsx',
  'src/components/SolarEnergyFlow.jsx',
  'src/context/CartContext.jsx',
];

function convert(src) {
  let s = src;

  s = s.replace(/import \{ Link \} from 'react-router-dom';\n?/g, "import Link from 'next/link';\n");
  s = s.replace(
    /import \{ useNavigate, Link \} from 'react-router-dom';/g,
    "import Link from 'next/link';\nimport { useRouter } from 'next/navigation';"
  );
  s = s.replace(
    /import \{ useLocation, useNavigate \} from 'react-router-dom';/g,
    "import { useRouter, useSearchParams } from 'next/navigation';"
  );
  s = s.replace(
    /import \{ useLocation \} from 'react-router-dom';/g,
    "import { useSearchParams } from 'next/navigation';"
  );
  s = s.replace(
    /import \{ useNavigate \} from 'react-router-dom';/g,
    "import { useRouter } from 'next/navigation';"
  );

  s = s.replace(/<Link to=/g, '<Link href=');
  s = s.replace(/const navigate = useNavigate\(\);/g, 'const router = useRouter();');
  s = s.replace(/navigate\(/g, 'router.push(');

  if (!s.startsWith("'use client'")) {
    s = `'use client';\n\n${s}`;
  }

  return s;
}

for (const rel of files) {
  const file = path.join(root, rel);
  const src = fs.readFileSync(file, 'utf8');
  fs.writeFileSync(file, convert(src));
  console.log('converted', rel);
}
