import Navbar from "@/components/Navbar"
import abi from "abis/Dappazon.json"
import config from "config.json"
import { ethers } from "ethers";
import { useEffect, useState } from "react";

export default function Home() {
  const [account, setAccount] = useState('')

  const loadBlockChainData = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts', })
    const account = ethers.utils.getAddress(accounts[0]);
    setAccount(account)
    console.log("Loading block chain data...");
  }

  useEffect(() => {
    loadBlockChainData()
  }, [])


  return (
    <>
      <div>
        hello world

      </div>
      <Navbar account={account} />
    </>
  )
}
