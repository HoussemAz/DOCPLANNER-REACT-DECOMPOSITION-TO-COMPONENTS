import React from 'react'

function Navbar (props){
    return (
    <div className="nav-bar">
<img height="270px" width="270px" className="logo-docplanner" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="Docplanner Group"/>
    <ul className='nav-link'>{props.list.map(el=><li className={el.statu}>{el.drop}<ul className='nano-list'>{el.submenu&&el.submenu.map(el=><li className='down-list'>{el}</li>)}</ul></li>)
}
</ul></div>

);



}
export default Navbar;
