let app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Mam!',
    cards: '',
    input: ''
  },
  methods: {
    beautify: function () {
      let parsedJson = JSON.parse(this.input);
      this.cards = parsedJson.cards;

      this.cards.forEach((card) => {
        card.checklists = [];
        card.idChecklists.forEach((checkListId) => {
          card.checklists.push(parsedJson.checklists.filter((checkList) => checkList.id === checkListId).pop());
        });

        if (!card.checklists.length) {
          delete card.checklists;
        }
      });


      console.log(this.cards)
    }
  }
});