"use client";
import { BrowserProvider } from "ethers";
import React, { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any, no-var
declare var window: any;

export const HomePage = () => {
  const [provider, setProvider] = useState<BrowserProvider>();
  const [account, setAccount] = useState<string>("");

  async function signMessage(account: string, nonce: string) {
    try {
      const signature = await window.ethereum.request({
        method: "personal_sign",
        params: [nonce, account],
      });
      console.log(signature);
      return signature;
    } catch (error) {
      console.error("Ошибка подписи сообщения:", error);
    }
  }

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("Please install MetaMask!");
      return;
    }
    const provider = new BrowserProvider(window.ethereum);
    const accounts = await provider.send("eth_requestAccounts", []);
    // here's request
    const nonce = "huy";
    signMessage(accounts[0], nonce);
    setProvider(provider);
    setAccount(accounts[0]);
  };

  console.log(provider, account);
  return (
    <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <p>HomePage</p>
      <button
        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
        onClick={connectWallet}
      >
        connect
      </button>
    </div>
  );
};
