import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const categories = [
  { name: "All", icon: "✦" },
  { name: "Signature", icon: "🔥" },
  { name: "Grill", icon: "🥩" },
  { name: "Pizza", icon: "🍕" },
  { name: "Dessert", icon: "🍨" },
  { name: "Drinks", icon: "🥤" },
];

const galleryItems = [
  {
    id: 1,
    title: "Ember Black Steak",
    category: "Grill",
    description: "Charcoal grilled premium beef with rosemary butter.",
    image:
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=1400&q=95",
    emoji: "🥩",
    size: "large",
  },
  {
    id: 2,
    title: "Firewood Pizza",
    category: "Pizza",
    description: "Wood-fired pizza with melted mozzarella and fresh basil.",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1200&q=95",
    emoji: "🍕",
    size: "medium",
  },
  {
    id: 3,
    title: "Smoked Fire Burger",
    category: "Signature",
    description: "Double beef burger with cheddar and smoky fire sauce.",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=95",
    emoji: "🍔",
    size: "medium",
  },
  {
    id: 4,
    title: "Open Fire Chicken",
    category: "Grill",
    description: "Tender BBQ chicken cooked slowly over open flames.",
    image:
      "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=1200&q=95",
    emoji: "🍗",
    size: "tall",
  },
  {
    id: 5,
    title: "Midnight Chocolate",
    category: "Dessert",
    description: "Dark chocolate dessert with caramel and vanilla cream.",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1200&q=95",
    emoji: "🍫",
    size: "medium",
  },
  {
    id: 6,
    title: "Tropical Fresh Bowl",
    category: "Dessert",
    description: "Fresh mango, berries, kiwi and tropical fruits.",
    image:
      "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=1200&q=95",
    emoji: "🥭",
    size: "small",
  },
  {
    id: 7,
    title: "Signature BBQ Ribs",
    category: "Signature",
    description: "Slow grilled ribs covered in our signature BBQ glaze.",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=95",
    emoji: "🍖",
    size: "large",
  },
  {
    id: 8,
    title: "Midnight Citrus",
    category: "Drinks",
    description: "Ice-cold citrus drink with sparkling freshness.",
    image:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1200&q=95",
    emoji: "🍹",
    size: "small",
  },
  {
    id: 9,
    title: "Creamy Dream",
    category: "Dessert",
    description: "Velvety ice cream finished with chocolate and caramel.",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1200&q=95",
    emoji: "🍨",
    size: "medium",
  },
];

const particles = Array.from({ length: 24 });

