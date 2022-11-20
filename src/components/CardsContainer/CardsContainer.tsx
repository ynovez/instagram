import Spacer from '../Spacer/Spacer';
import './CardsContainer.css';
import content from './content.json';

const CardsContainer = () => {

  return (
    <>
      {
        content.map((item) =>
        <>
          <Spacer height={20}/>
          <div className="card-container">
            <a href={item.href} target="_blank" rel="noreferrer">
              {/* <img src={item.src} alt={item.alt}/> */}
              {item.text}
            </a>
          </div>
        </>)
      }
    </>
  );
}

export default CardsContainer;
