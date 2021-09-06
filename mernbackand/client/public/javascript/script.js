var b=""
function myFunction(a
  )

  { 
    if(a=="clear"){
      b=""
    }
    
    if(a!="="){
    if (a=="+" || a=="-" || a=="x" ||a=="/" ||a=="%"){
      b=b+" "+a+" "
    }
    else if(a=="clear"){
      b.replace(b[b.length-1],"")
    }
    else{
      b+=a
    }
      document.getElementById("text").innerHTML =b;
  }
  var c=b.split(" ")
  var m=0
  if (a=="="){
    
    while(m <=c.length ){
      if (c.includes("%")){
        if (c[m]=="%"){
          var y=(Number(c[m-1])/ Number(c[m+1]))/100
          c[m-1]=String(y)
          c.splice(m,1)
          c.splice(m,1)
          m=0
        }
        }
      if (c.includes("/") && !(c.includes("%"))){
      if (c[m]=="/"){
        var y=Number(c[m-1]) / Number(c[m+1])
        c[m-1]=String(y)
        c.splice(m,1)
        c.splice(m,1)
        m=0
      }
      }
      else if (c.includes("x") && !(c.includes("/") || c.includes("%"))){
      if (c[m]=="x"){
        var y=Number(c[m-1]) * Number(c[m+1])
        c[m-1]=String(y)
        c.splice(m,1)
        c.splice(m,1)
        m=0
      }
    }
    else if (c.includes("+") && !(c.includes("x") || c.includes("/") || c.includes("%"))){
       if (c[m]=="+"){
        var y=Number(c[m-1]) + Number(c[m+1])
        c[m-1]=String(y)
        c.splice(m,1)
        c.splice(m,1)
        m=0
      }
    }
    else if (c.includes("-") && !(c.includes("+") || c.includes("x") || c.includes("/") || c.includes("%"))){
      if (c[m]=="-"){
        var y=Number(c[m-1]) - Number(c[m+1])
        c[m-1]=String(y)
        c.splice(m,1)
        c.splice(m,1)
        m=0
      }
    }
      m+=1
  }
  document.getElementById("text").innerHTML =c;
  }
    }