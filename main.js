
function virfEmail(email){
	var i, j, k, s=0;
	for(i=0;i<email.length;i++){
		if(email[i]=="@"){
			s+=1;
			k=i;
		}
		else if (email[i]=="."){
			j=i;
		}
	}
    var tst=false;
	if((k!==0)&& (s==1) &&(j>k+1)&&((email.includes(".com"))||(email.includes(".fr")))){
		tst= true;
	}
	return tst;
}
function validation(Nn){
	var m , lst= Nn.toUpperCase();
	for(m=0 ;m<Nn.length ; m++){
      if((lst.charCodeAt(m)<65)||(lst.charCodeAt(m)>90)||(lst.charCodeAt(m)!==32)){
		return false;}
	}
}

document.getElementById("Envoyer").addEventListener("submit",function(e){
    e.preventDefault();
    let nom=document.getElementById("nom").value;
    let adresse = document.getElementById("adresse").value;
    let prenom = document.getElementById("prenom").value;
    let age=document.getElementById("age").value;
	let email=document.getElementById("email").value;
	let n1 = document.getElementById("n1").value;
	let n2 = document.getElementById("n2").value;
	let title = document.getElementById("title").value;
    if (nom!=nom.toUpperCase()){
        alert('le nom doit etre en majuscule');
    }
	if(age<18)
		alert("Age mineur");
    let l= adresse.split('').length ;
    if(l>300){alert("fuasse adresse")};
    if (prenom[0]!=prenom[0].toUpperCase()) {
        alert('le prenom doit commancer par un majuscule');
    }
	if (virfEmail(email)==false){
		alert("faux Email")
	}
	let T=[n1,n2 ,title,nom,prenom];
	let j;
	for(j=0 ;j<T.length ; j++){
		if(validation(T[j])==false){alert('pas de caracteres speciaux');}
	}
})

