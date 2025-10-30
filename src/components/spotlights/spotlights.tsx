"use client"

import { site } from "@/data/site"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Check } from "lucide-react"
import Link from "next/link"

export function Spotlights() {
  const featured = site.projects.filter((p) => p.title === "Qurios" || p.title === "Lucidity")
  if (featured.length === 0) return null

  return (
    <motion.section
      className="scroll-mt-24 py-16"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tight">Spotlights</h2>
        <p className="mt-2 text-muted-foreground">Deep dives into recent leadership and systems work.</p>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {featured.map((p) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}>
              <div className="relative rounded-xl border bg-white/70 p-[1px] shadow-sm">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 via-sky-300/20 to-transparent blur-xl" />
                <Card className="relative rounded-xl backdrop-blur supports-[backdrop-filter]:bg-white/60">
                  <CardHeader className="flex flex-row items-center gap-4">
                    {p.logo ? (
                      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md ring-1 ring-border bg-white">
                        <Image src={p.logo} alt={p.title} fill className="object-contain" />
                      </div>
                    ) : null}
                    <div className="min-w-0">
                      <CardTitle className="text-lg truncate">{p.title}</CardTitle>
                      {(p.role || p.period) && (
                        <p className="text-xs text-muted-foreground mt-1 truncate">
                          {p.role ? `${p.role}` : ""}{p.role && p.period ? " • " : ""}{p.period ?? ""}
                        </p>
                      )}
                    </div>
                    {p.link ? (
                      <Link href={p.link} target="_blank" className="ml-auto inline-flex items-center text-xs text-primary">
                        Visit <ExternalLink className="ml-1 h-3.5 w-3.5" />
                      </Link>
                    ) : null}
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {p.summary ? (
                      <p className="text-sm text-muted-foreground leading-relaxed">{p.summary}</p>
                    ) : null}
                    {p.details && p.details.length > 0 ? (
                      <ul className="space-y-2">
                        {p.details.map((d, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                            <Check className="mt-0.5 h-3.5 w-3.5 text-primary shrink-0" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
