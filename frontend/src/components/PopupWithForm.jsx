function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen && 'popup_active'}`}>
      <div className="popup__content">
        <button onClick={props.onclosePopup} type="button" className="popup__close btn"></button>
        <h2 className="popup__title">{props.title}</h2>
        <form className="popup__form" name={`${props.name}`} noValidate onSubmit={props.onSubmit}>
          {props.children}
          <button className="popup__btn btn" type="submit">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
