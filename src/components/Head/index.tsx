import NextHead from 'next/head';

import React from 'react';

interface HeadProps {
  title?: string;
  color?: string;
  description?: string;
  url?: string;
  image?: string;
  withoutSuffix?: boolean;
}

const Head: React.FC<HeadProps> = ({
  title = 'Move it',
  color = '#5965e0',
  description = 'A Move it ajuda você a evitar futuros problemas de saúde',
  url = 'https://moveit-you.vercel.app',
  image = 'https://repository-images.githubusercontent.com/341594210/556e4180-7c02-11eb-9896-708d87ba10be',
  withoutSuffix = false
}) => {
  if (description.length > 150) {
    description = `${description.substr(0, 147)}...`;
  }

  return (
    <NextHead>
      <title>{withoutSuffix ? title : `${title} - Move it`}</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width,minimum-scale=1,initial-scale=1"
      />
      <meta name="language" content="pt-br" />
      <meta name="theme-color" content={color} />
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:type" content="website" />
      <meta name="og:url" content={url} />
      <meta name="og:site_name" content="Move it" />
      <meta name="og:description" content={description} />

      <meta name="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:alt" content="Thumbnail" />
      <meta property="og:image:type" content="image/png" />
    </NextHead>
  );
};

export default Head;
