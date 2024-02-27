// let random=math.random();
// if (random<0.5){
//     console.log("your number is less than 0.5")
//     console.log(random);
// }
// if (random<0.5){
//     console.log("your number is less than 0.5")
//     console.log(random);
// }

// const dayofweek='satureday';
// if (dayofweek ==='monday'){
//     console.log("ughhh i hate monday!!!")
// }else if(dayofweek==='satureday'){
//     console.log("ohhh i like satureday")
// }else if(dayofweek==='friday'){
//     console.log("ohhh i love friday")
// }

// 0-5 free
// 5-10 $10
// 10-65 adult $20
// 65 $10


// const age=45;
// if (age <5){
//     console.log("your are a baby,its free for you")
// }else if(age <10){
//     console.log("your are a child,you pay $10")
// }else if(age <65){
//     console.log("your are adult,you pay $20")
// }

// const password =prompt("please enter a new password")

// if(password.length >= 6){
//     console.log("LONG ENOUGH PASSWORD")
// } else{
//     console.log("PASSWORD TO SHORT! must be 6+ character")
// }

// if(password.indexOf(' ') ==-1){
//     console.log("good job! no spaces!")
// }else{
//     console.log("password can't contain spaces!")
// }

// const userInput=prompt("enter something!")
// if(userInput){
//     console.log("TRUTHY")
// }else{
//     console.log("FALSY")
// }
// if(0){
//     console.log("TRUTHY!")
// }else{
//     console.log("FALSY!")
// }


// const password=prompt("enter your password")
// if(password.length >=6 && password.indexOf(' ') === -1){
//     console.log("valid password!")
// }else{
//     console.log("incorrct format for password!")
// }


// const age=54
// if(age> 0 && age<5 || age >=65){
//     console.log("free")
// }else if(age > 5 && age < 10){
//     console.log("pay! $10")
// }else if(age > 10 && age < 65){
//     console.log("pay! $20")
// }else{
//     console.log("invalid age!")
// }

// let firstName = prompt("enter your name");
// if(!firstName){
//     firstName=prompt("try again!!!");
// }

// const age=56;
// if(!(age> 0 && age<5 || age >=65)){
//      console.log("you are not a baby or a senior")
// }

// const day=3;
// switch (day){
//      case 1:
//           console.log("MONDAY")
//      case 2:
//           console.log("TUESDAY")
//      case 3:
//           console.log("WEDNESDAY")
//      case 4:
//           console.log("THURSEDAY")
//      case 5:
//           console.log("FRIDAY")
// }

// if(day = 1){
//      console.log("MONDAY")
// }else if(day = 2){
//      console.log("TUESDAY")
// }else if(day = 3){
//      console.log("WEDNESDAY")
// }else if(day = 4){
//      console.log("THURSEDAY")
// }else if(day = 5){
//      console.log("FRIDAY")
// }else{
//      console.log("I DON'T KNOW THAT")
// }




// for (let i = 1;i<=10; i++){
//      console.log(i);
// }


// for (let i = 100; i <= 1000; i*= 10){
//      console.log(i);
// }



// for(let i = 0; i < Animal.length; i++){
//      console.log(i,animals[i]);
// }


// for(let i =animals.length -1;i>=0;i--){
//      console.log(animals[i])
// }



// let count = 0;
// while (count < 10){
//     console.log(count)
//     count++;
// }


// const SECRET = "BossBaby";

// let guess = prompt ("enter the secret code...");
//  while (guess !== SECRET)
//  {
//     guess = prompt ("enter the secret code...");
// }
// console.log("congrates you got the secret!!!")



// let input = prompt("hey, say something")
// while (true){
//     input = prompt(input);
//     if (input.toLowerCase() ==="stop coping me")break;
// }
// console.log("OK YOU WIN!!")



// let maximum = parseInt(prompt("enter the maximum number"));
// while(!maximum){
//     maximum = parseInt(prompt("enter the maximum number"))
// }
// const targetNum = math.floor(math.random() * maximum) + 1;
// console.log(targetNum);

// let guess =parseInt(prompt("enter your first guess!"))
// let attempts=1;
// while (guess !== targetNum){
//     if(guess ==='q')break;
//     attempts ++;
//     if(guess > targetNum){
//         guess = parseInt(prompt("too high! enter a new guess"))
//     } else{
//         guess = parseInt(prompt("too low! enter anew guess"))
//     }
// }
// if(guess ==='q'){
//     console.log("ok you quit")
// }else{
//     console.log("congrates you won!")
// console.log(`YOU GOT IT! it took you ${attempts} guesses`)
// }





