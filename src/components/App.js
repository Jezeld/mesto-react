import React, { useEffect, useState } from 'react'
import '../index.css'
import Header from './Header'
import Footer from './Footer'
import { PopupWithForm } from './PopupWithForm.js'
import { ImagePopup } from './ImagePopup.js'
import { Main } from './Main.js'

function App () {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isFullImagePopupOpen, setFullImagePopupOpen] = useState(false)

  const [selectedCard, setSelectedCard] = useState({})

  function handleEditProfileClick () {
    setIsEditProfilePopupOpen(true)
  }

  function handleEditAvatarClick () {
    setIsEditAvatarPopupOpen(true)
  }

  function handleAddPlaceClick () {
    setIsAddPlacePopupOpen(true)
  }

  function handleCardClick (card) {
    setSelectedCard(card)
    setFullImagePopupOpen(true)
  }

  function closeAllPopups () {
    setIsEditProfilePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setSelectedCard({})
  }
  return (
    <div className='page'>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name='popup-edit'
        title='Редактировать профиль'
        text='Сохранить'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <fieldset className='form__fieldset'>
          <input
            type='text'
            name='name'
            id='name-input'
            className='form__input form__input_information_name'
            placeholder='Имя'
            minLength={2}
            maxLength={40}
            required
          />
          <span className='form__span-error name-input-error' />
          <input
            type='text'
            name='about'
            id='job-input'
            className='form__input form__input_information_job'
            placeholder='О себе'
            minLength={2}
            maxLength={200}
            required
          />
          <span className='form__span-error job-input-error' />
        </fieldset>
      </PopupWithForm>

      <PopupWithForm
        name='popup-add'
        title='Новое место'
        text='Создать'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <fieldset className='form__fieldset'>
          <input
            type='text'
            name='place'
            id='image-input'
            className='form__input form__input_information_image'
            placeholder='Название'
            minLength={2}
            maxLength={30}
            required
          />
          <span className='form__span-error image-input-error' />
          <input
            type='url'
            name='link'
            id='link-input'
            className='form__input form__input_information_link'
            placeholder='Ссылка на картинку'
            required
          />
          <span className='form__span-error link-input-error' />
        </fieldset>
      </PopupWithForm>

      <PopupWithForm
        name='popup-avatar'
        title='Обновить аватар'
        text='Сохранить'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <fieldset className='form__fieldset'>
          <input
            type='url'
            name='link'
            id='avatar-input'
            className='form__input'
            placeholder='Ссылка на аватар'
            required
          />
          <span className='form__span-error avatar-input-error' />
        </fieldset>
      </PopupWithForm>

      <ImagePopup
        card={selectedCard}
        isOpen={isFullImagePopupOpen}
        onClose={closeAllPopups}
      />
    </div>
  )
}

export default App
