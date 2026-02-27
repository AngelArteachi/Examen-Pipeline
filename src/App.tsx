import './App.css'

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl">
        <header className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Examen Parcial
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-blue-200">
            Pipeline de Entrega Continua
          </h2>
        </header>

        <main className="space-y-8">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            <p className="text-3xl font-bold text-center">
              🚀 Hola Mundo desde Vite + React
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h3 className="font-bold text-blue-300 mb-2">Infraestructura Tarea 2</h3>
              <ul className="list-disc list-inside opacity-70">
                <li>VPC con DMZ</li>
                <li>ECS Fargate</li>
                <li>Docker en ECR</li>
              </ul>
            </div>
            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h3 className="font-bold text-cyan-300 mb-2">Automatización</h3>
              <ul className="list-disc list-inside opacity-70">
                <li>GitHub Actions</li>
                <li>CI/CD Pipeline</li>
                <li>Rolling Updates</li>
              </ul>
            </div>
          </div>
        </main>

        <footer className="mt-12 text-center opacity-40 text-xs">
          © 2026 - Universidad - Nuevas Tecnologías de Programación
        </footer>
      </div>
    </div>
  )
}

export default App