// const subreddits= ['books','pencil','pen','chair','hen']
// for(let i =0;i < subreddits.length;i++){
//     console.log(`visit raddit.com/r/${subreddits[i]}`)
// }



// for(let subreddits of subreddits){
//     console.log(`visit raddit.com/r/${subreddits}`)
// }



// for(let char of "hello world"){
//     console.log(char)
// }


// const textScore={
//     john:70,
//     cena:80,
//     petter:85,
//     shawn:75,
//     nadia:90,
//     zain:95
// }
// for (let person in textScore){
//     console.log(`${person} Scored ${textScore[person]}`)
// }

// let total =0
// for (let Score of Object.values(textScore)){
//     total+=Score;
// }
// console.log(total / Score,length)



// let input = prompt("what would you like to do")
// const todos =['collect chickens egg','clean litter box']
// while(input !== 'quit' && input !== 'q'){
//     if(input ==='list'){
//         console.log('*************************')
//         for(let i =0; i < todos.length; i++){
//             console.log(`${i}:${todos[i]}`)
//         }
//         console.log('*************************')
//     }else if (input ==='new'){
//         const newtodo=prompt("ok what is the  todo?")
//         todos.push(newtodo);
//         console.log(`${newtodo}added to the list!`)
//     }else if(input ==='delete'){
//         const index=parseInt(prompt('ok! enter an index to delete'));
//         if(!number.isNaN(index)){
//         parseInt(index);
//         const deleted =console.log(index ,1);
//         console.log(`Ok, deleted${deleted[0]}`)
//     }else{
//         console.log('unknown index')
//     }
//     }
//     input = prompt("what would you like to do")
// }
// console.log("OK YOU QUIT THE APP!")



// let die1 = rollDie(6);
// let die2 = rollDie(8);
// let die3 = rollDie(10);
// let die4 = rollDie(12);
// let die5 = rollDie(14);
// let die6 = rollDie(16);



// function singSong(){
//     console.log("pa")
//     console.log("da")
//     console.log("nisa")
// }


// function greet(firstName, lastName){
//     console.log(`how are you, ${firstName} ${lastName[0]}`)
// }


// function repeat(str, numTime){
//     let result ='';
//     for(let i = 0;i < numTime; i++){
//         result += str;
//     }
//     console.log(result)
// }





// function add(x, y){
//     if(typeof x !== 'number' || typeof y !== 'number'){
//         return false;
//     }
//     let sum = x + y;
//     return sum;
// }



// let totaleggs=0;
// function collecteggs(){
//     totaleggs =6;
// }
// console.log(totaleggs)
// collecteggs();
// console.log(totaleggs)




// let bird ='chicken';
// function birdwatch(){
//     let bird ='parrot';
//     console.log(bird)
// }
// birdwatch()




// let radiuse =8;
// if(radiuse > 0){
//     const PI =3.457629;
//     let msg = 'hiii!'
// }
// console.log(radiuse)
// console.log(msg)


// for(let i =0; i < 5; i++){
//     var msg ="i love my family";
//     console.log(msg)
// }
// console.log(msg)
// console.log(i)



// function bankrobbery(){
//     const heroes =['spider-man','batman']
//     function cryForHelp(){
//         let color ='purple'
//         function inner(){
//         for(let hero of heroes){
//             console.log(`please help us, ${hero.toUpperCase()}`)
//             }
//         }
//     }
//     cryForHelp()
// }



// const add= function(x, y){
//     return x + y;
// }

// function callTwice(func){
//     func();
//     func();
// }


// function callTenTimes(f){
//     for(let i =0;i < 10; i++){
//         f()
//     }

// }


// function rollDie(){
//     const roll= math.floor(math.random() *6)+1
//     console.log(roll)
// }

// callTwice(rollDie)



// function makeMestryFunc(){
//     const rand= math.random()
//     if(rand > 0.5){
//         return function(){
//             console.log("congrates, I am a good function!")
//             console.log("YOU WIN A MILION DOLLARS!!")
//         }
//     }else{
//         return function(){
//             alert("you have been infected by a computer virus")
//             alert("stop trying to close this window!")
//             alert("stop trying to close this window!")
//             alert("stop trying to close this window!")
//             alert("stop trying to close this window!")
//             alert("stop trying to close this window!")
//         }
//     }
// }




