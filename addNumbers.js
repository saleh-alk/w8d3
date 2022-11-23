const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function addNumbers(sum, numsLeft, completionCallback){
    let tempSum = sum;
    if (numsLeft > 0) {
        reader.question("Enter a number:", (res) => {
            tempSum += parseInt(res);
            console.log(`You entered ${res}`)
            numsLeft--;
            sum = tempSum
            addNumbers(sum, numsLeft, completionCallback)
            
        })
        
    }
    if (numsLeft === 0){
        reader.close();
       return  completionCallback(sum)
    }
    
    
}
addNumbers(0, 3, sum => {
    console.log(`Total Sum: ${sum}`);
    // reader.close();
});


// function teaAndBiscuits () {
//     let first, second;
  
//     reader.question('Would you like some tea?', (res) => {
//       first = res;
//       console.log(`You replied ${res}.`);
//     });
  
//     reader.question('Would you like some biscuits?', (res) => {
//       second = res;
//       console.log(`You replied ${res}.`);
//     });
  
//     const firstRes = (first === 'yes') ? 'do' : 'don\'t';
//     const secondRes = (second === 'yes') ? 'do' : 'don\'t';
//     console.log(`So you ${firstRes} want tea and you ${secondRes} want biscuits.`);
//     reader.close();
//   }