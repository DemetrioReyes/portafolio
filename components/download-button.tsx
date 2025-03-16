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
Demetrio Reyes Martinez
Full Stack Developer

PROFESSIONAL SUMMARY
Full Stack Developer con más de 8 años de experiencia en diseño y automatización de sistemas utilizando Python, Flask, Selenium, MySQL y JavaScript. Especializado en optimización de procesos, análisis de datos y colaboración en equipo para mejorar la productividad y reducir costos operativos. Formado en desarrollo web y hacking ético, con nivel intermedio de inglés.

EXPERIENCIA LABORAL
Rank Upper
Full Stack Developer | Abril 2019 – Mayo 2024
- Diseño y desarrollo de software de automatización para marketing, integrando inteligencia artificial y machine learning
- Implementación de módulos para generación automatizada de gráficos y planificación estratégica
- Desarrollo con Python, Flask, Selenium, MySQL, HTML, CSS y JavaScript (Express, Playwright)
- Desarrollo de sistema automatizado para campañas de telemarketing utilizando Asterisk

Logros Destacados:
- Reducción del margen de error en proyecciones de interacción en un 2%
- Migración exitosa del software de beta a producción en 4 fases

Freelance Developer
Enero 2018 – Abril 2019
- Entrega de soluciones IT a clientes individuales y empresas en Fiverr

Grupo Ramos
Analista de Transporte | Diciembre 2014 – Diciembre 2017
- Monitoreo de indicadores de almacenamiento, transporte y procesos de adquisición
- Análisis de datos operativos y optimización de recursos

Philip Morris International
IT Assistance Specialist | Diciembre 2012 – Diciembre 2014
- Soporte técnico IT y resolución de problemas

EDUCACIÓN
- Desarrollador Full Stack Junior – Alterna Academy (2024)
- NodeJS – Udemy (2024)
- Python – Udemy (2023)
- Desarrollo Web – Udemy (2021)
- Asterisk – Udemy (2018)
- Hacking Ético – Udemy (2018)
- Metasploit Hacking – Udemy (2018)
- Pentesting – Udemy (2017)
- Sqlmap – Udemy (2017)

HABILIDADES
Backend Development:
- Python
- Flask
- Selenium
- MySQL
- JavaScript
- Express
- Playwright
- Asterisk

Herramientas y Prácticas:
- Git
- Docker
- Automatización
- Análisis de Datos
- Hacking Ético

Habilidades Blandas:
- Resiliencia
- Pensamiento crítico
- Liderazgo
- Motivación
- Habilidades sociales

IDIOMAS
Inglés Intermedio

CONTACTO
Email: djdemomeka@gmail.com
Teléfono: +1809465911
Ubicación: Santo Domingo, República Dominicana
LinkedIn: Perfil de LinkedIn
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

