import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';
import styles from '../styles/Home.module.css'
import Membership from './Membership/Membership'

export default function Home() {

  const [ShowMembership, setShowMembership] = useState(true);
  
  return (
    <div >
      <h1 className='text-5xl text-center'>Used Daisy UI to make the Memmership Page</h1>
      <h1 className='text-5xl text-center'>USed Tailwind</h1>
      <div className="mx-auto text-center ">
              <span className="text-5xl font-bold">Show</span>{" "}
              <input
                type="checkbox"
                onClick={() => setShowMembership(!ShowMembership)}
                className="toggle mx-auto"
                unchecked
              />{" "}
              <span className="text-5xl font-bold">Hide</span>
            </div>
    {
      ShowMembership &&
      <Membership ></Membership>
    }
    </div>
  )
}
