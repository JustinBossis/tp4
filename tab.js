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