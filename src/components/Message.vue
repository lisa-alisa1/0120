<template>
    <div class="message">
        <div class="user">
            <p class="name"> Samuel Jackson </p>
            <p class="date"> 13 Apr 2022 </p>
        </div>
        <div class="message-form">
            <div class="triangle"></div>
            <div class="content">
               <p>Hey Eva! You're cool. Nice pic!</p> 
            </div>
        </div>
        <div class="send-message">
            <textarea></textarea>
            <button>  <p>Send a message  </p> </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MessageVue'
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
        height: 50px;
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