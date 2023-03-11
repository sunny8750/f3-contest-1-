//alert("hii")


function OpeningCeremony(){
    setTimeout(() => {
        let score = {"red":0,"blue":0,"green":0,"yellow":0}
       console.log("Let the games begin",score)
       
      }, 1000);
      Race100();
} 

OpeningCeremony();


//race
function Race100(){
    setTimeout(() => {
       let score = {
        "red": Math.floor( Math.random()*999 ) - 100,
        "blue":Math.floor( Math.random()*999 ) -100 ,
        "green":Math.floor( Math.random()*999 ) - 100 ,
        "yellow":Math.floor( Math.random()*999 ) - 100 
       }
       console.log(score)
       //checking the winnner
       let red = score.red
       let blue = score.blue
       let green = score.green
       let yellow = score.yellow
       //checking the winnner
       if(red>blue&&red>green&&red>yellow)
       console.log("winner of race"+" "+"red");
       else if(blue>red&&blue>green&&blue>yellow)
       console.log("winner of race"+" "+"blue")
       else if(green>red&&green>blue&&green>yellow)
       console.log("winner of race"+" "+"green")
       else if(yellow>red&&yellow>green&&yellow>blue)
       console.log("winner of race"+" "+"yellow")
    }, 3000);
    HighJump()
}


// function LongJump(){
//     const randomProperty = (score) => {
//         const keys = Object.keys(score);
//         let randomKey = keys[Math.floor(Math.random() * keys.length)];
        
//        // console.log(randomProperty) 
//     };
//     console.log(randomKey.value+150); 
// }


// LongJump();


//highjump 
function HighJump(){
    let pscore={"red":0,"blue":0,"green":0,"yellow":0}
       pscore = {
        red: Math.floor( Math.random()*999 ) - 100,
        blue:Math.floor( Math.random()*999 ) -100 ,
        green:Math.floor( Math.random()*999 ) - 100 ,
        yellow:Math.floor( Math.random()*999 ) - 100 
       }
      
        red = pscore.red
        blue = pscore.blue
        green = pscore.green
       yellow = pscore.yellow


    setTimeout(() => {

        let person = prompt("What colour secured the highest jump ?");
    
      if (person == null || person =="") {
           console.log("Event was cancelled");
        } else if (person=="red"){
       pscore.red.value=+100;
        }
        else if (person=="blue"){
        pscore.blue.value=+100;
        }
        else if (person=="green"){
        pscore.green.value=+100;
        }
        else if (person=="yellow"){
        pscore.yellow.value=+100;
        }
        console.log(pscore)
        //checking the winner 
        if(red>blue&&red>green&&red>yellow)
       console.log("winner of HighJump"+" "+"red");
       else if(blue>red&&blue>green&&blue>yellow)
       console.log("winner of HighJump"+" "+"blue")
       else if(green>red&&green>blue&&green>yellow)
       console.log("winner of HighJump"+" "+"green")
       else if(yellow>red&&yellow>green&&yellow>blue)
       console.log("winner of HighJump"+" "+"yellow")
        
       }, 5000);
       
}

//awardceremony
function AwardCeremony(){
    setTimeout(()=>{

   
    let pscore={"red":0,"blue":0,"green":0,"yellow":0}
    pscore = {
     red: Math.floor( Math.random()*999 ) - 100,
     blue:Math.floor( Math.random()*999 ) -100 ,
     green:Math.floor( Math.random()*999 ) - 100 ,
     yellow:Math.floor( Math.random()*999 ) - 100 
    }
   
     red = pscore.red
     blue = pscore.blue
     green = pscore.green
    yellow = pscore.yellow

    let score = {"red":0,"blue":0,"green":0,"yellow":0}
     red = score.red
     blue = score.blue
     green = score.green
     yellow = score.yellow
   
    let totalscoreofred = pscore.red + score.red;
    let totalscoreofblue = pscore.blue + score.blue;
    let totalscoreofgreen = pscore.green + score.green;
    let totalscoreofyellow = pscore.yellow + score.yellow;

    console.log("score of red"+ totalscoreofred)
    console.log("score of blue"+ totalscoreofblue)
    console.log("score of green"+ totalscoreofgreen)
    console.log("score of yellow"+ totalscoreofyellow)

//checking the total scored winner
    if(totalscoreofred > totalscoreofblue && totalscoreofred > totalscoreofgreen &&totalscoreofred > totalscoreofyellow)
    console.log("Red came first with"+" "+totalscoreofred);
    else if(totalscoreofblue > totalscoreofred && totalscoreofblue > totalscoreofgreen &&totalscoreofblue > totalscoreofyellow)
    console.log("blue came first with"+" "+totalscoreofblue)
    else if(totalscoreofgreen > totalscoreofred && totalscoreofgreen > totalscoreofblue &&totalscoreofgreen > totalscoreofyellow)
    console.log("green came first with"+" "+totalscoreofgreen)
    else if(totalscoreofyellow > totalscoreofred && totalscoreofyellow > totalscoreofgreen &&totalscoreofyellow > totalscoreofblue)
    console.log("yellow came first with"+" "+totalscoreofyellow)


    if(totalscoreofred < totalscoreofblue && totalscoreofred < totalscoreofgreen &&totalscoreofred < totalscoreofyellow)
    console.log("Red came last with"+" "+totalscoreofred);
    else if(totalscoreofblue < totalscoreofred && totalscoreofblue < totalscoreofgreen &&totalscoreofblue < totalscoreofyellow)
    console.log("blue came last with"+" "+totalscoreofblue)
    else if(totalscoreofgreen < totalscoreofred && totalscoreofgreen < totalscoreofblue &&totalscoreofgreen < totalscoreofyellow)
    console.log("green came last with"+" "+totalscoreofgreen)
    else if(totalscoreofyellow < totalscoreofred && totalscoreofyellow < totalscoreofgreen &&totalscoreofyellow < totalscoreofblue)
    console.log("yellow came last with"+" "+totalscoreofyellow)

},6000)
}
AwardCeremony();