<template>
    <div>
        <h1>回転寿司スロット</h1>
        <p>ネタが揃ったら食べられるよ！</p>
        <slotContents></slotContents>
    </div>
</template>

<script>
import slotContents from '../components/slot'

export default {
    name: 'Slot',
    components:{
        slotContents
    }
}
</script>

<style>

</style>