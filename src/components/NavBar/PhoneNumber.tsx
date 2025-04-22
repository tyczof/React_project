const PhoneNumber = () => {
    return (
      <div className="grid grid-cols-5 content-end items-center text-end">
        <img src="\mobile-notch.png"></img>
        <a href="tel:+48271842999" className="text-sm text-white whitespace-nowrap hover:underline text-right col-start-2 col-span-4">
        +48 271 842 999
        </a>
      </div>
    );
  };
  
  export default PhoneNumber;
  