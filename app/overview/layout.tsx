import Login from "../login/page";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return <Login />;
  }

  return (
    <div className="absolute w-[100.01%] overflow-x-clip">
      <div className="relative top-0 inset-0">
        <Navbar />
      </div>
      <div className="flex items-center w-full flex-col px-4 pt-7 lg:pt-10 lg:px-40">{children}</div>
    </div>
  )
}