// function makeBeetweenFunc(min,max){
//     return function(num){
//         return num >= min && num <= max;
//     }
// }




// const testRange = function(num){
//     return num >= 100 && num <= 200;
// }




// function isBeetween(num){
//     return num >=50 && num <= 100
// }


// function isBeetween(num){
//     return num >=1 && num <= 10
// }



// const myMath ={
//     PI:3.3967,
//     square(num){
//         return num * num;
//     },cube(num){
//         return num ** 3;
//     }
// }


// const cat ={
//     name: 'kitty',
//     color:'grey',
//     breed:'scottish fold',
//     meow(){
//         console.log("this is:", this)
//         console.log(`${this.name} says meowwwww`)
//     }
// }


// const meow = cat.meow;



// function yell(msg){
//     try{
//     console.log(msg.toUpperCase().repeat(3))
//     }catch(e){
//         console.log("please pass a string next time!")
//     }
// }



// const numbers=[1,2,3,4,5,6,7,8,9,10,11,12,113,14,15,16,17,18,19,20]
// const doubles= numbers.map(function(num){
//     return num * 2;
// })




// function print(element){
//     console.log(element)
// }

// number.forEach(function(el){
//     if(el % 2 ===0){
//     console.log(el)
//     }
// })



// const movies =[
//     {
//         title:'storm',
//         score:'95',
//         year:1992
//     },
//     {
//         title:'fighter',
//         score:'90',
//         year:2001
//     },
//     {
//         title:'mafia',
//         score:'90',
//         year:2015
//     },
//     {
//         title:'Gangster',
//         score:'85',
//         year:2019
//     },
//     {
//         title:'Ikhragia',
//         score:'100',
//         year:2022
//     }
// ]
// const title = movies.map(function(movie){
//     return movie.title.toUpperCase;
// })





// movies.forEach(function(movie){
//     console.log(`${movie.title}-${movie.score}/100`)
// })

// // const f = function(movie){

// // }



// const add = (x, y) => {
//     return x + y;
// }



// const square = num => {
//     return num * num;
// }



// const rollDie = () => {
//     return Math.floor(math.random() * 6) +1
// }



// const rollDie = () => (
//      Math.floor(math.random() * 6) +1
//     )



//     const add = (a, b) => a + b



// const newMovie = movies.map(function(movie){
//     return `${movie.title} - ${movie.score /10}`
// })



// const newMovies = movies.map(movie =>(
//     `${movie.title} - ${movie.score / 10}`
// ))



// console.log("hello!!...")
// setTimeout(()=>{
//     console.log(".....are you still there")
// },5000)
// console.log("goodbye!!")




// const id = setInterval(()=> {
//     console.log(Math.random())
// }, 3000);


// clearInterval(id)



// numbers.filter(n =>{
//     return n < 10
// })



// const goodMovies =movies.filter(m => m.score > 80)

// const goodTitles = goodMovies.map( m => m.title)

// movies.filter(m => m.score > 80).map(m => m.title)

// const badMovies =movies.filter(m => m.score < 70)

// const recentMovies =movies.filter(m => m.year < 2000)



// const exams=[80, 86, 78, 95, 87, 91, 82, 64, 72, 67]
// exams.every(score => score>= 50)


// movies.some(movies => movies > 2019)



// const prices = [19.99, 32.99,25.99,30.99,15.99]
// let total =0;
// for(let price of prices){
//     total += price
// }
// console.log(total)




// const total = prices.reduce((total, price)=>{
//     return total + price
// })



// const total = prices.reduce((total, price)=> total + price)




// const minPrice = prices.reduce((min, price) => {
//     if(price < min){
//     return price;
//     }
//     return min;
// })



// const highestRated = movies.reduce((bestmovie, currmovie) => {
//     if(currmovie.score > bestmovie){
//         return currmovie;
//     }
//     return bestmovie;
// })




// const evens =[2, 4, 6, 8]
// evens.reduce((sum, num) => sum + num, 27)



// const person = {
//     firstName: 'haider',
//     lastName: 'ali',
//     fullName:() => {
//         return `${this.firstName} ${this.lastName}`
//     },
//     shoutName: function(){
//         setTimeout (() => {
//             console.log(this)
//             console.log(this.fullName())
//         }, 3000)
//     }
// }



// function rollDie(numSides){
//     if(numSides === undefined){
//         numSides = 6
//     }
//     return Math.floor(math.random() * numSides) +1
// }



// function rollDie(numSides = 6){
//     return Math.floor(math.random() * numSides) +1
// }



