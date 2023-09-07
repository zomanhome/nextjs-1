import Navbar from '@/templates/Navbar';

const Hero = () => {
  return (
    <div className="flex h-screen flex-col bg-[url('/assets/images/bg-1.jpg')] bg-cover bg-center bg-no-repeat">
      <Navbar />
      <div></div>
    </div>
  );
};

export { Hero };
