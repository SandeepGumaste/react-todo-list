import React,{useState, useEffect} from 'react'
import List from './list';

const Form = () => {
    const getLocalStorage=()=>{
        let list = localStorage.getItem('list')
        if(list){
          return JSON.parse(localStorage.getItem('list'))
        }else{
          return []
        }
    }

    const[name,setName] = useState('');
    const[list,setList] = useState(getLocalStorage());
    const[warn,setWarn] = useState(false)



    useEffect(()=>{
        const timeout = setTimeout(()=>{
            setWarn(false)
        },3000)
        return ()=>clearTimeout(timeout)
    },[warn])

    useEffect(()=>{
        localStorage.setItem('list', JSON.stringify(list))
      },[list])

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!name || /^\s*$/.test(name)){
            setWarn(true)
        }else{
            const newItem={id:new Date().getTime().toString(), title:name}
            setList([...list, newItem]);
            setName('');
        }
    }

    const delItem = (id)=>{
        setList(list.filter((item)=>item.id!==id))
    }

    return (
        <div className="todo pb-3">
            <form onSubmit={handleSubmit} >
                <div className='mb-3 mr-5 ml-5 text-center'>
                    {warn && <p className='pb-3 '>Cannot add empty task!</p>}
                    <div className='flex flex-col md:flex-row md:justify-center md:max-w-2xl'>
                        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className='input-item rounded-t-lg p-2 md:rounded-l-lg md:rounded-r-none bg-secondary'/>
                        <button type='submit' className="btn rounded-b-lg p-2 text-center text-white md:rounded-r-lg md:rounded-l-none" style={{'background':'#243473'}}>Add task</button>
                    </div>
                </div>
            </form>
            <List items={list} delItem={delItem}/>
        </div>

    )
}

export default Form
