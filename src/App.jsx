import Header from './components/Header'
import Leadership from './components/Leadership'
import Students from './components/Students'
import Gallery from './components/Gallery'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />
      <main>
        <Leadership />
        <Students />
        <Gallery />
      </main>
      <footer className="border-t bg-white">
        <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>Class X-5 • 48 students • Homeroom Teacher: Mrs. Ina</p>
          <p>
            Leaders: <span className="font-medium">Deiftira</span> & <span className="font-medium">Jafar</span>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
