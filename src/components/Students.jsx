import { UsersRound } from 'lucide-react'

const generateStudents = () => {
  // Create 48 placeholder students with numbers 1..48
  return Array.from({ length: 48 }, (_, i) => ({ id: i + 1, name: `Student ${i + 1}` }))
}

const students = generateStudents()

export default function Students() {
  return (
    <section id="students" className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
            Our Students
          </h2>
          <p className="text-gray-600 mt-2">48 bright, unique individuals learning together in X-5.</p>
        </div>
        <div className="hidden md:flex items-center gap-2 text-indigo-600">
          <UsersRound className="w-6 h-6" />
          <span className="font-semibold">48</span>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {students.map((s) => (
          <div key={s.id} className="group rounded-xl border bg-white p-4 shadow-sm hover:shadow-md transition">
            <div className="w-full aspect-square rounded-lg bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center mb-3">
              <span className="text-2xl font-bold text-indigo-600">{s.id}</span>
            </div>
            <p className="text-sm font-medium text-gray-800 group-hover:text-indigo-700 transition">
              {s.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
