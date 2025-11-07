import { Crown, Users } from 'lucide-react'

export default function Leadership() {
  return (
    <section id="leadership" className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
            Class Leadership
          </h2>
          <p className="text-gray-600 mt-2">
            Meet the people who help organize and elevate our class.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-2xl border bg-white shadow-sm p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Crown className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Class President</p>
              <p className="text-lg font-semibold">Deiftira</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Leads initiatives and represents X-5 with commitment and kindness.
          </p>
        </div>

        <div className="rounded-2xl border bg-white shadow-sm p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Vice President</p>
              <p className="text-lg font-semibold">Jafar</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Supports the team and ensures every voice is heard.
          </p>
        </div>

        <div className="rounded-2xl border bg-white shadow-sm p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Homeroom Teacher</p>
              <p className="text-lg font-semibold">Mrs. Ina</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Guides the class with care and dedication.
          </p>
        </div>
      </div>
    </section>
  )
}
