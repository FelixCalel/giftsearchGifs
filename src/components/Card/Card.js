import React from 'react';
import logo_kratos from '../../images/foto.jpg'
import "../../assets/styles/card.css"
import {getApiGif} from '../Api/geinfoApi'

const Card = () => {
  const respuesta = getApiGif('Yoda')
  return (
    <div>
        <div class="card-container">
            <img id="ContainerCard-img"src={logo_kratos} alt="no found"/>
          <div class="contenido">
            <h3>Kratos</h3>
            <p>El Fantasma de Esparta</p>
          </div>
        </div>
        {console.log(respuesta)}
      </div>

  
  )
}
export default Card