<template>
  <section class="contact" id="contact-element-observe-target">
    <img
      class="contact-background-image"
      src="@/assets/backgrounds/big_img_3.jpg"
      alt="contact background image"
      id="parallax"
    />
    <transition name="popupMessage">
      <div v-if="showMessage" class="popup-message">
        <h3>{{ popupTitle }}</h3>
        <p>{{ popupDescription }}</p>
      </div>
    </transition>
    <div class="contact-details-container">
      <transition name="contactElement">
        <h2 v-if="showElement" id="element0">Skontaktuj się ze mną</h2>
      </transition>
      <div class="input-container" id="element1">
        <transition name="contactElement">
          <div v-if="showElement" class="inner-input-container">
            <p>Imię</p>
            <input
              v-model="message.name"
              class="name"
              type="text"
              required
            /></div
        ></transition>
        <transition name="contactElement">
          <div v-if="showElement" class="inner-input-container" id="element2">
            <p>Email</p>
            <input v-model="message.email" class="e-mail" type="email" /></div
        ></transition>
      </div>
      <transition name="contactElement">
        <div v-if="showElement" class="message-container" id="element3">
          <p>Wiadomość</p>
          <textarea
            v-model="message.messageText"
            class="message-field"
            cols="30"
            rows="10"
          ></textarea>
          <button @click="sendMessage" class="send-button">Wyślij</button>
        </div></transition
      >
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { sendMail } from "@/composables/sendMail";

const showElement = ref(false);
const showMessage = ref(false);
const popupTitle = ref("");
const popupDescription = ref("");
const elementStartPosition = ref(null);
const message = ref({ name: "", email: "", messageText: "" });

const validateMessage = () => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return (
    regex.test(message.value.email) &&
    message.value.name !== "" &&
    message.value.messageText !== ""
  );
};

const sendMessage = async () => {
  if (validateMessage()) {
    const response = await sendMail(message.value);
    if (response.status === "success") {
      message.value = { name: "", email: "", messageText: "" };
      popupTitle.value = "Wiadomość wysłana pomyślnie";
      popupDescription.value =
        "Dziękujemy za kontakt! Odpowiemy najszybciej jak to możliwe.";
    }
  } else {
    popupTitle.value = "Wystąpił problem";
    popupDescription.value =
      "Proszę wypełnić wszystkie pola i podać poprawny email";
  }

  showMessage.value = true;
  setTimeout(() => {
    showMessage.value = false;
  }, 3500);
};

const handleParalax = () => {
  if (
    elementStartPosition.value !== null &&
    window.scrollY - elementStartPosition.value > 1
  ) {
    document.getElementById("parallax").style.transform = `scale(${
      1 + (window.scrollY - elementStartPosition.value) * 0.00018
    })`;
  }
};

let observer = null;

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        showElement.value = true;
        elementStartPosition.value = window.scrollY;
      }
    });
  });

  const target = document.getElementById("contact-element-observe-target");
  if (target) observer.observe(target);

  window.addEventListener("scroll", handleParalax);
});

onUnmounted(() => {
  if (observer) observer.disconnect();
  window.removeEventListener("scroll", handleParalax);
});
</script>

<style scoped>
.contact {
  display: flex;
  flex-direction: column;
  padding: 50px 0 35px 0;
  width: 100vw;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 0;
  overflow: hidden;
  min-height: 600px;
  box-sizing: border-box;
}

.contact:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.1);
  z-index: -1;
}

.contact-background-image {
  position: absolute;
  z-index: -1;
  bottom: 0;
  object-position: center;
  object-fit: cover;
  height: 100%;
  width: auto;
  min-width: 100%;
}

.contact-details-container {
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
  justify-content: center;
  padding: 25px;
  background-color: rgba(255, 255, 255, 0.5);
}

.input-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.inner-input-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.inner-input-container p,
.contact-details-container p {
  font-size: 20px;
  margin: 16px auto 6px 16px;
  text-align: left;
}

.contact-details-container p {
  margin: 26px auto 16px 16;
}

.contact-details-container input {
  height: 40px;
  padding-left: 10px;
  font-size: 16px;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: solid 1px black;
  outline: none;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  z-index: 1;
  background: transparent;
  margin-right: auto;
  transition: all 1s ease;
}

.contact-details-container input:focus {
  border-bottom: solid 1.5px rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

.contact-details-container textarea {
  transition: all 1s ease;
}

.contact-details-container textarea:focus {
  border-bottom: solid 1.5px rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

.message-container {
  width: 100%;
}

.message-field {
  padding: 10px;
  outline: none;
  font-size: 16px;
  width: 100%;
  z-index: 1;
  background: transparent;
  box-sizing: border-box;
  border: solid black 1px;
  resize: none;
}

.message-field::-webkit-resizer {
  display: none;
}
.send-button {
  font-size: 16px;
  font-weight: 500;
  height: 50px;
  background-color: white;
  border: solid black 0.5px;
  border-radius: 25px;
  padding: 0 15px 0 15px;
  font-family: "Quicksand", sans-serif;
  font-optical-sizing: auto;
  text-align: center;
  color: #2c3e50;
  transition: all 1s ease;
  margin-top: 30px;
  min-width: 150px;
  z-index: 1;
  background: transparent;
  cursor: pointer;
}

.send-button:hover {
  font-size: 18px;
  background-color: #2c3e50;
  color: #ffffff;
}

.contactElement-enter-from,
.contactElement-leave-to {
  opacity: 0;
  transform: translateY(100%);
}

.contactElement-enter-active,
.contactElement-leave-active {
  transition: all 1s ease;
}

#element0.contactElement-enter-active {
  transition-delay: 0.25s;
}
#element1.contactElement-enter-active {
  transition-delay: 0.5s;
}
#element2.contactElement-enter-active {
  transition-delay: 0.75s;
}
#element3.contactElement-enter-active {
  transition-delay: 1s;
}

.popup-message {
  top: 40vh;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
  border: none;
  border-radius: 5px;
  padding: 0 25px 25px 25px;
  z-index: 4;
  color: white;
}

.popupMessage-enter-to,
.popupMessage-leave-from {
  opacity: 1;
  transform: translateY(0%);
}

.popupMessage-enter-from,
.popupMessage-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}

.popupMessage-enter-active,
.popupMessage-leave-active {
  transition: all 1s ease;
}

@media (min-width: 768px) {
  .popup-message {
    top: 120px;
  }
  .contact-details-container {
    width: 75%;
  }

  .inner-input-container {
    display: flex;
    flex-direction: column;
  }

  .contact-details-container input {
    width: 250px;
  }

  .input-container {
    flex-direction: row;
    gap: 50px;
  }

  .send-button {
    width: 30px;
    margin-left: 25px;
    margin-right: auto;
  }
  .contact-background-image {
    width: auto;
    height: 100%;
  }
}

@media (min-width: 900px) {
  .contact-background-image {
    width: auto;
    height: 125%;
  }
}

@media (min-width: 1050px) {
  .contact-background-image {
    width: auto;
    height: 150%;
  }
  .contact-details-container {
    width: 70%;
  }

  .contact-details-container input {
    width: 300px;
  }
}
</style>
