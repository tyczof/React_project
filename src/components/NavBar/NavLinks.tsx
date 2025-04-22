const NavLinks = () => {
    const links = ["O nas", "Noclegi", "Kontakt"];
  
    return (
      <nav className="hidden lg:grid grid-cols-3 gap-5 items-center">
        {links.map((label, i) => (
          <a key={i} href="#" className="hover:underline font-thin text-white text-sm">
            {label}
          </a>
        ))}
      </nav>
    );
  };
  
  export default NavLinks;
  