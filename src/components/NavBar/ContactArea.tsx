import PhoneNumber from "./PhoneNumber";
import ReserveButton from "./ReserveButton";

const ContactArea = () => {
  return (
    <div className="grid grid-cols-6 justify-end-safe items-center xl:gap-4 text-center">
      <div className="hidden lg:block justify-items-end-safe col-span-2"><PhoneNumber /></div>
      <div className="hidden sm:block justify-items-end-safe col-span-4 xl:col-span-3 col-start-4 xl:col-start-3"><ReserveButton /></div>
      <span className="hidden xl:block text-white text-sm col-start-6 font-bold text-left">PL</span>
    </div>
  );
};

export default ContactArea;
