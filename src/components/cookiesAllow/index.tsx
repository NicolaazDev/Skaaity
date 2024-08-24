"use client";

import { CookieIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function CookiesAllow() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    // localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  const handleDecline = () => {
    // localStorage.setItem("cookieConsent", "false");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-3 right-3  bg-background text-foreground rounded-[10px] bg-gray-300 z-[999999999999]  p-4 flex items-center justify-between"
        >
          <CookieIcon
            className="mx-3 rounded-[50%] bg-gray-400 p-1"
            size={35}
          />
          <p className="text-sm ">
            Usamos{" "}
            <a
              className="underline"
              target="_blank"
              href="https://cookiesandyou.com/"
            >
              cookies
            </a>{" "}
            para personalizar <br /> sua experiência no site.
          </p>
          <div className="flex gap-2 mx-4">
            <button
              className="bg-transparent text-foreground px-4 py-2 rounded-md border border-gray-600 border-solid"
              onClick={handleAccept}
            >
              Aceitar
            </button>
            <button
              className="bg-transparent text-foreground px-4 py-2 rounded-md border border-gray-600 border-solid"
              onClick={handleDecline}
            >
              Recusar
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
