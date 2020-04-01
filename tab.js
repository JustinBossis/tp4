function sum1(numbers){
    let result = 0;
    for(let n of numbers){
        result += n;
    }
    return result;
}

function sum2(numbers){
    let result = 0;
    for(let i = 0; i < numbers.length; i++){
        result += numbers[i];
    }
    return result;
}

function longestWord(words){
    let result = "";
    for(word of words){
        if(word.length > result.length){
            result = word;
        }
    }
    return result;
}

function range(min, max, step){
    let result = [];
    for(let i = min; i <= max; i+=step){
        result.push(i);
    }
    return result;
}

function nbOccurences(wordList, word){
    let result = 0;
    for(w of wordList.split(" ")){
        if(w == word){
            result++;
        }
    }
    return result;
}

function flatten2D(array){
    let result = [];
    for(let arr of array){
        for(let nb of arr){
            result.push(nb);
        }
    }
    return result;
}

function ex6(){
    let tab = ["Bob", "Julien", "Roger"];
    console.log(tab.join(", "));
    tab.pop();
    tab.push("Justin");
}

function ex7(){
    let tab = [];
    tab.push([" ",1,2,3,4,5,6,7,8,9]);
    for(let i = 1; i < 10; i++){
        let ligne = [];
        ligne.push(i);
        for(let j =1; j < 10; j++){
            ligne.push(i*j);
        }
        tab.push(ligne);
    }
    console.log(tab.join("\n"));
}

function chiffrementCesar(message, decalage){
    let result = "";
    for(let i = 0; i < message.length; i++){
        if(message[i] != " "){
            if ((message.charCodeAt(i) >= 65) && (message.charCodeAt(i) <= 90)){
                result += String.fromCharCode((message.charCodeAt(i)-65+decalage)%26+65);
            }else if ((message.charCodeAt(i) >= 97) && (message.charCodeAt(i) <= 122)){
                result += String.fromCharCode((message.charCodeAt(i)-97+decalage)%26+97);
            }
        }else{
            result += " ";
        }
    }
    return result;
}

function dechiffrementCesar(message, decalage){
    let result = "";
    for(let i = 0; i < message.length; i++){
        if(message[i] != " "){
            if ((message.charCodeAt(i) >= 65) && (message.charCodeAt(i) <= 90)){
                let dec = message.charCodeAt(i)-65-decalage;
                if(dec<0){
                    dec+=26;
                }
                result += String.fromCharCode(dec%26+65);
            }else if ((message.charCodeAt(i) >= 97) && (message.charCodeAt(i) <= 122)){
                let dec = message.charCodeAt(i)-97-decalage;
                if(dec<0){
                    dec+=26;
                }
                result += String.fromCharCode(dec%26+97);
            }
        }else{
            result += " ";
        }
    }
    return result;
}

function chiffrementViginere(message, decalage){
    let result = "";
    let tabCle = [];
    while(decalage >= 1){
        tabCle.unshift(Math.trunc(decalage%10));
        decalage = Math.trunc(decalage/10);
    }
    let posCle = 0;
    for(let i = 0; i < message.length; i++){
        if(message[i] != " "){
            if ((message.charCodeAt(i) >= 65) && (message.charCodeAt(i) <= 90)){
                result += String.fromCharCode((message.charCodeAt(i)-65+tabCle[posCle])%26+65);
            }else if ((message.charCodeAt(i) >= 97) && (message.charCodeAt(i) <= 122)){
                result += String.fromCharCode((message.charCodeAt(i)-97+tabCle[posCle])%26+97);
            }
            posCle++;
            if(posCle >= tabCle.length){
                posCle = 0;
            }
        }else{
            result += " ";
        }
    }
    return result;
}

function dechiffrementViginere(message, decalage){
    let result = "";
    let tabCle = [];
    while(decalage >= 1){
        tabCle.unshift(Math.trunc(decalage%10));
        decalage = Math.trunc(decalage/10);
    }
    let posCle = 0;
    for(let i = 0; i < message.length; i++){
        if(message[i] != " "){
            if ((message.charCodeAt(i) >= 65) && (message.charCodeAt(i) <= 90)){
                let dec = message.charCodeAt(i)-65-tabCle[posCle];
                if(dec<0){
                    dec+=26;
                }
                result += String.fromCharCode(dec%26+65);
            }else if ((message.charCodeAt(i) >= 97) && (message.charCodeAt(i) <= 122)){
                let dec = message.charCodeAt(i)-97-tabCle[posCle];
                if(dec<0){
                    dec+=26;
                }
                result += String.fromCharCode(dec%26+97);
            }
            posCle++;
            if(posCle >= tabCle.length){
                posCle = 0;
            }
        }else{
            result += " ";
        }
    }
    return result;
}