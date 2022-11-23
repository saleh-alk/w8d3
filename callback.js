class Clock {
    constructor(){
        const time = new Date()
        this.hours = time.getHours();
        this.minutes = time.getMinutes();
        this.seconds = time.getSeconds();
        this.printTime();
        setInterval(this._tick.bind(this), 1000);
    }

    printTime() {
       let currentTime = `${this.hours}:${this.minutes}:${this.seconds}`;
        console.log(currentTime);
    }

    _tick(){
        
        let thatSeconds = this.seconds + 1;
        let thatMinutes = this.minutes;
        let thatHours = this.hours;
        if (thatSeconds === 60){
            thatSeconds = 0;
            thatMinutes = this.minutes + 1;
        }

        if (thatMinutes === 60) {
            thatMinutes = 0;
            thatHours =  this.hours + 1;

        }

        if (thatHours === 24){
            thatHours = 0;
        }
        this.seconds = thatSeconds;
        this.minutes = thatMinutes;
        this.hours = thatHours;
        this.printTime()
    

    }


}

let time = new Clock()
// time.printType()

//setInterval(displayHello, 1000)