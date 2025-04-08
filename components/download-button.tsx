'use client'

import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

const CV = {
  education: [
    { id: 'fullstack', title: 'Desarrollador Full Stack Junior', institution: 'Alterna Academy', year: '2024' },
    { id: 'nodejs', title: 'NodeJS', institution: 'Udemy', year: '2024' },
    { id: 'python', title: 'Python', institution: 'Udemy', year: '2023' },
    { id: 'webdev', title: 'Desarrollo Web', institution: 'Udemy', year: '2021' },
    { id: 'asterisk', title: 'Asterisk', institution: 'Udemy', year: '2018' },
    { id: 'ethicalhacking', title: 'Hacking Ético', institution: 'Udemy', year: '2018' },
    { id: 'metasploit', title: 'Metasploit Hacking', institution: 'Udemy', year: '2018' },
    { id: 'pentesting', title: 'Pentesting', institution: 'Udemy', year: '2017' },
    { id: 'sqlmap', title: 'Sqlmap', institution: 'Udemy', year: '2017' }
  ]
};

// Componente para renderizar la educación
const Education = () => {
  return (
    <div>
      <h2>EDUCACIÓN</h2>
      <ul>
        {CV.education.map((item) => (
          <li key={item.id}>
            {item.title} – {item.institution} ({item.year})
          </li>
        ))}
      </ul>
    </div>
  );
};

// Para el manejo del portapapeles
const handleCopy = async (text: string) => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      try {
        document.execCommand('copy');
      } catch (err) {
        console.error('Error al copiar texto:', err);
      } finally {
        textArea.remove();
      }
    }
  } catch (err) {
    console.error('Error al copiar al portapapeles:', err);
  }
};

const copyToClipboard = async (text: string) => {
  if (!navigator.clipboard && !document.execCommand) {
    alert('Lo siento, la función de copiar no está soportada en este navegador');
    return;
  }
  
  await handleCopy(text);
};

export function DownloadButton() {
  const handleDownload = () => {
    // Create a blob with your resume content
    const resumeContent = `
DEMETRIO REYES MARTINEZ
Full Stack Developer | Python | NodeJs | Back-end | Front-End | ML/DL
Rdemetrio72@yahool.com / Teléfono: +18094059011 / Santo Domingo, República
Dominicana / Perfil de Linkedin
_______________________________________________________________________________________________
PROFESSIONAL SUMMARY
_______________________________________________________________________________________________
Software Engineer, AI, and Data Analytics professional with over 8 years of experience. Advanced
knowledge in developing intelligent systems, web scraping, process automation, and building
pipelines for ML/DL. Notable experience in Python, REST APIs, Selenium, Requests, Node.js, and PHP.
Advanced expertise in SQL/NoSQL databases, cloud deployment, and process optimization through
technology and data analysis. Skilled in generating reports and management indicators.
_______________________________________________________________________________________________
WORK EXPERIENCE
_______________________________________________________________________________________________
Rank Upper
_______________________________________________________________________________________________
Backend Developer | April 2019 – May 2024
- Designed and developed automation software for marketing, integrating
artificial intelligence and machine learning. The system replaces human
community managers by managing posts on platforms like Instagram through
web scraping, algorithm analysis, and automated content execution.
- Implemented modules enabling automated generation of graphs, strategic
planning of posts, and automated connection to Instagram accounts using
Selenium. Designed an electronic approval model for clients to ensure post
accuracy and optimize interaction with Instagram's algorithm.
- Used tools like Python, Flask, Selenium, MySQL, HTML, CSS, and JavaScript
(Express, Playwright) to create a scalable and efficient system.
- Developed an automated system for telemarketing campaigns during
presidential elections, utilizing Asterisk for phone trunks and IVR, achieving
massive outreach to the population with surveys and personalized calls.

Key Achievements:
- Reduced the margin of error in interaction projections by 2%.
- Successfully migrated the software from beta to production in 4 phases, meeting all
established deadlines.
Freelance Developer
January 2018 – April 2019
- Delivered various IT solutions to individual clients and companies, on Fiverr
_______________________________________________________________________________________________
Grupo Ramos
_______________________________________________________________________________________________
Transportation Analyst | December 2014 – December 2017
- Monitored performance indicators for storage, transportation, and procurement
processes to identify improvement areas, optimize resources, and ensure
strategic objectives of the distribution center were met.
- Analyzed operational data related to costs, transportation, and workflows to
design strategies maximizing the efficient use of space, equipment, and
personnel.
- Collaborated with key departments such as Imports, Inventory Control, and
Operations Planning to monitor indicators, ensure operational efficiency, and
meet company standards.
_______________________________________________________________________________________________
Philip Morris International
_______________________________________________________________________________________________
IT Assistance Specialist | December 2012 – December 2014
- Provided basic IT support, troubleshooting technical issues, assisting users with
hardware and software problems, and ensuring smooth daily operations of IT
systems.
_______________________________________________________________________________________________
EDUCATION
_______________________________________________________________________________________________
- Junior Full Stack Developer – Alterna Academy (2024)
- NodeJS – Udemy (2024)
- Python – Udemy (2023)
- Web Development API REST– Udemy (2021)
- Asterisk – Udemy (2018)
- Ethical Hacking – Udemy (2018)
- Metasploit Hacking – Udemy (2018)
- Pentesting – Udemy (2017)
- Sqlmap – Udemy (2017)
- Machine Learning – udemy – Domestika (2021)
- Data Science – udemy Domestika (2021)
_______________________________________________________________________________________________
SKILLS
_______________________________________________________________________________________________
Resilience, critical thinking, reasoning, leadership, motivation, and social skills.
_______________________________________________________________________________________________
LANGUAGES
_______________________________________________________________________________________________
Intermediate English
_______________________________________________________________________________________________
`

    try {
      // Create blob and URL
      const blob = new Blob([resumeContent], { type: 'text/plain;charset=utf-8' })
      const url = URL.createObjectURL(blob)

      // Create temporary link element
      const link = document.createElement('a')
      link.href = url
      link.download = 'demetrio-reyes-resume.txt' // Set filename

      // Append to document, click, and cleanup
      document.body.appendChild(link)
      link.click()

      // Cleanup
      setTimeout(() => {
        document.body.removeChild(link)
        URL.revokeObjectURL(url)
      }, 100)
    } catch (error) {
      console.error('Download failed:', error)
      alert('Download failed. Please try again.')
    }
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        onClick={handleDownload}
        className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-6 py-2"
      >
        <Download className="mr-2 h-4 w-4" />
        Download Resume
      </Button>
    </motion.div>
  )
}

