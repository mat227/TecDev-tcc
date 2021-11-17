
import styled from 'styled-components'


const Responsivo = styled.div`

header{
  position: fixed;
  top: 0;
  height: 70px;
  background-color: rgb(197, 178, 178);
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  box-shadow: 1px 1px 1px 1px rgba(116, 110, 110, 0.199);
  background-image: url("./assets/images/image 19.svg");
}

.header-inner{
  width: 90%;
  display: flex;
  align-items: center !important;
  justify-content: space-between;

}

.hamburger-btn{
  font-size: 1.3rem;
  position: absolute;
  bottom: 0;
  width: 40px;
  height: 35px;
  right: 30px;
  outline: none;
  background-color: #ddebf1;
  color: black;
}

.addTransiton{
  transform: translateX(170px);
  transition: transform 0.5s ease-in-out;
}

.removeTransition{
  transform: translateX(20px);
  transition: transform 0.5s ease-in-out;
}

#sidebar-list{
  background-color: #ddebf1;
  height: 90vh;
  width: 170px;
  position: absolute;
  z-index: 2000;
  right: 0;
  top: 0;
  margin-top: 70px;
}

.nav-big{
  list-style: none;
  display: flex;
  font-weight: bold;

  align-items: center;
}

.nav-big-link{
 cursor: pointer;
 color: white;
 text-decoration: none !important;
 margin-left: 3em;
 color: #30B9D1;
 margin: 1.5em;
}

.nav-small{
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
  margin: auto;
  height: 40%;
  margin-top: 50px;
  width: 80%;
}

.nav-small-link{
  cursor: pointer;
  color: #119fdc;
  padding-bottom: 5px;
}

.span {
  color: black;
}
 
`
 export { Responsivo }