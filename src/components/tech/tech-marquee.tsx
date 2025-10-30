"use client"

import { aiTechnologies, web3Technologies, companyLogos } from "@/data/tech"
import { motion } from "framer-motion"
import Image from "next/image"
import { SectionHeading } from "@/components/section/section-heading"
import { Separator } from "@/components/ui/separator"

function MarqueeRow({ children, reverse = false, speed = 40 }: { children: React.ReactNode; reverse?: boolean; speed?: number }) {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex shrink-0 gap-4 pr-4"
        initial={{ x: 0 }}
        animate={{ x: reverse ? [0, "-50%"] : [0, "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        style={{ willChange: "transform" }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  )
}

export function CompaniesMarquee() {
  return (
    <section id="worked-with" className="scroll-mt-24 py-16">
      <div className="container mx-auto px-4">
        <SectionHeading title="Worked with" />
        <Separator className="my-4" />
        <MarqueeRow speed={35}>
          {companyLogos.map((c) => (
            <div
              key={c.src}
              className="relative h-10 w-28 sm:h-12 sm:w-32 md:h-16 md:w-48 shrink-0 rounded-md bg-white ring-1 ring-border shadow-sm flex items-center justify-center"
           >
              <Image src={c.src} alt={c.alt} fill className="object-contain p-2" />
            </div>
          ))}
        </MarqueeRow>
      </div>
    </section>
  )
}

export function TechMarquee() {
  return (
    <section id="tech-stack" className="scroll-mt-24 py-16">
      <div className="container mx-auto px-4">
        <SectionHeading title="Tech Stack" />
        <Separator className="my-4" />
        <div className="space-y-5">
          <div>
            <p className="mb-2 text-xs uppercase tracking-wide text-muted-foreground">AI Stack</p>
            <MarqueeRow speed={40}>
              {aiTechnologies.map((t) => (
                <span key={`ai-${t}`} className="inline-flex items-center rounded-full border bg-white px-3 py-1 text-xs font-medium text-foreground">
                  {t}
                </span>
              ))}
            </MarqueeRow>
          </div>
          <div>
            <p className="mb-2 text-xs uppercase tracking-wide text-muted-foreground">Web3 Stack</p>
            <MarqueeRow reverse speed={42}>
              {web3Technologies.map((t) => (
                <span key={`w3-${t}`} className="inline-flex items-center rounded-full border bg-white px-3 py-1 text-xs font-medium text-foreground">
                  {t}
                </span>
              ))}
            </MarqueeRow>
          </div>
        </div>
      </div>
    </section>
  )
}
