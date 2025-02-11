import { Metadata } from 'next';

export function constructMetaData({
  title = 'Game Of Thrones 2025',
  description = 'Game Of Thrones is the Official Sports Fest of RCCIIT.',
  authors = {
    name: 'GAME OF THRONES RCCIIT Team 2025',
    url: 'https://got.rcciit.org.in/',
  },
  creator = 'GAME OF THRONES RCCIIT Team 2025',
  generator = 'Next.js',
  publisher = 'GAME OF THRONES',
  icons = '/favicon.png',
  robots = 'index, follow',
  image = '/favicon.png',
}: {
  title?: string;
  description?: string;
  image?: string;
  authors?: { name: string; url: string };
  creator?: string;
  generator?: string;
  publisher?: string;
  icons?: string;
  robots?: string;
} = {}): Metadata {
  return {
    title,
    description,
    authors,
    creator,
    generator,
    publisher,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    icons,
    metadataBase: new URL('https://got.rcciit.org.in/'),
    robots,
  };
}
