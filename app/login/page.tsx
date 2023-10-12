import { Button } from "@/components/ui/button";
import Messages from "./messages";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function Login() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="z-10 flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
        <form
          className="flex-1 flex flex-col w-full justify-center gap-2"
          action="/auth/sign-in"
          method="post"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Sign In</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3">
              <Label className="text-md" htmlFor="email">
                Email
              </Label>
              <input
                className="rounded-md px-4 py-2 bg-inherit border"
                name="email"
                placeholder="you@example.com"
                required
              />
              <button className="hover:scale-[101%] transition ease-in py-1.5 animate-text bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 flex w-auto items-center justify-center rounded-full text-white font-medium text-lg">Continue</button>
              <Messages />
            </CardContent>
            <CardFooter>
              <p className="text-sm">
                By signing in, you agree to our{" "}
                <a href="#" className="underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="underline">
                  Privacy Policy
                </a>
                .
              </p>
            </CardFooter>
          </Card>
        </form>
      </div>
    </div>
  );
}
