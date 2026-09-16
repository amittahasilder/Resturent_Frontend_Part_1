import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [wishlist, setWishlist] = useState(false);
  const [cartCount] = useState(2);
  const [active, setActive] = useState("Home");

  // =========================================================
  // SCROLL EFFECT
  // =========================================================

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 35);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // =========================================================
  // NAVIGATION
  // =========================================================

  const navItems = [
    {
      name: "Home",
      href: "#home",
    },
    {
      name: "Menu",
      href: "#menu",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Chefs",
      href: "#chefs",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  const handleNavClick = (name) => {
    setActive(name);
    setMobileOpen(false);
  };

  // =========================================================
  // LOGO CHICKEN SVG
  // =========================================================

  const ChickenLogo = () => {
    return (
      <svg
        viewBox="0 0 120 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="
          h-8
          w-8
          overflow-visible
          drop-shadow-[0_0_14px_rgba(249,115,22,0.7)]
        "
      >
        {/* BODY */}

        <path
          d="
            M25 65
            C17 58 18 46 26 39
            C33 32 43 33 51 38
            C55 29 65 25 75 29
            C86 33 91 44 87 54
            C84 63 76 68 66 67
            C58 67 52 63 48 59
            C42 67 33 70 25 65Z
          "
          className="
            fill-orange-500/20
            stroke-orange-300
          "
          strokeWidth="3"
        />

        {/* HEAD */}

        <circle
          cx="77"
          cy="35"
          r="11"
          className="
            fill-orange-500/15
            stroke-orange-300
          "
          strokeWidth="3"
        />

        {/* COMB */}

        <path
          d="
            M70 24
            C67 19 71 16 75 21
            C77 15 82 17 82 23
            C86 19 89 22 86 27
          "
          className="stroke-orange-400"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* BEAK */}

        <path
          d="M87 34 L98 39 L87 43 Z"
          className="
            fill-orange-500
            stroke-orange-300
          "
          strokeWidth="2"
        />

        {/* EYE */}

        <circle
          cx="80"
          cy="33"
          r="2"
          className="fill-white"
        />

        {/* WING */}

        <path
          d="
            M31 48
            C40 40 52 43 57 52
            C51 59 40 58 31 48Z
          "
          className="
            fill-orange-500/10
            stroke-orange-400/80
          "
          strokeWidth="2.5"
        />

        {/* LEG */}

        <path
          d="M39 66 L36 76 M57 65 L60 75"
          className="stroke-orange-400"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* FEET */}

        <path
          d="M32 76 L40 76 M56 75 L64 75"
          className="stroke-orange-300"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* LITTLE STEAM */}

        <path
          d="M46 30 C40 25 48 20 43 15"
          className="stroke-white/30"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <path
          d="M54 28 C49 23 57 18 53 13"
          className="stroke-white/20"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  };

  return (
    <>
      {/* =====================================================
          AMBIENT DARK ORANGE ATMOSPHERE
      ====================================================== */}

      <div className="
        pointer-events-none
        fixed
        inset-0
        z-30
        overflow-hidden
      ">

        {/* LEFT SMOKE */}

        <motion.div
          animate={{
            x: [0, 80, -30, 0],
            y: [0, -35, 25, 0],
            scale: [1, 1.25, 0.9, 1],
            opacity: [0.04, 0.11, 0.06, 0.04],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-20
            -top-32
            h-[350px]
            w-[350px]
            rounded-full
            bg-orange-700
            blur-[120px]
          "
        />

        {/* RIGHT SMOKE */}

        <motion.div
          animate={{
            x: [0, -80, 30, 0],
            y: [0, 45, -25, 0],
            scale: [1, 0.85, 1.2, 1],
            opacity: [0.03, 0.09, 0.05, 0.03],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-20
            -top-24
            h-[330px]
            w-[330px]
            rounded-full
            bg-amber-800
            blur-[120px]
          "
        />

      </div>

      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <header
        className="
          fixed
          left-0
          right-0
          top-0
          z-50
          px-3
          pt-3
          sm:px-5
          md:px-8
        "
      >

        <motion.div
          initial={{
            y: -100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`
            group/navbar
            relative
            mx-auto
            flex
            max-w-7xl
            items-center
            justify-between
            overflow-visible
            rounded-[24px]
            border
            px-3
            py-3
            transition-all
            duration-700
            sm:px-4
            md:px-6

            ${
              scrolled
                ? `
                  border-orange-500/20
                  bg-black/70
                  shadow-[0_25px_100px_rgba(0,0,0,0.75)]
                  backdrop-blur-[30px]
                `
                : `
                  border-white/[0.10]
                  bg-black/40
                  shadow-[0_15px_60px_rgba(0,0,0,0.45)]
                  backdrop-blur-[24px]
                `
            }
          `}
        >

          {/* =================================================
              GLASS TOP LINE
          ================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              left-[8%]
              right-[8%]
              top-0
              h-px
              rounded-full
              bg-gradient-to-r
              from-transparent
              via-white/30
              to-transparent
            "
          />

          {/* =================================================
              GLASS BOTTOM ORANGE LINE
          ================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-[20%]
              right-[20%]
              h-px
              bg-gradient-to-r
              from-transparent
              via-orange-500/20
              to-transparent
            "
          />

          {/* =================================================
              MOVING GLASS REFLECTION
          ================================================== */}

          <motion.div
            animate={{
              x: ["-150%", "180%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatDelay: 5,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              inset-y-0
              left-0
              w-20
              rotate-[18deg]
              bg-gradient-to-r
              from-transparent
              via-white/[0.08]
              to-transparent
              blur-lg
            "
          />

          {/* =================================================
              LOGO
          ================================================== */}

          <a
            href="#home"
            onClick={() => handleNavClick("Home")}
            className="
              group/logo
              relative
              z-10
              flex
              items-center
              gap-3
            "
          >

            {/* LOGO GLASS BOX */}

            <motion.div
              whileHover={{
                scale: 1.08,
                rotate: -3,
              }}
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 14,
              }}
              className="
                relative
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                overflow-visible
                rounded-[17px]
                border
                border-orange-400/20
                bg-gradient-to-br
                from-white/[0.09]
                via-orange-500/[0.07]
                to-black/80
                shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_15px_45px_rgba(0,0,0,0.65),0_0_35px_rgba(249,115,22,0.12)]
                backdrop-blur-2xl
              "
            >

              {/* LOGO REFLECTION */}

              <span
                className="
                  pointer-events-none
                  absolute
                  left-2
                  right-2
                  top-1
                  h-px
                  rounded-full
                  bg-gradient-to-r
                  from-transparent
                  via-white/40
                  to-transparent
                "
              />

              {/* ROTATING RING */}

              <motion.span
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 14,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  pointer-events-none
                  absolute
                  -inset-1
                  rounded-[19px]
                  border
                  border-orange-500/10
                  border-t-orange-400/50
                  border-r-orange-500/20
                "
              />

              {/* ORANGE BREATHING GLOW */}

              <motion.span
                animate={{
                  scale: [1, 1.25, 1],
                  opacity: [0.06, 0.18, 0.06],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  pointer-events-none
                  absolute
                  inset-2
                  rounded-full
                  bg-orange-500
                  blur-xl
                "
              />

              {/* CHICKEN */}

              <motion.div
                animate={{
                  x: [-1, 2, -2, 1, -1],
                  y: [0, -1, 0, -1, 0],
                  rotate: [-1, 2, -1, 1, -1],
                }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                <ChickenLogo />
              </motion.div>

              {/* SMOKE 1 */}

              <motion.span
                animate={{
                  y: [3, -8, -18, -27],
                  x: [0, 4, -4, 2],
                  scale: [0.4, 0.8, 1.2, 1.7],
                  opacity: [0, 0.35, 0.16, 0],
                }}
                transition={{
                  duration: 3.3,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                className="
                  absolute
                  left-[18px]
                  top-[-3px]
                  h-2
                  w-2
                  rounded-full
                  bg-white/25
                  blur-[4px]
                "
              />

              {/* SMOKE 2 */}

              <motion.span
                animate={{
                  y: [3, -10, -20, -30],
                  x: [0, -4, 5, -2],
                  scale: [0.3, 0.7, 1.2, 1.8],
                  opacity: [0, 0.3, 0.12, 0],
                }}
                transition={{
                  duration: 4,
                  delay: 1,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                className="
                  absolute
                  left-[26px]
                  top-[-2px]
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-white/20
                  blur-[3px]
                "
              />

              {/* LOGO SHINE */}

              <motion.span
                animate={{
                  x: ["-150%", "180%"],
                }}
                transition={{
                  duration: 2.3,
                  repeat: Infinity,
                  repeatDelay: 5,
                  ease: "easeInOut",
                }}
                className="
                  pointer-events-none
                  absolute
                  top-[-20%]
                  h-[140%]
                  w-3
                  rotate-[22deg]
                  bg-gradient-to-b
                  from-transparent
                  via-white/25
                  to-transparent
                  blur-[3px]
                "
              />

            </motion.div>

            {/* BRAND TEXT */}

            <div className="hidden sm:block">

              <div className="flex items-center">

                <motion.span
                  whileHover={{
                    letterSpacing: "0.2em",
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="
                    bg-gradient-to-r
                    from-white
                    via-orange-100
                    to-orange-400
                    bg-clip-text
                    text-[19px]
                    font-black
                    tracking-[0.12em]
                    text-transparent
                  "
                >
                  AmitFOOD
                </motion.span>

                <motion.span
                  animate={{
                    scale: [0.7, 1.2, 0.7],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="
                    ml-2
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-orange-400
                    shadow-[0_0_14px_rgba(249,115,22,1)]
                  "
                />

              </div>

              <div className="mt-0.5 flex items-center gap-2">

                <span
                  className="
                    text-[7px]
                    font-bold
                    uppercase
                    tracking-[0.35em]
                    text-white/30
                  "
                >
                  Crafted With Fire
                </span>

                <span
                  className="
                    h-px
                    w-5
                    bg-orange-500/30
                  "
                />

                <span
                  className="
                    text-[7px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-orange-400/60
                  "
                >
                  2026
                </span>

              </div>

            </div>

          </a>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <nav className="hidden items-center lg:flex">

            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item.name)}
                initial={{
                  opacity: 0,
                  y: -15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.25 + index * 0.07,
                }}
                className="
                  group
                  relative
                  mx-0.5
                  rounded-xl
                  px-4
                  py-3
                  text-[12px]
                  font-semibold
                  tracking-wide
                  text-white/50
                  transition-all
                  duration-300
                  hover:bg-white/[0.045]
                  hover:text-white
                "
              >

                {item.name}

                {/* ACTIVE / HOVER LINE */}

                <span
                  className={`
                    absolute
                    bottom-1.5
                    left-1/2
                    h-0.5
                    -translate-x-1/2
                    rounded-full
                    bg-orange-400
                    shadow-[0_0_12px_rgba(249,115,22,0.9)]
                    transition-all
                    duration-300

                    ${
                      active === item.name
                        ? "w-5"
                        : "w-0 group-hover:w-5"
                    }
                  `}
                />

              </motion.a>
            ))}

          </nav>

          {/* =================================================
              RIGHT ACTIONS
          ================================================== */}

          <div className="hidden items-center gap-1 lg:flex">

            {/* SEARCH */}

            <motion.button
              whileHover={{
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.92,
              }}
              onClick={() => setSearchOpen(!searchOpen)}
              className="
                group
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                border
                border-transparent
                text-white/50
                transition-all
                duration-300
                hover:border-white/10
                hover:bg-white/[0.06]
                hover:text-orange-400
              "
              aria-label="Search"
            >
              <span
                className="
                  text-[22px]
                  leading-none
                  transition-transform
                  duration-300
                  group-hover:rotate-12
                "
              >
                ⌕
              </span>
            </motion.button>

            {/* WISHLIST */}

            <motion.button
              whileHover={{
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.9,
              }}
              onClick={() => setWishlist(!wishlist)}
              className="
                group
                relative
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                border
                border-transparent
                text-white/50
                transition-all
                duration-300
                hover:border-white/10
                hover:bg-white/[0.06]
                hover:text-orange-400
              "
              aria-label="Wishlist"
            >

              <motion.span
                animate={{
                  scale: wishlist ? [1, 1.4, 1] : 1,
                }}
                className="text-[20px]"
              >
                {wishlist ? "♥" : "♡"}
              </motion.span>

              <span
                className="
                  absolute
                  right-1
                  top-1
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-orange-400
                  shadow-[0_0_9px_rgba(249,115,22,1)]
                "
              />

            </motion.button>

            {/* CART */}

            <motion.button
              whileHover={{
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.92,
              }}
              className="
                group
                relative
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                border
                border-transparent
                text-white/50
                transition-all
                duration-300
                hover:border-white/10
                hover:bg-white/[0.06]
                hover:text-orange-400
              "
              aria-label="Cart"
            >

              <span
                className="
                  text-[17px]
                  transition-transform
                  duration-300
                  group-hover:-rotate-6
                "
              >
                🛒
              </span>

              <span
                className="
                  absolute
                  right-0
                  top-0
                  flex
                  h-4
                  min-w-4
                  items-center
                  justify-center
                  rounded-full
                  bg-orange-500
                  px-1
                  text-[8px]
                  font-black
                  text-white
                  shadow-[0_0_12px_rgba(249,115,22,0.65)]
                "
              >
                {cartCount}
              </span>

            </motion.button>

            {/* DIVIDER */}

            <span
              className="
                mx-2
                h-7
                w-px
                bg-white/10
              "
            />

            {/* BOOK TABLE */}

            <motion.a
              href="#reservation"
              whileHover={{
                scale: 1.04,
                y: -1,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="
                group
                relative
                flex
                items-center
                gap-2
                overflow-hidden
                rounded-xl
                border
                border-orange-300/20
                bg-gradient-to-r
                from-orange-700
                via-orange-500
                to-orange-700
                px-5
                py-3
                text-[10px]
                font-black
                uppercase
                tracking-[0.12em]
                text-white
                shadow-[0_8px_35px_rgba(249,115,22,0.22)]
                transition-all
                duration-300
                hover:border-orange-200/50
                hover:shadow-[0_10px_50px_rgba(249,115,22,0.42)]
              "
            >

              {/* BUTTON SHINE */}

              <motion.span
                animate={{
                  x: ["-160%", "250%"],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
                className="
                  absolute
                  inset-y-0
                  w-10
                  rotate-[20deg]
                  bg-white/25
                  blur-sm
                "
              />

              <span className="relative z-10">
                🔥
              </span>

              <span className="relative z-10">
                Book a Table
              </span>

              <span
                className="
                  relative
                  z-10
                  text-sm
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              >
                ↗
              </span>

            </motion.a>

          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================== */}

          <motion.button
            whileTap={{
              scale: 0.9,
            }}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="
              relative
              z-20
              flex
              h-11
              w-11
              flex-col
              items-center
              justify-center
              gap-1.5
              rounded-xl
              border
              border-white/10
              bg-white/[0.04]
              transition-all
              duration-300
              hover:border-orange-500/30
              hover:bg-orange-500/10
              lg:hidden
            "
            aria-label="Toggle menu"
          >

            <motion.span
              animate={
                mobileOpen
                  ? {
                      rotate: 45,
                      y: 8,
                      width: 20,
                    }
                  : {
                      rotate: 0,
                      y: 0,
                      width: 20,
                    }
              }
              className="
                h-0.5
                rounded-full
                bg-white
              "
            />

            <motion.span
              animate={
                mobileOpen
                  ? {
                      opacity: 0,
                      width: 0,
                    }
                  : {
                      opacity: 1,
                      width: 12,
                    }
              }
              className="
                h-0.5
                rounded-full
                bg-orange-400
              "
            />

            <motion.span
              animate={
                mobileOpen
                  ? {
                      rotate: -45,
                      y: -8,
                      width: 20,
                    }
                  : {
                      rotate: 0,
                      y: 0,
                      width: 20,
                    }
              }
              className="
                h-0.5
                rounded-full
                bg-white
              "
            />

          </motion.button>

        </motion.div>
      </header>

      {/* =====================================================
          SEARCH PANEL
      ====================================================== */}

      <AnimatePresence>
        {searchOpen && (
          <>
            {/* BACKDROP */}

            <motion.button
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              onClick={() => setSearchOpen(false)}
              className="
                fixed
                inset-0
                z-40
                cursor-default
                bg-black/20
                backdrop-blur-[2px]
              "
              aria-label="Close search"
            />

            {/* SEARCH BOX */}

            <motion.div
              initial={{
                opacity: 0,
                y: -20,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -15,
                scale: 0.97,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                fixed
                left-4
                right-4
                top-[90px]
                z-50
                mx-auto
                max-w-2xl
                rounded-[20px]
                border
                border-orange-500/15
                bg-black/80
                p-3
                shadow-[0_30px_100px_rgba(0,0,0,0.8)]
                backdrop-blur-3xl
              "
            >

              <div
                className="
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-4
                  py-3
                "
              >

                <motion.span
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="
                    text-xl
                    text-orange-400
                  "
                >
                  ⌕
                </motion.span>

                <input
                  autoFocus
                  type="text"
                  placeholder="Search dishes, flavors, chefs..."
                  className="
                    w-full
                    bg-transparent
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-white/25
                  "
                />

                <button
                  onClick={() => setSearchOpen(false)}
                  className="
                    rounded-lg
                    border
                    border-white/10
                    bg-white/5
                    px-2
                    py-1
                    text-[9px]
                    font-bold
                    text-white/35
                    transition
                    hover:border-orange-500/20
                    hover:text-orange-400
                  "
                >
                  ESC
                </button>

              </div>

              <div
                className="
                  mt-2
                  flex
                  items-center
                  gap-2
                  px-2
                  text-[9px]
                  text-white/20
                "
              >
                <span>Popular:</span>
                <span className="text-orange-400/60">
                  Steak
                </span>
                <span>•</span>
                <span className="text-orange-400/60">
                  Pasta
                </span>
                <span>•</span>
                <span className="text-orange-400/60">
                  Burger
                </span>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* =====================================================
          MOBILE DRAWER
      ====================================================== */}

      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* MOBILE BACKDROP */}

            <motion.button
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              onClick={() => setMobileOpen(false)}
              className="
                fixed
                inset-0
                z-40
                bg-black/55
                backdrop-blur-sm
                lg:hidden
              "
              aria-label="Close menu"
            />

            {/* DRAWER */}

            <motion.div
              initial={{
                opacity: 0,
                y: -30,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -20,
                scale: 0.98,
              }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                fixed
                left-3
                right-3
                top-[82px]
                z-50
                max-h-[calc(100vh-100px)]
                overflow-y-auto
                rounded-[24px]
                border
                border-orange-500/15
                bg-black/85
                p-5
                shadow-[0_35px_120px_rgba(0,0,0,0.85)]
                backdrop-blur-3xl
                lg:hidden
              "
            >

              {/* DRAWER GLOW */}

              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.05, 0.13, 0.05],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="
                  pointer-events-none
                  absolute
                  -right-24
                  -top-24
                  h-64
                  w-64
                  rounded-full
                  bg-orange-600
                  blur-[100px]
                "
              />

              {/* MOBILE BRAND */}

              <div className="relative flex items-center gap-3">

                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-orange-400/20
                    bg-orange-500/10
                  "
                >
                  <ChickenLogo />
                </div>

                <div>

                  <div
                    className="
                      text-sm
                      font-black
                      tracking-[0.15em]
                      text-white
                    "
                  >
                    AmitFOOD
                  </div>

                  <div
                    className="
                      text-[7px]
                      font-bold
                      uppercase
                      tracking-[0.3em]
                      text-orange-400/60
                    "
                  >
                    Crafted With Fire
                  </div>

                </div>

              </div>

              {/* LINE */}

              <div
                className="
                  relative
                  my-5
                  h-px
                  bg-gradient-to-r
                  from-orange-500/30
                  via-white/10
                  to-transparent
                "
              />

              {/* MOBILE NAV */}

              <div className="relative">

                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={() => handleNavClick(item.name)}
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.06,
                    }}
                    className="
                      group
                      flex
                      items-center
                      gap-4
                      border-b
                      border-white/[0.06]
                      px-2
                      py-4
                      text-sm
                      font-semibold
                      text-white/60
                      transition-all
                      duration-300
                      hover:pl-4
                      hover:bg-orange-500/[0.04]
                      hover:text-orange-400
                    "
                  >

                    <span
                      className="
                        w-5
                        text-[8px]
                        font-black
                        text-orange-500/40
                      "
                    >
                      0{index + 1}
                    </span>

                    <span>
                      {item.name}
                    </span>

                    <span
                      className="
                        ml-auto
                        text-orange-400/30
                        transition-all
                        duration-300
                        group-hover:translate-x-1
                        group-hover:text-orange-400
                      "
                    >
                      ↗
                    </span>

                  </motion.a>
                ))}

              </div>

              {/* QUICK ACTIONS */}

              <div
                className="
                  relative
                  mt-5
                  grid
                  grid-cols-3
                  gap-2
                "
              >

                <button
                  onClick={() => {
                    setMobileOpen(false);
                    setSearchOpen(true);
                  }}
                  className="
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    px-2
                    py-3
                    text-white/55
                    transition-all
                    hover:border-orange-500/20
                    hover:bg-orange-500/10
                    hover:text-orange-400
                  "
                >
                  <span className="text-lg">
                    ⌕
                  </span>

                  <span
                    className="
                      mt-1
                      block
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-wider
                    "
                  >
                    Search
                  </span>
                </button>

                <button
                  onClick={() => setWishlist(!wishlist)}
                  className="
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    px-2
                    py-3
                    text-white/55
                    transition-all
                    hover:border-orange-500/20
                    hover:bg-orange-500/10
                    hover:text-orange-400
                  "
                >
                  <span className="text-lg">
                    {wishlist ? "♥" : "♡"}
                  </span>

                  <span
                    className="
                      mt-1
                      block
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-wider
                    "
                  >
                    Wishlist
                  </span>
                </button>

                <button
                  className="
                    relative
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    px-2
                    py-3
                    text-white/55
                    transition-all
                    hover:border-orange-500/20
                    hover:bg-orange-500/10
                    hover:text-orange-400
                  "
                >
                  <span className="text-lg">
                    🛒
                  </span>

                  <span
                    className="
                      mt-1
                      block
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-wider
                    "
                  >
                    Cart {cartCount}
                  </span>

                </button>

              </div>

              {/* RESERVE */}

              <motion.a
                href="#reservation"
                onClick={() => setMobileOpen(false)}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  group
                  relative
                  mt-4
                  flex
                  items-center
                  justify-center
                  gap-3
                  overflow-hidden
                  rounded-xl
                  bg-gradient-to-r
                  from-orange-700
                  via-orange-500
                  to-orange-700
                  px-5
                  py-4
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[0.14em]
                  text-white
                  shadow-[0_12px_40px_rgba(249,115,22,0.25)]
                "
              >

                <motion.span
                  animate={{
                    x: ["-150%", "250%"],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                  className="
                    absolute
                    inset-y-0
                    w-10
                    rotate-[20deg]
                    bg-white/20
                    blur-sm
                  "
                />

                <span className="relative z-10">
                  🔥
                </span>

                <span className="relative z-10">
                  Reserve Your Table
                </span>

                <span className="relative z-10">
                  ↗
                </span>

              </motion.a>

              {/* FOOTER TEXT */}

              <div
                className="
                  relative
                  mt-5
                  text-center
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.3em]
                  text-white/20
                "
              >
                Fire • Flavor • Soul
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;