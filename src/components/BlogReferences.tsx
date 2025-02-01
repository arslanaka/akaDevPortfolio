import React from "react";

interface Reference {
  text: string;
  url: string | null;
  isClickable: boolean;
}

interface BlogReferencesProps {
  references: Reference[];
}

const BlogReferences: React.FC<BlogReferencesProps> = ({ references }) => {
  return (
    <div className="mt-16 border-t pt-8">
      <h2 className="text-2xl font-playfair mb-4">References</h2>
      <ul className="space-y-2 list-none pl-0">
        {references.map((ref, index) => (
          <li key={index}>
            {ref.isClickable ? (
              <a
                href={ref.url!}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                {ref.text}
              </a>
            ) : (
              <span className="text-muted-foreground">{ref.text}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogReferences;
