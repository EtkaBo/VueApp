<template>
    <div class="loader">
        <img src="../../assets/spinner.gif" />
    </div>
</template>

<script>
    export default {
        name: 'LoadingSpinner'
    }
</script>

    
<style>
 .loader{
   position: absolute;
    background-color: rgba(0,0,0,0.5);
    width: 100%;
    top: 0;
    height: 100%;
    min-height: 100vh;
    text-align: center;
    padding-top: 40vh;
 }

 .loader img{
   width:100px
 }
</style>
