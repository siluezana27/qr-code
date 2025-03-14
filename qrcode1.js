
/*
function generer_code_qr() {
    let contentInput = document.getElementById('text').value;
    let qrcodeEspace = document.getElementById('qrcode');
    let error=document.getElementById("error")

     //Effacer le QRCode et du champs d'erreur
     error.innerHTML=""
        document.getElementById("qrcode").innerHTML = ""
        //validation
           const urlPattern = /^(https?:\/\/)[^\s/$.?#].[^\s]*$/
          if (!urlPattern.test(contentInput)) {
            error.innerHTML="url invalide"
          }else{

             //console.log(contentInput)
        //Genere moi le code QR
        let generer=document.getElementById("generer")
         generer.disabled=false
         new QRCode(qrcodeEspace,
            contentInput);
            document.getElementById('download').style.display = "inline-block"
          }   
}

function download(){
    let img = document.querySelector('#qrcode img');
    if (img) {
        let lien = document.createElement('a');
        console.log(lien)
        lien.href = img.src;
        lien.download = 'qr-code-maker.png';
        document.body.appendChild(lien);
        lien.click();
    }
}*/

function generer_code_qr() {
    let contentInput = document.getElementById('text').value;
    let qrcodeEspace = document.getElementById('qrcode');
    let error = document.getElementById("error");

    // Effacer le QRCode et le champ d'erreur
    error.innerHTML = "";
    qrcodeEspace.innerHTML = "";

    // Validation de l'URL
    const urlPattern = /^(https?:\/\/)[^\s/$.?#].[^\s]*$/;
    if (!urlPattern.test(contentInput)) {
        error.innerHTML = "URL invalide";
    } else {
        // Générer le QR Code
        new QRCode(qrcodeEspace, contentInput);

        // Activer le bouton de téléchargement
        document.getElementById('download').style.display = "inline-block";
    }
}

function download() {
    let qrcodeEspace = document.getElementById('qrcode');
    let img = qrcodeEspace.querySelector('img'); // Sélectionner l'image générée

    if (img) {
        let lien = document.createElement('a'); // Créer un lien pour le téléchargement
        lien.href = img.src; // Spécifier la source de l'image
        lien.download = 'qr-code.png'; // Nommer le fichier téléchargé
        document.body.appendChild(lien); // Ajouter temporairement le lien à la page
        lien.click(); // Simuler un clic pour télécharger
        document.body.removeChild(lien); // Supprimer le lien de la page
    } else {
        console.error("Aucune image trouvée pour le téléchargement.");
    }
}
