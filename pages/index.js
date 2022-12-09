import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Membership from './Membership/Membership'

export default function Home() {
  return (
    <div >
     <Membership ></Membership>
    </div>
  )
}
