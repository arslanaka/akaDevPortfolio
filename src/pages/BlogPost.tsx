import { useParams, Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import BlogContent from "@/components/BlogContent";
import BlogReferences from "@/components/BlogReferences";

const BlogPost = () => {
  const { slug } = useParams();

  // This would typically fetch data based on the slug
  const post = {
    title: "How to Scale a Startup: A Comprehensive Guide",
    date: "2024-01-15",
    content: {
      quote: "Growth is never by mere chance; it is the result of forces working together.",
      reference: "- James Cash Penney",
      body: `Starting a company is hard, but scaling it successfully is even harder. This comprehensive guide will walk you through the essential steps and strategies needed to scale your startup effectively.

      First, let's understand what scaling really means. Scaling is about growing your business in a sustainable way while maintaining or improving efficiency. Unlike linear growth, where resources and results increase proportionally, scaling allows your business to grow exponentially while keeping costs under control.

      Key areas we'll cover:
      1. Building a Scalable Foundation
      2. Team Development and Culture
      3. Process Optimization
      4. Technology Infrastructure
      5. Customer Acquisition and Retention
      
      Let's dive into each of these areas and explore how they contribute to successful scaling.`,
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200",
      imageCaption: "Team collaboration in a modern startup environment",
      references: [
        {
          text: "Greater than the sum of our parts: The Evolution of Collective Intelligence",
          url: "https://example.com/collective-intelligence",
          isClickable: true,
        },
        {
          text: "Predictably Irrational: The Hidden Forces That Shape Our Decisions",
          url: "https://example.com/predictably-irrational",
          isClickable: true,
        },
        {
          text: "The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation",
          url: null,
          isClickable: false,
        },
      ],
    },
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-3xl">
          <article className="prose prose-lg max-w-none">
            <div className="text-sm text-muted-foreground mb-4">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>

            <h1 className="text-4xl md:text-5xl font-playfair mb-8">
              {post.title}
            </h1>

            {/* Blog Content */}
            <BlogContent content={post.content} />

            {/* References Section */}
            <BlogReferences references={post.content.references} />

            {/* Back to All Posts */}
            <div className="mt-12 pt-8 border-t">
              <Link to="/writing">
                <Button variant="ghost" className="group">
                  <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  Back to all posts
                </Button>
              </Link>
            </div>
          </article>
        </div>
      </div>
    </PageTransition>
  );
};

export default BlogPost;
