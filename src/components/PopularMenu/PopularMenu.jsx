import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const categories = [
  "All",
  "Burger",
  "Pizza",
  "Steak",
  "BBQ",
  "Dessert",
];

const menuItems = [
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
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=90",
    description:
      "Double grilled beef, cheddar cheese, fresh lettuce and smoky fire sauce.",
  },
  {
    id: 2,
    name: "Napoli Fire Pizza",
    category: "Pizza",
    price: 15.99,
    oldPrice: 19.99,
    rating: 4.8,
    reviews: 245,
    badge: "WOOD FIRED",
    emoji: "🍕",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=90",
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
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=900&q=90",
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
      "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=900&q=90",
    description:
      "Tender chicken grilled over open fire with our signature smoky BBQ glaze.",
  },
  {
    id: 5,
    name: "Crispy Chicken Burger",
    category: "Burger",
    price: 11.99,
    oldPrice: 14.99,
    rating: 4.8,
    reviews: 294,
    badge: "POPULAR",
    emoji: "🍔",
    image:
      "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=900&q=90",
    description:
      "Golden crispy chicken, crunchy lettuce and creamy spicy house sauce.",
  },
  {
    id: 6,
    name: "Truffle Mushroom Pizza",
    category: "Pizza",
    price: 18.99,
    oldPrice: 22.99,
    rating: 4.9,
    reviews: 164,
    badge: "NEW",
    emoji: "🍕",
    image:
      "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=900&q=90",
    description:
      "Creamy truffle sauce, roasted mushrooms, mozzarella and parmesan.",
  },
  {
    id: 7,
    name: "Grilled BBQ Ribs",
    category: "BBQ",
    price: 21.99,
    oldPrice: 26.99,
    rating: 4.9,
    reviews: 231,
    badge: "HOT",
    emoji: "🍖",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=90",
    description:
      "Slow grilled ribs covered in rich smoky BBQ sauce and fresh herbs.",
  },
  {
    id: 8,
    name: "Chocolate Dream",
    category: "Dessert",
    price: 8.99,
    oldPrice: 11.99,
    rating: 4.9,
    reviews: 376,
    badge: "SWEET PICK",
    emoji: "🍨",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=90",
    description:
      "Rich chocolate ice cream with brownie bites and caramel drizzle.",
  },
];

