import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
    return (
        <div className="flex items-center justify-center my-[60px] gap-10">
            <div className="flex flex-col items-center justify-center mb-[40px]">
                <Image src='/digilabs.png' alt='logo' width={100} height={100} />
                <h2 className="font-manrope font-bold text-[20px] text-center">Create an account to visit <br />DigiLabs Dashboard</h2>
            </div>
            <SignUp />
        </div>
    )
}