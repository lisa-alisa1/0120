import { createStore } from 'vuex'

export default createStore({
   state: {
    messages: [
        {
            id: 1,
            userName: 'Samuel Jackson',
            date: '13 Apr 2022',
            content: "Hey Eva! You're cool. Nice pic!",
        },
        {
            id: 2,
            userName: 'Angela Deimon',
            date: '10 Apr 2022',
            content: "Thanks for your services! We really liked the ocean view room. We hope to cooperate in the near future. We are sure you will do everything to make our next holiday fantastic.",
        },
        {
            id: 3,
            userName: 'Ronald Harris',
            date: '8 Apr 2022',
            content: "Eva, hello! There is such a question: How can I contact you if I am abroad in roaming?",
        },
        
        
    ]
   },
   getters: {
        allMessages: (state) => state.messages
   },
   mutations: {
    update_messages(state, messages) {
        state.messages = messages
    }
   },
   actions: {
    sendMessage({state, commit}, newMessage) {
        if (state.messages && state.messages.length) {
            let lastMessages = state.messages[state.messages.length - 1]
            newMessage.id = lastMessages.id + 1
        } else {
            state.messages = []
            newMessage.id = 1
        }
        newMessage.date = Date.now()

        let messages = state.messages
        messages.push(newMessage)

        commit('update_messages', messages)
    }
   }
})