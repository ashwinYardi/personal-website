"use client"

import { site } from "@/data/site";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Twitter, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section/section-heading";

export function Contact() {
  return (
    <motion.section
      id="contact"
      className="scroll-mt-24 py-16"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <SectionHeading title="Contact" />
        <Separator className="my-4" />
        <p className="text-muted-foreground max-w-2xl">
          I’m available for collaborations, advisory, and building products end-to-end. If you’d like to discuss an opportunity or project, reach out.
        </p>
        <motion.div
          className="flex flex-wrap gap-3 mt-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        >
          {site.socials.website && (
            <motion.div variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}>
              <Button asChild variant="secondary" className="gap-2">
                <a href={site.socials.website} target="_blank" rel="noreferrer">
                  <Globe className="h-4 w-4" /> Blog
                </a>
              </Button>
            </motion.div>
          )}
          {site.email && (
            <motion.div variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}>
              <Button asChild className="gap-2">
                <a href={site.email}>
                  <Mail className="h-4 w-4" /> Email
                </a>
              </Button>
            </motion.div>
          )}
          {site.socials.github && (
            <motion.div variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}>
              <Button asChild variant="outline" className="gap-2">
                <a href={site.socials.github} target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4" /> GitHub
                </a>
              </Button>
            </motion.div>
          )}
          {site.socials.linkedin && (
            <motion.div variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}>
              <Button asChild variant="outline" className="gap-2">
                <a href={site.socials.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </Button>
            </motion.div>
          )}
          {site.socials.x && (
            <motion.div variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}>
              <Button asChild variant="outline" className="gap-2">
                <a href={site.socials.x} target="_blank" rel="noreferrer">
                  <Twitter className="h-4 w-4" /> X
                </a>
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}
