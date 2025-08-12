import {
  Mail,
  MapPin,
  CreditCard,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  ChevronDown,
  Users,
  Shield,
  DollarSign,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#F5F6F7] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-6 md:mb-16">
          {/* Company Info */}
          <div className="space-y-6 col-span-2">
            <div>
              <Image src="/logo.svg" alt="Logo" width={80} height={35} />
              <p className="text-[#181A1F] font-medium mt-2">
                We are reachable 24*7
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Image
                  src="/message_send.svg"
                  height={24}
                  width={24}
                  alt="message send"
                />
                <div className="flex items-center gap-2">
                  <p className="text-sm text-[#414752] font-medium">
                    Mail us at:
                  </p>
                  <p className="text-sm text-[#868E9E]">Support@raha.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Image
                  src="/claim_support.svg"
                  height={24}
                  width={24}
                  alt="claim support"
                />
                <div className="flex items-center gap-2">
                  <p className="text-sm text-[#414752] font-medium">CIN:</p>
                  <p className="text-sm text-[#868E9E]">
                    U24990DL2016PTC302634
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Image
                  src="/location.svg"
                  height={24}
                  width={24}
                  alt="message send"
                />
                <div>
                  <p className="text-sm text-[#414752] font-medium mb-2">
                    Our location:
                  </p>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm mt-1 font-medium text-[#414752]">
                        Registered Address
                      </p>
                      <p className="text-sm mt-1 text-[#868E9E]">
                        2nd Floor, Plot No. B-225, Okhla Industrial Area,
                      </p>
                      <p className="text-sm text-[#868E9E]">
                        Phase-I, South Delhi, New Delhi- 110020
                      </p>
                    </div>
                    <div>
                      <p className="text-sm mt-1 font-medium text-[#414752]">
                        Corporate Address
                      </p>
                      <p className="text-sm mt-1 text-[#868E9E]">
                        2nd Floor, Plot No. B-225, Okhla Industrial Area,
                      </p>
                      <p className="text-sm text-[#868E9E]">
                        Phase-I, South Delhi, New Delhi- 110020
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Know Us */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Know Us
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-[#868E9E] hover:text-[#2EC697] transition-colors"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-[#868E9E] hover:text-[#2EC697] transition-colors"
                >
                  Contacts Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-[#868E9E] hover:text-[#2EC697] transition-colors"
                >
                  Press Coverage
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-[#868E9E] hover:text-[#2EC697] transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-[#868E9E] hover:text-[#2EC697] transition-colors"
                >
                  Business Partnership
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-[#868E9E] hover:text-[#2EC697] transition-colors"
                >
                  Become a Health Partner
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-[#868E9E] hover:text-[#2EC697] transition-colors"
                >
                  Corporate Governance
                </a>
              </li>
            </ul>
          </div>

          {/* Our Policies */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Our Policies
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-[#868E9E] hover:text-[#2EC697] transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-[#868E9E] hover:text-[#2EC697] transition-colors"
                >
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-[#868E9E] hover:text-[#2EC697] transition-colors"
                >
                  Editorial Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-[#868E9E] hover:text-[#2EC697] transition-colors"
                >
                  Return Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-[#868E9E] hover:text-[#2EC697] transition-colors"
                >
                  IP Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-[#868E9E] hover:text-[#2EC697] transition-colors"
                >
                  Grievance Redressal Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-[#868E9E] hover:text-[#2EC697] transition-colors"
                >
                  Fake Jobs and Fraud Disclaimer
                </a>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Our Services
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-[#868E9E] hover:text-[#2EC697] transition-colors"
                >
                  Order Medicines
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-[#868E9E] hover:text-[#2EC697] transition-colors"
                >
                  Book Lab Tests
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-[#868E9E] hover:text-[#2EC697] transition-colors"
                >
                  Consult a Doctor
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-[#868E9E] hover:text-[#2EC697] transition-colors"
                >
                  Ayurveda Articles
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-[#868E9E] hover:text-[#2EC697] transition-colors"
                >
                  Hindi Articles
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-[#868E9E] hover:text-[#2EC697] transition-colors"
                >
                  Care Plan
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Certifications and Trust Indicators */}
        <div className=" md:pt-12 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Certifications */}
            <div>
              <div className="flex gap-10 items-center">
                <Image
                  src="/legit_script.svg"
                  width={92}
                  height={92}
                  alt="LegitScript"
                />
                <Image
                  src="/urs.svg"
                  width={183}
                  height={95}
                  alt="LegitScript"
                />
              </div>
              <p className="text-sm text-[#868E9E] max-w-96 mt-4">
                India&apos;s only LegitScript and ISO/IEC 27001:2022 certified
                online healthcare platform
              </p>
            </div>

            {/* Trust Features */}
            <div className="hidden md:block space-y-6">
              <div className="flex items-start gap-4">
                <Image src="/people.svg" height={48} width={48} alt="people" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Trusted</h4>
                  <p className="text-sm text-[#868E9E]">
                    We partner only with IRDAI-licensed insurers and verified
                    service providers.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Image src="/rupees.svg" height={48} width={48} alt="rupees" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Secure</h4>
                  <p className="text-sm text-[#868E9E]">
                    Your data is protected by industry-standard encryption and
                    privacy protocols.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Image
                  src="/rupees_second.svg"
                  height={48}
                  width={48}
                  alt="people"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Affordable
                  </h4>
                  <p className="text-sm text-[#868E9E]">
                    We help you find cost-effective insurance plans and manage
                    claims with zero hassle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Social Media and Know More */}
            <div className="">
              <div className="flex justify-center space-x-8">
                <a
                  href="#"
                  className="w-8 h-8 bg-black rounded-md flex items-center justify-center hover:bg-gray-800 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4 text-white" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-black rounded-md flex items-center justify-center hover:bg-gray-800 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 text-white" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-black rounded-md flex items-center justify-center hover:bg-gray-800 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4 text-white" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-black rounded-md flex items-center justify-center hover:bg-gray-800 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4 text-white" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-black rounded-md flex items-center justify-center hover:bg-gray-800 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 text-white" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-black rounded-md flex items-center justify-center hover:bg-gray-800 transition-colors"
                  aria-label="Medium"
                >
                  <div className="w-4 h-4 text-white font-bold text-sm flex items-center justify-center">
                    M
                  </div>
                </a>
              </div>

              <button className="flex mt-6 items-center gap-4 text-sm text-gray-700">
                Know more about Raha
                <ChevronDown className="w-5 h-5 text-[#2EC697] border p-[2px] rounded-full" />
              </button>
            </div>

            {/* App Store Buttons */}
            <div className="flex items-center gap-4">
              <Image
                src="/app_store.svg"
                width={147}
                height={42}
                alt="app store"
              />
              <Image
                src="/play_store.svg"
                width={147}
                height={42}
                alt="google play"
              />
            </div>
          </div>

          {/* Copyright */}
          <div className="flex items-center justify-between mt-8 pt-6">
            <div className="text-sm space-y-2">
              <p>© 2025 Raha Insure. All rights reserved.</p>
              <p>
                Raha Insure is a licensed insurance intermediary. All services
                are compliant with applicable IRDAI regulations.
              </p>
            </div>
            <Image src="/quote.svg" height={80} width={80} alt="quote" />
          </div>
        </div>
      </div>
    </footer>
  );
}
