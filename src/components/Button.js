import './Button.css';

export default function Button({bigButton, onClick, children, ...attrs}) {
  return (
    <button
      className={`button ${bigButton && 'button-large'}`}
      onClick={onClick}
      {...attrs}>
      {children}
    </button>
  );
};
