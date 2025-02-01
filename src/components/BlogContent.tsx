import React from "react";

interface BlogContentProps {
  content: {
    quote: string;
    reference: string;
    body: string;
    image: string;
    imageCaption: string;
  };
}

const BlogContent: React.FC<BlogContentProps> = ({ content }) => {
  return (
    <div>
      <blockquote className="border-l-4 border-primary pl-4 italic text-xl font-playfair my-8">
        {content.quote}
        <footer className="text-sm text-muted-foreground mt-2">
          {content.reference}
        </footer>
      </blockquote>

      <figure className="my-8">
        <img
          src={content.image}
          alt={content.imageCaption}
          className="rounded-lg w-full aspect-video object-cover"
        />
        <figcaption className="text-sm text-muted-foreground mt-2 text-center">
          {content.imageCaption}
        </figcaption>
      </figure>

      <div className="leading-relaxed whitespace-pre-line">{content.body}</div>
    </div>
  );
};

export default BlogContent;
