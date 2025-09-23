import Image from "next/image";

export function Newsletter() {
  return (
    <section className="relative bg-[#193240] text-white py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text + Form */}
        <div>
          <h2 className="text-xl font-semibold mb-6">
            ACOMPANHE A NOSSA NEWSLETTER
          </h2>

          <form className="flex w-full max-w-md">
            <input
              type="email"
              placeholder="COLOQUE AQUI O SEU ENDEREÇO DE EMAIL"
              className="flex-1 px-4 py-3 rounded-l-xl text-gray-900 text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="px-5 py-3 bg-[#1f7a8c] rounded-r-xl font-medium hover:bg-[#166273] transition"
            >
              →
            </button>
          </form>

          <p className="mt-3 text-gray-300 text-sm">
            Seja o primeiro a receber as novidades sobre incentivos!
          </p>
        </div>

        {/* Right Side - Illustration */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/mockuppc.webp" // replace with your actual asset
            alt="Mockup website in laptop"
            width={400}
            height={280}
            className="drop-shadow-2xl rotate-3 absolute -top-16"
          />
        </div>
      </div>
    </section>
  );
}
