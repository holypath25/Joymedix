import Link from 'next/link'
import type { Metadata } from 'next'
import Button from '@/components/ui/Button'
import { CATALOG_PRODUCTS, CATEGORIES } from '@/lib/catalog'

export const metadata: Metadata = {
  title: 'JOYMEDIX — Korean Medical Aesthetic Products, Global Distribution',
  description:
    'B2B wholesale distribution of premium Korean & international medical aesthetic products — Nabota, Botulax, Xeomin, Yvoire, Rejuran and more. For licensed medical professionals.',
}

const BUSINESSES = [
  {
    number: '01',
    label: 'Distribution & Manufacturing',
    title: 'Aesthetic Product Distribution',
    desc: 'Wholesale supply of botulinum toxins, HA fillers, PDRN and skin boosters — sourced direct from GMP-certified Korean manufacturers, with OEM & white-label available.',
    color: '#1e3a5f',
  },
  {
    number: '02',
    label: 'Education & Advisory',
    title: 'Overseas Beauty Seminar',
    desc: 'Clinical seminars for practitioners in Toronto and Sydney — injection technique, device protocols, and product education led by our medical advisory team.',
    color: '#008080',
  },
  {
    number: '03',
    label: 'Workforce Placement',
    title: 'Beautician Staffing',
    desc: 'Matching verified Korean beauty technicians with clinics and salons in Australia — skill verification, visa support, and post-placement follow-up.',
    color: '#b8952a',
  },
]

const STATS = [
  { value: '20+', label: 'Product SKUs' },
  { value: '5', label: 'Categories' },
  { value: '2', label: 'Overseas Markets' },
  { value: '24H', label: 'Quote Response' },
  { value: 'GMP', label: 'Certified Only' },
  { value: 'OEM', label: 'White-Label Available' },
]

function Eyebrow({ children, tone = 'dark' }: { children: React.ReactNode; tone?: 'dark' | 'light' }) {
  return (
    <p
      className={`text-xs font-bold uppercase tracking-[0.25em] mb-4 ${
        tone === 'dark' ? 'text-[#4db8b8]' : 'text-[#008080]'
      }`}
    >
      {children}
    </p>
  )
}

