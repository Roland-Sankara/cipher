var Alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var string = (input) =>{
    var newString = [];
    for (let position = 0; position< input.length; position++ ){
        letter = input.toUpperCase().charAt(position);
        //identify the space in input and place it in the array newstring.
        if (input.charAt(position) == ' '){
            newString.push(' ');
        }
        else if (Alpha.indexOf(letter) >= 13){
            let index = (Alpha.indexOf(letter) - 13);
            newString.push(Alpha[index]);
        } else{
            let index = (Alpha.indexOf(letter) + 13);
            newString.push(Alpha[index]);
        }
    }
console.log(newString.join(''));// join the Array elements
document.getElementById("outPut").innerHTML = newString.join('');
}
//string('uryyb jbeyq gur shgher vf va lbhe unaqf')