function FoodGallery() {
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(null);
  const [hovered, setHovered] = useState(null);

  const filteredItems =
    category === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === category);

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#050403] px-4 py-28 text-white sm:px-6 lg:px-10 xl:px-16"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [-100, 100, -100],
            y: [-40, 60, -40],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-10%] top-[10%] h-[550px] w-[550px] rounded-full bg-orange-600/10 blur-[160px]"
        />

        <motion.div
          animate={{
            x: [100, -80, 100],
            scale: [1, 0.85, 1],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-10%] top-[45%] h-[600px] w-[600px] rounded-full bg-red-700/10 blur-[170px]"
        />

        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

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
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 7,
              ease: "linear",
            }}
            className="absolute h-1 w-1 rounded-full bg-orange-400 shadow-[0_0_14px_rgba(249,115,22,.9)]"
          />
        ))}
      </div>

      {/* =====================================================
          MAIN
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
              Visual Experience
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
            }}
            transition={{
              duration: 0.8,
            }}
            className="text-5xl font-black leading-[0.95] tracking-[-0.07em] sm:text-6xl lg:text-8xl"
          >
            Taste The
            <br />

            <span className="bg-gradient-to-r from-orange-300 via-orange-500 to-red-600 bg-clip-text text-transparent">
              Visuals.
            </span>
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
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
            }}
            className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-white/40 sm:text-base"
          >
            A cinematic look inside our kitchen, where fire, ingredients and
            creativity come together.
          </motion.p>
        </div>

        {/* ===================================================
            CATEGORY FILTER
        ==================================================== */}

        <div className="mt-12 flex justify-center">
          <div className="flex max-w-full gap-2 overflow-x-auto rounded-full border border-white/[0.06] bg-white/[0.02] p-1.5 backdrop-blur-2xl">
            {categories.map((item) => {
              const active = category === item.name;

              return (
                <motion.button
                  key={item.name}
                  onClick={() => setCategory(item.name)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.93 }}
                  className="relative flex shrink-0 items-center gap-2 overflow-hidden rounded-full px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.12em]"
                >
                  {active && (
                    <motion.span
                      layoutId="gallery-filter"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 to-orange-600"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}

                  <span
                    className={`relative z-10 text-sm ${
                      active ? "text-black" : "text-white/30"
                    }`}
                  >
                    {item.icon}
                  </span>

                  <span
                    className={`relative z-10 ${
                      active ? "text-black" : "text-white/35"
                    }`}
                  >
                    {item.name}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* ===================================================
            GALLERY
        ==================================================== */}

        <motion.div
          layout
          className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12"
          style={{
            perspective: "1400px",
          }}
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => {
              const isHovered = hovered === item.id;

              let spanClass = "lg:col-span-4";

              if (item.size === "large") {
                spanClass = "lg:col-span-7";
              }

              if (item.size === "tall") {
                spanClass = "lg:col-span-5 lg:row-span-2";
              }

              if (item.size === "small") {
                spanClass = "lg:col-span-3";
              }

              return (
                <motion.article
                  key={item.id}
                  layout
                  initial={{
                    opacity: 0,
                    y: 60,
                    scale: 0.9,
                    rotateX: 12,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotateX: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.75,
                    filter: "blur(12px)",
                  }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.06,
                  }}
                  onMouseEnter={() => setHovered(item.id)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => setSelected(item)}
                  className={`group relative min-h-[300px] cursor-pointer ${spanClass}`}
                  style={{
                    perspective: "1000px",
                  }}
                >
                  {/* Outer glow */}
                  <motion.div
                    animate={
                      isHovered
                        ? {
                            opacity: 0.65,
                            scale: 1.04,
                          }
                        : {
                            opacity: 0,
                            scale: 0.96,
                          }
                    }
                    transition={{
                      duration: 0.4,
                    }}
                    className="absolute -inset-2 rounded-[35px] bg-gradient-to-r from-orange-500 via-red-500 to-orange-400 blur-2xl"
                  />

                  {/* Card */}
                  <motion.div
                    animate={
                      isHovered
                        ? {
                            y: -10,
                            rotateX: 3,
                            rotateY: -3,
                          }
                        : {
                            y: 0,
                            rotateX: 0,
                            rotateY: 0,
                          }
                    }
                    transition={{
                      type: "spring",
                      stiffness: 240,
                      damping: 20,
                    }}
                    className="relative h-full min-h-[300px] overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#0b0907] shadow-2xl"
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {/* Image */}
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      animate={
                        isHovered
                          ? {
                              scale: 1.15,
                              rotate: 1.5,
                            }
                          : {
                              scale: 1,
                              rotate: 0,
                            }
                      }
                      transition={{
                        duration: 0.8,
                        ease: "easeOut",
                      }}
                      className="absolute inset-0 h-full w-full object-cover"
                    />

                    {/* Cinematic overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050403] via-black/15 to-black/10" />

                    <motion.div
                      animate={
                        isHovered
                          ? {
                              opacity: 1,
                            }
                          : {
                              opacity: 0,
                            }
                      }
                      className="absolute inset-0 bg-orange-500/[0.08] mix-blend-screen"
                    />

                    {/* Image shine */}
                    <motion.div
                      animate={
                        isHovered
                          ? {
                              x: ["-130%", "220%"],
                            }
                          : {
                              x: "-130%",
                            }
                      }
                      transition={{
                        duration: 0.9,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-y-0 w-24 -skew-x-12 bg-white/[0.18] blur-xl"
                    />

                    {/* Category */}
                    <div className="absolute left-5 top-5">
                      <span className="rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-[8px] font-black uppercase tracking-[0.2em] text-orange-400 backdrop-blur-xl">
                        {item.category}
                      </span>
                    </div>

                    {/* Emoji */}
                    <motion.div
                      animate={
                        isHovered
                          ? {
                              y: -12,
                              scale: 1.2,
                              rotate: 8,
                            }
                          : {
                              y: 0,
                              scale: 1,
                              rotate: 0,
                            }
                      }
                      transition={{
                        type: "spring",
                        stiffness: 300,
                      }}
                      className="absolute right-5 top-5 text-3xl drop-shadow-2xl"
                    >
                      {item.emoji}
                    </motion.div>

                    {/* Bottom content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <motion.div
                        animate={
                          isHovered
                            ? {
                                y: -5,
                              }
                            : {
                                y: 0,
                              }
                        }
                        className="max-w-xl"
                      >
                        <h3 className="text-2xl font-black tracking-tight sm:text-3xl">
                          {item.title}
                        </h3>

                        <motion.p
                          initial={{
                            opacity: 0,
                            height: 0,
                          }}
                          animate={
                            isHovered
                              ? {
                                  opacity: 1,
                                  height: "auto",
                                }
                              : {
                                  opacity: 0,
                                  height: 0,
                                }
                          }
                          className="mt-2 max-w-md overflow-hidden text-xs leading-6 text-white/45"
                        >
                          {item.description}
                        </motion.p>

                        <div className="mt-4 flex items-center gap-3">
                          <span className="text-[9px] font-black uppercase tracking-[0.2em] text-orange-400">
                            View Experience
                          </span>

                          <motion.span
                            animate={
                              isHovered
                                ? {
                                    x: 7,
                                  }
                                : {
                                    x: 0,
                                  }
                            }
                            className="text-orange-400"
                          >
                            →
                          </motion.span>
                        </div>
                      </motion.div>
                    </div>

                    {/* Bottom energy line */}
                    <motion.div
                      animate={
                        isHovered
                          ? {
                              width: "70%",
                              opacity: 1,
                            }
                          : {
                              width: "15%",
                              opacity: 0,
                            }
                      }
                      transition={{
                        duration: 0.4,
                      }}
                      className="absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-orange-500 to-transparent shadow-[0_0_25px_rgba(249,115,22,1)]"
                    />
                  </motion.div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* ===================================================
            GALLERY FOOTER
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
          className="mt-14 flex flex-col items-center justify-between gap-6 rounded-[30px] border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-2xl sm:flex-row"
        >
          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.3em] text-orange-400">
              From Our Kitchen
            </p>

            <p className="mt-2 text-sm text-white/35">
              Every plate deserves its moment.
            </p>
          </div>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 45px rgba(249,115,22,.18)",
            }}
            whileTap={{
              scale: 0.96,
            }}
            className="rounded-full border border-orange-500/25 bg-orange-500/[0.06] px-7 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-orange-400 transition hover:bg-orange-500 hover:text-black"
          >
            Explore More →
          </motion.button>
        </motion.div>
      </div>

      {/* =====================================================
          FULLSCREEN PREVIEW
      ====================================================== */}

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-2xl sm:p-8"
            onClick={() => setSelected(null)}
          >
            {/* Close */}
            <motion.button
              initial={{
                opacity: 0,
                scale: 0.7,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-xl text-white/70 backdrop-blur-xl transition hover:border-orange-500/40 hover:text-orange-400"
              onClick={() => setSelected(null)}
            >
              ×
            </motion.button>

            {/* Modal */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.75,
                rotateX: 12,
                y: 40,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotateX: 0,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                rotateX: -8,
                y: 30,
              }}
              transition={{
                type: "spring",
                stiffness: 220,
                damping: 24,
              }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-5xl overflow-hidden rounded-[35px] border border-white/10 bg-[#0b0907] shadow-[0_30px_120px_rgba(0,0,0,.8)]"
              style={{
                perspective: "1200px",
              }}
            >
              <div className="grid md:grid-cols-2">
                {/* Preview image */}
                <div className="relative h-[360px] overflow-hidden md:h-[560px]">
                  <motion.img
                    initial={{
                      scale: 1.15,
                    }}
                    animate={{
                      scale: 1,
                    }}
                    transition={{
                      duration: 1,
                    }}
                    src={selected.image}
                    alt={selected.title}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6 text-5xl">
                    {selected.emoji}
                  </div>
                </div>

                {/* Details */}
                <div className="flex flex-col justify-center p-7 sm:p-10">
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-orange-400">
                    {selected.category}
                  </span>

                  <h3 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
                    {selected.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-white/40">
                    {selected.description}
                  </p>

                  <div className="mt-8 h-px bg-gradient-to-r from-orange-500/30 via-white/5 to-transparent" />

                  <div className="mt-8 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/[0.06] text-2xl">
                      🔥
                    </div>

                    <div>
                      <p className="text-[9px] uppercase tracking-[0.2em] text-white/20">
                        AmitFOOD
                      </p>

                      <p className="mt-1 text-sm font-bold text-white/70">
                        Crafted with fire & passion
                      </p>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{
                      scale: 1.03,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    className="mt-9 rounded-2xl bg-orange-500 px-6 py-4 text-xs font-black uppercase tracking-[0.18em] text-black transition hover:bg-orange-400"
                  >
                    Book a Table →
                  </motion.button>
                </div>
              </div>

              {/* Modal glow */}
              <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-orange-500/10 blur-[100px]" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default FoodGallery;