import React from 'react';
import PopupWithForm from './PopupWithForm.jsx';

export function AddPlacePopup(props) {
  const [valueNamePlace, setValueNamePlace] = React.useState('');
  const [valueLink, setValueLink] = React.useState('');

  const handleChangeValueNamePlace = evt => setValueNamePlace(evt.target.value);
  const handleChangeValueLink = evt => setValueLink(evt.target.value);

  function handleSubmit(e) {
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateCards({
      name: valueNamePlace,
      link: valueLink,
    });
    setValueNamePlace('');
    setValueLink('');
  }
  return (
    <PopupWithForm name="add-block" title="Новое место" isOpen={props.isOpen} onclosePopup={props.onclosePopup} onSubmit={handleSubmit}>
      <label className="popup__field">
        <input
          value={valueNamePlace}
          onChange={handleChangeValueNamePlace}
          type="text"
          className="popup__input input"
          id="inputPlaceName"
          autoComplete="off"
          required
          minLength="2"
          maxLength="30"
          name="name"
          placeholder="Название"
        />
        <span className="popup__input-error inputPlaceName-error"></span>
      </label>
      <label className="popup__field">
        <input
          value={valueLink}
          onChange={handleChangeValueLink}
          type="url"
          className="popup__input input"
          id="inputLink"
          autoComplete="off"
          required
          name="link"
          placeholder="Ссылка на картинку"
        />
        <span className="popup__input-error inputLink-error"></span>
      </label>
    </PopupWithForm>
  );
}
