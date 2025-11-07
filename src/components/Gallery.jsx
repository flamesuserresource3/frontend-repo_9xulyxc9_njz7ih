import { Image as ImageIcon } from 'lucide-react'

const photos = [
  { id: 1, title: 'Study Session', color: 'from-amber-100 to-yellow-100' },
  { id: 2, title: 'Sports Day', color: 'from-sky-100 to-blue-100' },
  { id: 3, title: 'Art Projects', color: 'from-pink-100 to-rose-100' },
  { id: 4, title: 'Science Lab', color: 'from-green-100 to-emerald-100' },
  { id: 5, title: 'Field Trip', color: 'from-purple-100 to-fuchsia-100' },
  { id: 6, title: 'Classroom Fun', color: 'from-indigo-100 to-violet-100' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">Moments & Memories</h2>
          <p className="text-gray-600 mt-2">Highlights from our activities throughout the year.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((p) => (
          <div key={p.id} className="rounded-2xl border bg-white shadow-sm overflow-hidden">
            <div className={`w-full aspect-video bg-gradient-to-br ${p.color} flex items-center justify-center`}>
              <ImageIcon className="w-10 h-10 text-gray-500" />
            </div>
            <div className="p-4">
              <p className="font-semibold text-gray-800">{p.title}</p>
              <p className="text-sm text-gray-500">X-5 • 2025</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
