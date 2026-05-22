export default function JournalPage() {
  return (
    <main className="bg-[#f5f1eb] px-4 pt-24 pb-16 text-[#1d1d1d] md:pt-28 md:pb-20">

      <section className="mx-auto max-w-[1450px]">

        {/* TITLE */}

        <p className="mb-6 text-[10px] uppercase tracking-[0.28em] opacity-40 md:mb-8">
          Journal
        </p>

        <h1
          className="mb-14 max-w-[95%] text-[3.6rem] leading-[0.9] tracking-[-0.06em] md:mb-20 md:max-w-[900px] md:text-[5rem] md:leading-[0.92]"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Observations, textures and found objects.
        </h1>

        {/* IMAGES */}

        <div className="grid gap-8 md:grid-cols-2 md:gap-12">

          <img
            src="/images/journal/journal-1.png"
            alt="Mediterranean atmosphere"
            className="h-[420px] w-full rounded-[2rem] object-cover md:h-[760px] md:rounded-[2.2rem]"
          />

          <img
            src="/images/journal/journal-2.png"
            alt="Mediterranean atmosphere"
            className="h-[420px] w-full rounded-[2rem] object-cover md:h-[760px] md:rounded-[2.2rem]"
          />

        </div>

      </section>

    </main>
  );
}