function getRandomValue(min,max) {
    return Math.floor(Math.random()*(max-min))+min;
}
Vue.createApp({
    data(){
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound:0,
            output: '',
            logs:[]
        }
    },
    watch:{
        playerHealth(value){
            if(value<=0 && this.monsterHealth<=0){
                this.output="Draw Game"
                this.logs.push('RESULT: Game is drawn')
            }else if (value<=0) {
                this.output="Monster Wins!! Player Lost"
                this.logs.push('RESULT: Monster Won the game')
            }
        },
        monsterHealth(value){
                if(value<=0 && this.playerHealth<=0){
                    this.output="Draw Game"
                    this.logs.push('RESULT: Game is drawn')
                }else if (value<=0) {
                    this.output="Congratulations!! You Win!!"
                    this.logs.push('RESULT: Player Won the game')
                }
        }
    },
    computed:{
        monsterBarStyles(){
            if(this.monsterHealth<0){
               return{ width: 0+'%'}
            }else
                return { width : this.monsterHealth + '%' }
        },
        playerBarStyles(){
            if(this.playerHealth<0){
                return{ width: 0+'%'}
             }else
                return { width : this.playerHealth + '%' }
        }
    },
    methods:{
        startGame(){
            this.logs=[]
            this.playerHealth= 100
            this.monsterHealth= 100
            this.currentRound=0
            this.output=''
            this.logs.push('A new game has been started!!')

        },
        attackMonster(){
           this.currentRound++;
           const attackValue=getRandomValue(5,12)
           this.monsterHealth -= attackValue;
           this.attackPlayer();
           this.logs.push('Monster at health ' + this.monsterHealth +' is attacked by player with health ' +this.playerHealth)
           console.logs(this.playerHealth, ' ', this.monsterHealth)
        },
        attackPlayer(){
            const attackValue=getRandomValue(8,15)
            this.playerHealth -= attackValue;
            this.logs.push('Player at health ' + this.playerHealth +' is attacked by monster with health ' +this.monsterHealth)
        },
        specialAttackMonster(){
            this.currentRound++;
            const attackValue=getRandomValue(10,25)
            this.monsterHealth -= attackValue;
            this.logs.push('SPECIAL ATTACK: Monster at health ' + this.monsterHealth +' is attacked by player with health ' +this.playerHealth)
            this.attackPlayer();
            console.log(this.playerHealth, ' ', this.monsterHealth)
         },
         healPlayer(){
            this.currentRound++;
            const healValue=getRandomValue(8,20)
            this.logs.push('HEAL PLAYER '+this.playerHealth)

            if((this.playerHealth + healValue )>100){
                this.playerHealth=100
            }else{
                this.playerHealth += healValue
            }
            console.logs(this.playerHealth, ' ', this.monsterHealth)
            this.attackPlayer()
         },
         surrender(){
            this.playerHealth=0;
            this.logs.push('SURRENDERED')
         }
    }
}).mount('#game')