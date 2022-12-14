// alert('Hey loading');

function addNewWEField(){
    //console.log("adding New Field") 34:10

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control")
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder",'Enter your work experience')


     let weObj = document.getElementById("we");  //parent
     console.log(weObj);
     let weAddButtonObj = document.getElementById("weAddButton"); // child

     weObj.insertBefore(newNode,weAddButtonObj);
}
function addNewAQField(){

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control")
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder",'Enter your academics details')

    let aqObj = document.getElementById("aq");
    let aqAddButtonObj = document.getElementById("aqAddButton");
    aqObj.insertBefore(newNode,aqAddButtonObj);

}

///// Generate CV

function generateCV(){
    //console.log("Generating CV");

    let nameField = document.getElementById("nameField").value;
    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML=nameField;
    //let nameT2 = 

    // Direct krne wala hoon

    document.getElementById('nameT2').innerHTML=nameField;

    //contact
    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;

    // Address
    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;

    // Fb Field
    document.getElementById("fbT").innerHTML=document.getElementById("fbField").value;

    // Insta Field
    document.getElementById("instaT").innerHTML=document.getElementById("instaField").value;

    // Bit Bucket Field
    document.getElementById("repoT").innerHTML=document.getElementById("repoField").value;

      // Objective Field
      document.getElementById("objectiveT").innerHTML=document.getElementById("ObjectiveField").value;

    /// Work Experience

    let wes=document.getElementsByClassName("weField");  // wes-> work Experiences

    let str='';
     for(let e of wes){
        str=str+`<li> ${e.value}</li>`;
     }

     document.getElementById("weT").innerHTML=str;


     /// Academic Qualifications

    let aqs=document.getElementsByClassName("aqField");  // wes-> work Experiences

    let str1='';
     for(let e of aqs){
        str1=str1+`<li> ${e.value}</li>`;
     }

     document.getElementById("aqT").innerHTML=str1;

     // Code for Setting Profile Photo

     let file=document.getElementById("imgField").files[0];  // array hoti hai
     console.log(file);

     let reader = new FileReader();
     reader.readAsDataURL(file);
     console.log(reader.result);

     // set the img to Template
    reader.onloadend=function(){
        document.getElementById("imgTemplate").src=reader.result;
    }
     
     
document.getElementById("cv-form").style.display='none';

document.getElementById("cv-template").style.display='block';


}
// print cv 
function printCV(){
    // window.print();
    document.execCommand('print');

    
}