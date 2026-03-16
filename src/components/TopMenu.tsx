import Image from "next/image";
import TopMenuItem from "./TopMenuItem";

export default function TopMenu() {
  return (
    <header className="w-full bg-[#37353e]/95 backdrop-blur-md border-b border-[#d3dad9]/10 shadow-md sticky top-0 z-50">
      <nav className="w-full h-16 flex items-center justify-end gap-8" style={{ paddingRight: '3rem' }}>

        <div className="flex items-center">
          <TopMenuItem title="Booking" pageRef="/booking" />
        </div>

        <div className="flex items-center gap-2 pl-8 border-l border-[#d3dad9]/20">
          <div className="rounded-full overflow-hidden ring-2 ring-[#d3dad9]/20 shadow-sm hover:ring-[#d3dad9]/50 transition-all duration-200">
            <Image
              src="/img/logo.png"
              alt="Venue Explorer Logo"
              width={36}
              height={36}
              priority
              className="transition-transform duration-200 hover:scale-110"
            />
          </div>
          <span className="text-base font-bold text-[#d3dad9] tracking-widest uppercase select-none">
            Venue Explorer
          </span>
        </div>

      </nav>
    </header>
  );
}