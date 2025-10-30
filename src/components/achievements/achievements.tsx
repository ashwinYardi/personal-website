"use client"

import { site } from "@/data/site";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section/section-heading";

export function Achievements() {
  return (
    <motion.section
      id="achievements"
      className="scroll-mt-24 py-16"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <SectionHeading title="Achievements" />
        <Separator className="my-4" />
        <motion.div
          className="flex flex-wrap gap-2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
        >
          {site.achievements.map((a, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
            >
              <Badge variant="secondary" className="text-sm py-2">
                {a}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
