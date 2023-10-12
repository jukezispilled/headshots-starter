import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import ExplainerSection from "@/components/ExplainerSection";
import PricingSection from "@/components/PricingSection";

import Bicker from "@/components/Ticker";

export default async function Index() {

  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return redirect("/overview");
  }

  return (
    <div className="absolute w-[100.01%] overflow-x-clip">
      <div className="relative top-0 inset-0">
        <Navbar />
      </div>
      <div className="">
        <div className="flex flex-col items-center pt-8 md:pt-16 bg-white">
          <div className="flex flex-col items-center gap-8 pt-2 px-6 max-w-6xl w-[95%]">
            <div className="flex flex-col space-y-3 w-full">
              <h1 className="text-[42px] md:text-[56px] leading-none lg:text-[78px] mx-8 lg:mx-32 text-center lg:leading-[4.5rem] font-[700]">
                Professional AI Headshots in minutes
              </h1>
              <p className="-translate-y-2 mx-16 md:mx-36 lg:mx-44 xl:mx-64 text-center text-slate-600 text-[22px]">
                Elevate your online presence
              </p>
              <div className="flex justify-center">
                <div className="relative">
                  <Link href="/login">
                    <div
                      className="-mt-2 absolute -inset-[0rem] rounded-lg opacity-60 blur"
                    ></div>
                    <button
                      className="hover:scale-[101%] transition ease-in -mt-2 py-1.5 px-3.5 relative animate-text bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 flex w-auto items-center justify-center rounded-full text-white font-semibold text-lg"
                    >
                      Create yours
                      <svg className="ml-2 -mr-1" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11 4-.5-1-.5 1-1 .125.834.708L9.5 6l1-.666 1 .666-.334-1.167.834-.708zm8.334 10.666L18.5 13l-.834 1.666-1.666.209 1.389 1.181L16.834 18l1.666-1.111L20.166 18l-.555-1.944L21 14.875zM6.667 6.333 6 5l-.667 1.333L4 6.5l1.111.944L4.667 9 6 8.111 7.333 9l-.444-1.556L8 6.5zM3.414 17c0 .534.208 1.036.586 1.414L5.586 20c.378.378.88.586 1.414.586s1.036-.208 1.414-.586L20 8.414c.378-.378.586-.88.586-1.414S20.378 5.964 20 5.586L18.414 4c-.756-.756-2.072-.756-2.828 0L4 15.586c-.378.378-.586.88-.586 1.414zM17 5.414 18.586 7 15 10.586 13.414 9 17 5.414z"/></svg>
                    </button>
                  </Link>
                </div>
              </div>
              <div className="w-full flex justify-center">
                <p className="text-sm text-gray-500 italic -mt-1 text-center">
                  Trusted by professionals worldwide. Quality and efficient.
                </p>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <div className="relative">
                <div className="bg-contain blur-lg opacity-[.2] translate-x-[500px] md:translate-x-[300px]" style={{ backgroundImage: `url('/bickblur.png')`, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
                  {/* Background image */}
                </div>

                <div className="relative z-10">
                  {/* Content, including the Bicker component */}
                  <Bicker />
                </div>
              </div>
            </div>
          </div>
        </div>
        <ExplainerSection />
        <PricingSection />
        <Footer />
      </div>
    </div>
  );
}
