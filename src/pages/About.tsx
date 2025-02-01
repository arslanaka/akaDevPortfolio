import PageTransition from "@/components/PageTransition";
import TechIcons from "@/components/TechIcons"; // Import the TechIcons component

const About = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-playfair">About Me</h1>
            <div className="prose prose-lg font-typewriter">
              <p>
                I’m a software engineer who loves building useful and clean digital experiences. With a background in both
                design and development, I enjoy creating solutions that are simple and effective.
              </p>
              <br />
              <p>
                Outside of coding, I like exploring new technologies, writing about what I learn, and working on
                personal projects to keep improving.
              </p>
            </div>

            {/* Ask about me section, below the paragraphs */}
            <div className="space-y-4 mt-8">
              <p className="text-xl text-muted-foreground">
                So far I've worked on and using ...
              </p>
              <br></br>

              {/* Tech Icons Grid */}
              <TechIcons />

              <br/>
              <br />
              <a
                href="mailto:arslanma516@gmail.com"
                className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
