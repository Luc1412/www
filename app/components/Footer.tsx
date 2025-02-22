import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full py-6 px-4 border-t border-[#E2FF7D]/10">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-400">© {new Date().getFullYear()} Lucas. All rights reserved.</p>
        <nav className="flex gap-6">
          <Link href="/imprint" className="text-sm text-gray-400 hover:text-[#E2FF7D] transition-colors">
            Imprint
          </Link>
          <Link href="/privacy" className="text-sm text-gray-400 hover:text-[#E2FF7D] transition-colors">
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  )
}
