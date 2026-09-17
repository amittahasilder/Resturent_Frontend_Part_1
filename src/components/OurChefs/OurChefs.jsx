import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const chefs = [
  {
    id: 1,
    name: "Marco Bellini",
    role: "Executive Chef",
    specialty: "Italian Fire Cuisine",
    experience: "18 Years",
    rating: "4.9",
    dishes: "120+",
    image:
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=95",
    description:
      "Known for wood-fired creations, handmade pasta and bold Italian flavors.",
    signature: "Firewood Truffle Pizza",
    emoji: "🍕",
  },
  {
    id: 2,
    name: "Daniel Carter",
    role: "Grill Master",
    specialty: "Premium BBQ & Steak",
    experience: "15 Years",
    rating: "5.0",
    dishes: "95+",
    image:
      "https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=1200&q=95",
    description:
      "A specialist in charcoal grilling, premium steaks and signature BBQ sauces.",
    signature: "Ember Black Pepper Steak",
    emoji: "🥩",
  },
  {
    id: 3,
    name: "Sofia Laurent",
    role: "Pastry Chef",
    specialty: "Luxury Desserts",
    experience: "12 Years",
    rating: "4.9",
    dishes: "80+",
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=95",
    description:
      "Creates elegant desserts that combine French techniques with modern presentation.",
    signature: "Midnight Chocolate Cloud",
    emoji: "🍨",
  },
  {
    id: 4,
    name: "Kenji Nakamura",
    role: "Sushi Chef",
    specialty: "Japanese Fusion",
    experience: "16 Years",
    rating: "4.9",
    dishes: "110+",
    image:
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=95",
    description:
      "Blends traditional Japanese precision with creative modern flavors.",
    signature: "Dragon Fire Sushi",
    emoji: "🍣",
  },
];

const particles = Array.from({ length: 26 });

