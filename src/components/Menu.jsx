import { useMemo, useState } from 'react'
import { categories, dishes } from '../data/menu.js'
import DishImage from './DishImage.jsx'
import Reveal from './Reveal.jsx'

export default function Menu() {
  const [active, setActive] = useState(categories[0].id)
  const items = useMemo(() => dishes[active] || [], [active])

  return (
    <section id="menu" className="bg-sand-50 py-20 sm:py-24">
      <div className="container-x">
        {/* Заголовок */}
        <Reveal className="flex items-end justify-between gap-4">
          <div>
            <h2 className="display text-5xl font-bold leading-none sm:text-6xl">
              Меню
            </h2>
            <p className="mt-2 font-script text-2xl text-gold-500">блюда</p>
          </div>
          <p className="hidden text-sm text-ink-700 sm:block">
            пн–вс · 10:00 – 22:00
          </p>
        </Reveal>

        {/* Табы пилюли */}
        <div className="-mx-5 mt-10 sm:mx-0">
          <div
            className="flex gap-2 overflow-x-auto px-5 pb-2 sm:flex-wrap sm:px-0 [-ms-overflow-style:none] [scrollbar-width:none]"
            style={{ scrollbarWidth: 'none' }}
          >
            {categories.map((c) => {
              const isActive = c.id === active
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setActive(c.id)}
                  className={`shrink-0 whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition tap ${
                    isActive
                      ? 'bg-forest-800 text-sand-50'
                      : 'bg-white text-ink-800 hover:bg-sand-200 ring-1 ring-ink-900/5'
                  }`}
                >
                  {c.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Сетка карточек */}
        <div
          key={active}
          className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4"
        >
          {items.map((item, i) => (
            <article
              key={item.name}
              style={{ animationDelay: `${i * 40}ms` }}
              className="group flex flex-col rounded-3xl border border-ink-900/5 bg-white p-3 transition hover:-translate-y-1 hover:shadow-card sm:p-4 motion-safe:animate-[fadeUp_0.5s_ease-out_both]"
            >
              <div className="relative overflow-hidden rounded-2xl bg-sand-100">
                <DishImage
                  slug={item.imgKey}
                  name={item.name}
                  emoji={item.emoji}
                  className="aspect-square transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col px-1 pt-3 sm:pt-4">
                <h3 className="font-display text-[15px] font-semibold leading-tight text-ink-900 sm:text-base">
                  {item.name}
                </h3>
                <p className="mt-1 line-clamp-2 text-[12px] leading-snug text-ink-700/80 sm:text-[13px]">
                  {item.description}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="font-display text-base font-semibold text-ink-900 sm:text-lg">
                    {item.price}<span className="ml-0.5 text-xs font-normal text-ink-700/60">с</span>
                  </span>
                  <button
                    type="button"
                    aria-label={`Заказать: ${item.name}`}
                    className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-forest-800 text-sand-50 transition hover:bg-gold-500 hover:text-forest-900 active:scale-95 tap"
                  >
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M12 5v14" />
                      <path d="M5 12h14" />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
