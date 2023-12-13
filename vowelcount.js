let vowel='aeiou';
function vowelCount(str){
    let count=0;
    for(const val of str){
        for(const v of vowel){
            if(val==v){
                count=count+1;
            }
        }
    }
    return count;
}
console.log(vowelCount("new"));