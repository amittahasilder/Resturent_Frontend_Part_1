import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const categories = [
  { name: "All", icon: "✦" },
  { name: "Burger", icon: "🍔" },
  { name: "Pizza", icon: "🍕" },
  { name: "Steak", icon: "🥩" },
  { name: "BBQ", icon: "🍗" },
  { name: "Pasta", icon: "🍝" },
  { name: "Sushi", icon: "🍣" },
  { name: "Dessert", icon: "🍨" },
  { name: "Drinks", icon: "🥤" },
];

const foods = [
  {
    id: 1,
    name: "Smoky Fire Burger",
    category: "Burger",
    price: 12.99,
    oldPrice: 15.99,
    rating: 4.9,
    reviews: 328,
    badge: "BEST SELLER",
    emoji: "🍔",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=95",
    description:
      "Double grilled beef, melted cheddar, crispy lettuce and smoky fire sauce.",
  },
  {
    id: 2,
    name: "Italian Fire Pizza",
    category: "Pizza",
    price: 15.99,
    oldPrice: 19.99,
    rating: 4.8,
    reviews: 245,
    badge: "WOOD FIRED",
    emoji: "🍕",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1000&q=95",
    description:
      "Wood-fired Italian pizza with mozzarella, basil and roasted tomato sauce.",
  },
  {
    id: 3,
    name: "Black Pepper Steak",
    category: "Steak",
    price: 24.99,
    oldPrice: 29.99,
    rating: 5.0,
    reviews: 186,
    badge: "PREMIUM",
    emoji: "🥩",
    image:
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=1000&q=95",
    description:
      "Premium grilled steak with pepper crust, rosemary butter and fire glaze.",
  },
  {
    id: 4,
    name: "Fire BBQ Chicken",
    category: "BBQ",
    price: 16.99,
    oldPrice: 20.99,
    rating: 4.9,
    reviews: 412,
    badge: "CHEF'S PICK",
    emoji: "🍗",
    image:
      "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=1000&q=95",
    description:
      "Tender chicken grilled over open fire with signature smoky BBQ glaze.",
  },
  {
    id: 5,
    name: "Truffle Cream Pasta",
    category: "Pasta",
    price: 17.99,
    oldPrice: 21.99,
    rating: 4.9,
    reviews: 198,
    badge: "SIGNATURE",
    emoji: "🍝",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1000&q=95",
    description:
      "Creamy truffle pasta finished with parmesan, herbs and black pepper.",
  },
  {
    id: 6,
    name: "Dragon Sushi Roll",
    category: "Sushi",
    price: 18.99,
    oldPrice: 23.99,
    rating: 4.8,
    reviews: 154,
    badge: "FRESH",
    emoji: "🍣",
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1000&q=95",
    description:
      "Fresh premium sushi roll with avocado, salmon and signature spicy sauce.",
  },
  {
    id: 7,
    name: "Chocolate Dream",
    category: "Dessert",
    price: 8.99,
    oldPrice: 11.99,
    rating: 4.9,
    reviews: 376,
    badge: "SWEET PICK",
    emoji: "🍨",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1000&q=95",
    description:
      "Rich chocolate ice cream with brownie bites and caramel drizzle.",
  },
  {
    id: 8,
    name: "Crispy Fire Fries",
    category: "Burger",
    price: 6.99,
    oldPrice: 8.99,
    rating: 4.8,
    reviews: 292,
    badge: "CRISPY",
    emoji: "🍟",
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1000&q=95",
    description:
      "Golden crispy fries tossed with fire seasoning and creamy house sauce.",
  },
  {
    id: 9,
    name: "Tropical Fresh Bowl",
    category: "Dessert",
    price: 9.99,
    oldPrice: 12.99,
    rating: 4.7,
    reviews: 121,
    badge: "FRESH",
    emoji: "🥭",
    image:
      "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=1000&q=95",
    description:
      "Fresh tropical fruits served with creamy yogurt and honey drizzle.",
  },
  {
    id: 10,
    name: "Midnight Cola",
    category: "Drinks",
    price: 4.99,
    oldPrice: 6.99,
    rating: 4.8,
    reviews: 210,
    badge: "COOL",
    emoji: "🥤",
    image:
      "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=1000&q=95",
    description:
      "Ice-cold sparkling cola served with crushed ice and fresh citrus.",
  },
  {
    id: 11,
    name: "Grilled BBQ Ribs",
    category: "BBQ",
    price: 21.99,
    oldPrice: 26.99,
    rating: 4.9,
    reviews: 231,
    badge: "HOT",
    emoji: "🍖",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=95",
    description:
      "Slow grilled ribs covered with rich smoky BBQ sauce and fresh herbs.",
  },
  {
    id: 12,
    name: "Creamy Alfredo",
    category: "Pasta",
    price: 14.99,
    oldPrice: 18.99,
    rating: 4.8,
    reviews: 173,
    badge: "POPULAR",
    emoji: "🍝",
    image:
      "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?auto=format&fit=crop&w=1000&q=95",
    description:
      "Silky Alfredo pasta with parmesan cream, herbs and roasted garlic.",
  },
];

