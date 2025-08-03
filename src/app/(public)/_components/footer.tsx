
export function Footer() {
  return (
    <footer className="py-6 text-center bg-zinc-800 text-gray-300 text-sm md:text-base">
      <p>
        Todos direitos reservados © {new Date().getFullYear()} - <span className="text-red-500 hover:text-red-700 duration-300">@tricia-sz</span>
      </p>
    </footer>
  )
}