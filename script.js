const listkota = {
    'dki' : ['Jakarta Barat','Jakarta Pusat','Jakarta Selatan','Jakarta Timur','Jakarta Utara'],
    'banten' : ['Serang','Cilegon','Rangkasbitung','Kota Tangerang','Tangerang Selatan'],
    'westjava' : ['Bandung','Bogor','Depok','Bekasi','Cimahi'],
    'centraljava' : ['Semarang','Tegal','Brebes','Pekalongan','Salatiga'],
    'eastjava' : ['Surabaya','Kediri','Malang','Nganjuk','Blitar'],
    
}


function update(){
    var kota = document.getElementById("kota");
    var provinsi = document.getElementById("provinsi").value;
    
    if (provinsi == "jakarta"){
        kota.innerHTML = ''
        for (let i =0; i < listkota['dki'].length; i++){
            kota.innerHTML += `<option value="${listkota['dki'][i]}">${listkota['dki'][i]}</option>`
        }
    }
    else if (provinsi == "banten"){
        kota.innerHTML = ''
        for (let i =0; i < listkota['banten'].length; i++){
            kota.innerHTML += `<option value="${listkota['banten'][i]}">${listkota['banten'][i]}</option>`
        }
    }
    else if (provinsi == "jabar"){
        kota.innerHTML = ''
        for (let i =0; i < listkota['westjava'].length; i++){
            kota.innerHTML += `<option value="${listkota['westjava'][i]}">${listkota['westjava'][i]}</option>`
        }
    }
    else if (provinsi == "jateng"){
        kota.innerHTML = ''
        for (let i =0; i < listkota['centraljava'].length; i++){
            kota.innerHTML += `<option value="${listkota['centraljava'][i]}">${listkota['centraljava'][i]}</option>`
        }
    }
    else{
        kota.innerHTML = ''
        for (let i =0; i < listkota['eastjava'].length; i++){
            kota.innerHTML += `<option value="${listkota['eastjava'][i]}">${listkota['eastjava'][i]}</option>`
        }
    }
}

function tampilkanHasil(){
    var prov = document.getElementById("provinsi");
    var namaprov = prov.options[prov.selectedIndex].text;
    var city = document.getElementById("kota").value;
    var hasil = document.getElementById("hasil");
    hasil.innerText = `Pada provinsi ${namaprov} terdapat kota ${city}`
}

function gantiMode(){
    // var switch = document.getElementByID("idnyasitoggle").checked;
    var mode = document.getElementById("mode").checked;
    var style = document.getElementById("style")
    
    if(mode == true){
        style.setAttribute('href', "style.css");
    }
    else{
        style.setAttribute('href', "stylelight.css");
    }
}