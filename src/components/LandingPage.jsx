export default function Skimm3rzLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-red-950 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-24 lg:px-20">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,#ef4444,transparent_40%)]"></div>

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-[6px] text-red-400 text-sm mb-4">
              Kenya Based Theatre & Production House
            </p>

            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
              Empowering Talent Through
              <span className="block text-red-500">
                Theatre, Film & Dance
              </span>
            </h1>

            <p className="mt-8 text-lg text-slate-300 leading-8 max-w-xl">
              Skimm3rz Production nurtures young talents in acting, film,
              and dance while transforming education through visual learning.
              Based in Nyeri County at Dedan Kimathi University of Technology,
              we provide daily training opportunities and create life-changing
              opportunities for aspiring performers.
            </p>

            <div className="flex gap-4 mt-8 flex-wrap">
              <details className="bg-red-600 rounded-2xl px-6 py-4 cursor-pointer w-full md:w-auto">
                <summary className="font-bold list-none">Invest With Us</summary>
                <div className="mt-4 text-sm text-red-100 space-y-2">
                  <p>Invest in talent development, theatre education and youth empowerment.</p>
                  <p>Email: skimm3rzproduction@gmail.com</p>
                  <p>Phone: +254111358389</p>
                </div>
              </details>

              <details className="border border-white/30 rounded-2xl px-6 py-4 w-full md:w-auto">
                <summary className="font-bold list-none cursor-pointer">
                  Explore Our Mission
                </summary>

                <p className="mt-4 text-slate-300 max-w-md leading-7">
                  Our mission is to nurture and promote talents across Kenya by providing a platform where actors, creatives and other talented individuals can showcase their craft, grow their skills and transform their lives through opportunities in theatre, film and dance.
                </p>
              </details>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-[30px] p-8 border border-white/10 shadow-2xl">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-red-400">
                  Our Pilot Program
                </h3>
                <p className="text-slate-300 mt-2">
                  Bringing Junior Secondary setbooks to life through theatre.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "Wema Hauozi",
                  "Mshale wa Matumaini",
                  "The Last Laugh",
                ].map((book) => (
                  <div
                    key={book}
                    className="bg-black/30 p-4 rounded-xl border border-white/10"
                  >
                    <h4 className="font-semibold">{book}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-6 py-20 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Learning Through Performance
          </h2>

          <p className="text-slate-300 max-w-4xl mx-auto text-lg leading-8">
            We transform literature into engaging stage experiences by acting
            approved Junior Secondary setbooks used in schools and national
            examinations. Visual learning helps learners better understand
            themes, characters, and narratives while improving confidence,
            communication skills and overall academic performance.
          </p>
        </div>
      </section>

      {/* Impact cards */}
      <section className="px-6 lg:px-20 pb-20">
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Talent Development",
              text: "Daily acting, theatre and performance training for young talents.",
            },
            {
              title: "Education Impact",
              text: "Helping schools improve student understanding and exam performance.",
            },
            {
              title: "Social Impact",
              text: "Supporting needy students and creating employment opportunities.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:scale-105 transition"
            >
              <h3 className="text-2xl font-bold text-red-400 mb-4">
                {item.title}
              </h3>
              <p className="text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Invest */}
      <section className="bg-black/40 px-6 py-24 lg:px-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Why Partner With Skimm3rz?
            </h2>

            <div className="space-y-4 text-slate-300 leading-8">
              <p>✓ Strong education and entertainment market opportunity</p>
              <p>✓ Direct impact on thousands of learners</p>
              <p>✓ Scalable model for schools across Kenya</p>
              <p>✓ Income generation for youth creatives</p>
              <p>✓ Community transformation through art</p>
            </div>
          </div>

          <div className="bg-red-600 rounded-[30px] p-10 shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">
              Building Futures Through Talent
            </h3>

            <p className="leading-8 text-red-100">
              Revenue generated sustains our production house, sponsors
              education for deserving students and creates a sustainable
              ecosystem where art transforms lives.
            </p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="text-center px-6 py-24">
        <h2 className="text-5xl font-bold">
          Join the Movement.
        </h2>

        <p className="text-slate-300 mt-6 max-w-2xl mx-auto">
          Help us redefine learning, empower young creatives and transform
          communities through storytelling and performance.
        </p>

        <details className="mt-8 max-w-md mx-auto bg-white text-black rounded-2xl p-5 text-left">
          <summary className="font-bold cursor-pointer text-center list-none">
            Partner With Us
          </summary>

          <div className="mt-4 space-y-3">
            <p>Partner with Skimm3rz Production to empower youth talent and educational theatre.</p>
            <p>Email: skimm3rzproduction@gmail.com</p>
            <p>Phone: +254111358389</p>
          </div>
        </details>

        <p className="mt-12 text-sm text-slate-500">
          Skimm3rz Production • Dedan Kimathi University of Technology • Nyeri County, Kenya
        </p>
      </footer>
    </div>
  )
}
