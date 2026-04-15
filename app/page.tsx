import HeroVideo from '@/components/HeroVideo';
import Carousel from '@/components/Carousel';
import ReviewCard from '@/components/ReviewCard';
import RevealSection from '@/components/RevealSection';
import ContactSection from '@/components/ContactSection';
import Image from 'next/image';

export default function Home() {
  const heroVideoUrl = '/media/hero-desktop.mp4';

  // TODO: Replace with actual portfolio images
  const portfolioItems = [
    <div key="1" className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-300">
      <p className="absolute inset-0 flex items-center justify-center text-gray-600">Portfolio Item 1</p>
    </div>,
    <div key="2" className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-300">
      <p className="absolute inset-0 flex items-center justify-center text-gray-600">Portfolio Item 2</p>
    </div>,
    <div key="3" className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-300">
      <p className="absolute inset-0 flex items-center justify-center text-gray-600">Portfolio Item 3</p>
    </div>,
  ];

  const reviews = [
    <ReviewCard
      key="1"
      name="Ben"
      text="Adam's attention to detail is unmatched. Each piece truly tells a story."
      rating={5}
    />,
    <ReviewCard
      key="2"
      name="Shannon"
      text="I felt completely at ease during my session. The results were stunning."
      rating={5}
    />,
    <ReviewCard
      key="3"
      name="Sam"
      text="He took my rough concept and turned it into something I'll cherish forever."
      rating={5}
    />,
    <ReviewCard
      key="4"
      name="Riley"
      text="Cleanest lines I've ever seen. The healed result looks just as sharp."
      rating={5}
    />,
    <ReviewCard
      key="5"
      name="Jordan"
      text="Came in for a small piece and left already planning my next one."
      rating={5}
    />,
    <ReviewCard
      key="6"
      name="Morgan"
      text="The whole experience was first-rate. Adam's passion for the craft really shows."
      rating={5}
    />,
  ];

  return (
    <div className="bg-[#F4E7D6]">
      {/* Hero Section - Dark Gray Background */}
      <HeroVideo
        videoUrl={heroVideoUrl}
        headline={"BOLD TATTOOS.\nTIMELESS STYLES.\nCRAFTED BY ADAM SHAW."}
        supportingText="Specializing in American Traditional and Japanese styles, Adam Shaw creates tattoos rich in bold imagery and symbolism. Based at Kapala Tattoo in Winnipeg, Adam crafts custom work that tells your story and stands the test of time. Book a session and bring your vision to life."
        primaryButtonText="View Portfolio"
        primaryButtonLink="/portfolio"
        secondaryButtonText="Book a Session"
        secondaryButtonLink="#contact"
      />

      {/* Traditional & Japanese Tattoo Styles */}
      <RevealSection className="bg-[#f6eee0] py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-16">
          <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-20">

            {/* Text column */}
            <div>
              <h2
                className="mb-6 text-[#1f1f1f]"
                style={{
                  fontFamily: "'Barlow Semi Condensed', sans-serif",
                  fontWeight: 500,
                  fontSize: 'clamp(2rem, 3vw, 3rem)',
                  lineHeight: 1,
                  letterSpacing: '-0.01em',
                  textTransform: 'uppercase',
                }}
              >
                Traditional &amp; Japanese Tattoo Styles
              </h2>

              <p className="mb-5 text-[1.1rem] leading-relaxed text-[#1f1f1f]">
                Adam Shaw merges the bold, iconic lines of American Traditional tattoos
                with the flowing detail and deep symbolism of Japanese motif. This
                fusion produces striking, one-of-a-kind tattoos that reflect each
                client&apos;s personal story.
              </p>
              <p className="mb-8 text-[1.1rem] leading-relaxed text-[#1f1f1f]">
                From crisp, timeless outlines to rich, hand-crafted detail, Adam&apos;s work
                bridges old-school authenticity with modern artistry. Whether you want
                a classic motif or a custom design tailored to your vision, each tattoo
                is built to stand the test of time.
              </p>

              <ul className="flex flex-col gap-3">
                {[
                  'Bold lines, timeless style – rooted in tattoo history yet fresh for today.',
                  'Rich cultural symbolism – designs that carry meaning and artistry.',
                  'Crafted for you – every tattoo is personalized to your vision.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="mt-1.5 h-3 w-3 shrink-0 fill-[#1f1f1f]" viewBox="0 0 12 12">
                      <rect width="12" height="12" rx="2" />
                    </svg>
                    <span className="text-[1rem] leading-relaxed text-[#1f1f1f]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image column — placeholder until real photo is added */}
            <div className="aspect-[600/640] w-full overflow-hidden rounded-[8px] bg-[#c9bdb0] shadow-[0_4px_24px_rgba(0,0,0,0.12)] flex items-center justify-center">
              <svg className="h-12 w-12 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Experience Exceptional Tattoo Art */}
      <RevealSection className="bg-[#2F2F2F] py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-16">
          <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-20">

            {/* Image column — left on desktop, below on mobile */}
            <div className="order-2 md:order-1 aspect-[600/640] w-full overflow-hidden rounded-[8px] bg-[#3a3a3a] flex items-center justify-center">
              <svg className="h-12 w-12 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>

            {/* Text column */}
            <div className="order-1 md:order-2">
              <h2
                className="mb-6 text-[#f6eee0]"
                style={{
                  fontFamily: "'Barlow Semi Condensed', sans-serif",
                  fontWeight: 500,
                  fontSize: 'clamp(2rem, 3vw, 3rem)',
                  lineHeight: 1,
                  letterSpacing: '-0.01em',
                  textTransform: 'uppercase',
                }}
              >
                Experience Exceptional Tattoo Art
              </h2>
              <p className="mb-8 text-[1.1rem] leading-relaxed text-[#f6eee0]/85">
                Every tattoo Adam creates is a collaboration — your ideas, his artistry,
                and meticulous attention to detail. Whether you want a full sleeve,
                a small but meaningful piece, or a custom flash design, Adam ensures
                each tattoo is technically precise, visually stunning, and personally
                significant.
              </p>

              <div className="grid grid-cols-2 gap-6 border-t border-[#f6eee0]/20 pt-8">
                <div>
                  <h3
                    className="mb-2 text-[#f6eee0]"
                    style={{
                      fontFamily: "'Barlow Semi Condensed', sans-serif",
                      fontWeight: 500,
                      fontSize: '1.4rem',
                      lineHeight: 1.1,
                      letterSpacing: '-0.01em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Good Vibes
                  </h3>
                  <p className="text-[0.95rem] leading-relaxed text-[#f6eee0]/70">
                    A welcoming space where creativity thrives.
                  </p>
                </div>
                <div>
                  <h3
                    className="mb-2 text-[#f6eee0]"
                    style={{
                      fontFamily: "'Barlow Semi Condensed', sans-serif",
                      fontWeight: 500,
                      fontSize: '1.4rem',
                      lineHeight: 1.1,
                      letterSpacing: '-0.01em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Creative Adaptability
                  </h3>
                  <p className="text-[0.95rem] leading-relaxed text-[#f6eee0]/70">
                    Your style and story are the blueprint for your tattoo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Portfolio Preview Section — full-bleed carousel, no max-width constraint */}
      <div className="bg-[#2F2F2F]">
      <RevealSection className="pb-10 pt-16 md:pb-14 md:pt-20">
        <div className="mb-10 px-4 text-center md:mb-14">
          <h2
            className="uppercase text-[#f6eee0]"
            style={{
              fontFamily: "'Barlow Semi Condensed', sans-serif",
              fontWeight: 500,
              fontSize: 'clamp(2.5rem, 4vw, 3.75rem)',
              lineHeight: 1,
              letterSpacing: '-0.01em',
              textShadow: '0 4px 4px rgba(0,0,0,0.25)',
            }}
          >
            Portfolio Preview
          </h2>
        </div>
        <Carousel
          showDots={true}
          showArrows={true}
          arrowClassName="rounded-[8px] border-2 border-white bg-[#2F2F2F] text-white hover:bg-[#3a3a3a]"
          dotActiveClassName="bg-white w-4"
          dotInactiveClassName="bg-white/40 hover:bg-white/60"
        >
          {portfolioItems}
        </Carousel>
      </RevealSection>
      </div>

      {/* Reviews From Clients Section */}
      <RevealSection className="bg-[#f6eee0] py-20 md:py-28">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <h2
            className="mb-14 text-center text-[#1f1f1f]"
            style={{
              fontFamily: "'Barlow Semi Condensed', sans-serif",
              fontWeight: 500,
              fontSize: 'clamp(2.5rem, 4vw, 3.75rem)',
              lineHeight: 1,
              letterSpacing: '-0.01em',
              textTransform: 'uppercase',
            }}
          >
            Reviews from Clients
          </h2>
          <Carousel
            showDots={true}
            showArrows={true}
            desktopSlidesPerView={2}
            controlsPosition="bottom"
            autoplay={true}
            autoplayDelay={5000}
            arrowClassName="rounded-[8px] border-2 border-[#1f1f1f] bg-[#f6eee0] text-[#1f1f1f] hover:bg-[#ecdec8]"
            dotActiveClassName="bg-[#1f1f1f] w-4"
            dotInactiveClassName="bg-[#1f1f1f]/30 hover:bg-[#1f1f1f]/50"
          >
            {reviews}
          </Carousel>
        </div>
      </RevealSection>

      {/* The Shop Section */}
      <RevealSection className="bg-[#f6eee0] py-20 md:py-28">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-start">
            <div>
              <h2
                className="mb-8 text-[#1f1f1f]"
                style={{
                  fontFamily: "'Barlow Semi Condensed', sans-serif",
                  fontWeight: 500,
                  fontSize: 'clamp(2rem, 3vw, 3rem)',
                  lineHeight: 1,
                  letterSpacing: '-0.01em',
                  textTransform: 'uppercase',
                }}
              >
                The Shop
              </h2>
              <div className="space-y-5">
                <div>
                  <p
                    className="mb-2 text-[#1f1f1f]"
                    style={{
                      fontFamily: "'Barlow Semi Condensed', sans-serif",
                      fontWeight: 500,
                      fontSize: '1.4rem',
                      lineHeight: 1.1,
                      letterSpacing: '-0.01em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Address
                  </p>
                  <p className="text-[1.1rem] leading-relaxed text-[#1f1f1f]">71 St Anne&apos;s Rd, Winnipeg, MB R2M 2Y6</p>
                </div>
                <div>
                  <a
                    href="https://maps.google.com/?q=71+St+Annes+Rd+Winnipeg+MB"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[1rem] font-medium text-[#1f1f1f] underline underline-offset-2 hover:text-[#3f6b4b] transition-colors"
                  >
                    Get Directions
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="relative w-full">
              <div className="hidden md:block">
                <Image
                  src="/maps/map_desktop.png"
                  alt="Map showing Adam Shaw Tattoo location in Winnipeg"
                  width={808}
                  height={524}
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
              <div className="md:hidden">
                <Image
                  src="/maps/map_mobile.png"
                  alt="Map showing Adam Shaw Tattoo location in Winnipeg"
                  width={343}
                  height={408}
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      <ContactSection />
    </div>
  );
}