// function greet( person,msg ="hey there",punc ='!'){
//     console.log(`${msg},${person},${punc}`)
// }


// const cats = ['blue','yellow','grey']
// const dogs = ['wicky','jimmy','miny']
// const allPets =[...cats, ...dogs]



// const feline = {legs: 4, family: 'azizi'}
// const canine = {isffury : true, family : 'tavakoli'}



// const dataFromForm = {
//     email:'dagedall@gmail.com',
//     password:'abcdefgh',
//     userName:'shashoge'
// }



// const newUser = {...dataFromForm, id: 2734, isadmin: false}



// function sum(){
//     return arguments.reduce((total, el) => total + el)
// }



// function sum(...nums){
//     return nums.reduce((total, el) => total + el)
// }




// function raceResault(gold, silver,...everyoneelse){
//     console.log(`GOLD MEDAL GOES TO: ${gold}`)
//     console.log(`silver medal goes to: ${silver}`)
//     console.log(`and thanks to every body else: ${everyoneelse}`)
// }



// const scores =[9876, 9765, 8976,7896,9812,9871,1975,7916,9031];
// const highScores =scores[0];
// const secondHighScores =scores [1];

// const [gold, silver, bronze] = scores;



// const user ={
//     email:'zakirxyz@gmail.com',
//     firstName:'zakir',
//     lastName:'hussein',
//     password:'abcdefghi...xyz',
//     born:'1954',
//     died:'2005',
//     city:'quetta',
//     state:'balochistan',
//     country : 'pakistan'
// }
// // const {email,firstName,lastName,password,born,died,city,state} = user;
// const {born: birthYear, died: deathYear ='deathMounth'} = user;




// function fullName(user){
//     return` ${user.firstName} ${user.lastName}`
// }




// function fullName(user){
//     const {firstName, lastName} = user;
//     return` ${firstName} ${lastName}`
// }



// movies.filter((movie) =>movie.score >= 90)
// movies.filter(({score}) =>score >= 90)


// movies.map(movie=>{
//     return`${movie.title} (${movie.year}) is rated ${movie.score}`
// })



// movies.map(({title,year,score})=>{
//     return`${title} (${year}) is rated ${score}`
// })




// const allImages = document.getElementsByTagName('img');
// for(let img of allImages){
//     console.log(img.src)
// }


// const links = document.querySelectorAll(p, a);


// for(let link of links){
//     console.log(link.href)
// }


// const links = document.querySelectorAll('a');

// for(let link of AllLinks){
//     link.innerText ='I am a link!!!!'
// }



// for(let link of links){
//     link.style.color ='rgb(0, 108, 134)';
//     link.style.textDecorationColor ='magenta';
//     link.style.textDecorationStyle ='wavy'
// }



// const btn = document.querySelector('#v2')

// btn.onclick = function (){
//     console.log("you clicked me!")
//     console.log("i hope it worked!!")
// }


// function scream (){
//     console.log("aaaaaaaahhhhhhhhh")
//     console.log("stop touching me")
// }

// btn.onmouseenter = scream;


// document.querySelector('h1').onclick = () => {
// alert ('you clicked the h1')
// }



// document.querySelector('#v3');
// btn.addEventListener('click', function() {
//     alert("clicked")
// })




// const button = document.querySelector('button');
// const h1 = document.querySelectorAll('h1');

// button.addEventListener('click', function () {
//     newColor = makeRandColor();
//     document.body.style.backgroundColor =newColor;
//     h1.innerText = newColor;
// })

// const makeRandColor = () => {
//     const r = Math.floor(Math.random() * 255);
//     const g = Math.floor(Math.random() * 255);
//     const b = Math.floor(Math.random() * 255);
//     return `rgb(${r}, ${g}, ${b})`;
// }


// const buttons = document.querySelectorAll('button');

// for (let button of buttons){
//     button.addEventListener('click', function(){
//     button.style.backgroundColor = makeRandColor();
//     button.style.color = makeRandColor();
//     })
// }

// const h1s = document.querySelectorAll('h1');

// for(let h1 of h1s){
//     h1.addEventListener('click', function() {
//         h1.style.backgrondColor = makeRandColor();
//         h1.style.color = makeRandColor();
//     })
// }



// document.querySelector('button').addEventListener('click', function(evt){
//     console.log(evt)
// })


// const input = document.querySelector('input');
// input.addEventListener('keydown', function(e){
//     console.log(e.key)
//     console.log(e.code)
// })

