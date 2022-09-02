import React, { useContext } from 'react'
import styles from '../styles/Login.module.css'
import { ApeDaoContext } from '../context/context'
import Image from 'next/image'

const Login = () => {
  const { connectWithMetamask } = useContext(ApeDaoContext)
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        ApeCoin DAO
        <Image
          className='logo'
          height={80}
          width={80}
          src={
            'https://cdn.stamp.fyi/space/apecoin.eth?s=160&cb=ec19915e02892e80'
          }
        />
      </div>
      <button className={styles.button} onClick={connectWithMetamask}>
        Connect with Metamask
      </button>
    </div>
  )
}

export default Login