const particles = Array.from({ length: 28 });

function PopularMenu() {
  const [category, setCategory] = useState("All");
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState({});
  const [hovered, setHovered] = useState(null);
  const [addedId, setAddedId] = useState(null);

  const filteredFoods = useMemo(() => {
    if (category === "All") return foods;

    return foods.filter((food) => food.category === category);
  }, [category]);

  const toggleWishlist = (id) => {
    setWishlist((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  };

  const addToCart = (id) => {
    setCart((previous) => ({
      ...previous,
      [id]: (previous[id] || 0) + 1,
    }));

    setAddedId(id);

    setTimeout(() => {
      setAddedId(null);
    }, 900);
  };

  return (
    <section
      id="menu"
      className="relative overflow-hidden bg-[#040302] px-4 py-28 text-white sm:px-6 lg:px-10 xl:px-16"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [-80, 80, -80],
            y: [-30, 40, -30],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[5%] top-[15%] h-[500px] w-[500px] rounded-full bg-orange-600/10 blur-[150px]"
        />

        <motion.div
          animate={{
            x: [80, -80, 80],
            scale: [1.1, 0.9, 1.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute right-[0%] bottom-[10%] h-[550px] w-[550px] rounded-full bg-red-700/10 blur-[160px]"
        />

        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
            backgroundSize: "65px 65px",
          }}
        />

        {particles.map((_, index) => (
          <motion.span
            key={index}
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${100 + Math.random() * 20}%`,
              opacity: 0,
            }}
            animate={{
              y: `${-10 - Math.random() * 20}%`,
              x: `${Math.random() * 100}%`,
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: 7 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 8,
            }}
            className="absolute h-1 w-1 rounded-full bg-orange-400 shadow-[0_0_12px_rgba(249,115,22,.9)]"
          />
        ))}
      </div>

      {/* =====================================================
          HEADER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-5 inline-flex items-center gap-3 rounded-full border border-orange-500/20 bg-orange-500/[0.04] px-5 py-2.5 backdrop-blur-2xl"
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
            Signature Collection
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-black tracking-[-0.06em] sm:text-6xl lg:text-8xl"
        >
          Eat.{" "}
          <span className="bg-gradient-to-r from-orange-300 via-orange-500 to-red-600 bg-clip-text text-transparent">
            Love.
          </span>{" "}
          Repeat.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/40 sm:text-base"
        >
          Explore our handcrafted collection of burgers, pizzas, steaks,
          BBQ, pasta, sushi, desserts and refreshing drinks.
        </motion.p>
      </div>

      {/* =====================================================
          CATEGORY SELECTOR
      ====================================================== */}

      <div className="relative z-20 mx-auto mt-12 max-w-7xl">
        <div className="scrollbar-hide flex gap-2 overflow-x-auto pb-3 lg:justify-center">
          {categories.map((item) => {
            const selected = category === item.name;

            return (
              <motion.button
                key={item.name}
                onClick={() => setCategory(item.name)}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.94 }}
                className={`relative flex shrink-0 items-center gap-2 overflow-hidden rounded-full border px-5 py-3 text-xs font-black transition-all duration-300 ${
                  selected
                    ? "border-orange-400/40 text-black"
                    : "border-white/10 bg-white/[0.025] text-white/45 hover:border-orange-500/30 hover:text-orange-400"
                }`}
              >
                {selected && (
                  <motion.span
                    layoutId="category-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 to-orange-600"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}

                <span className="relative z-10 text-base">{item.icon}</span>

                <span className="relative z-10">{item.name}</span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* =====================================================
          ACTIVE CATEGORY STATUS
      ====================================================== */}

      <motion.div
        layout
        className="relative z-10 mx-auto mt-8 flex max-w-7xl items-center justify-between"
      >
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-orange-400">
            {category === "All" ? "Everything We Love" : category}
          </p>

          <p className="mt-1 text-xs text-white/25">
            {filteredFoods.length} delicious choices
          </p>
        </div>

        <div className="hidden items-center gap-2 text-xs text-white/25 sm:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-orange-500 shadow-[0_0_10px_#f97316]" />
          Freshly prepared
        </div>
      </motion.div>

      {/* =====================================================
          FOOD GRID
      ====================================================== */}

      <motion.div
        layout
        className="relative z-10 mx-auto mt-6 grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4"
      >
        <AnimatePresence mode="popLayout">
          {filteredFoods.map((food, index) => {
            const isHovered = hovered === food.id;
            const isLiked = wishlist.includes(food.id);
            const quantity = cart[food.id] || 0;

            return (
              <motion.article
                layout
                key={food.id}
                initial={{
                  opacity: 0,
                  y: 50,
                  scale: 0.9,
                  rotateX: 8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  rotateX: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                  y: 30,
                  filter: "blur(10px)",
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.045,
                }}
                onMouseEnter={() => setHovered(food.id)}
                onMouseLeave={() => setHovered(null)}
                className="group relative"
                style={{
                  perspective: "1000px",
                }}
              >
                {/* ==========================================
                    OUTER ENERGY GLOW
                =========================================== */}

                <motion.div
                  animate={
                    isHovered
                      ? {
                          opacity: 0.55,
                          scale: 1.03,
                        }
                      : {
                          opacity: 0,
                          scale: 0.96,
                        }
                  }
                  transition={{ duration: 0.4 }}
                  className="absolute -inset-[1px] rounded-[30px] bg-gradient-to-r from-orange-500 via-red-500 to-orange-400 blur-xl"
                />

                {/* ==========================================
                    CARD
                =========================================== */}

                <motion.div
                  animate={
                    isHovered
                      ? {
                          y: -10,
                          rotateX: 2,
                          rotateY: -2,
                        }
                      : {
                          y: 0,
                          rotateX: 0,
                          rotateY: 0,
                        }
                  }
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 20,
                  }}
                  className="relative overflow-hidden rounded-[30px] border border-white/[0.08] bg-[#0b0907]/90 shadow-2xl backdrop-blur-2xl"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* ========================================
                      IMAGE AREA
                  ========================================= */}

                  <div className="relative h-[285px] overflow-hidden">
                    {/* Image glow */}

                    <motion.div
                      animate={
                        isHovered
                          ? {
                              scale: 1.3,
                              opacity: 0.35,
                            }
                          : {
                              scale: 1,
                              opacity: 0.1,
                            }
                      }
                      className="absolute inset-8 rounded-full bg-orange-500 blur-[70px]"
                    />

                    {/* Food image */}

                    <motion.img
                      src={food.image}
                      alt={food.name}
                      animate={
                        isHovered
                          ? {
                              scale: 1.16,
                              rotate: 1.5,
                            }
                          : {
                              scale: 1,
                              rotate: 0,
                            }
                      }
                      transition={{
                        duration: 0.7,
                        ease: "easeOut",
                      }}
                      className="relative h-full w-full object-cover"
                    />

                    {/* Dark cinematic gradient */}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0907] via-black/5 to-black/10" />

                    {/* Orange bottom atmosphere */}

                    <motion.div
                      animate={
                        isHovered
                          ? {
                              opacity: 1,
                              height: "45%",
                            }
                          : {
                              opacity: 0,
                              height: "20%",
                            }
                      }
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-orange-500/20 to-transparent"
                    />

                    {/* ====================================
                        SHINE SWEEP
                    ===================================== */}

                    <motion.div
                      animate={
                        isHovered
                          ? {
                              x: ["-150%", "150%"],
                            }
                          : {
                              x: "-150%",
                            }
                      }
                      transition={{
                        duration: 0.8,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-y-0 w-24 -skew-x-12 bg-white/20 blur-xl"
                    />

                    {/* ====================================
                        BADGE
                    ===================================== */}

                    <motion.div
                      animate={
                        isHovered
                          ? {
                              x: 2,
                            }
                          : {
                              x: 0,
                            }
                      }
                      className="absolute left-4 top-4"
                    >
                      <span className="rounded-full border border-orange-400/20 bg-black/60 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.15em] text-orange-400 backdrop-blur-xl">
                        {food.badge}
                      </span>
                    </motion.div>

                    {/* ====================================
                        WISHLIST BUTTON
                    ===================================== */}

                    <motion.button
                      whileHover={{
                        scale: 1.12,
                      }}
                      whileTap={{
                        scale: 0.75,
                      }}
                      onClick={() => toggleWishlist(food.id)}
                      className={`absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-xl ${
                        isLiked
                          ? "border-red-500/50 bg-red-500/20 text-red-400"
                          : "border-white/10 bg-black/50 text-white/60 hover:border-orange-400/40 hover:text-orange-400"
                      }`}
                    >
                      {/* heart */}

                      <motion.span
                        animate={
                          isLiked
                            ? {
                                scale: [1, 1.5, 1],
                                rotate: [0, -12, 12, 0],
                              }
                            : {
                                scale: 1,
                              }
                        }
                        transition={{
                          duration: 0.45,
                        }}
                        className="text-xl"
                      >
                        {isLiked ? "♥" : "♡"}
                      </motion.span>

                      {/* heart ring */}

                      {isLiked && (
                        <motion.span
                          initial={{
                            scale: 0.5,
                            opacity: 0.8,
                          }}
                          animate={{
                            scale: 1.7,
                            opacity: 0,
                          }}
                          transition={{
                            duration: 0.6,
                          }}
                          className="absolute inset-0 rounded-full border border-red-400"
                        />
                      )}
                    </motion.button>

                    {/* ====================================
                        FLOATING EMOJI
                    ===================================== */}

                    <motion.div
                      animate={
                        isHovered
                          ? {
                              y: -10,
                              scale: 1.15,
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
                      className="absolute bottom-4 left-4 text-3xl drop-shadow-2xl"
                    >
                      {food.emoji}
                    </motion.div>

                    {/* Quick rating */}

                    <div className="absolute bottom-4 right-4 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 text-[10px] backdrop-blur-xl">
                      <span className="text-yellow-400">
                        ★ {food.rating}
                      </span>

                      <span className="ml-1 text-white/30">
                        ({food.reviews})
                      </span>
                    </div>
                  </div>

                  {/* ========================================
                      CARD CONTENT
                  ========================================= */}

                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-orange-400/60">
                          {food.category}
                        </p>

                        <h3 className="mt-1 text-lg font-black tracking-tight">
                          {food.name}
                        </h3>
                      </div>

                      <div className="text-right">
                        <p className="text-lg font-black text-orange-400">
                          ${food.price.toFixed(2)}
                        </p>

                        <p className="text-[9px] text-white/20 line-through">
                          ${food.oldPrice.toFixed(2)}
                        </p>
                      </div>
                    </div>

                    <p className="mt-3 min-h-[48px] text-xs leading-6 text-white/35">
                      {food.description}
                    </p>

                    {/* ====================================
                        ADD CART
                    ===================================== */}

                    <motion.button
                      whileHover={{
                        scale: 1.02,
                      }}
                      whileTap={{
                        scale: 0.96,
                      }}
                      onClick={() => addToCart(food.id)}
                      className={`relative mt-5 flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl py-3.5 text-xs font-black transition-all duration-300 ${
                        addedId === food.id
                          ? "bg-emerald-500 text-black"
                          : "bg-orange-500/[0.08] text-orange-400 hover:bg-orange-500 hover:text-black"
                      }`}
                    >
                      {/* button shine */}

                      {addedId === food.id && (
                        <motion.span
                          initial={{ x: "-100%" }}
                          animate={{ x: "100%" }}
                          transition={{ duration: 0.5 }}
                          className="absolute inset-y-0 w-20 -skew-x-12 bg-white/30"
                        />
                      )}

                      <span className="relative z-10">
                        {addedId === food.id
                          ? "✓ Added to Cart"
                          : quantity > 0
                            ? `Add More • ${quantity}`
                            : "Add To Cart"}
                      </span>

                      <motion.span
                        animate={
                          addedId === food.id
                            ? {
                                x: [0, 8, 0],
                              }
                            : {}
                        }
                        className="relative z-10 text-base"
                      >
                        →
                      </motion.span>
                    </motion.button>
                  </div>

                  {/* ========================================
                      CARD LIGHT LINE
                  ========================================= */}

                  <motion.div
                    animate={
                      isHovered
                        ? {
                            width: "75%",
                            opacity: 1,
                          }
                        : {
                            width: "20%",
                            opacity: 0,
                          }
                    }
                    transition={{ duration: 0.4 }}
                    className="absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-orange-500 to-transparent shadow-[0_0_20px_rgba(249,115,22,1)]"
                  />
                </motion.div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}

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
        className="relative z-10 mx-auto mt-16 flex max-w-7xl justify-center"
      >
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 50px rgba(249,115,22,.25)",
          }}
          whileTap={{
            scale: 0.96,
          }}
          className="group rounded-full border border-orange-500/25 bg-white/[0.025] px-8 py-4 text-xs font-black uppercase tracking-[0.2em] text-orange-400 backdrop-blur-xl transition hover:bg-orange-500 hover:text-black"
        >
          Explore Full Menu

          <span className="ml-4 inline-block transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </motion.button>
      </motion.div>

      {/* =====================================================
          DECORATION
      ====================================================== */}

      <div className="relative z-10 mx-auto mt-24 flex max-w-6xl items-center gap-5">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-orange-500/20" />

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="text-orange-500/50"
        >
          ✦
        </motion.div>

        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-orange-500/20" />
      </div>
    </section>
  );
}

export default PopularMenu;