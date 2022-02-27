<template>
    <section class="container">

        <div class="flex-center">
        <span class="highlight">I'm WeiMei, a UI/UX designer. </span>
        <p>My job is to transfer ideas into visual forms, which can help communicate with the target audience.</p>
        <p>I like observing and thinking. Things happen in my life are my source of inspiration</p>

        <img src="../assets/img/process.svg" alt="">
        <!-- <p>This site collects most of my fine works, which can help illustrate my capability in design field. If you have any comments or feedback, feel free to contact me via <a href="mailto:weimei0928@gmail.com">email</a>.</p> -->
        </div>

    </section>
</template>

<script>
export default {
  name: 'Intro'
}
</script>

<style scoped>
img{
    max-width: 55%;
    margin: 3rem 0;
}
.highlight{
    color: #000000;
    font-size: 2rem;
    margin-bottom: 10px;
    text-align: center;
}
.container{
    display: flex;
    flex-direction: column;
    height: 100vh;
    align-items: center;
    justify-content: center;
    margin:0 auto;
}
</style>
