import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#F4E7D6] text-[#1F1F1F] border-t border-[#E8D9C4]">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 md:py-16">
        {/* Mobile: Centered Stacked Logo */}
        <div className="mb-8 flex justify-center md:hidden">
          <Image
            src="/brand/adam-shaw-tattoo-logo-stacked-black.png"
            alt="Adam Shaw Tattoo logo"
            width={260}
            height={156}
            className="w-full max-w-sm h-auto"
          />
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-8">
          {/* Column 1: Desktop Vertical Mark Logo */}
          <div className="hidden md:flex md:items-start md:justify-center md:pt-6">
            <Image
              src="/brand/adam-shaw-tattoo-logo-mark-black.png"
              alt="Adam Shaw Tattoo logo"
              width={90}
              height={220}
              className="h-auto w-auto max-h-[160px]"
            />
          </div>

          {/* Column 2: Address + Contact */}
          <div className="space-y-4 text-left md:pt-0">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#1F1F1F]">Address</p>
              <p className="text-sm leading-relaxed text-[#4A4A4A]">
                Kapala Tattoo
                <br />
                71 St Anne's Rd
                <br />
                Winnipeg, MB R2M 2Y6
              </p>
            </div>
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#1F1F1F]">Contact</p>
              <p className="text-sm text-[#4A4A4A]">
                <a href="mailto:adam@adamshawtattoo.com" className="hover:text-[#1F1F1F] hover:underline transition-all">
                  adam@adamshawtattoo.com
                </a>
              </p>
            </div>
          </div>

          {/* Column 3: Portfolio */}
          <div className="text-left">
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-[#1F1F1F]">Portfolio</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/portfolio" className="text-sm text-[#4A4A4A] hover:text-[#1F1F1F] hover:underline transition-all">
                Portfolio
              </Link>
              <Link href="/about" className="text-sm text-[#4A4A4A] hover:text-[#1F1F1F] hover:underline transition-all">
                About Adam
              </Link>
              <Link href="/flash" className="text-sm text-[#4A4A4A] hover:text-[#1F1F1F] hover:underline transition-all">
                Flash Gallery
              </Link>
              <Link href="/on-the-road" className="text-sm text-[#4A4A4A] hover:text-[#1F1F1F] hover:underline transition-all">
                On the Road
              </Link>
            </nav>
          </div>

          {/* Column 4: Tattoo Info */}
          <div className="text-left">
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-[#1F1F1F]">Tattoo Info</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/traditional" className="text-sm text-[#4A4A4A] hover:text-[#1F1F1F] hover:underline transition-all">
                Traditional Tattoos
              </Link>
              <Link href="/info" className="text-sm text-[#4A4A4A] hover:text-[#1F1F1F] hover:underline transition-all">
                Info
              </Link>
              <Link href="/faqs" className="text-sm text-[#4A4A4A] hover:text-[#1F1F1F] hover:underline transition-all">
                FAQs
              </Link>
              <Link href="/aftercare" className="text-sm text-[#4A4A4A] hover:text-[#1F1F1F] hover:underline transition-all">
                Tattoo Aftercare
              </Link>
            </nav>
          </div>

          {/* Column 5: Connect */}
          <div className="text-left">
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-[#1F1F1F]">Connect</h3>
            <nav className="mb-6 flex flex-col gap-2">
              <a href="#" className="text-sm text-[#4A4A4A] hover:text-[#1F1F1F] hover:underline transition-all" aria-label="Instagram">
                Instagram
              </a>
              <a href="#" className="text-sm text-[#4A4A4A] hover:text-[#1F1F1F] hover:underline transition-all" aria-label="Facebook">
                Facebook
              </a>
            </nav>
            <div className="border-t border-[#E8D9C4] pt-4">
              <Link href="/policies" className="text-sm text-[#4A4A4A] hover:text-[#1F1F1F] hover:underline transition-all">
                Policies
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-[#E8D9C4] pt-8 text-xs text-[#4A4A4A] sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Adam Shaw. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/policies" className="underline hover:text-[#1F1F1F] transition-colors">Privacy Policy</Link>
            <Link href="/policies" className="underline hover:text-[#1F1F1F] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

