"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

export function PageLoader() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const onReady = () => {
      // small delay for a pleasant reveal
      setTimeout(() => setShow(false), 900)
    }
    if (document.readyState === "complete") onReady()
    else window.addEventListener("load", onReady)
    return () => window.removeEventListener("load", onReady)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="relative flex flex-col items-center gap-4">
            <div className="relative h-24 w-24">
              <div className="absolute inset-0 rounded-full border-2 border-primary/20" />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-primary"
                style={{ borderTopColor: "transparent", borderLeftColor: "transparent" }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, ease: "linear", duration: 1.2 }}
              />
              <Image
                src="/ashwin.jpeg"
                alt="Ashwin Yardi"
                fill
                className="rounded-full object-cover"
                priority
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-sm tracking-wide text-neutral-500"
            >
              Preparing your experience…
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
