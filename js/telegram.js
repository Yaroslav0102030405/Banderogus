const TOKEN = '6470796582:AAEzk1WSMbpsvtk_zU8M9E4AEclnoD5ovB8';
const CHAT_ID = '-1002084469289';
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
const success = document.getElementById('success');

document.getElementById('form').addEventListener('submit', function (e) {
  e.preventDefault();

  let message = `<b>Заявка с сайта Бандерогусь</b>\n`;
  message += `<b>Отправитель: </b> ${this.name.value}\n`;
  message += `<b>Почта: </b> ${this.email.value}\n`;
  //   message += `<b>Телефон: </b> ${this.phone.value}\n`;
  //   message += `<b>Коментар: </b> ${this.comment.value}`;

  axios
    .post(URI_API, {
      chat_id: CHAT_ID,
      parse_mode: 'html',
      text: message,
    })
    .then(res => {
      this.name.value = '';
      this.email.value = '';
      //   this.phone.value = '';
      //   this.comment.value = '';
      //   this.topic.value = '';
      //   this.checkbox.value = '';

      success.innerHTML =
        '<p class="message">Повідомлення відправлено!</p><p>Через 15 хвилин з вами зв`яжеться менеджер!</p>';
      success.style.display = 'block';
    })
    .catch(error => {
      console.varn(error);
    })
    .finally(() => {
      console.log('Конец');
    });
});
