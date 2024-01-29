import React from 'react';
import PopupWithForm from './PopupWithForm.jsx';

export function EditAvatarPopup(props) {
  const [valueAvatarLink, setValueAvatarLink] = React.useState('');
  const valueAvatarRef = React.useRef();
  const handleChangeValueAvatarLink = () => setValueAvatarLink(valueAvatarRef.current.value);

  function handleSubmit(e) {
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateAvatar({
      link: valueAvatarLink,
    });
    valueAvatarRef.current.value = '';
  }
  return (
    <PopupWithForm name="avatar" title="Обновить аватар" isOpen={props.isOpen} onclosePopup={props.onclosePopup} onSubmit={handleSubmit}>
      <label className="popup__field">
        <input
          ref={valueAvatarRef}
          onChange={handleChangeValueAvatarLink}
          id="inputAvatarLink"
          type="url"
          name="link"
          className="popup__input input"
          placeholder="Ссылка на фото"
          required
          autoComplete="off"
        />
        <span className="popup__input-error inputAvatarLink-error"></span>
      </label>
    </PopupWithForm>
  );
}
