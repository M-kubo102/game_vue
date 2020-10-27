<template>
    <div class="jankenContainer">
        <section class="versus">
            <p v-if="isPlayed">ポン！</p>
            <p v-else>じゃ～んけ～ん……</p>
            <img :src="illust">
        </section>

        <section class="jankenFinish" v-show="isPlayed">
            <p v-show="isWin" class="judgeText">勝ち！</p>
            <p v-show="isLose" class="judgeText">負け！</p>
            <p v-show="isDraw" class="judgeText">あいこ！</p>

            <div class="againBtn" @click="again()">もう一度</div>
        </section>
        

        <section class="player">
            <div class="handBtn" @click="judge(hands[0].img)" :class="{disable : isPlayed}">
                <img :src="hands[0].img">
            </div>

            <div class="handBtn" @click="judge(hands[1].img)" :class="{disable : isPlayed}">
                <img :src="hands[1].img">
            </div>

            <div class="handBtn" @click="judge(hands[2].img)" :class="{disable : isPlayed}">
                <img :src="hands[2].img">
            </div>
        </section>

        <div class="resultBtn" @click="showResult()">リザルトを表示</div>
        <div class="jankenResult" :class="{shown : resultShow}" v-show="resultShow">
            <p>あなたの勝率：{{ winRate }}%</p>
            <p>プレイ回数：{{ playcnt }}</p>
            <p>勝利数：{{ winCnt }}</p>
            <p>あなたがよく使う手：{{ mostUseHand }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            illust: require('@/assets/janken_boys.png'),
            hands:[
                {img: require('@/assets/janken_gu.png'), name: 'グー', cnt:0 },
                {img: require('@/assets/janken_choki.png'), name: 'チョキ', cnt:0 },
                {img: require('@/assets/janken_pa.png'), name: 'パー', cnt:0 },
            ],
            isPlayed: false,
            isWin: false,
            isLose: false,
            isDraw: false,
            winRate: 0,
            playcnt: 0,
            winCnt: 0,
            mostUseHand: '---',
            resultShow: false
        }
    },
    mounted: function(){
        this.playcnt = 0;
        this.winCnt = 0;
    },
    methods: {
        judge(hand){

            if(this.isPlayed){
                return;
            }

            this.illust = this.hands[Math.floor(Math.random() * this.hands.length)].img;
            this.isPlayed = true;
            this.playcnt++;

            switch(hand){
                case this.hands[0].img:
                    this.hands[0].cnt++;
                    break;
                case this.hands[1].img:
                    this.hands[1].cnt++;
                    break;
                case this.hands[2].img:
                    this.hands[2].cnt++;
                    break;
            }

            this.handCount();

            if(hand ===this.hands[0].img && this.illust === this.hands[1].img){
                this.win();

            } else if(hand ===this.hands[1].img && this.illust === this.hands[2].img){
                this.win();

            } else if(hand ===this.hands[2].img && this.illust === this.hands[0].img){
                this.win();

            } else if(hand === this.illust){
                this.isDraw = true;
            } else{
                this.isLose = true;
            }

        },
        again(){
            this.illust = require('@/assets/janken_boys.png');
            this.isPlayed = false;
            this.isWin = false;
            this.isLose = false;
            this.isDraw = false;
        },
        rateComput(winCnt){
            let num = winCnt/this.playcnt *100;
            let result = Math.floor( num * Math.pow( 10, 1 ) ) / Math.pow( 10, 1 );
            return result;
        },
        win(){
            this.winCnt++;
            this.isWin = true;

            this.winRate = this.rateComput(this.winCnt);
            
        },
        handCount(){
            let guCnt = this.hands[0].cnt;
            let ChokiCnt = this.hands[1].cnt;
            let PaCnt = this.hands[2].cnt;

            if(guCnt > ChokiCnt && guCnt > PaCnt){
                this.mostUseHand = this.hands[0].name;
            } else if(ChokiCnt > guCnt && ChokiCnt > PaCnt){
                this.mostUseHand = this.hands[1].name;
            } else if(PaCnt > guCnt && PaCnt > ChokiCnt){
                this.mostUseHand = this.hands[2].name;
            }
        },
        showResult(){
            this.resultShow = !this.resultShow;
        }
    }
}
</script>

<style>
    .player{
        display: flex;
        justify-content: space-between;
        width: 600px;
        margin: 0 auto;
    }

    .versus >p{
        margin: 20px;
        font-weight: bold;
    }

    .versus> img{
        width: 110px;
    }

    .handBtn >img{
        background: #2a968b;
        width: 80px;
        height: 80px;
        cursor: pointer;
        padding: 20px;
        border-radius: 50%;
        border: 3px solid #1b6860;
        user-select: none;
    }

    .handBtn.disable >img{
        filter: grayscale(100%);
        cursor: default;
    }

    .jankenFinish{
        display: flex;
        justify-content: space-between;
        width: 200px;
        height: 80px;
        margin: 10px auto;
    }

    .againBtn{
        background: #4ca041;
        width: 100px;
        height: 50px;
        line-height: 50px;
        margin-bottom: 20px;
        border-radius: 40px;
        cursor: pointer;
        color: #fff;
        font-weight: bold;
        border: 3px solid #2f7426;
        user-select: none;
    }

    .judgeText{
        color: #f15;
        font-weight: bold;
        font-size: 18px;
    }

    .jankenResult{
        border: solid 2px #999999;
        width: 300px;
        margin: 10px auto;
        text-align: left;
        padding: 10px;
    }

    .resultBtn{
        background: #f08080;
        width: 120px;
        height: 50px;
        margin: 10px auto;
        line-height: 50px;
        padding: 5px;
        border-radius: 10px;
        cursor: pointer;
        font-weight: bold;
        color: #fff;
        border: 3px solid #c05a5a;
        user-select: none;
    }

</style>