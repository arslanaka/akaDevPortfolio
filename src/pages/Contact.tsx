import PageTransition from "@/components/PageTransition";
import ChatBox from "@/components/ChatBox"; 

const Contact: React.FC = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-playfair text-gray-800">
            Ask about me
          </h1>
          <br></br>
          <ChatBox />
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
