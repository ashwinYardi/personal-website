"use client"

import { site } from "@/data/site";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section/section-heading";

export function About() {
  return (
    <motion.section
      id="about"
      className="scroll-mt-24 py-16"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <SectionHeading title="About" />
        <Separator className="my-4" />
        <div className="space-y-4">
          {site.about.map((p, i) => (
            <p key={i} className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {p}
            </p>
          ))}
        </div>
        
      </div>
    </motion.section>
  );
}