function BracketLink({ href, children, tone = 'light' }: { href: string; children: React.ReactNode; tone?: 'light' | 'dark' }) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] transition-colors ${
        tone === 'light' ? 'text-white hover:text-[#4db8b8]' : 'text-ink hover:text-[#008080]'
      }`}
    >
      <span className="opacity-50 group-hover:opacity-100 transition-opacity">[</span>
      {children}
      <span className="opacity-50 group-hover:opacity-100 transition-opacity">]</span>
    </Link>
  )
}

export default function HomePage() {
  const featured = CATALOG_PRODUCTS.filter((p) => p.popular)

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0f2340] text-white relative overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/joy-hero.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-[#0f2340]/70" />
        <div className="container-page py-24 lg:py-36 relative">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/40 mb-8">
            // Welcome to JOYMEDIX
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold uppercase leading-[0.95] tracking-tight">
            Korean Medical
            <br />
            <span className="text-[#4db8b8]">Aesthetics Network</span>
          </h1>
          <p className="mt-8 text-lg italic text-white/50 max-w-xl">
            Our mission is to connect Korea&apos;s clinical beauty expertise with the world.
          </p>
          <p className="mt-4 text-base text-white/65 leading-relaxed max-w-xl">
            JOYMEDIX operates as a bridge between Korean medical aesthetic manufacturers and clinics worldwide — providing wholesale distribution, professional education, and export logistics under one roof.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-8">
            <BracketLink href="/quote-request">Get Started</BracketLink>
            <BracketLink href="/products">View Catalog</BracketLink>
          </div>
          <p className="mt-16 text-[11px] uppercase tracking-widest text-white/25">
            For licensed medical professionals and authorized distributors only
          </p>
        </div>
      </section>

      {/* Category Bar */}
      <section className="bg-[#162d48] border-t border-white/10">
        <div className="container-page py-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {CATEGORIES.map((cat, i) => (
              <a
                key={cat.id}
                href={`/products?category=${cat.id}`}
                className={`group flex flex-col px-5 py-4 border-white/10 hover:bg-white/5 transition-colors ${
                  i !== 0 ? 'border-t sm:border-t-0 sm:border-l' : ''
                }`}
              >
                <span className="text-white text-xs font-bold uppercase tracking-wider group-hover:text-[#4db8b8] transition-colors">
                  {cat.label}
                </span>
                <span className="text-white/35 text-xs mt-1">{cat.desc}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Curated Selection */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="flex items-end justify-between mb-14 gap-6">
            <div>
              <Eyebrow tone="light">Curated Selection</Eyebrow>
              <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-ink">
                Featured Brands
              </h2>
              <p className="mt-3 text-ink-muted max-w-md text-sm">
                An edit of the most trusted formulas from Korea&apos;s medical aesthetic manufacturers.
              </p>
            </div>
            <BracketLink href="/products" tone="dark">Full Catalog</BracketLink>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-slate-200">
            {featured.map((product) => (
              <div key={product.id} className="group border-r border-b border-slate-200 flex flex-col">
                <div
                  className="h-40 flex items-end px-6 pb-5"
                  style={{ backgroundColor: product.imageColor }}
                >
                  <div>
                    <p className="text-white/45 text-[11px] font-bold uppercase tracking-[0.2em]">
                      {product.categoryLabel}
                    </p>
                    <p className="text-white text-2xl font-bold uppercase tracking-tight leading-tight mt-1">
                      {product.name}
                    </p>
                    <p className="text-white/55 text-xs mt-0.5">{product.brandKo} · {product.manufacturer}</p>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-sm text-ink-muted leading-relaxed flex-1">
                    {product.description}
                  </p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-widest text-ink-faint">{product.country}</span>
                    <BracketLink href="/quote-request" tone="dark">View Details</BracketLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Business */}
      <section className="section-pad bg-surface-soft">
        <div className="container-page">
          <div className="text-center max-w-xl mx-auto mb-16">
            <Eyebrow tone="light">Global · Our Business</Eyebrow>
            <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-ink">
              Three Lines, One Platform
            </h2>
            <p className="mt-4 text-ink-muted text-sm">
              Driving distribution, education, and workforce success across Korea, Canada, and Australia.
            </p>
          </div>

          <div className="space-y-px bg-slate-200">
            {BUSINESSES.map((biz) => (
              <div key={biz.number} className="bg-white p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-6 lg:gap-12 items-center">
                <span
                  className="text-5xl lg:text-6xl font-bold leading-none opacity-15"
                  style={{ color: biz.color }}
                >
                  {biz.number}
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2" style={{ color: biz.color }}>
                    {biz.label}
                  </p>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-ink">{biz.title}</h3>
                  <p className="mt-2 text-sm text-ink-muted leading-relaxed max-w-xl">{biz.desc}</p>
                </div>
                <BracketLink href="/about" tone="dark">Details</BracketLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Network Stats */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Eyebrow tone="light">Why JOYMEDIX</Eyebrow>
              <h2 className="text-3xl font-bold uppercase tracking-tight text-ink mb-6">
                Direct Source.
                <br />
                Verified Products.
                <br />
                Global Delivery.
              </h2>
              <div className="space-y-5">
                {[
                  { title: 'Direct from Manufacturers', desc: 'We source directly from Korean pharmaceutical and cosmetics manufacturers — no middlemen, better pricing.' },
                  { title: 'Medical-Grade Only', desc: 'Every product in our catalog is validated by our medical advisory team. GMP-certified manufacturers only.' },
                  { title: 'Export & Customs Handled', desc: 'We manage all export documentation, cold-chain logistics, and customs clearance to your country.' },
                  { title: 'OEM & White-Label Available', desc: 'Custom formulation, private labelling, and branded packaging available for qualified partners.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-5 h-5 rounded-full bg-[#4db8b8] flex-shrink-0 flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-ink text-sm">{item.title}</p>
                      <p className="text-sm text-ink-muted mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 border-t border-l border-slate-200">
              {STATS.map((stat) => (
                <div key={stat.label} className="border-r border-b border-slate-200 p-8 text-center">
                  <p className="text-3xl font-bold uppercase text-[#1e3a5f]">{stat.value}</p>
                  <p className="text-[11px] uppercase tracking-widest text-ink-faint mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Business Inquiry */}
      <section className="section-pad bg-[#0f2340]">
        <div className="container-page text-center">
          <Eyebrow tone="dark">Global Business Inquiry</Eyebrow>
          <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white">
            Get in Touch
          </h2>
          <p className="mt-6 text-white/55 text-lg italic max-w-xl mx-auto">
            &ldquo;Scale your clinic with direct access to Korea&apos;s medical aesthetic market.&rdquo;
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button href="/quote-request" size="lg" className="bg-[#4db8b8] hover:bg-[#3da8a8] border-0 text-white rounded-none uppercase tracking-widest text-xs font-bold">
              Request a Quote
            </Button>
            <Button href="/catalog" variant="ghost" size="lg" className="text-white hover:bg-white/10 border border-white/30 rounded-none uppercase tracking-widest text-xs font-bold">
              Download Catalog
            </Button>
          </div>
          <p className="mt-8 text-[11px] uppercase tracking-widest text-white/25">
            For licensed medical professionals and authorized distributors only
          </p>
        </div>
      </section>
    </>
  )
}
