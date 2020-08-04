import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem(){
  return(
    <article className="teacher-item">
          <header>
            <img src="https://avatars2.githubusercontent.com/u/59808416?s=460&u=58981469d609584af2a665aa29ed021677e63387&v=4" alt="Amanda M. Silva"/>
            <div>
              <strong>Amanda M. Silva</strong>
              <span>Química</span>
            </div>
          </header>

          <p>
            Entusiasta das melhores tecnologias de química avançada.
            <br /><br />
            Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. 
            Mais de 200.000 pessoas já passaram por uma das minhas explosões.
          </p>

          <footer>
            <p>
              Preço/hora
              <strong>R$80,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp" />
              Entrar em contato
            </button>
          </footer>
        </article>
  );
}

export default TeacherItem;