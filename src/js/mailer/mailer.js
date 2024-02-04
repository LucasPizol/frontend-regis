const form = document.querySelector(".mensagem")
const inputName = document.querySelector(".name")
const inputEmail = document.querySelector(".email")
const inputMessage = document.querySelector(".message")
const sendButton = document.querySelector(".botao-enviar")

import confetti from "https://esm.run/canvas-confetti@1"

const sendEmail = async (e) => {
  e.preventDefault()

  try {
    const fields = {
      name: inputName.value,
      email: inputEmail.value,
      message: inputMessage.value
    }
    sendButton.innerHTML = "<img src='./src/images/loading.gif' />"
    sendButton.disabled = true;


    await emailjs.send(
      "service_q6h52l7",
      "template_6fl1acd",
      fields,
      "y_vtfNUHr0zTyYBsy"
    )

    sendButton.innerHTML = "<img width='20' src='./src/images/check-mark.svg' alt='' />Enviado!"
    sendButton.classList.toggle("sended")
    inputName.value = ""
    inputEmail.value = ""
    inputMessage.value = ""

    confetti({
      particleCount: 200,
      spread: 60
    });

    setTimeout(() => {
      sendButton.innerHTML = "<img src='./src/images/send-email.svg' alt='' />Enviar"
      sendButton.classList.toggle("sended")
      sendButton.disabled = false;

    }, 2 * 1000)
  } catch (error) {
    alert("Deu erro mano")
  }
}


form.addEventListener("submit", sendEmail)