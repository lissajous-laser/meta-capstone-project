import "../styles/FormProgress.css";

export function FormProgress() {
  return(
    <div className="formProgress">
      <div className="formProgress__outerCircle">
        <div className="formProgress__innerCircle">
          1
        </div>
      </div>
      <div className="formProgress__line"/>
      <div className="formProgress__outerCircle">
        <div className="formProgress__innerCircle">
          2
        </div>
      </div>
    </div>
  );
}