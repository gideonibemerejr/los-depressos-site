import Link from "next/link";
import { PortableText } from "@portabletext/react";

import ImageComponent from "./Image";
import GridGallery from "./GridGallery";
import CarouselGallery from "./CarouselGallery";
import VideoPlayer from "./VideoPlayer";

const components = {
  types: {
    image: ({ value }: any) => <ImageComponent value={value} />,
    imageGallery: ({ value }: any) => {
      switch (value?.display) {
        case "grid":
          return <GridGallery value={value} />;
        case "carousel":
          return <CarouselGallery value={value} />;
      }
    },
    videoEmbed: ({ value }: any) => <VideoPlayer url={value.url} />,
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="mt-lg list-decimal space-y-5">{children}</ol>
    ),
  },
  block: {
    normal: ({ children }: any) => (
      <p className="font-light mb-3">{children}</p>
    ),
    h1: ({ children }: any) => (
      <h1 className="text-5xl py-10 font-bold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-4xl py-10 font-bold">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-3xl py-10 font-bold">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-2xl py-10 font-bold">{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-black border-l-4 pl-5 py-5 my-5">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value?.href?.startsWith("/")
        ? "noopener noreferrer"
        : undefined;
      return (
        <Link
          href={value?.href}
          rel={rel}
          className="underline text-primaryOrange decoration-primaryOrange hover:decoration-primaryCream hover:text-primaryCream"
        >
          {children}
        </Link>
      );
    },
  },
};

export default function BlockContent({ value }: any) {
  return <PortableText value={value} components={components} />;
}
