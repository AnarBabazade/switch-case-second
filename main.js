let a = prompt("emeliyyat edeceyiniz ilk reqemi daxil edin")
let b =prompt("+ - * /  bu emeliyyatlardan birini secin")
let c =prompt("emeliyyat edeceyiniz ikinci reqemi secin")
let d =a+c

switch(b){
    case "*" :{
        console.log(a*c);
        break;
    }
    case "+":{
        console.log(a+c);
        // a+c emeliyyati prompt icerisinde string kimi oxunur nece edim kimi riyazi emel kimi oxunsun?  
        break;
    }
    case "-":{
        console.log(a-c);
        break;
    }
    case "/":{
        console.log(a/c);
        break;
    }
    default:{
        console.log("xahis olunur reqem ve emeliyyatlardan istifade edin");
    }
}