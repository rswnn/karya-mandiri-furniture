 import Image from 'next/image';
import logo from '../../../public/images/logo.png';
export default function Navbar() {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center px-8 sticky top-0 z-50">
      <Image 
        src={logo} alt="logo"
        width={210} 
        height={40} 
      />
      <nav className="space-x-4 hidden md:block">
        <a href="#services" className="hover:underline">Layanan</a>
        <a href="#projects" className="hover:underline">Proyek</a>
        <a href="#pricing" className="hover:underline">Harga</a>
        <a href="#faq" className="hover:underline">FAQ</a>
        <a href="#contact" className="hover:underline">Kontak</a>
      </nav>
    </header>
  )
}