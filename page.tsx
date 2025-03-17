'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Terminal } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { TypingEffect } from './components/typing-effect'
import { SkillsNotebook } from './components/skills-notebook'
import Link from 'next/link'
import { DownloadButton } from './components/download-button'

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          <Terminal className="h-16 w-16 mb-6 text-green-500" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
            Demetrio Reyes
          </h1>
          <div className="h-12 mb-6">
            <TypingEffect text="Full Stack Developer" />
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mb-8">
            Passionate about building exceptional digital experiences
          </p>
          <DownloadButton />
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 py-12 bg-zinc-900/50"
      >
        <Card className="bg-zinc-900/50 border-zinc-800">
          <CardContent className="p-6">
            <h2 className="text-3xl font-bold mb-6 text-green-400">About Me</h2>
            <p className="text-gray-300 leading-relaxed">
              With over 8 years of experience in software development, I specialize in building scalable web applications 
              with a focus on backend development using modern technologies. I am passionate about clean code and solving 
              complex problems through innovative server-side solutions.
            </p>
          </CardContent>
        </Card>
      </motion.section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-12 text-center text-green-400">My Skills</h2>
        <SkillsNotebook />
      </section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 py-12"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-green-400">Get in Touch</h2>
        <div className="flex justify-center gap-6">
          <Link
            href="https://github.com/DemetrioReyes"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition-transform duration-200"
          >
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-zinc-800 p-4 rounded-full"
            >
              <Github className="h-8 w-8 text-white" />
            </motion.div>
          </Link>
          <Link
            href="https://www.linkedin.com/in/demetrio-reyes-martinez-499765341"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition-transform duration-200"
          >
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-zinc-800 p-4 rounded-full"
            >
              <Linkedin className="h-8 w-8 text-white" />
            </motion.div>
          </Link>
          <Link
            href="mailto:rdemetrio72@yahoo.com"
            className="transform hover:scale-110 transition-transform duration-200"
          >
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-zinc-800 p-4 rounded-full"
            >
              <Mail className="h-8 w-8 text-white" />
            </motion.div>
          </Link>
        </div>
      </motion.section>
    </div>
  )
}

