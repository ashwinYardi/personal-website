"use client"

import { SectionHeading } from "@/components/section/section-heading"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import Link from "next/link"
import { site } from "@/data/site"
import { ExternalLink } from "lucide-react"

export function Blog() {
  return (
    <motion.section
      id="blog"
      className="scroll-mt-24 py-16"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <SectionHeading title="Blog" sub="Occasional writing on products, engineering, and AI." />
        <Separator className="my-4" />
        <Card className="relative overflow-hidden">
          <CardHeader>
            <CardTitle className="text-lg">bitsbyblocks.com</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">I write short notes and essays occasionally. Read more on my blog.</p>
            {site.socials.website && (
              <Link href={site.socials.website} target="_blank" className="inline-flex items-center text-sm text-primary">
                Visit blog <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            )}
          </CardContent>
        </Card>
      </div>
    </motion.section>
  )
}
