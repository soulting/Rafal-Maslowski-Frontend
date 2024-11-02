<template>
  <div class="outer-container">
    <div class="privacy-policy">
      <h1>Polityka Prywatności</h1>
      <section>
        <h2>Administrator Danych</h2>
        <p>
          Administratorem danych osobowych jest Rafał Masłowski. Można
          skontaktować się z nim pod adresem email: rafal.maslowski@phinance.pl.
        </p>
      </section>

      <section>
        <h2>Zakres Zbieranych Danych</h2>
        <p>
          Dane osobowe zbierane przez stronę internetową to imię, nazwisko oraz
          adres e-mail. Dane te są przetwarzane wyłącznie wtedy, gdy użytkownik
          samodzielnie wyśle wiadomość do Rafała za pomocą formularza
          kontaktowego.
        </p>
      </section>

      <section>
        <h2>Cel Przetwarzania Danych</h2>
        <p>
          Dane są zbierane wyłącznie w celu odpowiedzi na przesłane wiadomości
          oraz kontaktu z użytkownikiem. Dane nie są przechowywane w żadnej
          bazie danych ani wykorzystywane do innych celów.
        </p>
      </section>

      <section>
        <h2>Przechowywanie Danych</h2>
        <p>
          Dane użytkowników nie są przechowywane długoterminowo i są usuwane po
          zakończeniu konwersacji.
        </p>
      </section>

      <section>
        <h2>Prawa Użytkownika</h2>
        <p>Użytkownik ma prawo do:</p>
        <ul>
          <li>dostępu do swoich danych,</li>
          <li>ich poprawiania,</li>
          <li>żądania ich usunięcia.</li>
        </ul>
      </section>

      <section>
        <h2>Kontakt</h2>
        <p>
          W sprawie danych osobowych można skontaktować się z administratorem
          pod adresem email: rafal.maslowski@phinance.pl.
        </p>
      </section>
    </div>
  </div>
</template>

<script setup>
// Skrypt może być pusty, jeśli treść jest statyczna.
</script>

<style scoped>
.outer-container {
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
.privacy-policy {
  padding: 10px;
  margin-top: 70px;
  color: #1a1a1a;
  background-color: white;
  width: 100%;
  text-align: justify;
  box-sizing: border-box;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  color: #1a1a1a;
}

h2 {
  color: #1a1a1a;
  margin-top: 20px;
  text-align: left;
}

p,
ul {
  line-height: 1.6;
  margin-bottom: 15px;
}

ul {
  padding-left: 20px;
}

li {
  margin-bottom: 10px;
}

@media (min-width: 450px) {
  .privacy-policy {
    padding: 25px;
  }
}

@media (min-width: 768px) {
  .privacy-policy {
    padding: 50px;
  }

  h2 {
    margin-top: 20px;
    margin-left: 50px;
  }
}

@media (min-width: 1000px) {
  .privacy-policy {
    max-width: 900px;
  }
}
</style>
