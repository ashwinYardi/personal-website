"use client"

import { site } from "@/data/site";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Check } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/section/section-heading";

export function Projects() {
  return (
    <motion.section
      id="projects"
      className="scroll-mt-24 py-16"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <SectionHeading title="Projects" />
        <Separator className="my-4" />
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        >
          {site.projects.map((p) => (
            <motion.div
              key={p.title}
              variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
            >
              <Card className="h-full transition-colors hover:border-primary/40">
                <CardHeader className="flex flex-row items-center gap-4">
                  {p.logo ? (
                    <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-md ring-1 ring-border">
                      <Image src={p.logo} alt={p.title} fill className="object-contain bg-white" />
                    </div>
                  ) : null}
                  <div className="min-w-0">
                    <CardTitle className="text-base md:text-lg truncate">{p.title}</CardTitle>
                    {(p.role || p.period) && (
                      <p className="text-xs text-muted-foreground mt-1 truncate">
                        {p.role ? `${p.role}` : ""}{p.role && p.period ? " • " : ""}{p.period ?? ""}
                      </p>
                    )}
                  </div>
                  <div className="ml-auto flex items-center gap-3">
                    {p.docs ? (
                      <Link href={p.docs} target="_blank" className="inline-flex items-center text-xs text-primary/80 hover:text-primary">
                        Docs <ExternalLink className="ml-1 h-3.5 w-3.5" />
                      </Link>
                    ) : null}
                    {p.link ? (
                      <Link href={p.link} target="_blank" className="inline-flex items-center text-xs text-primary">
                        Visit <ExternalLink className="ml-1 h-3.5 w-3.5" />
                      </Link>
                    ) : null}
                  </div>
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
