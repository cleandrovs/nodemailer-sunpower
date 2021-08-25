function loadImage(url) {
    return new Promise(resolve => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = "blob";
        xhr.onload = function (e) {
            const reader = new FileReader();
            reader.onload = function (event) {
                const res = event.target.result;
                resolve(res);
            }
            const file = this.response;
            reader.readAsDataURL(file);
        }
        xhr.send();
    });
}

let signaturePad = null;

window.addEventListener('load', async () => {

    const canvas = document.querySelector("canvas");
    canvas.height = canvas.offsetHeight;
    canvas.width = canvas.offsetWidth;

    signaturePad = new SignaturePad(canvas, {});

    const form = document.querySelector('#form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let dateOfBirthday = document.getElementById('dateOB').value;
        let socialSecurity = document.getElementById('socialSecurity').value;
        let socialSecurity2 = document.getElementById('socialSecurity2').value;
        let socialSecurity3 = document.getElementById('socialSecurity3').value;
        let nombres = document.getElementById('nombre').value;
        let apellidos = document.getElementById('apellido').value;
        let direccion = document.getElementById('direccion').value;
        let telefono = document.getElementById('telefono').value;
        let ciudad = document.getElementById('city').value;
        let nameEmergency = document.getElementById('nameEmergency').value;
        let phoneEmergency = document.getElementById('phoneEmergency').value;
        let parentesco = document.getElementById('parentesco').value;
        let epilepsia = document.querySelector('input[name="epilepsia"]:checked').value;
        let diabetes = document.querySelector('input[name="diabetes"]:checked').value;
        let heartDis = document.querySelector('input[name="heartDis"]:checked').value;
        let stiff = document.querySelector('input[name="stiff"]:checked').value;
        let distrophy = document.querySelector('input[name="distrophy"]:checked').value;
        let trombo = document.querySelector('input[name="trombo"]:checked').value;
        let esclerosis = document.querySelector('input[name="esclerosis"]:checked').value;
        let surgery = document.querySelector('input[name="surgery"]:checked').value;
        let allergies = document.querySelector('input[name="allergies"]:checked').value;
        let artritis = document.querySelector('input[name="artritis"]:checked').value;
        let treatment = document.querySelector('input[name="treatment"]:checked').value;
        let lossVi = document.querySelector('input[name="lossVi"]:checked').value;
        let palsy = document.querySelector('input[name="palsy"]:checked').value;
        let hernia = document.querySelector('input[name="hernia"]:checked').value;
        let parkinson = document.querySelector('input[name="parkinson"]:checked').value;
        let otherMed = document.querySelector('input[name="otherMed"]:checked').value;

        generatePDF(nombres, apellidos, direccion, telefono, ciudad, socialSecurity, socialSecurity2, socialSecurity3,
            dateOfBirthday, nameEmergency, phoneEmergency, parentesco, epilepsia, diabetes, heartDis, stiff, distrophy,
            trombo, esclerosis, surgery, allergies, artritis, treatment, lossVi, palsy, hernia, parkinson, otherMed);
    })

});

