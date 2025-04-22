const HeroLocation = () => {
    return (
      <div className="grid grid-cols-12 gap-8 pb-6 pl-24 text-[9px] xl:text-xs text-nowrap">
        <div className="col-span-3 text-bedge-60">
            <p>POMORSKIE - STRUŻKA 138 KOŁO SWORNE GACIE</p>
        </div>
        <div className="hidden lg:block col-start-4 text-bedge-60/50">
            <p>53°48'20.0   "N</p>
        </div>
        <div className="hidden lg:block col-start-5 text-bedge-60/50">
            <p>17°30'45.6   "E</p>
        </div>
      </div>
    );
  };
  
  export default HeroLocation;