'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: ['React', 'HTML', 'TypeScript', 'CSS', 'JavaScript', 'Next.js', "PHP"],
    color: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  },
  {
    title: 'Backend Development',
    skills: ['Node.js', 'Python', 'MongoDB', 'REST APIs', 'MySQL', 'JavaScript', 'Express', 'Flask', 'Selenium', 'Asterisk'],
    color: 'bg-green-500/10 text-green-400 border-green-500/20',
  },
  {
    title: 'Tools & Practices',
    skills: ['Git', 'Docker', 'CI/CD', 'Agile', 'TDD', 'Scrum', 'Linux', 'Windows', 'MacOS'],
    color: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  },
  // more skills ethical hacking
  {
    title: 'Ethical Hacking',
    skills: ['Metasploit', 'Nmap', 'Wireshark', 'Burp Suite', 'Nessus', 'Metasploit', 'Nmap', 'Wireshark', 'Burp Suite', 'Nessus'],
    color: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  },
]

export function SkillsNotebook() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skillCategories.map((category, index) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="bg-zinc-900/50 border-zinc-800 h-full transform hover:scale-105 transition-transform duration-200">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-green-400">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Badge
                      variant="outline"
                      className={`${category.color} text-sm py-1 px-3 w-full justify-center`}
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

