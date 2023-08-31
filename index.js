let card =['a','2','3','4','5','6','7','8','9','10','j','q','l']
// ! shuffle
// shuffle(card)
// // console.log(card[0])

// function shuffle(array){
//     let currentIndex = array.length;
//     while(currentIndex != 0){
//         let randomIndex = Math.floor(Math.floor(Math.random() * array.length))
//         currentIndex -=1;
//         console.log(currentIndex + 'we ' + randomIndex + 'rand')
//         // console.log(randomIndex)
//         let temp = array[currentIndex]
//         array[currentIndex]= array[randomIndex]
//         array[randomIndex] =temp
//     }
//     return array
// }


// const car ={
//     model:'nisam',
//     color:'blue',
//     year:'2003',
//     drive:function(){
//         console.log('you drive car')
//     },
//     brake:function(){
//         console.log('you steo om car')
//     },
// }
// const car2 ={
//     model:'toyota',
//     color:'pink',
//     year:'2043',
//     drive:function(){
//         console.log('you drive car')
//     },
//     brake:function(){
//         console.log('you steo om car ')
//     },
// }

// console.log(car.year)
// car.brake()\\\



// class Player{
//     score =0
//     constructor(){}
//     pause(){
//         console.log(`you pause the gane`)
//     }
//        exit(){
//         console.log(`you exit the gane`)
//     }
// }



// const player1 =new Player()
// const player2 =new Player()
// const player3 =new Player()
// const player4=new Player()
// console.log(player1.score +=2)
// console.log(player1.score +=2)
// player1.pause()
// player1.exit()


// class Student{
//     static numberOfStudent =0
//     constructor(name,age,gpa){
//     this.name = name
//     this.age = age
//     this.gpa = gpa
//     Student.numberOfStudent +=1
//     }
//  study(){
//     console.log(`${this.name } is studying`)
//  }
// }
// console.log(Student)

// const student1 = new Student('folly',5,2.3)
// const student2 = new Student('babs',15,5.3)
// console.log(Student.numberOfStudent)

// console.log(student1.name)
// student1.study()
// class Animal{
//     alive =true; 
//     eat(){
//         console.log( `this ${this.name} can eat`)
//     }
//     sleep(){
//         console.log( `this ${this.name} can slep`)
//     }
// }

// class Rabbit extends Animal{
    
//     name='rabit'
    
//     run(){
//         console.log( `this ${this.name} can run`)
//     }
// }
// class Fish extends Animal{

//     name='fish'

//     swim(){
//         console.log( `this ${this.name} can swim`)
//     }
// }
// class Hwak{

//     name='hawk'
//     fly(){
//         console.log( `this ${this.name} can flying`)
//     }
// }
// class Car{
//   constructor(power){
//     this._power =power;
//     this._gas = 50
//   }
//   get power(){
//     return `${this._power}hp`
//   }
//   get gas(){
//     return `${this._power}l (${this.gas /50*100}%)`
//   }
//   set gas (value){
//     this._gas =value
//   }
    
// }

// const car = new Car(200)
// // console.log(car.power)
// console.log(car.power=300)
// console.log(car.gas=300)

// const car ={
//     name:'folly',
//     class:'dg',
//     earn:'10'
// }
// console.log(car)
// display(car,'babs')
// function display(a,b){
//     console.log(a.name=b)
// }
// console.log(car)

// class Card{
//      constructor(value,suit){
//         this.value=value
//         this.suit =suit
//      }
// }


// console.log(new Date(2023,0,1,2,3,4,5))


// const promise = new Promise((res,rej)=>{
//     let file= false
// //     try{
// //         res()
// //     }catch(error){
// //   console.log(error)
// //     }

//   if(file){
//     res('file loaded')
//   }else{
//     rej('file not load')
//   }
// })
// promise.then(val =>console.log(val))
// .catch((err)=>console.log(err))
// .finally(()=>console.log('done'))


// async function Load (){
    // let fileload = false;
    //  if(fileload){
    //     return 'file loaded'
    //  }else{
    //     throw 'file mot loaded'
    //  }
// }

// Load().then(val =>console.log(val))
// .catch(err =>console.log(err))

async function Load (){
    let fileload = false;
    if(fileload){
       return 'file loaded'
    }else{
       throw 'file mot loaded'
    }
  
}
start()
async function start(){
    try{
        let me = await Load()
        console.log(me)
    }catch(e){
        console.log(e)
    }
}