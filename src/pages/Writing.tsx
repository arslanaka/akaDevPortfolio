import { useNavigate } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Writing = () => {
  const navigate = useNavigate();
  
  const posts = [
    {
      title: "How to Scale a Startup: A Comprehensive Guide",
      excerpt: "Learn the essential strategies and principles for scaling your startup successfully.",
      date: "2024-01-15",
      content: {
        quote: "Growth is never by mere chance; it is the result of forces working together.",
        reference: "- James Cash Penney",
        body: `Starting a company is hard, but scaling it successfully is even harder. This comprehensive guide will walk you through the essential steps and strategies needed to scale your startup effectively.

        First, let's understand what scaling really means. Scaling is about growing your business in a sustainable way while maintaining or improving efficiency.`,
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200",
        imageCaption: "Team collaboration in a modern startup environment"
      }
    },
    {
      title: "Building Better User Experiences",
      excerpt: "A deep dive into creating intuitive interfaces",
      date: "2024-01-01",
      content: {
        quote: "Design is not just what it looks like and feels like. Design is how it works.",
        reference: "- Steve Jobs",
        body: "Understanding user needs is the foundation of great design...",
        image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=1200",
        imageCaption: "UI/UX design process visualization"
      }
    },
  ];

  const handlePostClick = (post: typeof posts[0]) => {
    const slug = post.title.toLowerCase().replace(/\s+/g, '-');
    navigate(`/writing/${slug}`);
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="space-y-12">
            <h1 className="text-4xl md:text-5xl font-playfair">Writing</h1>
            <div className="grid gap-8">
              {posts.map((post) => (
                <Card
                  key={post.title}
                  className="cursor-pointer hover:shadow-lg transition-all duration-300"
                  onClick={() => handlePostClick(post)}
                >
                  <CardContent className="p-6">
                    <div className="text-sm text-muted-foreground mb-2">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                    <h3 className="text-2xl font-playfair mb-3">{post.title}</h3>
                    <p className="text-muted-foreground mb-6">{post.excerpt}</p>
                    
                    <div className="space-y-6">
                      <blockquote className="border-l-4 border-primary pl-4 italic text-lg font-playfair">
                        {post.content.quote}
                        <footer className="text-sm text-muted-foreground mt-2">
                          {post.content.reference}
                        </footer>
                      </blockquote>
                      
                      <p className="text-muted-foreground leading-relaxed line-clamp-3">
                        {post.content.body}
                      </p>
                      
                      <figure className="mt-6">
                        <img
                          src={post.content.image}
                          alt={post.content.imageCaption}
                          className="rounded-lg w-full h-48 object-cover"
                        />
                        <figcaption className="text-sm text-muted-foreground mt-2 text-center">
                          {post.content.imageCaption}
                        </figcaption>
                      </figure>

                      <div className="flex justify-end mt-4">
                        <Button variant="ghost" className="group">
                          Read more 
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Writing;