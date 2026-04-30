import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import path from 'path';

export const alt = 'Adam Shaw Tattoo — Traditional & Japanese Tattoo Artist in Winnipeg';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const runtime = 'nodejs';

export default function Image() {
  const portraitData = readFileSync(path.join(process.cwd(), 'public/about/adam-shaw-portrait.jpg'));
  const portraitSrc = `data:image/jpeg;base64,${portraitData.toString('base64')}`;

  const logoData = readFileSync(path.join(process.cwd(), 'public/brand/adam-shaw-tattoo-logo-horizontal-white.png'));
  const logoSrc = `data:image/png;base64,${logoData.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          position: 'relative',
          width: 1200,
          height: 630,
          display: 'flex',
          alignItems: 'flex-end',
          backgroundColor: '#1F1F1F',
        }}
      >
        {/* Portrait — fills frame, cropped to show face */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={portraitSrc}
          alt=""
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 1200,
            height: 630,
            objectFit: 'cover',
            objectPosition: 'center top',
          }}
        />

        {/* Gradient overlay — darkens bottom so logo is legible */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 1200,
            height: 630,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.75) 100%)',
          }}
        />

        {/* White logo — bottom-left */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          alt="Adam Shaw Tattoo"
          style={{
            position: 'relative',
            height: 52,
            width: 'auto',
            marginLeft: 64,
            marginBottom: 52,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
