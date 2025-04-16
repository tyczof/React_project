// components/Navbar/NavLinks.tsx
const NavLinks = () => {
    const links = ["O nas", "Noclegi", "Kontakt"];
  
    return (
      <nav className="flex space-x-6 text-white">
        {links.map((label, i) => (
          <a key={i} href="#" className="hover:underline">
            {label}
          </a>
        ))}
      </nav>
    );
  };
  
  export default NavLinks;
  