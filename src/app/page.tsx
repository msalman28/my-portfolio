// src/app/page.tsx
import ProjectCard from "@/components/projectcard";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="text-center py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <h1 className="text-5xl font-bold mb-4">Muhamad Salman Fatih Raiz</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">IoT Engineer</p>
        <a 
          href="#projects" 
          className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Lihat Karya Saya
        </a>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Proyek Saya</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Kita akan me-render komponen ProjectCard di sini */}
            <ProjectCard 
              title="Project A" 
              description="Deskripsi singkat tentang proyek A yang sangat keren." 
              techStack={["Next.js", "TypeScript", "Tailwind CSS"]} 
            />
            <ProjectCard 
              title="Project B" 
              description="Deskripsi singkat tentang proyek B yang menyelesaikan masalah X." 
              techStack={["Node.js", "Express", "PostgreSQL"]} 
            />
            <ProjectCard 
              title="Project C" 
              description="Deskripsi singkat tentang proyek C yang berfokus pada UI/UX." 
              techStack={["Figma", "React", "Vite"]} 
            />
          </div>
        </div>
      </section>
    </main>
  );
}