// input.addEventListener('keyup', function(){
//     console.log("KEYUP")
// })


// window.addEventListener('keydown', function(e){
//     switch(e.code){
//         case 'ArrowUp':
//             console.log("UP!")
//             break;
//         case 'ArrowDown':
//             console.log("DOWN!")
//             break;
//         case 'ArrowLeft':
//             console.log("LEFT!")
//             break;
//         case 'ArrowRight':
//             console.log("RIGHT!")
//             break;
//         default:
//             console.log("IGNORED!")
//     }
// })




// const form = document.querySelector("#shelterForm");
// const input = document.querySelector("#catName");
// const list = document.querySelector("#cats");
// form.addEventListener("submit", function(e) {
//     e.preventDefault();
//     const catName = input.value;
//     const newLI = document.createElement("LI");
//     newLI.innerText = catName;
//     list.append(newLI);
//     input.value = "";
// });



// const lis = document.querySelectorAll('li');
// for(let li of lis){
//     li.addEventListener('click', function(){
//         li.remove();
//     })
// }





// const tweetForm = document.querySelector('#tweetForm')
// const tweetsContainer = document.querySelector('#tweets')
// tweetForm.addEventListener('submit', function(e){
//     e.preventDefault();
//     // const username = document.querySelectorAll('input')[0];
//     // const password = document.querySelectorAll('input')[1];
//     const userNameInput = tweetForm.elements.userName;
//     const tweetInput = tweetForm.elements.tweet;
//     addTweet(userNameInput.value, tweetInput.value)
//     userNameInput.value ='';
//     tweetInput.value='';
// });

// const addTweet = (userName, tweet ) =>{
//     const newtweet = document.createElement('li');
//     const bTag = document.createElement('b');
//     bTag.append(userName)
//     newtweet.append(bTag);
//     newtweet.append(`- ${tweet}`)
//     tweetsContainer.append(newtweet);
// }

// tweetsContainer.addEventListener('click', function(e){
//     e.target.nodeName === 'li' && e.target.remove();
// })



// const input =document.querySelector('input');
// const h1 =document.querySelector('h1')
// // input.addEventListener('change', function(e){
// //     console.log("laaaaiii laaai llaai llaaaii lai  llaaii")
// // })
// input.addEventListener('input', function(e){
//     console.log("laaaaiii laaai llaai llaaaii lai  llaaii")
//     h1.innerText = input.value
// })




// const button = document.querySelector('#changeColor');
// const container = document.querySelector('#container');
// button.addEventListener('click', function(e){
//     container.style.backgroundColor = makeRandColor();
//     e.stopPropagation();
// })
// container.addEventListener('click',function(){
//     container.classList.toggle('hide');
// })
// const makeRandColor = () => {
//         const r = Math.floor(Math.random() * 255);
//         const g = Math.floor(Math.random() * 255);
//         const b = Math.floor(Math.random() * 255);
//         return `rgb(${r}, ${g}, ${b})`;
//     }





// const p1Button = document.querySelector('#p1Button');
// const p2Button = document.querySelector('#p2Button');
// const resetButton = document.querySelector('#reset');
// const p1Display = document.querySelector('#p1Display');
// const p2Display = document.querySelector('#p2Display'); 
// const winningScoreSelect = document.querySelector('#playto');

// let p1Score = 0;
// let p2Score = 0;
// let isGameOver = false;
// let winningScore = 3;
  

// p1Button.addEventListener('click', function(){
//   if(!isGameOver){
//     p1Score += 1;  

//   if(p1Score === winningScore){
//       isGameOver = true;
//       p1Display.classList.add('has-text-success')
//       p2Display.classList.add('has-text-danger')
//       p1Button.disabled = true;
//       p2Button.disabled = true;
//   }
//   p1Display.textContent = p1Score;

// }  
// })

// p2Button.addEventListener('click', function(){
//     if(!isGameOver){
//     p2Score += 1;  

//     if(p2Score === winningScore){
//       isGameOver = true;
//       p1Display.classList.add('has-text-danger')
//       p2Display.classList.add('has-text-success')
//       p1Button.disabled = true;
//       p2Button.disabled = true;
//   }
//     p2Display.textContent = p2Score;

// }  
// })
// winningScoreSelect.addEventListener('change', function(){
//   winningScore = parseInt(this.value);
//   reset();
// })

// resetButton.addEventListener('click', reset)


