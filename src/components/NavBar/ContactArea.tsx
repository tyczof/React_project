// components/Navbar/ContactArea.tsx
import PhoneNumber from "./PhoneNumber";
import ReserveButton from "./ReserveButton";

const ContactArea = () => {
  return (
    <div className="flex items-center space-x-4">
      <PhoneNumber />
      <ReserveButton />
      <span className="text-white text-sm">PL</span>
    </div>
  );
};

export default ContactArea;
