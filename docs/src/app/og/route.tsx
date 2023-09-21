import { ImageResponse, NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const postTitle = searchParams.get('title') || '';
  const fontData = await fetch(
    new URL(
      '../../../node_modules/@fontsource/inter/files/inter-latin-500-normal.woff',
      import.meta.url
    )
  ).then(res => res.arrayBuffer());

  const titleLength = postTitle.length;

  let titleSize = '112px';
  if (titleLength > 14) titleSize = '96px';
  if (titleLength > 32) titleSize = '80px';

  let titleMargin = '104px';
  if (titleLength > 14) titleMargin = '48px';
  if (titleLength > 40) titleMargin = '0';

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          backgroundColor: '#F9F9F8',
        }}
      >
        <svg
          style={{ position: 'absolute', bottom: 0, right: 0 }}
          width="1200"
          height="630"
          viewBox="0 0 1200 630"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_2_444)">
            <path
              d="M1302.32 -20.5L707.929 573.895L478.324 803.5"
              stroke="url(#paint0_linear_2_444)"
              strokeWidth="277.643"
            />
            <path
              d="M1603.04 69.2222L985.572 686.688V834.185"
              stroke="url(#paint1_linear_2_444)"
              strokeWidth="277.643"
            />
            <path
              d="M1137.41 335.296L1439.63 637.522V863.106"
              stroke="url(#paint2_linear_2_444)"
              strokeWidth="277.643"
            />
            <path
              opacity="0.4"
              d="M1043.41 628.846L1529.29 142.971"
              stroke="url(#paint3_linear_2_444)"
              strokeWidth="277.643"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_2_444"
              x1="942.19"
              y1="297.699"
              x2="707.929"
              y2="575.341"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E4DEFC" />
              <stop offset="1" stopColor="#FDD8D3" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_2_444"
              x1="1167.77"
              y1="518.945"
              x2="985.572"
              y2="692.472"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFE0A1" />
              <stop offset="1" stopColor="#CEEBCF" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_2_444"
              x1="1170.67"
              y1="368.556"
              x2="1439.63"
              y2="643.305"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E4DEFC" />
              <stop offset="1" stopColor="#C4EAEF" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_2_444"
              x1="1225.62"
              y1="461.103"
              x2="1043.41"
              y2="634.63"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFE0A1" />
              <stop offset="1" stopColor="#CEEBCF" />
            </linearGradient>
            <clipPath id="clip0_2_444">
              <rect width="1200" height="630" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            display: 'flex',
            height: '100%',
            width: '100%',
            mixBlendMode: 'soft-light',
            opacity: 0.8,
            backgroundImage: `url(../texture.png)`,
          }}
        ></div>
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            padding: '80px',
          }}
        >
          <div
            style={{
              display: 'flex',
              marginTop: titleMargin,
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: titleSize,
              lineHeight: '112px',
              letterSpacing: '-1.76px',
              whiteSpace: 'pre-wrap',
            }}
          >
            {postTitle}
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="385"
            height="88"
            viewBox="0 0 385 88"
          >
            <path
              fill="#1B1B18"
              d="M157.08 22h-8.36l-18.45 21.01h-.55V22h-6.63v44h6.63V52.3l5.2-5.96L149.13 66h8l-17.81-24.2L157.07 22ZM184.94 36.38a12.9 12.9 0 0 0-4.7-2.88c-1.74-.61-3.55-.94-5.42-.94-3.06 0-5.75.72-8.03 2.17a14.66 14.66 0 0 0-5.34 6.05 20.06 20.06 0 0 0-1.9 8.94c0 3.38.64 6.4 1.9 8.94a14.1 14.1 0 0 0 5.42 5.91 16.02 16.02 0 0 0 8.39 2.09c2.42 0 4.56-.36 6.43-1.1a13.14 13.14 0 0 0 4.7-3.1 10.88 10.88 0 0 0 2.62-4.71l-6.08-1.1a6.79 6.79 0 0 1-4.29 4.18c-1.02.33-2.12.52-3.33.52a9.82 9.82 0 0 1-4.92-1.2 8.05 8.05 0 0 1-3.27-3.55 12.35 12.35 0 0 1-1.13-5.17h23.43v-2.29c0-3-.41-5.52-1.21-7.64a13.3 13.3 0 0 0-3.3-5.12h.03Zm-18.9 10.23c.09-1.4.39-2.75 1.02-3.98a9.03 9.03 0 0 1 3.08-3.44 8.34 8.34 0 0 1 4.7-1.32c1.66 0 3.11.38 4.35 1.13a7.68 7.68 0 0 1 2.89 3.1 9.57 9.57 0 0 1 1.04 4.51h-17.1.02ZM208.53 58.6h-.33L199.84 33h-6.87l12.07 33.44-.8 2.2a8.54 8.54 0 0 1-1.87 3.16c-.69.66-1.51 1-2.44 1.05a9.56 9.56 0 0 1-3.14-.41l-1.54 5.25c.38.16.96.33 1.76.5.8.16 1.65.21 2.61.21 1.79 0 3.33-.3 4.68-.9a9.72 9.72 0 0 0 3.49-2.7 14.46 14.46 0 0 0 2.42-4.37l13.61-37.4h-6.9l-8.36 25.6-.03-.03ZM244.12 47.52l-5.25-1.21c-1.82-.44-3.14-.99-3.97-1.65a3.26 3.26 0 0 1-1.23-2.67c0-1.26.6-2.3 1.81-3.13a7.96 7.96 0 0 1 4.57-1.21 7.9 7.9 0 0 1 3.32.63c.88.41 1.6.99 2.12 1.65.52.66.91 1.38 1.16 2.12l5.83-1.05a10.8 10.8 0 0 0-4.07-6.18c-2.06-1.54-4.87-2.31-8.42-2.31-2.47 0-4.67.4-6.6 1.23a10.47 10.47 0 0 0-4.5 3.44 8.47 8.47 0 0 0-1.63 5.12c0 2.33.74 4.29 2.2 5.83 1.46 1.54 3.74 2.64 6.82 3.35l5.58 1.24c1.57.36 2.75.88 3.52 1.6a3.4 3.4 0 0 1 1.16 2.6c0 1.27-.63 2.37-1.9 3.25-1.26.88-2.94 1.32-5.06 1.32-1.93 0-3.5-.41-4.7-1.24a5.85 5.85 0 0 1-2.4-3.65l-6.21.93a9.97 9.97 0 0 0 4.29 6.77c2.34 1.59 5.36 2.36 9.05 2.36 2.66 0 5-.44 7.04-1.32 2.03-.88 3.6-2.09 4.75-3.63a8.54 8.54 0 0 0 1.71-5.28c0-2.34-.74-4.23-2.23-5.7-1.48-1.45-3.74-2.52-6.79-3.24l.03.03ZM274.37 60.61a6.5 6.5 0 0 1-3.3-.22 2.8 2.8 0 0 1-1.46-1.26 5.5 5.5 0 0 1-.55-2.81V38.17h6.76V33h-6.76v-7.92h-6.44V33h-4.83v5.17h4.83v19.5c0 1.98.44 3.66 1.35 4.95a8.34 8.34 0 0 0 3.55 2.91c1.46.64 3.03.94 4.73.91a13.06 13.06 0 0 0 4.18-.69l-1.16-5.3c-.21.05-.52.1-.9.16ZM304.29 34.7c-1.3-.82-2.7-1.37-4.18-1.67-1.49-.3-2.89-.47-4.21-.47-1.98 0-3.88.28-5.7.85a11.66 11.66 0 0 0-7.92 7.56l6.06 1.38a7.6 7.6 0 0 1 2.56-3.16c1.23-.94 2.94-1.43 5.11-1.43 2.17 0 3.63.52 4.7 1.54 1.08 1.02 1.57 2.47 1.57 4.37v.14c0 .77-.27 1.32-.82 1.68-.56.35-1.46.57-2.7.74-1.24.16-2.83.33-4.81.58-1.57.19-3.08.46-4.6.82-1.5.36-2.86.88-4.06 1.6a8 8 0 0 0-2.9 2.86 8.94 8.94 0 0 0-1.06 4.59c0 2.17.49 3.99 1.48 5.47a9.56 9.56 0 0 0 4.01 3.41c1.71.8 3.58 1.18 5.67 1.18 1.81 0 3.38-.27 4.68-.8a9.46 9.46 0 0 0 5.06-4.45h.24V66h6.27V44.08c0-2.42-.41-4.37-1.24-5.88a9.37 9.37 0 0 0-3.19-3.5h-.02Zm-1.98 19.4a7.16 7.16 0 0 1-3.88 6.4 9.41 9.41 0 0 1-4.56 1.05 7.83 7.83 0 0 1-4.49-1.21c-1.15-.8-1.76-2.01-1.76-3.6a4 4 0 0 1 .91-2.76 5.76 5.76 0 0 1 2.45-1.6c1.01-.35 2.17-.62 3.4-.79l1.99-.27c.8-.11 1.6-.22 2.42-.36.82-.14 1.56-.3 2.22-.5.67-.19 1.1-.41 1.32-.63v4.26h-.02ZM330.82 60.61a6.5 6.5 0 0 1-3.3-.22 2.8 2.8 0 0 1-1.45-1.26 5.5 5.5 0 0 1-.55-2.81V38.17h6.76V33h-6.76v-7.92h-6.44V33h-4.84v5.17h4.84v19.5c0 1.98.44 3.66 1.35 4.95a8.34 8.34 0 0 0 3.55 2.91c1.45.64 3.02.94 4.73.91a13.05 13.05 0 0 0 4.18-.69l-1.16-5.3c-.22.05-.52.1-.9.16ZM346.88 33h-6.43v33h6.44V33ZM343.7 20.24c-1.13 0-2.07.39-2.87 1.13a3.56 3.56 0 0 0-1.18 2.72 3.5 3.5 0 0 0 1.19 2.7c.8.74 1.76 1.12 2.86 1.12 1.1 0 2.06-.38 2.86-1.12a3.57 3.57 0 0 0 1.18-2.73 3.5 3.5 0 0 0-1.19-2.7 4.08 4.08 0 0 0-2.86-1.12ZM375.57 58.6a6.94 6.94 0 0 1-2.5 1.96c-1 .46-2.1.68-3.33.68a7.84 7.84 0 0 1-4.73-1.43 9.43 9.43 0 0 1-3.11-4.07 15.93 15.93 0 0 1-1.1-6.24c0-2.42.38-4.37 1.13-6.1a9.03 9.03 0 0 1 3.13-4 8.04 8.04 0 0 1 4.7-1.4c2.07 0 3.69.56 4.93 1.68a7.58 7.58 0 0 1 2.36 3.99h6.25a11.47 11.47 0 0 0-2.18-5.83 12.41 12.41 0 0 0-4.75-3.88 15.41 15.41 0 0 0-6.72-1.37c-3.1 0-5.8.71-8.1 2.17a14.56 14.56 0 0 0-5.34 6.02 19.82 19.82 0 0 0-1.9 8.89c0 3.35.6 6.24 1.84 8.8 1.24 2.55 3 4.56 5.31 6.02a15.07 15.07 0 0 0 8.25 2.17c2.61 0 4.87-.47 6.82-1.43a11.9 11.9 0 0 0 6.74-9.68h-6.25a7.47 7.47 0 0 1-1.42 3.05h-.03ZM55 0 5.5 49.5l33 16.5L55 0ZM33 88l49.5-49.5-33-16.5L33 88Z"
            />
            <path fill="url(#a)" d="m49.5 22-44 27.5 33 16.5 11-44Z" />
            <defs>
              <linearGradient
                id="a"
                x1="5.5"
                x2="55"
                y1="49.5"
                y2="38.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#C8C7C1" />
                <stop offset="1" stopColor="#1B1B18" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: fontData,
          style: 'normal',
        },
      ],
    }
  );
}
