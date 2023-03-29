<template>
    <div class="container">
      <div class="message-block">
        <div class="header">
          <img src="../assets/logo.svg" >
          <div class="profile-info">
            <p class="name"> Eva Jonson </p>
            <p class="prof"> Sales Manager </p>
            <div>
              I will find the best offers for you. <br>
              My services are absolutely free.
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>

  
 
  
  </script> 
  <style lang="scss">

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    .message-block {
        height: 55rem;
        width: 30%;
        background-color: white;
        padding: 1%;

        .header {
            display: flex;

            img {
                border-radius: 50%;
            }

            .profile-info {
                margin-left: 2%;

                div {
                    border: 1px solid #DADADA ;
                    background-color: #FFFBC8;
                    height: 3rem;
                    display: flex;
                    align-items: center;
                    width: 150%;
                }

                .name {
                    font-size: $size;
                }
            }
        }

    }
  }
  </style>