import React from "react";

const Contact = () => {
  return (
    <div>
      {" "}
      <section
        id="contact"
        className="min-h-screen flex items-center bg-linear-to-br from-black via-zinc-900 to-black text-white"
      >
        {/* Glow */}
        <div className="absolute inset-0 -z-10 bg-pink-500/10 blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 grid gap-16 md:grid-cols-2 items-center">
          {/* LEFT TEXT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase">
              Contact <span className="text-yellow-300">Us</span>
            </h2>
            <p className="mt-6 text-gray-400 max-w-lg">
              Have questions, feedback, or want to partner with us? Fill the
              form and our team will get back to you shortly.
            </p>

            <div className="mt-8 space-y-4 text-sm text-gray-300">
              <p>📍 India</p>
              <p>📧 support@fooddelivery.com</p>
              <p>📞 +91 98765 43210</p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-xl p-8">
            <form className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Your Name"
                className="px-4 py-3 rounded-lg bg-black/30 text-white
                     placeholder:text-white/40 border border-white/10
                     focus:outline-none focus:ring-2 focus:ring-yellow-400/40"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-3 rounded-lg bg-black/30 text-white
                     placeholder:text-white/40 border border-white/10
                     focus:outline-none focus:ring-2 focus:ring-yellow-400/40"
              />

              <textarea
                rows={4}
                placeholder="Your Message"
                className="px-4 py-3 rounded-lg bg-black/30 text-white
                     placeholder:text-white/40 border border-white/10
                     focus:outline-none focus:ring-2 focus:ring-yellow-400/40"
              />

              <button
                type="submit"
                className="mt-2 rounded-lg bg-yellow-300 py-3 font-semibold text-black
                     hover:bg-yellow-400 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
