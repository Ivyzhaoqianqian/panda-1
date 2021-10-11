let html = document.querySelector("#html")
let style = document.querySelector("#style")
let string = `
/* 你好，今天我来画一种动物
 * 这个动物是我国的国宝
 * 没错就是熊猫
 首先画熊猫的脸 */

#div1{
    border:3px solid black;
    height:130px;
    width:150px;
    border-radius:50%;  
}


/* 接下来是熊猫的耳朵*/

#div1::before{
    height:50px;
    width:60px;
    border-radius:50%;
    background:black;   
}

#div1::after{
    height:50px;
    width:60px;
    border-radius:50%;
    background:black;
}

/* 接下来是熊猫的眼睛*/

#div2{
    height:30px;
    width:50px;
    border-radius:50%;
    background:black; 
}

#div3{
    height:30px;
    width:50px;
    border-radius:50%;
    background:black;
}

#div2::before{
    height:10px;
    width:10px;
    border-radius:50%;
    background:white;
}

#div3::before{
    height:10px;
    width:10px;
    border-radius:50%;
    background:white;
}

/* 接下来是熊猫的鼻子和嘴巴*/

#div4{
    height:15px;
    width:25px;
    border-radius:50%;
    background:black;
}

#div5{
    height:30px;
    width:50px;
    border-radius:50%;
    border-bottom:1px solid black; 
}
`;

//string = string.replace(/\n/g, "<br>");
let string2 = '';
let n = 0;


let step = () => {
    setTimeout(() => {
        if (string[n] === "\n") {
            string2 = string2 + "<br>";
        } else {
            string2 = string2 + string[n];
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);
        if (n < string.length - 1) {
            n += 1;
            step();
        }
    }, 10);
};

step();