// function reset(){
//   isGameOver = false;
//   p1Score = 0;
//   p2Score = 0;
//   p1Display.textContent = 0;
//   p2Display.textContent = 0;
//   p1Display.classList.remove('has-text-success', 'has-text-danger')
//   p2Display.classList.remove('has-text-danger', 'has-text-success')
//   p1Button.disabled = false;
//   p2Button.disabled = false;
// }




// const multiply = (x, y) => x * y;
// const square = x => multiply (x, x);
// const isRightTriangle = (a, b, c) => (
//   square(a) + square(b) === square(c)
// )
// console.log("AFTER!")
// isRightTriangle(3, 4, 5)
// console.log("DONEE!!!")




// console.log("SENDING DATA FROM SERVER!")
// setTimeout(() => {
//     console.log("HERE IS YOUR DATA FROM SERVER!!")
// },3000)
// console.log("I am the end of the file")



// setTimeout(() => {
//     document.body.style.backgroundColor='red';
//     setTimeout(() => {
//         document.body.style.backgroundColor='yellow';
//         setTimeout(() => {
//             document.body.style.backgroundColor='orange';
//             setTimeout(() => {
//                 document.body.style.backgroundColor='green';
//                 setTimeout(() => {
//                     document.body.style.backgroundColor='purple';
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// },1000)


// delayedColorChange = (delay, newColor, doNext) => {
//     setTimeout(() => {
//         document.body.style.backgroungcolor = 'newColor'
//         doNext && doNext();
//     },delay)
// }

// delayedColorChange('red', 1000, () => {
//     delayedColorChange('yellow', 1000, () => {
//         delayedColorChange('orange', 1000, () => {
//             delayedColorChange('green', 1000, () => {
//                 delayedColorChange('black', 1000, () => {

//                 })
//             })
//         })
//     })
// })



// searchMovieAPI('amedues', () => {
//     setToMyDB('movies',() => {
//     //if its works run this:
//     }, () => {
//     //if it doesn't run this:
//     })
// }, () => {
//     //if API is down, or request failed 
// })



// const fakeRequestCallback = (url, success, failure) => {
//     const delay = Math.floor(Math.random() *2500) + 500;
//     setTimeout(() => {
//         if(delay > 4000){
//             failure('connection timeOut :(')
//         }else{
//             success(`here is your fake data from ${url}`)
//         }
//     },delay)
// }
// const fakeRequestPromise = (url, resolve, reject) => {
    
//         const delay = Math.floor(Math.random() * 250)+ 500;
//         setTimeout(( )=> {
//             if(delay > 4000){
//                 reject('connection timeOut :(')
//             }else{
//                 resolve(`Here is your fake data from ${url}`)
//             }
//         },delay)
// }




// const callback = fakeRequestCallback('book.com/page1',
//  function(responce){
//     console.log("it is worked!!!")
//     console.log(responce)
//     fakeRequestCallback('book.com/page2',
//      function(responce){
//         console.log("it is worked again!!!")
//         console.log(responce)
//     fakeRequestCallback('book.com/page3',
//     function(responce){
//         console.log("it is worked again!!!")
//         console.log(responce)
//     },function(err){
//         console.log("error (3rd request)!!!",err)
//     })
//     }, function(err){
//         console.log("error (2nd request)!!!",err)
//     })
// },function(err){
//     console.log("error!!!")
// })




// fakeRequestPromise('yelp.com/API/coffee/page1')
// .then(() =>{
//     console.log("WORKED!!! (page1)")
//     fakeRequestPromise('yelp.com/API/coffee/page2')
//     .then(() =>{
//         console.log("WORKED!!!(page2)")
//         fakeRequestPromise('yelp.com/API/coffee/page3')
//         .then(() =>{
//             console.log("WORKED!!!(page3)")
//         })
//         .catch(()=> {
//             console.log("error!!!(page3)")
//         })
//     })
//     .catch(() => {
//         console.log("error!!!(page2)")
//     })
// })
// .catch(()=>{
//     console.log("error(page1)")
// })

// fakeRequestPromise('yelp.com/API/coffee/page1')
// .then((data)=>{
//     console.log("worked!!!! (page1)")
//     console.log(data)
//     return fakeRequestPromise('yelp.com/API/coffee/page')
// })
// .then(()=>{
//     console.log("worked!!! (page2)")
//     console.log(data)
//     return fakeRequestPromise('yelp.com/API/coffee/page3')
// })
// .then (()=>{
//     console.log("worked!!!(page3)")
//     console.log(data)
// })
// .catch((err)=>{
//     console.log("oh no error!!!")
//     console.log(err)
// })





