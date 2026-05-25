import Link from "next/link";
import { Mail, Camera } from "lucide-react";
export default function Footer() {
  return (

    <footer className="mt-10 border-t border-black/10 bg-[#ece6df]">

      <div className="mx-auto max-w-[1500px] px-6 py-10 md:px-10 md:py-12">

        <div className="flex flex-col gap-14 md:flex-row md:justify-center md:gap-56">

          {/* LEFT SIDE */}

          <div className="md:w-[420px]">

            <h2
  className="text-[2.8rem] leading-none tracking-[-0.06em] text-black/90 md:text-[4.5rem]"
  style={{ fontFamily: "Cormorant Garamond, serif" }}
>
  Scheherezade Life
</h2>
            <p className="mt-3 max-w-[260px] text-sm leading-relaxed text-black/50">
              Objects shaped by silence, light and time.
            </p>

          </div>



          {/* RIGHT SIDE */}

          <div className="flex gap-16 md:mt-2 md:gap-24">

            


           {/* CONTACT */}

<div className="flex flex-col items-center gap-8 md:items-start">
  <a
  href="https://instagram.com/scheherezadelife/"
  target="_blank"
  className="flex items-center gap-4 text-[1.2rem] tracking-[-0.03em] text-black/75 transition duration-700 hover:opacity-50 md:text-[1.7rem]"
  style={{ fontFamily: "Cormorant Garamond, serif" }}
>
  <Camera size={22} strokeWidth={1.4} />

  Instagram
</a>

<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@scheherezadelife.com"
  className="flex items-center gap-4 text-[1.2rem] tracking-[-0.03em] text-black/75 transition duration-700 hover:opacity-50 md:text-[1.7rem]"
  style={{ fontFamily: "Cormorant Garamond, serif" }}
>
  <Mail size={22} strokeWidth={1.4} />

  Contact
</a>
            </div>

          </div>

        </div>

      </div>

    </footer>

  );
}