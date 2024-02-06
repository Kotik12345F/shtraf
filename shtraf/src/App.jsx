import { useEffect, useState } from 'react'
import './App.css'
import './regist.jsx'
import { useNavigate } from 'react-router-dom'


function App() {
  //ввод данных
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [imageurl, setImageUrl] = useState('')
  const [ koment, setKoment] = useState('')

  
  const addItem = () =>{
    console.log('?')
    //const unit = {name, description, price, imageurl}
    if (name || description || price) return;
    fetch('http://127.0.0.1:1338/post',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(unit)
    })
  }
  const navigate = useNavigate()
  return (
    <>
     <div className="navbar">
      <p id='wtraf'>Штрафам ДА !</p>
      <div>
      <p id='berx'> Узнать результат     
         
    
        <button className="navbutton" onClick={()=>{navigate('/post')}}>Админ</button>
        <button className="navbutton" onClick={()=>{navigate('/get')}}>Клиент</button>
        <button className="navbutton" onClick={()=>{navigate('/regist')}}>Вход</button></p> 
      </div>
    </div>
    <div className='cont-center'>
  <div className='input-window'>
    <div className='input-fields'>

      <div className='zav'>
    <button className="zavki" onClick={()=>{navigate('/')}}><p> Заявки </p></button>
    <button className="profi" onClick={()=>{navigate('/prof')}}><p> Профиль </p></button>
    </div>

        <input placeholder="Дата" value={name} onChange={(e)=>{
          setName(e.target.value)
        }}></input>
        <input placeholder="Место" value={description} onChange={(e)=>{
          setDescription(e.target.value)
        }}></input>
        <input placeholder="Номер" value={price} onChange={(e)=>{
          setPrice(e.target.value)
        }}></input>
        <input placeholder="Фото" value={imageurl} onChange={(e)=>{
          setImageUrl(e.target.value)
        }}></input>
        <input class="comment" placeholder="Комментарий" value={koment} onChange={(e)=>{
          setKoment(e.target.value)
        }}></input>




        <button className="submit" type="button" onClick={addItem}>Отправить</button>

    </div>
    </div>
    </div>
    </>
  )
}

export default App