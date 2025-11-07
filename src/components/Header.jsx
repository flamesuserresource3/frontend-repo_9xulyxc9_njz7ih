import { GraduationCap, School } from 'lucide-react'

export default function Header() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500" />
      <div aria-hidden className="absolute -top-24 right-0 w-[700px] h-[700px] rounded-full bg-white/10 blur-3xl" />
      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-20 text-white">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1 rounded-full text-sm mb-4">
              <GraduationCap className="w-4 h-4" />
              High School • Class X-5
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              The Official Portfolio of Class X-5
            </h1>
            <p className="mt-4 text-white/90 text-lg max-w-2xl">
              A snapshot of our people, our leaders, and our spirit. Dive in to
              meet everyone and see what makes X-5 special.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#leadership" className="px-5 py-2.5 rounded-lg bg-white text-indigo-700 font-semibold shadow-md hover:shadow-lg transition">
                Meet the Leaders
              </a>
              <a href="#students" className="px-5 py-2.5 rounded-lg border border-white/30 text-white hover:bg-white/10 transition">
                See All 48 Students
              </a>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="relative bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur shadow-xl">
              <div className="flex items-center gap-4">
                <div className="shrink-0 w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
                  <School className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-white/80 text-sm">Homeroom Teacher</p>
                  <p className="text-xl font-semibold">Mrs. Ina</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-white/80">
                Guided by care and curiosity, we learn, grow, and support one another throughout the school year.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