function PopularMenu() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [hovered, setHovered] = useState(null);

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const addToCart = (id) => {
    setCart((prev) => [...prev, id]);
  };

  return (
    <section
      id="menu"
      className="relative overflow-hidden bg-[#050403] px-5 py-24 text-white sm:px-8 lg:px-12 xl:px-20"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.08, 0.16, 0.08],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-150px] top-[20%] h-[450px] w-[450px] rounded-full bg-orange-600/20 blur-[130px]"
        />

        <motion.div
          animate={{
            scale: [1.15, 1, 1.15],
            opacity: [0.06, 0.14, 0.06],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute right-[-150px] bottom-[10%] h-[500px] w-[500px] rounded-full bg-red-700/20 blur-[140px]"
        />

        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* =====================================================
          SECTION HEADER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-4 inline-flex items-center gap-3 rounded-full border border-orange-500/20 bg-orange-500/[0.05] px-4 py-2 backdrop-blur-xl"
        >
          <span className="text-orange-400">✦</span>

          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-400">
            Our Signature Menu
          </span>

          <span className="text-orange-400">✦</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-5xl font-black tracking-[-0.05em] sm:text-6xl lg:text-7xl"
        >
          Discover Our{" "}
          <span className="bg-gradient-to-r from-orange-300 via-orange-500 to-red-600 bg-clip-text text-transparent">
            FIRE
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/40 sm:text-base"
        >
          From smoky grills to handcrafted desserts, every dish is prepared
          with premium ingredients and a whole lot of passion.
        </motion.p>
      </div>

      {/* =====================================================
          CATEGORY FILTER
      ====================================================== */}

      <div className="relative z-10 mx-auto mt-10 flex max-w-5xl flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setActiveCategory(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative overflow-hidden rounded-full border px-5 py-3 text-xs font-bold transition-all duration-300 ${
              activeCategory === category
                ? "border-orange-500/40 bg-orange-500 text-black shadow-[0_0_30px_rgba(249,115,22,.25)]"
                : "border-white/10 bg-white/[0.03] text-white/50 hover:border-orange-500/30 hover:text-orange-400"
            }`}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* =====================================================
          MENU GRID
      ====================================================== */}

      <motion.div
        layout
        className="relative z-10 mx-auto mt-14 grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, index) => {
            const isWishlisted = wishlist.includes(item.id);
            const cartCount = cart.filter((id) => id === item.id).length;

            return (
              <motion.article
                layout
                key={item.id}
                initial={{
                  opacity: 0,
                  y: 35,
                  scale: 0.94,
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
                exit={{
                  opacity: 0,
                  scale: 0.85,
                  filter: "blur(8px)",
                }}
                transition={{
                  delay: index * 0.06,
                  duration: 0.55,
                }}
                onMouseEnter={() => setHovered(item.id)}
                onMouseLeave={() => setHovered(null)}
                className="group relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.025] shadow-2xl backdrop-blur-xl transition-colors duration-500 hover:border-orange-500/30"
              >
                {/* =================================================
                    IMAGE
                ================================================== */}

                <div className="relative h-64 overflow-hidden">
                  {/* image glow */}

                  <motion.div
                    animate={
                      hovered === item.id
                        ? {
                            scale: 1.25,
                            opacity: 0.35,
                          }
                        : {
                            scale: 1,
                            opacity: 0.15,
                          }
                    }
                    className="absolute inset-10 rounded-full bg-orange-500 blur-[60px]"
                  />

                  <motion.img
                    src={item.image}
                    alt={item.name}
                    animate={
                      hovered === item.id
                        ? {
                            scale: 1.12,
                          }
                        : {
                            scale: 1,
                          }
                    }
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                    }}
                    className="relative h-full w-full object-cover"
                  />

                  {/* cinematic image overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                  {/* image reflection */}

                  <motion.div
                    initial={{ x: "-150%" }}
                    animate={
                      hovered === item.id
                        ? {
                            x: "150%",
                          }
                        : {
                            x: "-150%",
                          }
                    }
                    transition={{
                      duration: 0.8,
                    }}
                    className="absolute inset-y-0 w-24 -skew-x-12 bg-white/20 blur-xl"
                  />

                  {/* badge */}

                  <div className="absolute left-4 top-4">
                    <span className="rounded-full border border-orange-400/20 bg-black/60 px-3 py-1.5 text-[9px] font-black uppercase tracking-widest text-orange-400 backdrop-blur-xl">
                      {item.badge}
                    </span>
                  </div>

                  {/* wishlist */}

                  <motion.button
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.85 }}
                    onClick={() => toggleWishlist(item.id)}
                    className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-xl transition-all ${
                      isWishlisted
                        ? "border-red-500/40 bg-red-500/20 text-red-400"
                        : "border-white/10 bg-black/50 text-white/70 hover:border-orange-500/30 hover:text-orange-400"
                    }`}
                  >
                    {isWishlisted ? "♥" : "♡"}
                  </motion.button>

                  {/* floating emoji */}

                  <motion.div
                    animate={
                      hovered === item.id
                        ? {
                            y: -8,
                            rotate: 8,
                          }
                        : {
                            y: 0,
                            rotate: 0,
                          }
                    }
                    className="absolute bottom-3 left-4 text-3xl drop-shadow-2xl"
                  >
                    {item.emoji}
                  </motion.div>
                </div>

                {/* =================================================
                    CONTENT
                ================================================== */}

                <div className="relative p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-orange-400/70">
                        {item.category}
                      </p>

                      <h3 className="mt-1 text-lg font-black leading-tight">
                        {item.name}
                      </h3>
                    </div>

                    <div className="shrink-0 text-right">
                      <p className="text-lg font-black text-orange-400">
                        ${item.price}
                      </p>

                      <p className="text-[10px] text-white/25 line-through">
                        ${item.oldPrice}
                      </p>
                    </div>
                  </div>

                  <p className="mt-3 line-clamp-2 text-xs leading-6 text-white/35">
                    {item.description}
                  </p>

                  {/* Rating */}

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-yellow-400">
                        ★ {item.rating}
                      </span>

                      <span className="text-[10px] text-white/25">
                        ({item.reviews})
                      </span>
                    </div>

                    <span className="text-[9px] uppercase tracking-widest text-white/25">
                      Fresh Today
                    </span>
                  </div>

                  {/* =================================================
                      ADD TO CART
                  ================================================== */}

                  <motion.button
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 0 30px rgba(249,115,22,.18)",
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    onClick={() => addToCart(item.id)}
                    className="mt-5 flex w-full items-center justify-center gap-3 rounded-xl border border-orange-500/20 bg-orange-500/[0.08] py-3.5 text-xs font-black text-orange-400 transition-all duration-300 hover:bg-orange-500 hover:text-black"
                  >
                    <span>
                      {cartCount > 0
                        ? `Added to Cart • ${cartCount}`
                        : "Add To Cart"}
                    </span>

                    <span className="text-base">→</span>
                  </motion.button>
                </div>

                {/* bottom orange light */}

                <motion.div
                  animate={
                    hovered === item.id
                      ? {
                          opacity: 1,
                          width: "70%",
                        }
                      : {
                          opacity: 0,
                          width: "20%",
                        }
                  }
                  className="absolute bottom-0 left-1/2 h-px -translate-x-1/2 bg-orange-500 shadow-[0_0_20px_rgba(249,115,22,1)]"
                />
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* =====================================================
          VIEW FULL MENU
      ====================================================== */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 mt-14 flex justify-center"
      >
        <motion.button
          whileHover={{
            scale: 1.04,
            boxShadow: "0 0 40px rgba(249,115,22,.18)",
          }}
          whileTap={{
            scale: 0.96,
          }}
          className="group rounded-full border border-orange-500/25 bg-white/[0.025] px-7 py-4 text-xs font-black uppercase tracking-[0.15em] text-orange-400 backdrop-blur-xl transition hover:bg-orange-500 hover:text-black"
        >
          <span>View Full Menu</span>

          <span className="ml-3 inline-block transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </motion.button>
      </motion.div>

      {/* =====================================================
          BOTTOM DECORATION
      ====================================================== */}

      <div className="relative z-10 mx-auto mt-20 flex max-w-5xl items-center justify-center gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-orange-500/20" />

        <div className="text-lg text-orange-500/40">✦</div>

        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-orange-500/20" />
      </div>
    </section>
  );
}

export default PopularMenu;