function ImagePopup(props) {
  return (
    <div className={`popup popup_type_img-block ${props.isOpen && 'popup_active'}`}>
      <div className="popup__content popup__content_type_img-block">
        <button onClick={props.onclosePopup} type="button" className="popup__close btn"></button>
        <img className="popup__photo" src={props.link} alt={props.name}/>
        <p className="popup__subtitle">{props.name}</p>
      </div>
    </div>
  );
}
export default ImagePopup;
