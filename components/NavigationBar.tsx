import Image from 'next/image';
import React, { PropsWithChildren } from 'react';
import { useRouter } from 'next/router';

interface NavProps {
  paths: string[];
}

const NavigationBar: React.FunctionComponent<NavProps> = (props) => {

  const router = useRouter();

  const goto = (path: string) => {

    router.push(`/${path === 'Home' ? '' : path.toLocaleLowerCase()}`);
  }

  return (
    <div className='flex w-full h-70px max-[600px]:h-50px justify-between bg-emerald-550 max-[600px]:mt-1'>
      <div className='flex flex-row ml-5 max-[600px]:ml-2'>
        <Image
          className='mr-5 max-[600px]:w-150px max-[600px]:h-40px'
          src='/logo.png'
          width={200}
          alt="Animeflix"
          height={50}
        />
        {props.paths.map(path => (
          <div className='white py-5 max-[600px]:py-4 max-[600px]:text-xs px-3 max-[600px]:px-1 bg-emerald-550 hover:bg-emerald-750 cursor-pointer' key={path} onClick={() => goto(path)}>
            {path}
          </div>
        ))}
      </div>

    </div>
  )
}

export default NavigationBar