// const fakeRequest = (url) => {
//     return new Promise( (resolve, reject) =>{
//         const rand = Math.random();
//         setTimeout( () => {
//             if(rand > 0.7 ){
//               resolve('here is your fake data');  
//             }
//             reject('request error')
//         }, 1000)
//     })
// }

// fakeRequest('/dogs/1')
// .then( () => {
//     console.log("done with request!!")
//     console.log('data is:', data)
// })
// .catch( (err) => {
//     console.log("oh no!!", err)
// })


// const delayedColorChange = (newColor, delay, doNext) => {
//     setTimeout( () => {
//         document.body.style.backgroundColor = newColor;
//         doNext && doNext();
//     }, delay)
// }


// delayedColorChange('red', 1000, () => {
//     delayedColorChange('yellow', 1000, () => {
//         delayedColorChange('green', 1000, () => {
//             delayedColorChange('purple', 1000, () => {
//                 delayedColorChange('voilet', 1000 , () => {
//                     delayedColorChange('indigo', 1000, () => {

//                     })
//                 })
//             })
//         })
//     })
// });




// const delayedColorChange = (color, delay) =>{
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color;
//             resolve();
//         }, delay)
//     })
// }

// delayedColorChange('red', 1000)
// .then( () => delayedColorChange('orange', 1000))
// .then( () => delayedColorChange('blue', 1000))
// .then( () => delayedColorChange('brown', 1000))
// .then( () => delayedColorChange('purple', 1000))
// .then( () => delayedColorChange('yellow', 1000))
// .then( () => delayedColorChange('green', 1000))
// .then( () => delayedColorChange('pink', 1000))





// const sing = async () => {
//     return 'la la la la'
// }

// sing()
//     .then(data => {
//     console.log("promise resolved with:", data)
// })
//     .catch( error => {
//         console.log("oh no, promise rejected!!!")
//         console.log(error)
//     })


// const login = async (username, password) => {
//     if(!username || !password) throw 'missing credentials'
//     if(password === 'football') return 'WELLCOME!!!'
//     throw 'Invalid Password'
// }

// login('correct password = ','football')
// .then(msg => {
//     console.log("logged in")
//     console.log(msg)
// })
// .catch(err => {
//     console.log("ERROR!!!")
//     console.log(err)
// })




//  async function rainbow(){
//     await delayedColorChange('red', 1000)
//     await delayedColorChange('aqua', 1000)
//     await delayedColorChange('orange', 1000)
//     await delayedColorChange('pink', 1000)
//     await delayedColorChange('yellow', 1000)
//     await delayedColorChange('green', 1000)
//     await delayedColorChange('purple', 1000)
//  } 

//  rainbow().then(() => console.log("END OF RAINBOW!!!"))

// async function printrainbow () {
//     await rainbow();
//     console.log("END OF RAINBOW!!!!!!!!!!!!")
// }








// async function makeTwoRequests(){
//     try{
//     let data1 = await fakeRequest('/page1');
//     console.log(data1)
//     let data2 = await fakeRequest('/page2');
//     console.log(data2)
//     } catch(e) {
//         console.log("caught an error!!!")
//         console.log("error is:", e)
//     }
// }









// const req = new XMLHttpRequest(); 

// req.onload = function () {
//     console.log("IT LOADED!!!!!!");
//     const data = JSON.parse(this.responseText);
//     console.log(data.name ,data.height);
// };

// req.onerror = function () {
//     console.log("ERROR!!!!!");
//     console.log(this);
// };
// req.open("get", "https://swapi.dev/api/people/1/");

// req.send();









// fetch("https://swapi.dev/api/people/1/")
// .then((res) => {
//     console.log("resolved!!", res);
//     return res.json()
// })
// .then((data) => {
//     console.log(data)
//     return fetch("https://swapi.dev/api/people/1/")
// })
// .then((res) => {
//     console.log("second response resolved!!!")
//     return res.json();
// })
// .then((data) => {
//     console.log("JSON DONE!!!", data)
// })
// .catch((e) => {
//     console.log("error!!!", e)
// })








// const loadStarPeopleWars = async() => {
//     try{
//     const res = await fetch("https://swapi.dev/api/people/1/")
//     const data = await res.json();
//     console.log(data);
//     const res2 = await fetch("https://swapi.dev/api/people/2/")
//     const data2 = await res2.json();
//     console.log(data2);
//    } catch (e) {
//     console.log("error!!", e)
//    }
// }
// loadStarPeopleWars();








