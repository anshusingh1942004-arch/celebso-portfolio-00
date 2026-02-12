export function ContactForm() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Send Your Query
          </h2>
          <p className="text-foreground/60">
            Tell us about your project and our team will contact you shortly.
          </p>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 glass-card p-8 rounded-3xl">

          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-3 rounded-xl bg-background border border-white/10 outline-none"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="px-4 py-3 rounded-xl bg-background border border-white/10 outline-none"
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="px-4 py-3 rounded-xl bg-background border border-white/10 outline-none md:col-span-2"
          />

          <textarea
            placeholder="Describe your requirement"
            rows={5}
            className="px-4 py-3 rounded-xl bg-background border border-white/10 outline-none md:col-span-2 resize-none"
          />

          <button
            type="submit"
            className="md:col-span-2 w-fit mx-auto rounded-full bg-primary text-white px-8 py-3 font-semibold hover:opacity-90 transition"
          >
            Submit Query
          </button>


        </form>

      </div>
    </section>
  );
}
