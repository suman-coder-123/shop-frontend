function HeroSection() {
  return (
    <section className="bg-pink-100 min-h-[90vh] flex items-center">

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <div>

          <p className="text-pink-500 font-semibold mb-4">
            New Collection 2026
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-gray-800">

            Discover <span className="text-pink-500">Fashion</span>
            <br />
            That Defines You

          </h1>

          <p className="mt-6 text-gray-600 text-lg">

            Explore modern dresses, kurtis,
            western wear and premium collections.

          </p>

          <button className="mt-8 bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-xl text-lg font-semibold">

            Shop Now

          </button>

        </div>

        {/* RIGHT */}
        <div>

          <img
            src="https://images.unsplash.com/photo-1496747611176-843222e1e57c"
            alt="fashion"
            className="rounded-3xl shadow-2xl"
          />

        </div>

      </div>

    </section>
  );
}

export default HeroSection;