<template>
    <div class="container">
      <div class="message-block">

        <div class="header">
          <img src="../assets/logo.svg" >
          <div class="profile-info">
            <p class="name"> Eva Jonson </p>
            <p class="prof"> Sales Manager </p>
            <div>
              <p>
                I will find the best offers for you. <br>
                My services are absolutely free.
              </p>
            </div>
          </div>
        </div>

        <div class="chart">
          <div class="wrapper">
            <p class="gray"> Services </p>
            <hr>
            <div class="items-box">
                <div class="item">
                  <div class="booking general"> 
                     <p class="options"> 
                        Manual tour booking
                     </p> 
                  </div>
                  <div class="count-box">
                    <p class="count"> 11 </p>
                  </div>
                </div>
                <div class="item">
                  <div class="tours general"> 
                    <p class="options">
                       Package tours 
                    </p>
                  </div>
                  <div class="count-box">
                    <p class="count"> 3 </p>
                  </div>
                </div>
                <div class="item">
                  <div class="hotels general">
                     <p class="options"> 
                      Hotels 
                    </p>
                  </div>
                  <div class="count-box">
                    <p class="count"> 1 </p>
                  </div>
                </div> 
                <hr>
                <div class="item">
                  <div>
                    <p class="options total"> Total </p>
                  </div>
                  <div class="count-box">
                     <p class="total"> 15 </p>
                  </div>
                </div>
            </div>
          </div>
        </div>

        <div class="messages-wrapper">
            <div class="reviews">
              <div>
                  <p> Latest reviews </p>
                  <a href="#"> All reviews </a>
              </div>
              <div class="icons">
                <div  >
                  <img src="../assets/like.svg" alt="">
                  <p>131</p>
                </div>
                <div>
                  <img  src="../assets/comments.svg" alt="">
                  <p>14</p>
                </div>
              </div>
            </div>
            <div class="overflow">
              <Message />
            </div>
        </div>
      </div>
    </div>
  </template>
  

  <script>
import Message from '@/components/Message.vue';

export default {
  components: { Message }
}
  </script> 


  <style lang="scss" >

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    
    .message-block { 
        height: 90vh;
        width: 80%;
        background-color: white;
        padding: 3%;
        position: relative;
        }
        .messages-wrapper {
          height: min-content;
            .overflow {
              overflow: scroll !important;
              height: 24vh;
            }
            .reviews {
              display: flex;
              justify-content: space-between;

            .icons {
                display: flex;
                width: 20%;
                justify-content: space-around;

                img {
                  margin-right: 5px;
                }
            }
              div {
                display: flex;
                align-items: center;
                justify-content: center;
                
                a {
                  margin-left: 10px;
                  color: #005DA1;
                }
              }
            }
        }

        .chart {
          height: min-content;
          display: flex;
          flex-direction: row-reverse;
          width: 50%;
          margin-left: 50%;

          .gray {
            font-size: 13px ;
            color: #333333;
            margin-left: 75%;
          }
          .wrapper {
            width: 100%;
          }

          .items-box {
            
            .item {
              height: 2rem;
              margin-top: 1%;
              display: flex;
              align-items: center;
              justify-content: space-between;
              width: 100%;
              

              .count {
                font-weight: 700;
              }
                
              p  {
                font-size: 13px;
                font-weight: 400;
                color: #333333;
                white-space: nowrap;
              }
              .options {
                padding-left: 8px;
              }

              .total {
                font-weight: 700;
                font-size: 16px;
              }
              .count-box {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 32%;
              }

              .general {
                height: 100%;
                border-radius:  0 5px 5px 0;
                display: flex;
                align-items: center;

              }
              .booking {
                background-color:#B1E19B;
                width: 56%;
              }

              .tours {
                background-color:#ACE2F8 ;
                width: 18%;
              }

              .hotels {
                background-color:#ACE2F8 ;
                width: 12%;
              } 
            }
          }
        }
        .header {
            display: flex;

            img {
                border-radius: 50%;
                height:10rem;
                z-index: 2;
            }
           
            .profile-info {
                margin-left: 2%;
                width: 100%;

                div {
                  border: 1px solid #DADADA;
                  background-color: #FFFBC8;
                  display: flex;
                  align-items: center;
                  width: 115%;
                  margin-left: -60px;
                  
                    p {
                      font-size: 14px;
                      font-weight: 400;
                      padding-left: 14%;
                      line-height: 20px;
                    }
                }

                .name {
                    font-size: 16px;
                    font-weight: 700;
                    color: #333333;
                }
                .prof {
                  font-size: 12px;
                  font-weight: 400;
                  color: #808080;
                }
            }
        }
    }

    @media screen and (max-width: 600px)  {

      div.header img {
          height: 7rem !important;
      }
      
      .profile-info div {
        height: 2.3rem;

        p {
          font-size: 13px !important;
          padding-left: 16% !important;
        }
      }

    }
 
    @media screen and (max-width: 414px)  { 
      div.header img {
          height: 5rem !important;
      }
      .header {
        flex-direction: column;
      }
      div.header img {
          border-radius:0% !important;
      }
      .chart {
        width: 100% !important;
        margin: 0% !important;

      }
      .profile-info {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        div {
          width: 100% !important;
          margin-left: -4% !important;
        }
      }
      .send-message {
        height: 20%;
      }
    }
  
  </style>