import { Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-20 border-t">
      <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>
          © {new Date().getFullYear()} X-5 Class Portfolio • Guided by <span className="font-semibold">Mrs. Ina</span>
        </p>
        <p className="inline-flex items-center gap-1">
          Built with care <Heart className="w-4 h-4 text-rose-500" /> by the students of X-5
        </p>
      </div>
    </footer>
  )
}
