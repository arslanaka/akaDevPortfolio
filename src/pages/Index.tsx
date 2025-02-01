import PageTransition from "@/components/PageTransition";

const Index = () => {
  return (
    <PageTransition>
      <div className="relative min-h-screen pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-3xl relative z-10">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-playfair leading-tight">
              Hi, I'm <span className="block italic">Muhammad Arslan</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-typewriter leading-relaxed">
            Just a wanderer in the world of code, working from somewhere beneath the stars
                        </p>
            {/* <div className="pt-4">
              <p className="text-lg text-muted-foreground">
                You might know me from projects like{" "}
                <a href="#" className="underline decoration-2 decoration-primary/30 hover:decoration-primary transition-all">
                  Project One
                </a>
                {" "}or{" "}
                <a href="#" className="underline decoration-2 decoration-primary/30 hover:decoration-primary transition-all">
                  Project Two
                </a>
                .
              </p>
            </div> */}
          </div>
        </div>

        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute right-20 top-3/4 transform -translate-y-1/2 w-72 h-72 opacity-25 pointer-events-none rounded-lg"
        >
          <source src="/earth.mp4" type="video/mp4" />
        </video>
      </div>
    </PageTransition>
  );
};


export default Index;