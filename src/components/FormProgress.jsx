import "../styles/FormProgress.css";

export function FormProgress(props) {
  const { step } = props;
  
  return(
    <div className="formProgress">
      <div className="formProgress__outerCircle">
        <div className={`formProgress__innerCircle ${step === 1 ? "formProgress__innerCircle--active" : ""}`}>
          1
        </div>
      </div>
      <div className="formProgress__line"/>
      <div className="formProgress__outerCircle">
        <div className={`formProgress__innerCircle ${step === 2 ? "formProgress__innerCircle--active" : ""}`}>
          2
        </div>
      </div>
    </div>
  );
}