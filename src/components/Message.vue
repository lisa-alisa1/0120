<template>
    <div class="message" v-for="item in messages" :key="item.id"> 
        <div class="user">
            <p class="name"> {{ item.userName }} </p>
            <p class="date"> {{formatDate(item.date)  }} </p>
        </div>
        <div class="message-form">
            <div class="triangle"></div>
            <div class="content">
               <p> {{ item.content }}</p> 
            </div>
        </div>
        <div class="send-message">
            <textarea v-model="this.content"  @keyup.ctrl.enter="sendMessage"></textarea> {{ this.content }}
            <button @click="sendMessage()"> <p> Send a message </p> </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MessageVue',
    data() {
        return {
            content: ''
        }
    },
    computed: {
        messages() {
            return this.$store.getters.allMessages
        },
        
    },
    methods: {
       sendMessage() {
            if(this.content !== '') {
                this.$store.dispatch('sendMessage', {
                    id: 0,
                    userName: 'Eva Jonson',
                    date: Date.now(),
                    content: this.content

                }).then(() => {
                    this.content = ''
                })
            }
       },

       formatDate(value) {
            const date = new Date(value);
            const formattedDate = date.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
            return formattedDate
        }
    }
}
</script>


<style scoped lang="scss">

.message {
    
    .user {
        display: flex;
        align-items: center;

        .name {
            font-weight: 700;
            font-size: 14px;
            margin-right: 11px;
        }
        .date {
            font-size: 11px;
            color:#808080 ;
            
        }
    }
    .message-form {
        position: relative;
        margin-bottom: 10px;
        height: max-content;
        border: 1px solid #C4CBCF;
        padding: 0% 3% 0 3%;
    }
     .content {
        display: flex;
        align-items: center;
     }
    .send-message {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        bottom: 0;
        width: 93%;
        position: absolute;
        height: 24%;

        textarea {
            width: 100%;
            height: 4rem;
        }

        button {
            height: 3rem;
            background-color: #FDD639;
            border: none;
            border-radius: 23px;
            width: 45%;
            margin-top: 4%;
            font-size: 16px;
            font-weight: 700;

        }
        
    }
    .triangle {
        position: absolute;
        top: -15px;
        left: 15px;
        width: 0;
        height: 0;
        border-top: 0;
        border-right: 12px solid transparent;
        border-bottom: 15px solid #C4CBCF;
    }
}

</style>