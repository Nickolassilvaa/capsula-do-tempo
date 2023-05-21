import { NewMemoryForm } from '@/components/NewMemoryForm'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

export default function NewMemories() {
  return (
    <div className="flex flex-1 flex-col gap-4 px-16">
      <Link
        href="/"
        className="text-gray-200hover:text-gray-100 flex items-center gap-1 text-sm"
      >
        <ChevronLeft className="h-4 w-4" />
        voltar à timeline
      </Link>

      <NewMemoryForm />
    </div>
  )
}
