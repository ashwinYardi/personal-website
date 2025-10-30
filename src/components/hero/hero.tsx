"use client"

import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/data/site";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <motion.section
      id="home"
      className="min-h-[calc(100dvh-4rem)] flex items-center py-0"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-8 sm:gap-10 md:grid-cols-2">
          <div className="max-w-3xl mx-auto md:mx-0 text-center md:text-left px-1">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight break-words">
              Hi, I&apos;m <span className="text-primary">{site.name}</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-muted-foreground mt-4 md:mt-5">
              {site.headline}
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mt-5 sm:mt-6 max-w-2xl mx-auto md:mx-0">
              {site.tagline}
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Short term goal:</span> Ship products. {" "}
              <span className="font-medium text-foreground">Long term goal:</span> Ship products.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Bullish on <span className="font-medium text-foreground">Web3</span>, <span className="font-medium text-foreground">LLMs</span>, <span className="font-medium text-foreground">Agents</span>, <span className="font-medium text-foreground">Payments</span>.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6 sm:mt-8">
              <Button asChild size="lg" className="gap-2">
                <Link href="#contact">
                  Get in touch <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              {site.email ? (
                <Button asChild variant="outline" size="lg" className="gap-2">
                  <a href={site.email}>
                    <Mail className="h-4 w-4" /> Email me
                  </a>
                </Button>
              ) : null}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mx-auto"
          >
            <div className="relative h-56 w-56 sm:h-64 sm:w-64 md:h-96 md:w-96">
              <div className="absolute -inset-1 rounded-full bg-primary/10 blur-2xl" />
              <Image
                src="/ashwin.jpeg"
                alt="Ashwin Yardi"
                fill
                className="rounded-full object-cover ring-2 ring-primary/30 shadow-lg"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
