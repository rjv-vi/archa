// Hero: АРЧА / ☕ / КАФЕ в одну строку на тёмно-зелёном фоне.
// Над/под заголовком — короткое позиционирование и кнопка-CTA.
// Картинку продукта пока не используем — стоит крупный эмодзи-плейсхолдер.
export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-forest-800 text-sand-50"
    >
      {/* мягкое золотое свечение */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-24 h-[460px] w-[460px] rounded-full bg-gold-400/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 h-[360px] w-[360px] rounded-full bg-forest-400/30 blur-3xl"
      />

      <div className="container-x relative pt-[60px] sm:pt-[68px]">
        {/* Маленький слоган-надпись над заголовком */}
        <div className="flex justify-center pt-10 sm:pt-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-sand-50/15 bg-sand-50/5 px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] text-sand-100/80 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
            Кафе среди хвойного воздуха
          </span>
        </div>

        <div className="flex items-center justify-between gap-1 pb-10 pt-8 sm:gap-3 sm:pb-16 sm:pt-12 lg:pb-20 lg:pt-14">
          {/* Левое слово */}
          <h1 className="display shrink-0 text-[16vw] font-extrabold leading-[0.85] text-sand-50 sm:text-[15vw] lg:text-[clamp(96px,11vw,200px)]">
            АРЧА
          </h1>

          {/* Эмодзи-плейсхолдер по центру */}
          <div className="flex aspect-square w-[26vw] shrink-0 items-center justify-center sm:w-[24vw] lg:w-[20vw] lg:max-w-[320px]">
            <div className="relative flex h-full w-full items-center justify-center">
              {/* подложка-кружок */}
              <div className="absolute inset-0 rounded-full bg-gold-400/10 ring-1 ring-gold-400/25" />
              <span
                aria-hidden="true"
                className="relative text-[18vw] sm:text-[16vw] lg:text-[10vw]"
              >
                ☕
              </span>
            </div>
          </div>

          {/* Правое слово */}
          <h1 className="display shrink-0 text-[16vw] font-extrabold leading-[0.85] text-sand-50 sm:text-[15vw] lg:text-[clamp(96px,11vw,200px)]">
            КАФЕ
          </h1>
        </div>

        {/* Подвал hero — короткое описание + CTA */}
        <div className="flex flex-col items-start gap-6 pb-16 sm:flex-row sm:items-end sm:justify-between sm:pb-24">
          <p className="max-w-md text-base text-sand-100/80 sm:text-lg">
            Европейская, восточная, национальная и турецкая кухни в Токмоке.
            Открыто каждый день с 10:00 до 22:00.
          </p>

          <a
            href="#menu"
            className="group inline-flex items-center gap-3 rounded-full bg-gold-400 px-6 py-4 text-sm font-semibold text-forest-900 transition hover:bg-gold-200 active:scale-[0.98] tap"
          >
            Посмотреть меню
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14" />
              <path d="M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
