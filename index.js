let total=0;
let count=0;
let paper1mark,paper2mark,paper3mark,paper4mark,paper5mark,paper6mark,paper7mark,paper8mark;
const words=new Map([
    [0,"Zero"],
    [1,"One"],
    [2,"Two"],
    [3,"Three"],
    [4,"Four"],
    [5,"Five"],
    [6,"Six"],
    [7,"Seven"],
    [8,"Eight"],
    [9,"Nine"]
]);
function word(value){
        let rem;
        let placeholder=100;
        let wordval="";
        for(let j=0;j<3;j++)
        {
           rem=Math.floor(value%10);
           wordval= (words.get(rem))+" "+wordval;
           console.log(words.get(rem));
           value/=10;
        }
        console.log(wordval)
        return wordval;
}
function numbers(value){
    return (value>=100?value:value<10?'00'+value:'0'+value);
}

let paper1 = document.getElementById('theory1').onchange=()=>{
    if(100>=document.getElementById('theory1').value && 0<=document.getElementById('theory1').value){
        total+=
        Number(document.getElementById('theory1').value);
        totalval();
        count+=1;
        document.getElementById('total1').innerHTML=numbers(Number(document.getElementById('theory1').value));
        paper1mark=Number(document.getElementById('theory1').value);
        document.getElementById('total_word1').innerHTML=word(paper1mark);
    }
    
}
let paper2 = document.getElementById('theory2').onchange=()=>{
    if(100>=document.getElementById('theory2').value && 0<=document.getElementById('theory2').value){
        total+= Number(document.getElementById('theory2').value);
        totalval();
        count+=1;
        document.getElementById('total2').innerHTML=numbers(Number(document.getElementById('theory2').value));
        paper2mark=Number(document.getElementById('theory2').value);
        document.getElementById('total_word2').innerHTML=word(paper2mark);
    }
    
}
let paper3 = document.getElementById('theory3').onchange=()=>{
    if(100>=document.getElementById('theory3').value && 0<=document.getElementById('theory3').value){
        total+= Number(document.getElementById('theory3').value);
        totalval();
        count+=1;
        document.getElementById('total3').innerHTML=numbers(Number(document.getElementById('theory3').value));
        paper3mark=Number(document.getElementById('theory3').value);
        document.getElementById('total_word3').innerHTML=word(paper3mark);
    }
    
}
let paper4 = document.getElementById('theory4').onchange=()=>{
    if(100>=document.getElementById('theory4').value && 0<=document.getElementById('theory4').value){
        total+= Number(document.getElementById('theory4').value);
        totalval();
        count+=1;
        document.getElementById('total4').innerHTML=numbers(Number(document.getElementById('theory4').value));
        paper4mark=Number(document.getElementById('theory4').value);
        document.getElementById('total_word4').innerHTML=word(paper4mark);
    }
   
}
let paper5 = document.getElementById('theory5').onchange=()=>{
    if(100>=document.getElementById('theory5').value && 0<=document.getElementById('theory5').value){
        total+= Number(document.getElementById('theory5').value);
        totalval();
        count+=1;
        document.getElementById('total5').innerHTML=numbers(Number(document.getElementById('theory5').value));
        paper5mark=Number(document.getElementById('theory5').value);  
        document.getElementById('total_word5').innerHTML=word(paper5mark);
    }
    
}
let paper6 = document.getElementById('practical1').onchange=()=>{
    if(100>=document.getElementById('practical1').value && 0<=document.getElementById('practical1').value){
        total+= Number(document.getElementById('practical1').value);
        totalval();
        count+=1;
        document.getElementById('total6').innerHTML=numbers(Number(document.getElementById('practical1').value));
        paper6mark=Number(document.getElementById('practical1').value);
        document.getElementById('total_word6').innerHTML=word(paper6mark);
    }
    
}
let paper7 = document.getElementById('practical2').onchange=()=>{
    if(100>=document.getElementById('practical2').value && 0<=document.getElementById('practical2').value){
        total+=Number(document.getElementById('practical2').value);
        totalval();
        count+=1;
        document.getElementById('total7').innerHTML=numbers(Number(document.getElementById('practical2').value));
        paper7mark=Number(document.getElementById('practical2').value);
        document.getElementById('total_word7').innerHTML=word(paper7mark);
    }
    
}
let paper8 = document.getElementById('practical3').onchange=()=>{
    if(100>=document.getElementById('practical3').value && 0<=document.getElementById('practical3').value){
        total+=Number(document.getElementById('practical3').value);
        count+=1;
        document.getElementById('total8').innerHTML=numbers(Number(document.getElementById('practical3').value));
        paper8mark=Number(document.getElementById('practical3').value);
        document.getElementById('total_word8').innerHTML=word(paper8mark);
        totalval();
    }
   
}

 
function totalval()
{ 
 if((paper1mark!=null &&paper2mark!=null &&paper3mark!=null &&paper4mark!=null &&paper5mark!=null &&paper6mark!=null &&paper7mark!=null &&paper8mark!=null)&&
    (!isNaN(paper1mark||paper2mark||paper3mark||paper4mark || paper5mark ||  paper6mark||paper7mark||paper8mark))){
        document.getElementById('grand_total').innerHTML=numbers(total);
        let percentege = ((total/8).toFixed(2));
        document.getElementById('percentege').innerHTML=percentege+'%';
        document.getElementById("grand_total_word").innerHTML=word(total);
 if(paper1mark>=50 &&paper2mark>=50 &&paper3mark>=50 &&paper4mark>=50 &&paper5mark>=50 &&paper6mark>=50 &&paper7mark>=50 &&paper8mark){
    let grade = document.getElementById('grade');
    let result=document.getElementById('pass');
    result.innerHTML="Pass";
    if(percentege>=95)
          grade.innerHTML='O';
    else if(percentege>=90)
        grade.innerHTML='A++';
   else if(percentege>=80)
    grade.innerHTML='A';
   else if(percentege>=70)
    grade.innerHTML='B++';
   else if(percentege>=60)
    grade.innerHTML='B';
   else if(percentege>=50)
    grade.innerHTML='C';
  }
  else{
    let grade = document.getElementById('grade');
    let result=document.getElementById('pass');
    result.innerHTML="Fail";
    grade.innerHTML='U';
  }
    }

}
