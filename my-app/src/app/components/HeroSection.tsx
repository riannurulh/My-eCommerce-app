export default function HeroSection() {
    return (
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 bg-[url('/path-to-your-hero-image.jpg')] bg-cover bg-center"></div>
        <div className="relative container mx-auto flex flex-col items-center justify-center h-[400px] text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to MyEcommerce</h1>
          <p className="text-xl mb-8">Discover the best products just for you.</p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">Shop Now</button>
        </div>
      </section>
    );
  }
  