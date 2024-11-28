import { Navbar, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import {
  MessageCircle,
  User,
  Calendar,
  CreditCard,
  HomeIcon,
  Settings,
} from "lucide-react";

export default function Navbar1() {
  return (
    <Navbar
      className="ml-36"
      isBordered
      style={{
        top: "18px",
        left: "18px",
        width: "1564px",
        height: "72px",
        background: "#FFFFFF",
        borderRadius: "70px",
        opacity: "1",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        padding: "0 24px",
        display: "flex",
        alignItems: "center",
      }}
    >
 
      <NavbarContent className="flex items-center" justify="start">
        <NavbarItem>
          <Link href="#">
            <img
              src="/assets/TestLogo.svg"
              alt="Logo"
              className="w-32 h-16 object-contain"
            />
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="flex items-center gap-6 ml-8">
        <NavbarItem>
          <Link
            href="#"
            className="hover:bg-gray-200 p-2 rounded transition-colors flex items-center gap-2 text-gray-600"
          >
            <HomeIcon className="w-5 h-5" />
            Overview
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            href="#"
            className="hover:bg-gray-200 p-2 rounded transition-colors flex items-center gap-2 text-gray-600"
          >
            <MessageCircle className="w-5 h-5" />
            Message
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="#"
            className="p-2 transition-colors flex items-center gap-2"
            style={{
              background: "#01F0D0",
              borderRadius: "41px",
              color: "black", 
            }}
          >
            <User className="w-5 h-5" />
            Patients
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="#"
            className="hover:bg-gray-200 p-2 rounded transition-colors flex items-center gap-2 text-gray-600"
          >
            <Calendar className="w-5 h-5" />
            Schedule
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="#"
            className="hover:bg-gray-200 p-2 rounded transition-colors flex items-center gap-2 text-gray-600"
          >
            <CreditCard className="w-5 h-5" />
            Transactions
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="ml-auto flex items-center gap-4">
        <NavbarItem>
          <Link href="#" className="flex items-center gap-2">
            <img
              src="/assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png"
              alt="Dr. Jose Simmons"
              className="w-10 h-10 rounded-full object-cover" 
            />
            <div>
              <p className="font-bold text-gray-800">Dr. Jose Simmons</p>
              <p
                style={{
                  font: "normal normal normal 14px/19px Manrope",
                  letterSpacing: "0px",
                  color: "#707070",
                  textAlign: "left",
                  opacity: "1",
                }}
              >
                General Practitioner
              </p>
            </div>
          </Link>
        </NavbarItem>

        
        <NavbarItem>
          <Link
            href="#"
            className="hover:bg-gray-200 p-2 rounded transition-colors flex items-center gap-2 text-gray-600"
          >
            <Settings className="w-5 h-5" />
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            href="#"
            className="hover:bg-gray-200 p-2 rounded transition-colors flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="3.714" height="18" viewBox="0 0 3.714 18">
  <path id="more_vert_FILL0_wght300_GRAD0_opsz24" d="M421.858-752.767a1.788,1.788,0,0,1-1.312-.546,1.788,1.788,0,0,1-.546-1.312,1.788,1.788,0,0,1,.546-1.312,1.788,1.788,0,0,1,1.312-.546,1.788,1.788,0,0,1,1.312.546,1.788,1.788,0,0,1,.546,1.312,1.788,1.788,0,0,1-.546,1.312A1.789,1.789,0,0,1,421.858-752.767Zm0-7.143a1.788,1.788,0,0,1-1.312-.546,1.788,1.788,0,0,1-.546-1.312,1.788,1.788,0,0,1,.546-1.312,1.788,1.788,0,0,1,1.312-.546,1.788,1.788,0,0,1,1.312.546,1.788,1.788,0,0,1,.546,1.312,1.788,1.788,0,0,1-.546,1.312A1.789,1.789,0,0,1,421.858-759.91Zm0-7.143a1.788,1.788,0,0,1-1.312-.546A1.788,1.788,0,0,1,420-768.91a1.788,1.788,0,0,1,.546-1.312,1.788,1.788,0,0,1,1.312-.545,1.788,1.788,0,0,1,1.312.545,1.788,1.788,0,0,1,.546,1.312,1.788,1.788,0,0,1-.546,1.312A1.788,1.788,0,0,1,421.858-767.053Z" transform="translate(-420.001 770.767)" fill="#072635"/>
</svg>

          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