// axios.get("https://swapi.dev/api/people/1/").then((res) => {
//     console.log("response:",res)
// })
// .catch((e) => {
//     console.log("error!!!", e)
// })








// const getStarWarsPerson = async(id) => {
//     try{
//     const res = await axios.get(`https://swapi.dev/api/people/${id}/`)
//     console.log(res.data);
//      }catch(e){
//         console.log("error!!!", e)
//      }
//     }
// getStarWarsPerson(5);


  






// const jokes = document.querySelector('#jokes');
// const button = document.querySelector('button');

// const addNewJoke = async () => {
//     const jokeText = await getDadJoke();
//     const newLI = document.createElement('LI');
//     newLI.append(jokeText);
//     jokes.append(newLI);
// }
// const getDadJoke = async () => {
//     try{
//     const config = {header: {accept: 'application/json'} }
//     const res = await axios.get('https://icanhazdadjoke.com/', config)
//     return res.data.joke;
//     }catch (e) {
//         return "no jokes available sorry :("
//     }
// }

// button.addEventListener('click', addNewJoke);









// const form = document.querySelector('#searchForm')
// form.addEventListener('submit', async function(e) {
//     e.preventDefault();
//     const searchTerm = form.elements.query.value;
//     const config = {params: {q: searchTerm, isFunny: 'colt'}}
//     const res = await axios.get(`https://api.tvmaze.com/search/shows`, config)
//     makeImages(res.data)
//     form.element.query.value = '';
// })
// const makeImages = (shows) => {
//     for(let result of shows){
//         if(result.show.image){
//             const img = document.createElement('IMG');
//             img.src = result.show.image.medium;
//             document.body.append(img)
//         }
//     }
// }









// String.prototype.yell = function () {
//     return `OMG ${this.toUpperCase()} hahahahahhahahhahahhahaa!!!!!`
// }

// Array.prototype.pop = function () {
//     return 'sorry i want that element, i will never pop it off!!';
// }









// function hex(r, g, b){
//     return '#' +((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }

// function rgb(r,g,b){
//     return`rgb(${r}, ${g}, ${b})`
// }
 
// function makeColor (r,g,b){
//     const color = {};
//     color.r = r
//     color.g = g
//     color.b = b
//     color.rgb = function () {
//         const { r, g, b } = this;
//         return`rgb(${r}, ${g}, ${b})`
//     };
//     color.hex = function () {
//         const {r, g, b} = this;
          
//         return'#' +((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        
//     }
//     return color;
// }
// const firstColor = makeColor(35, 135, 35);









// function Color (r, g, b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
//     console.log(this)
// }

// Color.prototype.rgb = function(){
//     const {r, g, b} = this;
//     return` rgb( ${r}, ${g}, ${b})`;
// }

// Color.prototype.hex = function() {
//     const {r, g, b} = this;
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(8);
// }

// Color.prototype.rgba = function () {
//     const {r, g, b} = this;
//     return `rgba( ${r}, ${g}, ${b}, ${a})`
// }

// const color1 = new Color (21, 43, 656);
// const color2 = new Color (0, 0, 0);

// color2.hex()








// class Color {
//     constructor (r, g, b) {
//         this.r = r;
//         this.g = g;
//         this.b = b;
//     }
//     innerRGB () {
//         const {r, g, b} = this;
//         return `rgb(${r}, ${g}, ${b})`
//     }
//     rgb () {
//         return `rgb(${this.innerRGB()})`
//     }
//     rgba (a = 1.0) {
//         return `rgba(${this.innerRGB()}, ${a})`
//     }
//     hex () {
//         const {r, g, b} = this;
//         return(
//             '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
//         )
//     }
// }
// const red = new Color (21, 233, 654, 'Mr.Agha');










// class Pet {
//     constructor (name, age) {
//         console.log("IN PET CONSTRUCTOR!!!")
//         this.name = name;
//         this.age = age;
//     }
// }
// class Cat extends Pet{
//     constructor (name, age, livesleft = 9) {
//         console.log("IN CAT CONSTRUCTOR!!!!");
//         super (name, age);
//         this.livesleft = livesleft;
//     }
//     eat () {
//         return `${this.name}, is eating`;
//     }
//     meow () {
//         return 'meeeoow!!!';
//     }
// }

// class Dog extends Pet{
//     eat () {
//         return `${this.name}, is eating`;
//     }
//     bark () {
//         return `waaaaaw waaww!!!`
//     }
// }







