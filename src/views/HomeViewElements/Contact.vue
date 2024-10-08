<template>
  <section class="contact" id="contact-element-observe-target">
    <img
      class="ontact-background-image"
      src="@/assets/backgrounds/bohater.png"
      alt="contact background image"
      id="parallax"
    />
    <transition name="errorElement">
      <div v-if="showError" class="problem-message">
        <h3>Wystąpił problem</h3>
        <p>Proszę wypełnić wszystkie pola i podać poprawny email</p>
      </div>
    </transition>
    <div class="contact-details-container">
      <transition name="contactElement">
        <h2 v-if="showElement" id="element0">Skontaktuj się ze mną</h2>
      </transition>
      <div class="input-container" id="element1">
        <transition name="contactElement">
          <div v-if="showElement" class="inner_input_container">
            <p>Imię</p>
            <input
              v-model="message.name"
              class="name"
              type="text"
              required
            /></div
        ></transition>
        <transition name="contactElement">
          <div v-if="showElement" class="inner_input_container" id="element2">
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

const showElement = ref(false);

const showError = ref(false);

const message = ref({ name: "", email: "", messageText: "" });

const sendMessage = () => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const isTheMessageCorrect = ref(true);

  if (
    !regex.test(message.value.email) ||
    message.value.name === "" ||
    message.value.messageText === ""
  ) {
    isTheMessageCorrect.value = false;
  }

  if (isTheMessageCorrect.value) {
    console.log("send message");
  } else {
    showError.value = true;
    setTimeout(() => {
      showError.value = false;
    }, 3500);
  }
};

const handleParalax = () => {
  let scrollPosition = window.pageYOffset;

  document.getElementById("parallax").style.transform = `scale(${
    1 + (scrollPosition - 2000) * 0.0003
  })`;
};

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        showElement.value = true;
      }
    });
  });
  const target = document.getElementById(`contact-element-observe-target`);
  observer.observe(target);

  window.addEventListener("scroll", handleParalax);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleParalax);
});
</script>

<style scoped>
.contact {
  display: flex;
  flex-direction: column;
  padding: 50px 25px 0 25px;
  width: 100vw;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 0;
  overflow: hidden;
  min-height: 600px;
}

.contact:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: -1;
}

.problem-message {
  top: 30vh;
  position: absolute;
  background-color: rgb(255, 255, 255, 1);
  border: solid black 0.5px;
  padding: 0 25px 25px 25px;
  z-index: 4;
}

.ontact-background-image {
  position: absolute;
  min-height: 100%;
  min-width: 100%;
  z-index: -1;
  bottom: 0;
}

.contact-details-container {
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
  justify-content: center;
  padding: 25px;
  background-color: rgba(255, 255, 255, 0.3);
}

.input-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.inner_input_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.inner_input_container p,
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

.contactElement-enter-to,
.contactElement-leave-from {
  opacity: 1;
  transform: translateY(0%);
}

.errorElement-enter-from,
.errorElement-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}

.errorElement-enter-active,
.errorElement-leave-active {
  transition: all 1s ease;
}

.errorElement-enter-to,
.errorElement-leave-from {
  opacity: 1;
  transform: translateY(0%);
}

@media (min-width: 768px) {
  .problem-message {
    top: 100px;
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
}

@media (min-width: 1100px) {
  .ontact-background-image {
    min-height: 140%;
    min-width: 100%;
  }
  .contact-details-container {
    width: 70%;
  }

  .contact-details-container input {
    width: 300px;
  }
}
</style>
