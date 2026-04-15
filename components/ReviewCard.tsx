interface ReviewCardProps {
  name: string;
  text: string;
  rating?: number;
}

function StarIcon() {
  return (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="#c8a84b" aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function ReviewCard({ name, text, rating = 5 }: ReviewCardProps) {
  return (
    <div className="flex flex-col gap-5 border-t-2 border-[#1f1f1f]/15 px-4 pt-8 md:px-8">
      <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: rating }).map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>
      <p
        className="text-[#1f1f1f]"
        style={{
          fontFamily: "'Barlow Semi Condensed', sans-serif",
          fontWeight: 500,
          fontSize: 'clamp(1.2rem, 1.6vw, 1.45rem)',
          lineHeight: 1.2,
          letterSpacing: '-0.01em',
          textTransform: 'uppercase',
        }}
      >
        &ldquo;{text}&rdquo;
      </p>
      <p
        className="mt-auto text-sm font-semibold tracking-wide text-[#1f1f1f]/70"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        — {name}
      </p>
    </div>
  );
}
