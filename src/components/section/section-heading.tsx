"use client"

import { motion } from "framer-motion"

export function SectionHeading({ title, sub }: { title: string; sub?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-3xl font-bold tracking-tight">
        <span className="bg-gradient-to-r from-primary to-blue-700 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      {sub ? (
        <p className="mt-2 text-muted-foreground max-w-2xl">{sub}</p>
      ) : null}
    </motion.div>
  )
}