async function generatePDF(nombres, apellidos, direccion, telefono, ciudad, socialSecurity, socialSecurity2, socialSecurity3, dateOfBirthday,
    nameEmergency, phoneEmergency, parentesco, epilepsia, diabetes, heartDis, stiff, distrophy, trombo, esclerosis, surgery,
    allergies, artritis, treatment, lossVi, palsy, hernia, parkinson, otherMed) {
    const image = await loadImage("./forms/form-01.png");
    const image2 = await loadImage("./forms/form-02.png");
    const image3 = await loadImage("./forms/form-03.png");
    const image4 = await loadImage("./forms/form-04.png");
    const image5 = await loadImage("./forms/form-05.png");
    const image6 = await loadImage("./forms/form-06.png");
    const image7 = await loadImage("./forms/form-07.png");
    const image8 = await loadImage("./forms/form-08.png");
    const image9 = await loadImage("./forms/form-09.png");
    const image10 = await loadImage("./forms/form-10.png");
    const image11 = await loadImage("./forms/form-11.png");
    const image12 = await loadImage("./forms/form-12.png");
    const image13 = await loadImage("./forms/form-13.png");
    const image14 = await loadImage("./forms/form-14.png");
    const image15 = await loadImage("./forms/form-15.png");
    const image16 = await loadImage("./forms/form-16.png");
    const image17 = await loadImage("./forms/form-17.png");
    const image18 = await loadImage("./forms/form-18.png");
    const image19 = await loadImage("./forms/form-19.png");
    const image20 = await loadImage("./forms/form-20.png");


    const signatureImage = signaturePad.toDataURL();

    const pdf = new jsPDF('p', 'pt', 'letter');
    const date = new Date();
    const fulldate = date.getUTCDate().toString() + '-' + (date.getUTCMonth() + 1).toString() + '-' + date.getUTCFullYear().toString();
    //------------------------comienzo del documento página uno--------------
    pdf.addImage(image, 'PNG', 0, 0, 565, 792);
    pdf.text(nombres, 350, 158);
    pdf.text(apellidos, 120, 158);
    pdf.text(direccion, 140, 200);
    pdf.text(ciudad, 180, 242);
    pdf.text(telefono, 150, 278);
    pdf.text(socialSecurity + '-' + socialSecurity2 + '-' + socialSecurity3, 170, 318);
    pdf.text(dateOfBirthday, 150, 346);
    pdf.text(nameEmergency, 140, 435);
    pdf.text(phoneEmergency, 140, 470);
    pdf.text(parentesco, 210, 500);

    //-------------------------------------------------------------------------------------------------------------------------------------------
    //segunda página 
    pdf.addPage();
    pdf.addImage(image2, 'PNG', 0, 0, 565, 792);
    //--------------------------------------Tercera Página-----------------------------------------------------------------
    pdf.addPage();
    pdf.addImage(image3, 'PNG', 0, 0, 565, 792);
    if (parseInt(epilepsia) === 0) {
        pdf.circle(220, 242, 6, 'FD');
    } else {
        pdf.circle(163, 242, 6, 'FD');
    }
    if (parseInt(diabetes) === 0) {
        pdf.circle(220, 287, 6, 'FD');
    } else {
        pdf.circle(163, 287, 6, 'FD');
    }
    if (parseInt(heartDis) === 0) {
        pdf.circle(220, 328, 6, 'FD');
    } else {
        pdf.circle(163, 328, 6, 'FD');
    }
    if (parseInt(stiff) === 0) {
        pdf.circle(220, 368, 6, 'FD');
    } else {
        pdf.circle(163, 368, 6, 'FD');
    }
    if (parseInt(distrophy) === 0) {
        pdf.circle(220, 412, 6, 'FD');
    } else {
        pdf.circle(163, 412, 6, 'FD');
    }
    if (parseInt(trombo) === 0) {
        pdf.circle(220, 452, 6, 'FD');
    } else {
        pdf.circle(163, 452, 6, 'FD');
    }
    if (parseInt(esclerosis) === 0) {
        pdf.circle(220, 492, 6, 'FD');
    } else {
        pdf.circle(163, 492, 6, 'FD');
    }
    if (parseInt(surgery) === 0) {
        pdf.circle(220, 537, 6, 'FD');
    } else {
        pdf.circle(163, 537, 6, 'FD');
    }
    //columna derecha
    if (parseInt(allergies) === 0) {
        pdf.circle(528, 242, 6, 'FD');
    } else {
        pdf.circle(471, 242, 6, 'FD');
    }
    if (parseInt(artritis) === 0) {
        pdf.circle(530, 287, 6, 'FD');
    } else {
        pdf.circle(471, 287, 6, 'FD');
    }
    if (parseInt(treatment) === 0) {
        pdf.circle(530, 328, 6, 'FD');
    } else {
        pdf.circle(471, 328, 6, 'FD');
    }
    if (parseInt(lossVi) === 0) {
        pdf.circle(530, 373, 6, 'FD');
    } else {
        pdf.circle(471, 373, 6, 'FD');
    }
    if (parseInt(palsy) === 0) {
        pdf.circle(530, 413, 6, 'FD');
    } else {
        pdf.circle(471, 413, 6, 'FD');
    }
    if (parseInt(hernia) === 0) {
        pdf.circle(530, 455, 6, 'FD');
    } else {
        pdf.circle(471, 455, 6, 'FD');
    }
    if (parseInt(parkinson) === 0) {
        pdf.circle(530, 494, 6, 'FD');
    } else {
        pdf.circle(471, 494, 6, 'FD');
    }
    if (parseInt(otherMed) === 0) {
        pdf.circle(530, 539, 6, 'FD');
    } else {
        pdf.circle(471, 539, 6, 'FD');
    }
    //-----------------------------------Cuarta Página--------------------------------------------------------------------
    pdf.addPage();
    pdf.addImage(image4, 'PNG', 0, 0, 565, 792);
    pdf.addImage(signatureImage, 'PNG', 200, 340, 100, 30);
    pdf.text(fulldate, 385, 360);

    //-------------------------------- Página 17-------------------------------------------------------------------
    pdf.addPage();
    pdf.addImage(image17, 'PNG', 0, 0, 565, 792);
    pdf.addImage(signatureImage, 'PNG', 80, 670, 270, 30);
    pdf.setFontSize(10);
    pdf.text(nombres, 100, 115);
    pdf.text(apellidos, 280, 115);
    pdf.text(direccion, 100, 148);
    pdf.text(ciudad, 100, 185);



    //------------------------------almacenar el archivo localmente----------------------------------------------
    //pdf.save(nombres.replace(/ /g, "") + fulldate + ".pdf");

    let string = pdf.output('datauristring');
    /*var embed = "<embed width='100%' height='100%' src='" + string + "'/>"
    var x = window.open();
    x.document.open();
    x.document.write(embed);
    x.document.close();*/
    console.log(string);
    //--------------------------------------Sendemail----------------------------
    /* Email.send({
         Host: "smtp.mailtrap.io",
         Username: "240097ebef158a",
         Password: "982d5e7f287d11",
         To: 'soporteeglobalmzls@gmail.com',
         From: "sunpowerform@gmail.com",
         Subject: "hola" + nombres,
         Body: "cualquier cosa de body",
         Attachments: [
             {
                 name: apellidos + ".png",
                 path: "https://networkprogramming.files.wordpress.com/2017/11/smtpjs.png"
             }]
     }).then(
         message => alert(message)
     );*/

}

module.exports = string;