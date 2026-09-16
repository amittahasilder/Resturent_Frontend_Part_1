import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const foods = [
  {
    id: "burger",
    name: "Smoky Fire Burger",
    type: "BURGER",
    tagline: "Taste the",
    price: "$12.99",
    rating: "4.9",
    description:
      "Double grilled beef, melted cheddar, crispy lettuce and our signature smoky fire sauce.",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=95",
    emoji: "🍔",
  },

  {
    id: "pizza",
    name: "Italian Fire Pizza",
    type: "PIZZA",
    tagline: "Feel the",
    price: "$15.99",
    rating: "4.8",
    description:
      "Wood-fired pizza with creamy mozzarella, fresh basil and rich roasted tomato sauce.",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1200&q=95",
    emoji: "🍕",
  },

  {
    id: "steak",
    name: "Black Pepper Steak",
    type: "STEAK",
    tagline: "Taste the",
    price: "$24.99",
    rating: "5.0",
    description:
      "Premium grilled steak with black pepper crust, rosemary butter and a deep fire glaze.",
    image:
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=1200&q=95",
    emoji: "🥩",
  },

  {
    id: "icecream",
    name: "Chocolate Dream",
    type: "ICE CREAM",
    tagline: "Enjoy the",
    price: "$8.99",
    rating: "4.9",
    description:
      "Creamy chocolate ice cream with brownie bites, caramel drizzle and crunchy cookies.",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1200&q=95",
    emoji: "🍨",
  },

  {
    id: "bbq",
    name: "Fire BBQ Chicken",
    type: "BBQ CHICKEN",
    tagline: "Feel the",
    price: "$16.99",
    rating: "5.0",
    description:
      "Tender chicken grilled over open fire, covered with smoky BBQ glaze and fresh herbs.",
    image:
      "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=1200&q=95",
    emoji: "🍗",
  },
];

const smokeParticles = Array.from({ length: 18 });

const fireParticles = Array.from({ length: 16 });

