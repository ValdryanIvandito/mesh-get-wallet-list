/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useWalletList } from "@meshsdk/react";
import Image from "next/image";

export default function Home() {
  const wallets = useWalletList();

  return (
    <main className="min-h-screen bg-black text-white text-center flex justify-center items-center">
      <div className="flex justify-center items-center gap-4">
        {wallets.map((wallet, i) => {
          return (
            <div
              key={i}
              className="border border-white w-28 h-32 flex justify-center items-center rounded-xl"
            >
              <div>
                <p>{wallet.name}</p>
                <div className="w-12 h-12 m-2">
                  <Image
                    src={wallet.icon}
                    width={48}
                    height={48}
                    alt="Wallet Icon"
                  />{" "}
                </div>
                <p>v {wallet.version}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
