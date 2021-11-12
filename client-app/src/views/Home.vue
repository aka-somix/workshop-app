<template>
  <div class="home">

    <!-- Header -->
    <div class="header">
      <h3 class="title sub">Welcome to the</h3>
      <h1 class="title main">Workshop Demo</h1>
      <span style="border: 1px solid white; width: 50rem; margin: auto"></span>
      <h4 class="title sub">Ambassador Platform 2021</h4>
    </div>

    <!-- Paragraph 2 -->
    <div >
      <img src="../assets/home_image.svg"/>
    </div>

    <!-- Paragraph 3 -->
    <div class="paragraph primary">
      <h3>Paragraph 3</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut luctus erat. <br>
        Integer commodo imperdiet eros, quis egestas enim cursus quis. Ut posuere dui ligula, vitae convallis sapien ultrices quis.<br> 
        Pellentesque eu urna aliquet, aliquam sem in, laoreet lacus.
      </p>
    </div>

    <!-- Paragraph 4 -->
    <div class="paragraph secondary">
      <h3>Paragraph 4</h3>
      <div class="text-flex">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut luctus erat. <br>
          Integer commodo imperdiet eros, quis egestas enim cursus quis. 
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut luctus erat. <br>
          Integer commodo imperdiet eros, quis egestas enim cursus quis. 
        </p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Home',

}
</script>


<style scoped>
  .header{
    background: linear-gradient(159deg, rgba(0, 168, 150,1) 0%, rgba(0,168,150,1) 40%, #029DB1 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 7vw;
  }

  .header .title.main {
    color: white;
    font-weight: 900;
    margin: auto;
  }
  
  .header .title.sub {
    color: white;
    margin: auto;
  }

  img {
    padding: 2vw;
    width: 36%;
    height: auto;
  }

  .paragraph {
    margin: 2vw;
    border-radius: 15px;
    padding:2vw 7vw;
  }
  .paragraph h3{
    padding-top: 0;
    padding-bottom: 1vw;
    text-align: left;
  }
  .paragraph p{
    text-align: left;
    padding-left: 4vw;
    padding-bottom: 2vw;
  }

  .paragraph.primary {
    border: 4px solid #029DB1;
    background-color: #029DB1;
    -webkit-box-shadow: 5px 5px 0px 0px #07b5cc, 10px 10px 0px 0px #51e2f5, 15px 15px 0px 0px #c3e0e4, 5px 5px 15px 5px rgba(0,0,0,0);
    box-shadow: 5px 5px 0px 0px #07b5cc, 10px 10px 0px 0px #51e2f5, 15px 15px 0px 0px #c3e0e4, 5px 5px 15px 5px rgba(0,0,0,0);
  }

  .paragraph.primary h3{
    color:white;
  }

  .paragraph.primary p{
    color:white;
  }

  .paragraph.secondary {
    border: 4px solid #00a896;
    -webkit-box-shadow: 5px 5px 0px 0px #1ac2b1, 10px 10px 0px 0px #19dbc8, 15px 15px 0px 0px #b9dbd8, 5px 5px 15px 5px rgba(0,0,0,0);
    box-shadow: 5px 5px 0px 0px #1ac2b1, 10px 10px 0px 0px #19dbc8, 15px 15px 0px 0px #b9dbd8, 5px 5px 15px 5px rgba(0,0,0,0);
  }

  .text-flex {
    display: grid;
    grid-template-columns: 50% 50%;
  }

  .text-flex p{
    margin: 0.5vw;
    padding: 0.5vw;
  }
</style>