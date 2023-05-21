function Anagrams(str1,str2){
    s=str1.toLowerCase();
    p=str2.toLowerCase();
    g=s.split('').sort().join('');
    i=p.split('').sort().join('');
    
    if(i==g){
        return true;
    }
}

str1="Study"
str2="Dusty"
console.log(Anagrams(str1,str2));
