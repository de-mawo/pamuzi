'use client'
import {useTheme} from 'next-themes'
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";

const LogoImageOnForm = () => {

    const [mounted, setMounted] = useState(false)
    const {systemTheme, theme , setTheme} = useTheme();

    useEffect(() => {
      setMounted(true)
    }, [])
    
    if(!mounted){
        return null;
    }
    const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div>
        {
            currentTheme === "dark" ? (
                <Link href='/'>
                <Image src='/img/pamuzi-fullw.png'width={125} height={118} alt='logo' />
    
                </Link>
               
            ) : (
                <Link href='/'>
                <Image src='/img/pamuzi-fullb.png'width={125} height={118} alt='logo' />
    
                </Link>
            )
        }
    </div>
  )
}

export default LogoImageOnForm