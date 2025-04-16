// components/Navbar/Navbar.tsx

import Logo from "./Logo";
import ContactArea from "./ContactArea";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 w-full px-8 py-6 z-20">
      <div className="grid grid-cols-12 gap-[20px] items-center">
        {/* NavLinks – kolumny 1-3 */}
        <div className="col-span-3">
          <NavLinks />
        </div>

        {/* Logo – kolumny 6-7 */}
        <div className="col-start-6 col-span-2 flex justify-center">
          <Logo />
        </div>

        {/* ContactArea – kolumny 9-12 */}
        <div className="col-start-9 col-span-4 flex justify-end">
          <ContactArea />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