function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const food = foods[active];

  /* ============================================
      AUTOMATIC FOOD SLIDER
  ============================================ */

  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % foods.length);
    }, 5500);

    return () => clearInterval(timer);
  }, [paused]);

  /* ============================================
      CHANGE FOOD
  ============================================ */

  const selectFood = (index) => {
    setActive(index);
    setPaused(true);

    setTimeout(() => {
      setPaused(false);
    }, 7000);
  };

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-[#030303] text-white"
    >
      {/* ======================================================
          CINEMATIC BACKGROUND
      ======================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Main orange atmosphere */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.16, 0.28, 0.16],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[48%] top-[28%] h-[500px] w-[500px] rounded-full bg-orange-600/30 blur-[140px]"
        />

        {/* Red fire atmosphere */}
        <motion.div
          animate={{
            scale: [1.2, 0.9, 1.2],
            opacity: [0.08, 0.2, 0.08],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
          }}
          className="absolute right-[-100px] top-[20%] h-[500px] w-[500px] rounded-full bg-red-700/20 blur-[150px]"
        />

        {/* Bottom smoke */}
        <motion.div
          animate={{
            x: [-80, 80, -80],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-220px] left-[25%] h-[400px] w-[700px] rounded-[50%] bg-white/[0.025] blur-[100px]"
        />

        {/* Cinematic grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
            backgroundSize: "65px 65px",
          }}
        />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_45%,transparent_15%,rgba(0,0,0,.5)_65%,#030303_100%)]" />
      </div>

      {/* ======================================================
          FLOATING EMBERS
      ======================================================= */}

      <div className="pointer-events-none absolute inset-0">
        {fireParticles.map((_, index) => (
          <motion.span
            key={index}
            initial={{
              left: `${10 + Math.random() * 80}%`,
              bottom: "-5%",
              opacity: 0,
            }}
            animate={{
              y: [0, -250 - Math.random() * 350],
              x: [
                0,
                Math.random() > 0.5 ? 40 : -40,
                Math.random() > 0.5 ? -20 : 20,
              ],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeOut",
            }}
            className="absolute h-1.5 w-1.5 rounded-full bg-orange-400 shadow-[0_0_15px_rgba(249,115,22,1)]"
          />
        ))}
      </div>

      {/* ======================================================
          MAIN HERO
      ======================================================= */}

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-80px)] max-w-[1600px] grid-cols-1 items-center gap-4 px-5 py-12 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12 xl:px-20">
        {/* ====================================================
            LEFT CONTENT
        ===================================================== */}

        <div className="relative z-30 pt-4 lg:pt-0">
          {/* OFFER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-orange-500/30 bg-orange-500/[0.06] px-4 py-2 backdrop-blur-xl"
          >
            <motion.span
              animate={{
                rotate: [0, -12, 12, 0],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              🔥
            </motion.span>

            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-orange-400">
              Special Offer
            </span>

            <span className="h-1 w-1 rounded-full bg-orange-500" />

            <span className="text-[11px] text-white/50">
              Up To 30% OFF
            </span>
          </motion.div>

          {/* DYNAMIC TEXT */}
          <AnimatePresence mode="wait">
            <motion.div
              key={food.id}
              initial={{
                opacity: 0,
                y: 30,
                filter: "blur(12px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                y: -20,
                filter: "blur(12px)",
              }}
              transition={{ duration: 0.55 }}
            >
              <p className="font-serif text-3xl italic text-white/80 sm:text-4xl">
                {food.tagline}
              </p>

              <h1 className="mt-1 text-[72px] font-black uppercase leading-[0.82] tracking-[-0.07em] sm:text-[92px] xl:text-[110px]">
                <span className="bg-gradient-to-r from-orange-300 via-orange-500 to-red-600 bg-clip-text text-transparent">
                  FIRE
                </span>
              </h1>

              {/* Animated line */}
              <div className="mt-6 flex items-center gap-3">
                <motion.span
                  animate={{ width: [35, 70, 35] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="h-[2px] bg-orange-500"
                />

                <span className="text-xs font-bold uppercase tracking-[0.3em] text-orange-400">
                  {food.type}
                </span>
              </div>

              <h2 className="mt-4 text-2xl font-black sm:text-3xl">
                {food.name}
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-7 text-white/50 sm:text-base">
                {food.description}
              </p>

              {/* Price */}
              <div className="mt-5 flex items-center gap-4">
                <span className="text-3xl font-black text-orange-400">
                  {food.price}
                </span>

                <span className="h-5 w-px bg-white/10" />

                <span className="text-sm text-yellow-400">
                  ★ {food.rating}
                </span>

                <span className="text-xs text-white/30">
                  500+ reviews
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* ==================================================
              SEARCH
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-7 flex max-w-xl items-center rounded-2xl border border-white/10 bg-white/[0.035] p-2 shadow-2xl backdrop-blur-2xl"
          >
            <span className="px-4 text-xl">⌕</span>

            <input
              type="text"
              placeholder="Search your favorite food..."
              className="min-w-0 flex-1 bg-transparent py-3 text-sm text-white outline-none placeholder:text-white/25"
            />

            <motion.button
              whileHover={{
                scale: 1.08,
                boxShadow: "0 0 35px rgba(249,115,22,.45)",
              }}
              whileTap={{ scale: 0.92 }}
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-red-600 text-xl font-black"
            >
              →
            </motion.button>
          </motion.div>

          {/* CTA */}
          <div className="mt-5 flex flex-wrap gap-3">
            <motion.button
              whileHover={{
                scale: 1.04,
                boxShadow: "0 0 45px rgba(249,115,22,.35)",
              }}
              whileTap={{ scale: 0.96 }}
              className="rounded-xl bg-gradient-to-r from-orange-500 to-red-600 px-7 py-4 text-sm font-black shadow-xl shadow-orange-950/40"
            >
              Order Now →
            </motion.button>

            <motion.button
              whileHover={{
                borderColor: "rgba(249,115,22,.5)",
                backgroundColor: "rgba(249,115,22,.05)",
              }}
              className="rounded-xl border border-white/10 bg-white/[0.025] px-7 py-4 text-sm font-bold text-white/70 backdrop-blur-xl"
            >
              Explore Menu
            </motion.button>
          </div>
        </div>

        {/* ====================================================
            RIGHT — FOOD 3D STAGE
        ===================================================== */}

        <div
          className="relative mx-auto h-[540px] w-full max-w-[760px] sm:h-[650px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* BIG GLOW */}

          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.18, 0.32, 0.18],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/30 blur-[110px]"
          />

          {/* ==================================================
              SMOKE CLOUDS
          ================================================== */}

          <div className="pointer-events-none absolute left-1/2 top-[12%] z-10 -translate-x-1/2">
            {smokeParticles.map((_, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: (index - 9) * 12,
                  y: 20,
                  scale: 0.3,
                }}
                animate={{
                  opacity: [0, 0.28, 0],
                  x: [
                    (index - 9) * 12,
                    (index - 9) * 20 + (index % 2 ? 35 : -35),
                  ],
                  y: [30, -80 - index * 8, -170 - index * 4],
                  scale: [0.3, 1.3, 2.2],
                }}
                transition={{
                  duration: 5 + (index % 4),
                  repeat: Infinity,
                  delay: index * 0.25,
                  ease: "easeOut",
                }}
                className="absolute h-14 w-14 rounded-full bg-white/10 blur-xl"
              />
            ))}
          </div>

          {/* ==================================================
              ORBIT RING
          ================================================== */}

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-500/20 sm:h-[560px] sm:w-[560px]"
          >
            <motion.span
              animate={{
                scale: [1, 1.5, 1],
                boxShadow: [
                  "0 0 8px rgba(249,115,22,.5)",
                  "0 0 25px rgba(249,115,22,1)",
                  "0 0 8px rgba(249,115,22,.5)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="absolute left-1/2 top-[-5px] h-3 w-3 -translate-x-1/2 rounded-full bg-orange-400"
            />
          </motion.div>

          {/* Second orbit */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 17,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-orange-400/15 sm:h-[440px] sm:w-[440px]"
          />

          {/* ==================================================
              FOOD IMAGE
          ================================================== */}

          <div
            className="absolute left-1/2 top-1/2 z-20 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 sm:h-[480px] sm:w-[480px]"
            style={{
              perspective: "1400px",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={food.id}
                initial={{
                  opacity: 0,
                  scale: 0.45,
                  rotateY: -180,
                  rotateZ: -10,
                  filter: "blur(18px)",
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotateY: 0,
                  rotateZ: 0,
                  y: [0, -14, 0],
                  filter: "blur(0px)",
                }}
                exit={{
                  opacity: 0,
                  scale: 0.45,
                  rotateY: 180,
                  rotateZ: 10,
                  filter: "blur(15px)",
                }}
                transition={{
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.8 },
                  rotateY: { duration: 0.9 },
                  rotateZ: { duration: 0.9 },
                  y: {
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className="absolute inset-0"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Food shadow/glow */}

                <div className="absolute left-1/2 top-1/2 h-[65%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/30 blur-[70px]" />

                {/* Image */}
                <div className="absolute inset-[5%] overflow-hidden rounded-[45%]">
                  <img
                    src={food.image}
                    alt={food.name}
                    className="h-full w-full scale-[1.08] object-cover"
                  />

                  {/* Dark cinematic overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-white/5" />

                  {/* Moving reflection */}
                  <motion.div
                    animate={{
                      x: ["-160%", "160%"],
                    }}
                    transition={{
                      duration: 3.2,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                    className="absolute inset-y-0 w-24 -skew-x-12 bg-white/20 blur-xl"
                  />
                </div>

                {/* Glass frame */}
                <div className="absolute inset-[5%] rounded-[45%] border border-white/20 shadow-[inset_0_0_50px_rgba(255,255,255,.08),0_30px_80px_rgba(0,0,0,.7)]" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ==================================================
              FIRE BELOW FOOD
          ================================================== */}

          <div className="absolute bottom-[12%] left-1/2 z-10 -translate-x-1/2">
            {/* fire aura */}
            <motion.div
              animate={{
                scaleX: [1, 1.15, 0.95, 1],
                opacity: [0.5, 0.8, 0.55, 0.5],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
              }}
              className="absolute left-1/2 top-1/2 h-20 w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/60 blur-[35px]"
            />

            {/* fire flames */}
            <div className="relative flex items-end justify-center gap-[-5px]">
              {[0, 1, 2, 3, 4, 5, 6].map((item) => (
                <motion.div
                  key={item}
                  animate={{
                    scaleY: [0.75, 1.15, 0.85, 1],
                    rotate: [-4, 4, -3, 2],
                  }}
                  transition={{
                    duration: 0.7 + item * 0.08,
                    repeat: Infinity,
                    delay: item * 0.08,
                  }}
                  className={`${
                    item % 2 === 0
                      ? "h-12 bg-orange-500"
                      : "h-9 bg-red-500"
                  } w-7 rounded-t-full blur-[2px]`}
                  style={{
                    clipPath:
                      "polygon(50% 0%, 72% 35%, 100% 55%, 78% 100%, 22% 100%, 0% 55%, 28% 35%)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* ==================================================
              3D PLATFORM
          ================================================== */}

          <motion.div
            animate={{
              boxShadow: [
                "0 0 25px rgba(249,115,22,.2)",
                "0 0 55px rgba(249,115,22,.45)",
                "0 0 25px rgba(249,115,22,.2)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="absolute bottom-[7%] left-1/2 z-0 h-[80px] w-[330px] -translate-x-1/2 rounded-[50%] border border-orange-500/30 bg-gradient-to-b from-white/[0.12] to-black shadow-2xl sm:h-[100px] sm:w-[460px]"
          />

          {/* Platform orange ring */}
          <motion.div
            animate={{
              scaleX: [1, 1.04, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="absolute bottom-[9%] left-1/2 z-10 h-[75px] w-[330px] -translate-x-1/2 rounded-[50%] border-2 border-orange-500/50 shadow-[0_0_35px_rgba(249,115,22,.35)] sm:h-[90px] sm:w-[450px]"
          />

          {/* ==================================================
              FOOD INFO CARD
          ================================================== */}

          <AnimatePresence mode="wait">
            <motion.div
              key={food.id}
              initial={{
                opacity: 0,
                x: 30,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                x: -20,
                scale: 0.8,
              }}
              className="absolute right-[0%] top-[15%] z-40 hidden rounded-2xl border border-orange-500/20 bg-black/55 p-4 backdrop-blur-2xl sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-2xl">
                  {food.emoji}
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-white/35">
                    Today's Special
                  </p>

                  <p className="mt-1 text-sm font-black">
                    {food.type}
                  </p>

                  <p className="mt-1 text-sm font-black text-orange-400">
                    {food.price}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Rating card */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [-2, 2, -2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute bottom-[25%] left-[0%] z-40 hidden rounded-2xl border border-white/10 bg-black/55 p-3 backdrop-blur-2xl sm:block"
          >
            <div className="flex items-center gap-3">
              <div className="text-xl">⭐</div>

              <div>
                <p className="text-[9px] uppercase tracking-widest text-white/30">
                  Customer Rating
                </p>

                <p className="mt-1 text-sm font-black">
                  {food.rating} / 5.0
                </p>
              </div>
            </div>
          </motion.div>

          {/* 360 badge */}
          <motion.div
            animate={{
              rotate: [0, 8, -8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute bottom-[1%] left-1/2 z-40 flex -translate-x-1/2 flex-col items-center"
          >
            <div className="text-lg font-black tracking-widest text-orange-400">
              360°
            </div>

            <div className="text-[8px] uppercase tracking-[0.35em] text-white/25">
              Fire Taste Experience
            </div>
          </motion.div>
        </div>
      </div>

      {/* ======================================================
          FOOD NAVIGATION
      ======================================================= */}

      <div className="absolute bottom-5 left-1/2 z-50 -translate-x-1/2">
        <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-black/60 p-2 backdrop-blur-2xl">
          {foods.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => selectFood(index)}
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.9 }}
              className={`relative flex h-10 w-10 items-center justify-center rounded-full text-lg transition-all ${
                index === active
                  ? "bg-orange-500 shadow-[0_0_25px_rgba(249,115,22,.55)]"
                  : "bg-white/[0.04] hover:bg-white/[0.1]"
              }`}
              title={item.name}
            >
              {item.emoji}

              {index === active && (
                <motion.span
                  layoutId="food-active"
                  className="absolute -bottom-1 h-1 w-3 rounded-full bg-orange-300"
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* ======================================================
          BOTTOM TRUST BAR
      ======================================================= */}

      <div className="absolute bottom-0 left-0 hidden w-full border-t border-white/[0.06] bg-black/30 backdrop-blur-xl lg:block">
        <div className="mx-auto grid max-w-[1500px] grid-cols-4">
          {[
            ["✦", "Premium Quality", "Fresh ingredients"],
            ["⚡", "Fast Delivery", "Hot at your door"],
            ["♨", "Master Chefs", "Crafted with passion"],
            ["✓", "Secure Payment", "Safe & trusted"],
          ].map(([icon, title, description]) => (
            <div
              key={title}
              className="flex items-center gap-3 border-r border-white/[0.06] px-7 py-4 last:border-0"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-400">
                {icon}
              </div>

              <div>
                <p className="text-xs font-black">{title}</p>
                <p className="mt-1 text-[9px] text-white/30">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;