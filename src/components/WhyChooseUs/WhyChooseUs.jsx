import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    id: 1,
    number: "01",
    icon: "🔥",
    title: "Fire-Grilled Flavor",
    description:
      "Every signature dish is prepared with real fire, premium ingredients and carefully controlled heat.",
    stat: "100%",
    statLabel: "Freshly Grilled",
  },
  {
    id: 2,
    number: "02",
    icon: "👨‍🍳",
    title: "Master Chefs",
    description:
      "Our chefs combine modern techniques with bold flavors to create unforgettable dining experiences.",
    stat: "15+",
    statLabel: "Expert Chefs",
  },
  {
    id: 3,
    number: "03",
    icon: "🥩",
    title: "Premium Ingredients",
    description:
      "We carefully select fresh meat, vegetables, fruits and handcrafted ingredients for every plate.",
    stat: "24/7",
    statLabel: "Quality Checked",
  },
  {
    id: 4,
    number: "04",
    icon: "⚡",
    title: "Fast & Fresh",
    description:
      "From our kitchen to your table, we focus on speed without compromising freshness or presentation.",
    stat: "30",
    statLabel: "Min Average",
  },
];

const particles = Array.from({ length: 22 });

function WhyChooseUs() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050403] px-4 py-28 text-white sm:px-6 lg:px-10 xl:px-16"
    >
      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Orange ambient glow */}
        <motion.div
          animate={{
            x: [-80, 80, -80],
            y: [-40, 50, -40],
            scale: [1, 1.18, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-10%] top-[15%] h-[500px] w-[500px] rounded-full bg-orange-600/10 blur-[150px]"
        />

        {/* Red ambient glow */}
        <motion.div
          animate={{
            x: [80, -60, 80],
            y: [40, -50, 40],
            scale: [1.1, 0.9, 1.1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-10%] top-[40%] h-[550px] w-[550px] rounded-full bg-red-700/10 blur-[160px]"
        />

        {/* Bottom glow */}
        <motion.div
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-250px] left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[130px]"
        />

        {/* Cinematic grid */}
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* Floating particles */}
        {particles.map((_, index) => (
          <motion.span
            key={index}
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${105 + Math.random() * 15}%`,
              opacity: 0,
            }}
            animate={{
              y: `${-10 - Math.random() * 20}%`,
              x: `${Math.random() * 100}%`,
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "linear",
            }}
            className="absolute h-1 w-1 rounded-full bg-orange-400 shadow-[0_0_14px_rgba(249,115,22,.9)]"
          />
        ))}
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ===================================================
            SECTION HEADER
        ==================================================== */}

        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
            }}
            className="mx-auto mb-6 inline-flex items-center gap-3 rounded-full border border-orange-500/20 bg-orange-500/[0.04] px-5 py-2.5 backdrop-blur-2xl"
          >
            <motion.span
              animate={{
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="text-orange-400"
            >
              ✦
            </motion.span>

            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-400">
              Why AmitFOOD
            </span>

            <motion.span
              animate={{
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="text-orange-400"
            >
              ✦
            </motion.span>
          </motion.div>

          <motion.h2
            initial={{
              opacity: 0,
              y: 45,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="text-5xl font-black leading-[0.95] tracking-[-0.07em] sm:text-6xl lg:text-8xl"
          >
            More Than
            <br />

            <span className="bg-gradient-to-r from-orange-300 via-orange-500 to-red-600 bg-clip-text text-transparent">
              Just Food.
            </span>
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.15,
              duration: 0.7,
            }}
            className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-white/40 sm:text-base"
          >
            We bring together fire, flavor, craftsmanship and fresh
            ingredients to create food that feels like an experience.
          </motion.p>
        </div>

        {/* ===================================================
            PREMIUM FEATURE SHOWCASE
        ==================================================== */}

        <div className="mt-20 grid grid-cols-1 gap-5 lg:grid-cols-12">
          {/* =================================================
              LARGE FEATURE CARD
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
            }}
            className="group relative overflow-hidden rounded-[35px] border border-white/[0.08] bg-[#0b0907]/90 p-7 backdrop-blur-2xl sm:p-9 lg:col-span-5"
          >
            {/* Card glow */}
            <motion.div
              animate={{
                opacity: [0.25, 0.45, 0.25],
                scale: [0.95, 1.05, 0.95],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-orange-500/20 blur-[90px]"
            />

            {/* Top label */}
            <div className="relative z-10 flex items-center justify-between">
              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-orange-400">
                  Our Philosophy
                </p>

                <p className="mt-2 text-xs text-white/30">
                  Crafted with passion
                </p>
              </div>

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-orange-500/20 bg-orange-500/[0.05] text-orange-400"
              >
                ✦
              </motion.div>
            </div>

            {/* Main visual */}
            <div className="relative mt-10 flex min-h-[390px] items-center justify-center">
              {/* Orbit */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-[280px] w-[280px] rounded-full border border-dashed border-orange-500/20"
              />

              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-[210px] w-[210px] rounded-full border border-orange-500/10"
              />

              {/* Fire glow */}
              <motion.div
                animate={{
                  scale: [0.85, 1.15, 0.85],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute h-52 w-52 rounded-full bg-orange-500/20 blur-[70px]"
              />

              {/* Food emoji centerpiece */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotate: [-2, 2, -2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10 flex h-44 w-44 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-white/[0.08] to-orange-500/[0.05] text-8xl shadow-[0_0_80px_rgba(249,115,22,.15)] backdrop-blur-2xl"
              >
                🔥
              </motion.div>

              {/* Floating mini elements */}
              <motion.span
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 12, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                }}
                className="absolute left-[15%] top-[28%] text-3xl"
              >
                🥩
              </motion.span>

              <motion.span
                animate={{
                  y: [0, 18, 0],
                  rotate: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute right-[12%] top-[32%] text-3xl"
              >
                🍕
              </motion.span>

              <motion.span
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                }}
                className="absolute bottom-[22%] left-[25%] text-3xl"
              >
                🍗
              </motion.span>

              <motion.span
                animate={{
                  y: [0, 16, 0],
                  rotate: [0, -12, 0],
                }}
                transition={{
                  duration: 3.8,
                  repeat: Infinity,
                }}
                className="absolute bottom-[20%] right-[23%] text-3xl"
              >
                🌶️
              </motion.span>
            </div>

            {/* Bottom text */}
            <div className="relative z-10">
              <h3 className="text-2xl font-black tracking-tight">
                Flavor Starts With Fire.
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/35">
                From the first spark to the final plate, every detail is
                designed to make your meal memorable.
              </p>
            </div>

            {/* Moving shine */}
            <motion.div
              animate={{
                x: ["-120%", "220%"],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                repeatDelay: 4,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute inset-y-0 w-24 -skew-x-12 bg-white/[0.06] blur-xl"
            />
          </motion.div>

          {/* =================================================
              FEATURE GRID
          ================================================== */}

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-7">
            {features.map((feature, index) => (
              <motion.article
                key={feature.id}
                initial={{
                  opacity: 0,
                  y: 50,
                  scale: 0.95,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative overflow-hidden rounded-[30px] border border-white/[0.08] bg-[#0b0907]/80 p-6 backdrop-blur-2xl transition-colors duration-500 hover:border-orange-500/25"
              >
                {/* Hover glow */}
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                  }}
                  whileHover={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                  className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-orange-500/15 blur-[70px]"
                />

                {/* Number */}
                <div className="relative z-10 flex items-start justify-between">
                  <span className="text-[10px] font-black tracking-[0.25em] text-white/20">
                    {feature.number}
                  </span>

                  <motion.div
                    whileHover={{
                      rotate: 12,
                      scale: 1.15,
                    }}
                    className="flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-500/15 bg-orange-500/[0.05] text-3xl shadow-[0_0_30px_rgba(249,115,22,.05)]"
                  >
                    {feature.icon}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="relative z-10 mt-8">
                  <h3 className="text-xl font-black tracking-tight">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-white/35">
                    {feature.description}
                  </p>
                </div>

                {/* Stat */}
                <div className="relative z-10 mt-8 flex items-end justify-between">
                  <div>
                    <motion.p
                      initial={{
                        opacity: 0,
                        x: -15,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: 0.4 + index * 0.1,
                      }}
                      className="text-3xl font-black text-orange-400"
                    >
                      {feature.stat}
                    </motion.p>

                    <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-white/20">
                      {feature.statLabel}
                    </p>
                  </div>

                  <motion.span
                    animate={{
                      x: [0, 5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="text-xl text-orange-500/40"
                  >
                    →
                  </motion.span>
                </div>

                {/* Bottom energy line */}
                <motion.div
                  initial={{
                    width: "15%",
                  }}
                  whileHover={{
                    width: "75%",
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  className="absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-orange-500 to-transparent shadow-[0_0_18px_rgba(249,115,22,.9)]"
                />

                {/* Shine */}
                <motion.div
                  initial={{
                    x: "-140%",
                  }}
                  whileHover={{
                    x: "180%",
                  }}
                  transition={{
                    duration: 0.8,
                  }}
                  className="pointer-events-none absolute inset-y-0 w-20 -skew-x-12 bg-white/[0.04] blur-xl"
                />
              </motion.article>
            ))}
          </div>
        </div>

        {/* ===================================================
            EXPERIENCE STRIP
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="relative mt-6 overflow-hidden rounded-[30px] border border-orange-500/15 bg-gradient-to-r from-orange-500/[0.08] via-white/[0.025] to-red-500/[0.08] p-6 backdrop-blur-2xl sm:p-8"
        >
          <div className="flex flex-col items-center justify-between gap-7 md:flex-row">
            <div className="text-center md:text-left">
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-orange-400">
                The AmitFOOD Experience
              </p>

              <h3 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
                Come hungry. Leave with a story.
              </h3>
            </div>

            <div className="flex items-center gap-6">
              {["🔥", "🥩", "🍕", "🍗", "🍨"].map((emoji, index) => (
                <motion.span
                  key={index}
                  animate={{
                    y: [0, -7, 0],
                    rotate: [-4, 4, -4],
                  }}
                  transition={{
                    duration: 2.5 + index * 0.2,
                    repeat: Infinity,
                    delay: index * 0.15,
                  }}
                  className="text-2xl sm:text-3xl"
                >
                  {emoji}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Moving line */}
          <motion.div
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-0 left-0 h-px w-1/3 bg-gradient-to-r from-transparent via-orange-500 to-transparent"
          />
        </motion.div>

        {/* ===================================================
            BOTTOM DIVIDER
        ==================================================== */}

        <div className="mt-24 flex items-center gap-5">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-orange-500/20" />

          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.15, 1],
            }}
            transition={{
              rotate: {
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 2,
                repeat: Infinity,
              },
            }}
            className="text-orange-500/50"
          >
            ✦
          </motion.div>

          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-orange-500/20" />
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;