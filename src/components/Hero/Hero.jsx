import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="
        relative flex min-h-screen items-center
        justify-center overflow-hidden
        bg-[#080706] px-6 pt-28
      "
    >
      {/* ================= SMOKE / GLOW ================= */}

      <div
        className="
          pointer-events-none absolute left-1/2 top-1/2
          h-[500px] w-[500px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-orange-600/10
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none absolute -right-40 top-20
          h-[350px] w-[350px]
          rounded-full
          bg-red-900/10
          blur-[100px]
        "
      />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto max-w-5xl text-center">

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            mx-auto mb-6 inline-flex items-center gap-2
            rounded-full border border-orange-500/20
            bg-orange-500/5 px-4 py-2
            text-xs font-semibold uppercase tracking-[0.2em]
            text-orange-400
          "
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-orange-500" />

          Taste The Difference
        </motion.div>

        <motion.h1
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.15,
            duration: 0.9,
          }}
          className="
            text-5xl font-black leading-[0.95]
            tracking-tight
            sm:text-6xl
            md:text-7xl
            lg:text-8xl
          "
        >
          FLAVOR
          <br />

          <span className="text-orange-500">
            THAT
          </span>{" "}
          SPEAKS.
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.35,
            duration: 0.8,
          }}
          className="
            mx-auto mt-7 max-w-xl
            text-sm leading-7
            text-white/50
            md:text-base
          "
        >
          Experience bold flavors, handcrafted dishes,
          and unforgettable moments created by our chefs.
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.5,
            duration: 0.8,
          }}
          className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"
        >
          <a
            href="#menu"
            className="
              rounded-xl bg-orange-600
              px-7 py-4
              text-sm font-bold uppercase tracking-wider
              text-white
              shadow-[0_0_30px_rgba(249,115,22,0.25)]
              transition-all duration-300
              hover:scale-105
              hover:bg-orange-500
              hover:shadow-[0_0_45px_rgba(249,115,22,0.4)]
            "
          >
            Explore Menu
          </a>

          <a
            href="#reservation"
            className="
              rounded-xl border border-white/10
              bg-white/5 px-7 py-4
              text-sm font-bold uppercase tracking-wider
              text-white/80
              backdrop-blur-md
              transition-all duration-300
              hover:border-orange-500/30
              hover:bg-orange-500/10
              hover:text-white
            "
          >
            Book a Table
          </a>
        </motion.div>

      </div>

      {/* ================= SCROLL ================= */}

      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
          absolute bottom-8 left-1/2
          -translate-x-1/2
          text-center
        "
      >
        <p className="mb-2 text-[9px] uppercase tracking-[0.35em] text-white/30">
          Scroll
        </p>

        <div className="mx-auto h-8 w-[1px] bg-gradient-to-b from-orange-500 to-transparent" />
      </motion.div>
    </section>
  );
}

export default Hero;