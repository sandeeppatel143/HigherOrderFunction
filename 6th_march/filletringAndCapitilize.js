let obj1={
    Book:"Ramayna",
    Author:"Tulsidas",
    PubliserYear:1987
}
let obj2={
    Book:"Mahabharat",
    Author:"Ved Vyash",
    PubliserYear:1999
}
let obj3={
    Book:"Gita",
    Author:"Krishna",
    PubliserYear:2010
}
let obj4={
    Book:"Rashmirathi",
    Author:"Ramdhari Singh Dinkar",
    PubliserYear:1952
}
let obj5={
    Book:"Panchvati",
    Author:"Maithilisharan Gupt",
    PubliserYear:2015
}
let array=[]
array.push(obj1,obj2,obj3,obj4,obj5)
console.log(array);
let Year=array.filter((filyear)=> filyear.PubliserYear<2010)
console.log(Year);
let authorName=Year.map((Upauthor)=>
    Upauthor.Author.toUpperCase())
console.log(authorName);