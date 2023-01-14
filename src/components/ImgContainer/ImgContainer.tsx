import ynovezVerde from './img/YnovezVerde.png';
import './ImgContainer.css';
import Spacer from '../Spacer/Spacer';

const ImgContainer = () => {
  return (
    <>
      <Spacer height={20}/>
      <img src={ynovezVerde} className="Logo-Photo" alt="logo" />
    </>
  );
}

export default ImgContainer;
