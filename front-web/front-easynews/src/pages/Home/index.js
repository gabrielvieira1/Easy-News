import React from 'react';
import './styles.css';
import '../../pages/global.css';
import image from '../../assets/Images/background.png';

function Home(){
    return(
        <div id="home">
            <main>
                <div className="Nuvem-imagem">
                    <img src={image} alt="nuvem"/> 
                </div>
                
            </main>
            <div className="Buttons">
                <button className="Mapa">
                    Mapa
                </button>
            </div>
            <div className="Buttons_2">
                <button className="Entrar">
                    Entrar
                </button>
            </div>
            <a href="" className="Sobre">
                <h5>Sobre</h5>
            </a>
        </div>

    );
}
export default Home;