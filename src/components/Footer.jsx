import Logo from './Logo.jsx'
import Reveal from './Reveal.jsx'

// Координаты на 2GIS / OSM: 42.856911, 75.283572 (Токмок)
const LAT = 42.856911
const LNG = 75.283572
const BBOX_PAD = 0.012

const bbox = [
  LNG - BBOX_PAD,
  LAT - BBOX_PAD * 0.5,
  LNG + BBOX_PAD,
  LAT + BBOX_PAD * 0.5,
].join(',')

const TWO_GIS_URL =
  'https://2gis.kg/bishkek/geo/70000001112760790/75.283572,42.856911'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="visit" className="bg-sand-100 pt-16 pb-10 sm:pt-20">
      <div className="container-x">
        <Reveal className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Контакты + лого */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <Logo size={48} />
              <span className="font-display text-2xl font-semibold tracking-tight text-ink-900">
                АРЧА
              </span>
            </div>
            <h2 className="display mt-8 text-4xl font-bold leading-[0.95] sm:text-5xl">
              Токмок
              <br />
              <span className="text-gold-500">кафе среди хвои</span>
            </h2>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-ink-700/60">Телефон</p>
                <a
                  href="tel:+996555556555"
                  className="mt-1 block font-display text-2xl font-semibold text-ink-900 hover:text-gold-500"
                >
                  +996 555 556 555
                </a>
                <a
                  href="https://wa.me/996555556555"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-block text-xs text-ink-700/70 hover:text-gold-500"
                >
                  WhatsApp →
                </a>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-ink-700/60">Часы работы</p>
                <p className="mt-1 font-display text-2xl font-semibold text-ink-900">
                  10:00 – 22:00
                </p>
                <p className="mt-0.5 text-xs text-ink-700/70">каждый день</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              <a
                href={TWO_GIS_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-forest-800 px-5 py-3 text-sm font-medium text-sand-50 transition hover:bg-forest-900 active:scale-[0.98] tap"
              >
                Маршрут в 2GIS
              </a>
              <a
                href="https://instagram.com/archa.forest"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-ink-900/15 bg-white px-5 py-3 text-sm font-medium text-ink-900 transition hover:bg-sand-200 active:scale-[0.98] tap"
              >
                @archa.forest
              </a>
            </div>
          </div>

          {/* Карта */}
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-3xl border border-ink-900/10 bg-sand-50">
              <iframe
                title="АРЧА на карте"
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${LAT},${LNG}`}
                className="h-[280px] w-full border-0 sm:h-[360px] lg:h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Reveal>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-ink-900/10 pt-6 text-xs text-ink-700/70 sm:flex-row">
          <p>© {year} АРЧА. Все права защищены.</p>
          <p>Сделано с любовью в Токмоке</p>
        </div>
      </div>
    </footer>
  )
}