function OurChefs() {
  const [activeChef, setActiveChef] = useState(0);

  const chef = chefs[activeChef];

  return (
    <section
      id="chefs"
      className="relative overflow-hidden bg-[#050403] px-4 py-28 text-white sm:px-6 lg:px-10 xl:px-16"
    >
      {/* =====================================================
          ATMOSPHERIC BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Orange glow */}
        <motion.div
          animate={{
            x: [-80, 80, -80],
            y: [-30, 50, -30],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-10%] top-[20%] h-[500px] w-[500px] rounded-full bg-orange-600/10 blur-[150px]"
        />

        {/* Red glow */}
        <motion.div
          animate={{
            x: [80, -80, 80],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-10%] top-[35%] h-[550px] w-[550px] rounded-full bg-red-700/10 blur-[160px]"
        />

        {/* Bottom glow */}
        <motion.div
          animate={{
            opacity: [0.15, 0.35, 0.15],
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute bottom-[-300px] left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[140px]"
        />

        {/* Grid */}
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
              y: `${105 + Math.random() * 20}%`,
              opacity: 0,
            }}
            animate={{
              x: `${Math.random() * 100}%`,
              y: `${-10 - Math.random() * 20}%`,
              opacity: [0, 0.65, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 8,
              delay: Math.random() * 7,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-1 w-1 rounded-full bg-orange-400 shadow-[0_0_12px_rgba(249,115,22,.9)]"
          />
        ))}
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ===================================================
            HEADER
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
              Meet The Masters
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
            }}
            className="text-5xl font-black leading-[0.95] tracking-[-0.07em] sm:text-6xl lg:text-8xl"
          >
            The Hands
            <br />

            <span className="bg-gradient-to-r from-orange-300 via-orange-500 to-red-600 bg-clip-text text-transparent">
              Behind The Fire.
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
            Meet the passionate chefs who transform fresh ingredients,
            precision and fire into unforgettable experiences.
          </motion.p>
        </div>

        {/* ===================================================
            CHEF SELECTOR
        ==================================================== */}

        <div className="mt-14 flex justify-center">
          <div className="flex max-w-full gap-2 overflow-x-auto rounded-full border border-white/[0.06] bg-white/[0.02] p-1.5 backdrop-blur-2xl">
            {chefs.map((item, index) => {
              const selected = index === activeChef;

              return (
                <motion.button
                  key={item.id}
                  onClick={() => setActiveChef(index)}
                  whileTap={{ scale: 0.94 }}
                  whileHover={{ y: -2 }}
                  className="relative shrink-0 overflow-hidden rounded-full px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.12em]"
                >
                  {selected && (
                    <motion.span
                      layoutId="chef-selector"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 to-orange-600"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}

                  <span
                    className={`relative z-10 ${
                      selected ? "text-black" : "text-white/35"
                    }`}
                  >
                    {item.name.split(" ")[0]}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* ===================================================
            FEATURED CHEF
        ==================================================== */}

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* =================================================
              CHEF IMAGE
          ================================================== */}

          <motion.div
            layout
            className="group relative overflow-hidden rounded-[38px] border border-white/[0.08] bg-[#0b0907] lg:col-span-7"
          >
            <div className="relative h-[520px] overflow-hidden sm:h-[600px]">
              {/* Image */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={chef.id}
                  src={chef.image}
                  alt={chef.name}
                  initial={{
                    opacity: 0,
                    scale: 1.12,
                    x: 40,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 1.06,
                    x: -40,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: "easeOut",
                  }}
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
              </AnimatePresence>

              {/* Dark cinematic overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050403] via-[#050403]/20 to-black/10" />

              <div className="absolute inset-0 bg-gradient-to-r from-[#050403]/50 via-transparent to-transparent" />

              {/* Orange image glow */}
              <motion.div
                animate={{
                  opacity: [0.15, 0.3, 0.15],
                  scale: [0.9, 1.1, 0.9],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="absolute -bottom-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-500/20 blur-[100px]"
              />

              {/* Top badge */}
              <motion.div
                key={`role-${chef.id}`}
                initial={{
                  opacity: 0,
                  y: -20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="absolute left-6 top-6"
              >
                <div className="rounded-full border border-orange-400/20 bg-black/50 px-4 py-2 text-[9px] font-black uppercase tracking-[0.2em] text-orange-400 backdrop-blur-xl">
                  {chef.role}
                </div>
              </motion.div>

              {/* Rating */}
              <div className="absolute right-6 top-6 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs backdrop-blur-xl">
                <span className="text-yellow-400">★</span>{" "}
                <span className="font-bold">{chef.rating}</span>
              </div>

              {/* Bottom info */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={chef.id}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -20,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  className="absolute bottom-7 left-7 right-7"
                >
                  <p className="text-[9px] font-black uppercase tracking-[0.3em] text-orange-400">
                    {chef.specialty}
                  </p>

                  <h3 className="mt-2 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
                    {chef.name}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-white/45">
                    {chef.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Moving shine */}
              <motion.div
                animate={{
                  x: ["-130%", "220%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 5,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute inset-y-0 w-28 -skew-x-12 bg-white/[0.08] blur-xl"
              />

              {/* Corner decoration */}
              <div className="absolute bottom-6 right-6 hidden h-20 w-20 sm:block">
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 rounded-full border border-dashed border-orange-500/30"
                />

                <div className="absolute inset-3 flex items-center justify-center rounded-full bg-orange-500/10 text-2xl backdrop-blur-xl">
                  {chef.emoji}
                </div>
              </div>
            </div>
          </motion.div>

          {/* =================================================
              CHEF INFORMATION
          ================================================== */}

          <AnimatePresence mode="wait">
            <motion.div
              key={chef.id}
              initial={{
                opacity: 0,
                x: 50,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -30,
              }}
              transition={{
                duration: 0.65,
              }}
              className="relative overflow-hidden rounded-[38px] border border-white/[0.08] bg-[#0b0907]/90 p-7 backdrop-blur-2xl sm:p-9 lg:col-span-5"
            >
              {/* Background glow */}
              <motion.div
                animate={{
                  opacity: [0.15, 0.3, 0.15],
                  scale: [0.9, 1.1, 0.9],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-orange-500/15 blur-[100px]"
              />

              <div className="relative z-10">
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-orange-400">
                  Signature Creation
                </p>

                <div className="mt-6 flex items-center gap-4">
                  <motion.div
                    animate={{
                      y: [0, -6, 0],
                      rotate: [-3, 3, -3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                    className="flex h-20 w-20 items-center justify-center rounded-3xl border border-orange-500/20 bg-orange-500/[0.06] text-4xl"
                  >
                    {chef.emoji}
                  </motion.div>

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-white/20">
                      Chef's Signature
                    </p>

                    <h4 className="mt-1 text-xl font-black">
                      {chef.signature}
                    </h4>
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-10 grid grid-cols-3 gap-3">
                  <div className="rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4">
                    <p className="text-2xl font-black text-orange-400">
                      {chef.experience}
                    </p>

                    <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.15em] text-white/20">
                      Experience
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4">
                    <p className="text-2xl font-black text-orange-400">
                      {chef.dishes}
                    </p>

                    <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.15em] text-white/20">
                      Creations
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4">
                    <p className="text-2xl font-black text-orange-400">
                      {chef.rating}
                    </p>

                    <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.15em] text-white/20">
                      Rating
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="my-9 h-px bg-gradient-to-r from-orange-500/30 via-white/5 to-transparent" />

                {/* Quote */}
                <div>
                  <p className="text-3xl leading-none text-orange-500/40">
                    “
                  </p>

                  <p className="mt-2 text-lg font-bold leading-8 text-white/70">
                    Great food isn't just cooked. It's crafted with passion,
                    patience and a little bit of fire.
                  </p>

                  <p className="mt-4 text-[9px] font-black uppercase tracking-[0.25em] text-orange-400">
                    — {chef.name}
                  </p>
                </div>

                {/* Social buttons */}
                <div className="mt-9 flex gap-3">
                  {["IG", "FB", "X"].map((social) => (
                    <motion.button
                      key={social}
                      whileHover={{
                        y: -4,
                        scale: 1.05,
                      }}
                      whileTap={{
                        scale: 0.9,
                      }}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[9px] font-black text-white/40 transition-colors hover:border-orange-500/30 hover:bg-orange-500/10 hover:text-orange-400"
                    >
                      {social}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Card shine */}
              <motion.div
                animate={{
                  x: ["-140%", "220%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 6,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute inset-y-0 w-24 -skew-x-12 bg-white/[0.035] blur-xl"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ===================================================
            CHEF MINI CARDS
        ==================================================== */}

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {chefs.map((item, index) => {
            const selected = index === activeChef;

            return (
              <motion.button
                key={item.id}
                onClick={() => setActiveChef(index)}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.6,
                }}
                whileHover={{
                  y: -7,
                }}
                className={`group relative overflow-hidden rounded-[25px] border text-left transition-all duration-500 ${
                  selected
                    ? "border-orange-500/30 bg-orange-500/[0.07]"
                    : "border-white/[0.07] bg-[#0b0907]/70 hover:border-orange-500/20"
                }`}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover grayscale-[0.15] transition duration-700 group-hover:scale-110 group-hover:grayscale-0"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0907] via-transparent to-black/10" />

                  <div className="absolute bottom-4 left-4">
                    <p className="text-[8px] font-black uppercase tracking-[0.2em] text-orange-400">
                      {item.role}
                    </p>

                    <p className="mt-1 text-lg font-black">
                      {item.name}
                    </p>
                  </div>

                  <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-[9px] backdrop-blur-xl">
                    ★ {item.rating}
                  </div>
                </div>

                <div className="flex items-center justify-between p-4">
                  <span className="text-[9px] uppercase tracking-[0.15em] text-white/25">
                    {item.specialty}
                  </span>

                  <span
                    className={`text-lg transition-transform duration-300 ${
                      selected
                        ? "translate-x-1 text-orange-400"
                        : "text-white/20 group-hover:translate-x-1 group-hover:text-orange-400"
                    }`}
                  >
                    →
                  </span>
                </div>

                {selected && (
                  <motion.div
                    layoutId="active-chef-line"
                    className="absolute bottom-0 left-1/2 h-[2px] w-1/2 -translate-x-1/2 rounded-full bg-orange-500 shadow-[0_0_20px_rgba(249,115,22,1)]"
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* ===================================================
            BOTTOM CTA
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mt-16 flex justify-center"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 50px rgba(249,115,22,.2)",
            }}
            whileTap={{
              scale: 0.96,
            }}
            className="group rounded-full border border-orange-500/25 bg-white/[0.025] px-8 py-4 text-xs font-black uppercase tracking-[0.2em] text-orange-400 backdrop-blur-xl transition hover:bg-orange-500 hover:text-black"
          >
            Discover Our Story

            <span className="ml-4 inline-block transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </motion.button>
        </motion.div>

        {/* Divider */}
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

export default OurChefs;