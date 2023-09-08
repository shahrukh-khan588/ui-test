import "./App.css";
import men from './men.png'
import employ from './emp.png'
const Image = () => {
  return (
    <div className="">
      <div className="images" style={{
        backgroundImage:`url(${employ})`
      }}>
        <h6 className="nametitle">
          <span className="namespan">Andrey</span>
          <br />
          Markovicz
        </h6>
        <button className="profilebutton"> <img src={men} alt='men' style={{margin:'2px 4px 0 0'}}/>Lead real estate agent</button>
      </div>
    </div>
  );
};
export default Image;
