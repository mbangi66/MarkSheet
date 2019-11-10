


function test(){

    var TotalMarks = 700;

    var LC= Number.parseInt(document.getElementById("LC").value);
    var BC  = Number.parseInt(document.getElementById("BC").value);
    var POM =Number.parseInt(document.getElementById("POM").value);
    var CS = Number.parseInt(document.getElementById("CS").value);
    var FA =Number.parseInt(document.getElementById("FA").value);
    var MOE =Number.parseInt(document.getElementById("MOE").value);
    var MI = Number.parseInt(document.getElementById("MI").value);

    var MO = LC + BC + POM + CS +FA +  MOE + MI;
    document.getElementById("marks").innerHTML = MO;
    
    var Percent = MO/TotalMarks * 100;

    document.getElementById("PC").innerHTML = Percent.toPrecision(4);

    
    if(LC<35||BC<35||POM<35||CS<35||FA<35||MOE<35||MI<35){
     document.getElementById("RS").innerHTML ="Fail";
    }
    else{ document.getElementById("RS").innerHTML ="Pass";
    };

    if(Percent>90)
    {document.getElementById("G").innerHTML="A";}
    else if (Percent>80 && Percent<90)
    {document.getElementById("G").innerHTML="B";}
    else if (Percent>70 && Percent<80)
    {document.getElementById("G").innerHTML="C";}
    else if (Percent>60 && Percent<70)
    {document.getElementById("G").innerHTML="D";}
    else if (Percent>=35 && Percent<60)
        {document.getElementById("G").innerHTML="E";};


    var form = document.getElementById("myForm");
    function handleForm(event) {
        event.preventDefault(); 
    } 
    form.addEventListener('submit', handleForm);

}

test();

// function reset(){
//     document.getElementById("myForm").reset();
// }

// reset();






