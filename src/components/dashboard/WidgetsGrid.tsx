'use client'

import { title } from "process";
import { SimpleWidget } from "./SimpleWidget"
import { MdAccountBalance } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { useAppSelector } from "@/store";
//import { useAppSelector } from 'react-redux'

interface elemento{
  title: string;
  subTitle?: string;
  label?: string;
  icon?: React.ReactNode;
  href?: string;
}

 

const elementos:elemento[] =[
    {
        title:'contador',
        subTitle: 'Do non occaecat est est proident duis amet ut laboris',
        label: 'Etiqueta contador',
        icon: <IoCartOutline size={70} className="text-blue-600" /> ,
        href: 'counter'
    }

]




export const WidgetsGrid = () => {

    const isCart = useAppSelector( state => state.counter.count );
  return (
     <div className="flex flex-wrap p-2 items-center justify-center">

        {/* {
            elementos.map((e)=>(
                    <SimpleWidget key={e.title} title={`${e.title}`} subTitle={e.subTitle}  label={e.label}
                    icon={e.icon} href={e.href}     
        />
            ))
        } */}
     
         {/* <SimpleWidget/> */}

          <SimpleWidget 
          title={ `${isCart}` }
          subTitle="Productos agregados"
          label="Contador"
          icon={ <IoCartOutline size={ 70 } className="text-blue-600" /> }
          href="/dashboard/counter"
        />

      </div>
  )
}
