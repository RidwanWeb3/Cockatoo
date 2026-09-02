import { motion } from "framer-motion";
import cockatooLogo from "@/assets/cockatoo-logo.jpeg";
import { nftImages } from "./FloatingNFT";

// Social media icons as SVG components
const XTwitterIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const socialLinks = [
  { icon: XTwitterIcon, label: "X/Twitter", href: "https://x.com/CockatoOfficial", color: "hover:bg-black hover:text-white" },
];

const navLinks = [
  { label: "Token", id: "token" },
  { label: "NFTs", id: "nft" },
  { label: "Roadmap", id: "roadmap" },
  { label: "Buy on RadarDex", href: "https://radardex.pro/#0xC8C0c2eA5F46C36b4bE4D87A3f2d5D6E62491BBe" },
  { label: "Chart", href: "https://radardex.pro/#0xC8C0c2eA5F46C36b4bE4D87A3f2d5D6E62491BBe" },
];

export const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative py-16 bg-gradient-to-b from-cockatoo-pink/30 to-cockatoo-cream overflow-hidden">
      {/* Floating NFT decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { x: 5, y: 20, size: "w-10 h-10" },
          { x: 92, y: 30, size: "w-12 h-12" },
          { x: 8, y: 70, size: "w-8 h-8" },
          { x: 88, y: 65, size: "w-10 h-10" },
        ].map((pos, i) => (
          <motion.img
            key={i}
            src={nftImages[(i + 4) % nftImages.length]}
            alt={`Footer NFT ${i + 1}`}
            className={`absolute ${pos.size} object-cover rounded-xl shadow-lg border-2 border-cockatoo-yellow/40 opacity-60 hidden lg:block`}
            style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
            animate={{
              y: [-5, 5, -5],
              rotate: [-3, 3, -3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            className="flex items-center gap-4"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={cockatooLogo}
              alt="Cockatoo"
              className="w-12 h-12 rounded-full border-4 border-cockatoo-yellow"
            />
            <div>
              <span className="font-display font-bold text-2xl text-foreground block">
                COCKATOO
              </span>
              <span className="text-sm text-muted-foreground font-body">
                $KATOO • ARC Chain Native • Make Some Noise 🔊
              </span>
            </div>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href || "#"}
                onClick={(e) => {
                  if (link.id) {
                    e.preventDefault();
                    scrollTo(link.id);
                  }
                }}
                target={link.href ? "_blank" : undefined}
                rel={link.href ? "noopener noreferrer" : undefined}
                className="font-display font-semibold text-foreground/70 hover:text-foreground transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                title={social.label}
                className={`w-11 h-11 rounded-full bg-cockatoo-white shadow-md flex items-center justify-center transition-all ${social.color}`}
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t-2 border-cockatoo-yellow/20 text-center">
          <p className="text-muted-foreground font-body text-sm">
            © 2026 Cockatoo • Built on ARC Chain. All rights reserved.
          </p>
          <p className="text-muted-foreground/60 font-body text-xs mt-2">
            Trade & Chart: <a href="https://radardex.pro/#0xC8C0c2eA5F46C36b4bE4D87A3f2d5D6E62491BBe" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">radardex.pro</a> | "Silence never changed the world. Noise did."
          </p>
        </div>
      </div>
    </footer>
  );
};
