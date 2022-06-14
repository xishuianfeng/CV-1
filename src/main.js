let html = document.querySelector("#html");
let style = document.querySelector("#style");

let string = `
/*Hello,World*/
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}

/*直接慢慢的变出一个八卦图
  来一个球球*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*变黑白*/
#div1{
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%,rgba(0,0,0,1) 100%);
}
/*再要2个球*/
#div1::before{
    width:100px;
    height:100px;
    left:0;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background:#000;
    border-radius:50%;
}
#div1::after{
    width:100px;
    height:100px;
    left:0;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background:#fff;
    border-radius:50%;
}
/*再在里面搞个小球*/
#div1::before{
    background: rgb(255,255,255);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);

}
#div1::after{
    background: rgb(0,0,0);
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`;
let string2 = '';
let n = 0;

let step = () =>{
    setTimeout(() => {
        //是回车变br  不是回车不变
        if(string[n] === "\n"){
            string2 += string[n]+'<br>';
        }else if(string[n] === " "){
            string2 += string[n] + "&nbsp;";
        }else{
            string2 += string[n];
        }
       
        html.innerHTML = string2;
        style.innerHTML = string.substring(0,n);
        window.scrollTo(0,99999);
        html.scrollTo(0,99999);
        if ( n  < string.length-1){
            n = n + 1;
            step();
        }else {

        }
    }, 0);
}

step();


