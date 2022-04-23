import React from 'react';
import logo_kratos from '../../images/foto.jpg'
import "../../assets/styles/card.css"
const Card = () => {
  return (
    <div>
        <div class="card-container">
            <img id="ContainerCard-img"src={logo_kratos} />
          <div class="contenido">
            <h3>Kratos</h3>
            <p>El Fantasma de Esparta</p>
          </div>
        </div>
      </div>
  )
}
export default Card