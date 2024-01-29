import React from 'react';
import iconError from '../img/registr_error.svg';
import iconOk from '../img/registr_ok.svg';

function InfoTooltip({tooltipIcon, noticeText, isOpen, onclosePopup}) {
  return (
    <div className={`popup popup_type_${name} ${isOpen && 'popup_active'}`}>
      <div className="popup__content">
        <button onClick={onclosePopup} type="button" className="popup__close btn"></button>
        <div className="popup__icon-tooltip">
          {tooltipIcon === 'success' && <img src={iconOk} alt="Статус Ок" />}
          {tooltipIcon === 'error' && <img src={iconError} alt="Статус Error" />}
        </div>
        <h2 className="popup__notice">{noticeText}</h2>
      </div>
    </div>
  );
}
export default InfoTooltip;
