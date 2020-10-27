<template>
    <header>
        <ul class="headerBtn">
            <li><router-link to="/">TOP</router-link></li>
            <li><router-link to="/janken">じゃんけん</router-link></li>
            <li><router-link to="/slot">スロット</router-link></li>
        </ul>
    </header>    
</template>

<script>
export default {
    
}
</script>

<style>
    .headerBtn{
        background: #bec1c2;
        display: flex;
        list-style: none;
        padding: 0;
        margin: 0;
        height: 64px;
        box-shadow: 0 3px 0 #9ca0a1;
    }

    .headerBtn li{
        background: #a8dff0;
        margin: 10px;
        padding: 5px 10px;
        line-height: 30px;
        font-weight: bold;
        box-shadow: inset 0 -2px 1px #7bbdd1, inset 0 2px 1px #bbefff;
        border-radius: 4px;
        cursor: pointer;
        border: 2px solid #3f81b8;
    }

    .headerBtn li >a{
        text-decoration: none;
        color: #3f81b8;
    }

    .headerBtn li:hover{
        background: #bde8f5;
    }

    .headerBtn li:active{
        box-shadow: inset 0 -1px 2px #3f81b8, inset 0 -1px 2px #3f81b8;
    }

</style>