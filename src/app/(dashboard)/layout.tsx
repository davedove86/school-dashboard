import Image from "next/image";
import Link from "next/link";
import Menu from "../../components/Menu";
import Navbar from "../../components/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* Leftside */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image
            src="/logo.svg"
            alt="Dove School Logo"
            width={32}
            height={32}
          />
          <span className="hidden lg:block text-gray-500 text-sm font-bold">
            Dove School
          </span>
        </Link>
        <Menu />
      </div>
      {/* Rightside */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#fcfcfc] overflow-scroll flex flex-col">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
