import { useState } from 'react';
import './pegist.css';



function Profile () {


    return(
<>
<div className="navbar">
      <p id='wtraf'>Штрафам ДА !</p>
      <div>
        <button className="navbutton" onClick={()=>{navigate('/post')}}>Админ</button>
        <button className="navbutton" onClick={()=>{navigate('/get')}}>Клиент</button>
        <button className="navbutton" onClick={()=>{navigate('./')}}><p>Вход</p></button>
      </div>
    </div>

    <div id='rr'>   <h1>Форма входа</h1>  </div>



<div className='loginform'>
    <div className='login-card'>
        <h1>Регистрация</h1>
        <input name="name" placeholder="Ваше имя" id="name"></input>
        <input name="login" placeholder="Логин" id="login"></input>
        <input name="password" placeholder="Пароль" id="password"></input>
        <button  onClick={()=>{navigate('/regist')}}><ins>Вход</ins></button>
    </div>

    <div className='login-card'>
        <h1>Вход</h1>
        <input name="login" placeholder="Логин" id="login"></input>
        <input name="password" placeholder="Пароль" id="password"></input>
        <button  onClick={()=>{navigate('/regist')}}><ins>Вход</ins></button>
    </div>
</div>






</>


    )
}

export default Profile