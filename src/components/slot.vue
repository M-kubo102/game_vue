<template>
    <div>

        <p>食べた寿司の数：{{ count }}皿</p>

        <div class="slotContainer">
            <section>
                <img :src="image1">
            </section>

            <section>
                <img :src="image2">
            </section>

            <section>
                <img :src="image3">
            </section>
        </div>

        <div class="btnArea">
            <div class="spin" @click="spin()">回転</div>
            <div class="stop" @click="stop()">STOP</div>
        </div>

        <p class="result" v-if="unmatch">残念！</p>
        <p class="result" v-else-if="match">寿司GET！</p>

    </div>
</template>

<script>
export default {
    data(){
        return{
            count: 0,
            images:[
                require('@/assets/sushi_chutoro.png'),
                require('@/assets/sushi_ebi.png'),
                require('@/assets/sushi_tamago.png'),
            ],

            image1: require('@/assets/sushi_chutoro.png'),
            image2: require('@/assets/sushi_chutoro.png'),
            image3: require('@/assets/sushi_chutoro.png'),

            timeoutId: '',
            unmatch: false,
            match: false
        }
    },
    methods: {
        shuffle: function(array) {
            for (let i = array.length - 1; i > 0; i--) {
                let r = Math.floor(Math.random() * (i + 1))
                let tmp = array[i]
                array[i] = array[r]
                array[r] = tmp
            }
            return array
        },
        spin() {
            this.match = false;
            this.unmatch = false;

            this.timeoutId = setTimeout(() => {
                this.getRandomImage();
                this.spin();
            }, 20);
        },
        getRandomImage(){
            this.image1 = this.images[Math.floor(Math.random() * this.images.length)];
            this.image2 = this.images[Math.floor(Math.random() * this.images.length)];
            this.image3 = this.images[Math.floor(Math.random() * this.images.length)];
        },
        stop(){
            clearTimeout(this.timeoutId);
            this.checkResult();
        },
        checkResult(){
            if(this.image1 !== this.image2 && this.image1 !== this.image3){
                this.unmatch = true;
            } else if(this.image2 !== this.image1 && this.image2 !== this.image3){
                this.unmatch = true;
            } else if(this.image3 !== this.image1 && this.image3 !== this.image2){
                this.unmatch = true;
            } else{
                this.match = true;
                this.count++;
            }
            
        }
    }
    
}
</script>

<style>
    .slotContainer{
        background: #d4d2d1;
        width: 600px;
        margin: 0 auto;
        padding: 10px;
        display: flex;
        justify-content: space-between;
    }

    .slotContainer img{
        background: #fff;
        width: 150px;
        height: 150px;
        padding: 15px;
        margin: 5px;
        border-radius: 50%;
    }

    .btnArea{
        width: 200px;
        margin: 10px auto;
        display: flex;
        justify-content: space-between;
    }

    .stop{
        background: #e06262;
        color: #fff;
        width: 50px;
        height: 20px;
        line-height: 20px;
        padding: 10px;
        border-radius: 10px;
        margin: 10px auto;
        cursor: pointer;
        box-shadow: 0 3px 0 #b34646;
        user-select: none;
    }

    .stop:active{
        box-shadow: none;
        transform: translateY(3px);
    }

    .spin {
        font-family: 'MS PMincho';
        font-weight: bold;
        font-size: 18px;
        background: #926b5b;
        color: #fff;
        width: 50px;
        height: 20px;
        line-height: 20px;
        padding: 10px;
        margin: 10px auto;
        cursor: pointer;
        box-shadow: 0 3px 0 #6e3a25;
        border-radius: 10px;
        user-select: none;
    }

    .spin:active{
        box-shadow: none;
        transform: translateY(3px);
    }

    .result{
        font-weight: bold;
        font-size: 20px;
        margin: 5px;
    }

</style>