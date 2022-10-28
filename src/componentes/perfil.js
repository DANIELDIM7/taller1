import React from 'react'
import { CiDesktop,CiMail,CiCalendarDate,CiLocationOn,CiPhone,CiLock } from "react-icons/ci";


class Perfil extends React.Component {
    render( ){

        return (
            <div className='contenedor-principal'>
                <div className='contenedor-foto-perfil'>
                    <img className='foto-perfil' src={require('../img/foto-perfil.jpg')}/>
                </div>
                <div className='contenedor-descripcion'>
                    <p>{this.props.descripcionCorreo}</p>
                    <h1>{this.props.correo}</h1>
                    <div className='contenedor-iconos'>
                        <ul>
                            <li> <a href='#'><CiDesktop className='icon icon-desktop'/></a> </li>
                            <li> <a href='#'><CiMail className='icon icon-mail'/></a> </li>
                            <li> <a href='#'> <CiCalendarDate className='icon icon-calendar'/></a> </li>
                            <li> <a href='#'> <CiLocationOn className='icon icon-location'/></a> </li>
                            <li> <a href='#'> <CiPhone className='icon icon-phone'/></a> </li>
                            <li> <a href='#'> <CiLock className='icon icon-lock'/></a> </li>
                            
                        </ul>
                   
                    
                   
                   
                   
                   



                        

                        
                    

                    </div>
                </div>

         </div>   

        )
         
        
    
}
}

export default Perfil ;