import React from 'react'
import {FaTrashAlt} from 'react-icons/fa'


const List = ({items,delItem}) => {
   
    return (
        <ul className="list">
            {items.map((item)=>{
                const{id,title} = item;
                return(
                    <li key={id} className='flex justify-between self-center p-5 text-xl mb-2 ml-3 mr-3 text-white rounded-lg bg-primary'>
                        <h2 className='break-all pr-3 text-left self-center'>{title}</h2>
                        <button onClick={()=>delItem(id)} className='text-lg justify-center'><FaTrashAlt/></button>
                    </li>
                )
            })}
        </ul>
    )
}

export default List
