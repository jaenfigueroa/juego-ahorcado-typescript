import { buttonExitModal, modal, modalText } from '../modules/domElements'

//ACTUALIZAR EL TEXTO DEL MODAL Y MOSTRARLO
export const updateModal = (text: string) => {
  modalText.textContent = text
  modal.showModal() //MOSTRAR EL MODAL
}

//SALIR DEL MODAL
buttonExitModal?.addEventListener('click', () => {
  modal.close() //OCULTAR MODAL
})


