let res="";
function f9()
{
    console.log(9);
    document.getElementById("ij").innerText += 
              9;
              res+="9";
}
function f8()
{
    console.log(8);
    document.getElementById("ij").innerText += 
              8;
              res+="8"; 
}
function f7()
{
    console.log(7);
    document.getElementById("ij").innerText += 
              7;
              res+="7";
}
function f6()
{
    console.log(6);
    document.getElementById("ij").innerText += 
              6;
              res+="6";
}
function f5()
{
    console.log(5);
    document.getElementById("ij").innerText += 
              5;
              res+="5";
}
function f4()
{
    console.log(4);
    document.getElementById("ij").innerText += 
              4;
              res+="4";
}
function f3()
{
    console.log(3);
    document.getElementById("ij").innerText += 
              3;
              res+="3";
}
function f2()
{
    console.log(2);
    document.getElementById("ij").innerText += 
              2;
              res+="2";
}
function f1()
{
    console.log(1);
    document.getElementById("ij").innerText += 
              1;
              res+="1";
}
function f0()
{
    console.log(0);
    document.getElementById("ij").innerText += 
              0;
              res+="0";
}
function fdiv()
{
    console.log("/");
    document.getElementById("ij").innerText += 
              "/";
              res+="/";
}
function fmul()
{
    console.log("*");
    document.getElementById("ij").innerText += 
              "*";
              res+="*";
}
function fplus()
{
    console.log("+");
    document.getElementById("ij").innerText += 
              "+";
              res+="+";
}
function fminus()
{
    console.log("minus");
    document.getElementById("ij").innerText += 
              "-";
              res+="-";
}
function fdot()
{
    console.log(".");
    document.getElementById("ij").innerText += 
              ".";
}
function fequal()
{
    console.log(9);
    let x=document.getElementById("ij");
    console.log(res);
    let y=eval(res);
    document.getElementById("ij").innerText = 
    y;

}