import Reveal from './Reveal.jsx'

// Тёмно-зелёный callout «Хит сезона» — аналог Drinko «New drink»,
// но в фирменной палитре АРЧИ (forest + gold + cream).
export default function Promo() {
  return (
    <section className="bg-sand-50 pb-20 sm:pb-24">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-[28px] bg-forest-800 p-6 text-sand-50 sm:rounded-[36px] sm:p-10 lg:p-14">
          {/* Декоративные блики */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-[320px] w-[320px] rounded-full bg-gold-400/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 -bottom-24 h-[280px] w-[280px] rounded-full bg-forest-400/40 blur-3xl"
          />

          <div className="relative z-10 grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
            {/* Текстовая часть */}
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-gold-200/90">
                хит сезона
              </p>

              <div className="mt-3 flex flex-col">
                <span className="display text-[44px] font-extrabold leading-[0.85] text-sand-50 sm:text-[68px] lg:text-[88px]">
                  Свежий
                  <span className="ml-2 align-middle font-script text-xl font-normal text-gold-200/80 sm:text-2xl lg:text-3xl">
                    хит
                  </span>
                </span>
                <span className="display text-[44px] font-extrabold leading-[0.85] text-gold-400 sm:text-[68px] lg:text-[88px]">
                  десерт
                </span>
              </div>

              <h3 className="mt-6 font-display text-xl font-semibold text-sand-50 sm:text-2xl">
                Тирамису от шеф-кондитера
              </h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-sand-100/85 sm:text-base">
                Классический тирамису на сливочном маскарпоне с эспрессо
                и какао. Подаётся с горячим чёрным кофе.
              </p>

              <div className="mt-5 flex items-center gap-4">
                <span className="font-display text-3xl font-bold text-sand-50 sm:text-4xl">
                  280<span className="ml-1 text-base font-normal text-sand-100/70">с</span>
                </span>
                <span className="text-base text-sand-100/40 line-through">
                  340 с
                </span>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-2">
                {['маскарпоне', 'эспрессо', 'какао', '−18%'].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-sand-50/15 bg-sand-50/5 px-3 py-1 text-[12px] font-medium text-sand-100/90"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#menu"
                  className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-5 py-3 text-sm font-semibold text-forest-900 transition hover:bg-gold-200 active:scale-[0.98] tap"
                >
                  Все десерты
                </a>
                <a
                  href="tel:+996555556555"
                  className="inline-flex items-center gap-2 rounded-full border border-sand-50/20 bg-transparent px-5 py-3 text-sm font-medium text-sand-50 transition hover:bg-sand-50/10 active:scale-[0.98] tap"
                >
                  Заказать стол
                </a>
              </div>
            </div>

            {/* Эмодзи-плейсхолдер справа */}
            <div className="relative mx-auto aspect-square w-full max-w-[420px]">
              <div className="absolute inset-6 rounded-full bg-gold-400/10 ring-1 ring-gold-400/25" />
              <div className="absolute inset-0 flex items-center justify-center text-[40vw] sm:text-[28vw] lg:text-[14vw]">
                <span aria-hidden="true">🍰</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
