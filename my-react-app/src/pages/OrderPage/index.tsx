import React, {useState } from 'react'
import ItemCard from '../../components/ItemCard'
import { menuData } from './menuData';
import { CardType } from '../../types/itemCard.type';

const OrderPage: React.FC = (): JSX.Element => {
  const [isClicked,setIsClicked] = useState<number>(0) ; 

  return <div className='orderPageWerapper flex flex-col gap-3 w-full h-min justify-start items-center px-4 py-4 font-dana'>

    <ul className="menuList w-full flex flex-col gap-2">
      {menuData.map((menu:CardType,index)=>{
      return <li key={index} className='w-full flex justify-center'> <ItemCard cardTitle={menu.title} menuProp={menu.menu} 
      isClickedProp={isClicked}  onComplete={(id:number)=>{
        // isClicked === id ? setIsClicked(0) : setIsClicked(id)
        if(isClicked === id){
            setIsClicked(0)
        }else{
            setIsClicked(id)
        }

      }} cardId={menu.id} /> </li>
    })}
    </ul>

  </div>
}

export default OrderPage