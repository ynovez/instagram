import libraryPhoto from './libraryPhoto.jpeg';
import './ImgContainer.css';

const ImgContainer = () => {
  return (
    <>
      <img src={libraryPhoto} className="Library-Photo" alt="libraryPhoto" />
    </>
  );
}

export default ImgContainer;
