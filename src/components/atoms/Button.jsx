import "../../styles/atoms/Button.css";

export function Button(props) {
  const {children, onClick, className} = props

  return (
    <button className={`button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}