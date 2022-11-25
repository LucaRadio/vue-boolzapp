const { createApp } = Vue;

createApp({
  data() {
    return {
      lastMessageIndex: 0,
      savedIndex: 0,
      recentChatsList: [{
        name: 'Michele',
        avatar: '_1',
        visible: true,
        messages: [{
          date: '10/01/2020 15:30:55',
          message: 'Hai portato a spasso il cane?',
          status: 'sent'
        },
        {
          date: '10/01/2020 15:50:00',
          message: 'Ricordati di dargli da mangiare',
          status: 'sent'
        },
        {
          date: '10/01/2020 16:15:22',
          message: 'Tutto fatto!',
          status: 'received'
        }
        ],
      },
      {
        name: 'Fabio',
        avatar: '_2',
        visible: true,
        messages: [{
          date: '20/03/2020 16:30:00',
          message: 'Ciao come stai?',
          status: 'sent'
        },
        {
          date: '20/03/2020 16:30:55',
          message: 'Bene grazie! Stasera ci vediamo?',
          status: 'received'
        },
        {
          date: '20/03/2020 16:35:00',
          message: 'Mi piacerebbe ma devo andare a fare la spesa.',
          status: 'received'
        }
        ],
      },
      {
        name: 'Samuele',
        avatar: '_3',
        visible: true,
        messages: [{
          date: '28/03/2020 10:10:40',
          message: 'La Marianna va in campagna',
          status: 'received'
        },
        {
          date: '28/03/2020 10:20:10',
          message: 'Sicuro di non aver sbagliato chat?',
          status: 'sent'
        },
        {
          date: '28/03/2020 16:15:22',
          message: 'Ah scusa!',
          status: 'received'
        }
        ],
      },
      {
        name: 'Alessandro B.',
        avatar: '_4',
        visible: true,
        messages: [{
          date: '10/01/2020 15:30:55',
          message: 'Lo sai che ha aperto una nuova pizzeria?',
          status: 'sent'
        },
        {
          date: '10/01/2020 15:50:00',
          message: 'Si, ma preferirei andare al cinema',
          status: 'received'
        }
        ],
      },
      {
        name: 'Alessandro L.',
        avatar: '_5',
        visible: true,
        messages: [],
      },
      {
        name: 'Claudia',
        avatar: '_6',
        visible: true,
        messages: [],
      },
      {
        name: 'Federico',
        avatar: '_7',
        visible: true,
        messages: [],
      },
      {
        name: 'Davide',
        avatar: '_8',
        visible: true,
        messages: [],
      }
      ],
      newMessageChat: '',
      newMessage: {
        date: '',
        message: '',
        status: ''
      }
    }
  },
  methods: {
    saveIndex(i) {
      this.savedIndex = i;

    },
    addMessage() {
      let date = new Date;
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let newDate = `${hours}:${minutes}`

      this.newMessage.date = newDate,
        this.newMessage.message = this.newMessageChat,
        this.newMessage.status = 'sent'
      console.log(this.recentChatsList[this.savedIndex]);
      this.recentChatsList[this.savedIndex].messages.push(
        this.newMessage
      )
      // this.lastMessageIndex = this.recentChatsList[this.savedIndex].messages.length - 1;
    },


  },
  mounted() {
  }
}).mount("#app")



