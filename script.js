var pilih = document.getElementById("barang");
var tambah = document.getElementById("add");
var hapus = document.getElementById("delete");
var total = document.getElementById("jumlahKeseluruhan");

document.getElementById("jumlah").value = "";

pilih.addEventListener('click', function(){
    
    var nilai = document.getElementById("barang").value;
    var jumlah = document.getElementById("jumlah").value;
    var x = document.getElementById("x");
    x.innerHTML = nilai;
    
});

tambah.addEventListener('click', function(){
    var daftarPesanan = document.getElementById("daftarPesanan"); //parent
    var namaBarang = document.querySelectorAll("#barang option");
    var nilai = document.getElementById("barang").value;
    var jumlah = document.getElementById("jumlah").value;

    var NewRow = daftarPesanan.insertRow(-1); 
    var Newcell1 = NewRow.insertCell(0); 
    var Newcell2 = NewRow.insertCell(1);
    var Newcell3 = NewRow.insertCell(2);
    var Newcell4 = NewRow.insertCell(3);
        
    for(let i = 0; i < namaBarang.length; i++){
        if(nilai === namaBarang[i].value){
            // insert new row. 
            Newcell1.innerHTML = namaBarang[i].innerHTML;
            Newcell2.innerHTML = nilai;
            Newcell3.innerHTML = jumlah;
            Newcell4.innerHTML = nilai*jumlah;
            Newcell4.value = nilai*jumlah;

        }
        
    } 
    calculateTotal()
    
});

hapus.addEventListener('click', function() { 
    var totalKeseluruhan = document.getElementById("totalSementara");
    // delete row (index-0).             
    /* var nilai = totalKeseluruhan.value;

            nilai -= Number(daftarPesanan.children[i].children[3].innerText)
            totalKeseluruhan.value = nilai; */
            
    
    document.getElementById("daftarPesanan").deleteRow(-1); 
    calculateTotal()

});

total.addEventListener('click', function() {
    var total = document.getElementById("totalSementara");
    var nilaiDiskon = document.getElementById("diskon");
    var totalKeseluruhan = document.getElementById("sisa");
    var uang = document.getElementById("jumlah-uang");
    var nilaiDiskon = document.getElementById("diskon");
    var kembalian = document.getElementById("kembalian");
    // var totalSementara = 0;
    if (nilaiDiskon.value !== "") {
        nilaiDiskon = (total.value * nilaiDiskon.value) / 100; 
        // totalSementara = total.value - nilaiDiskon;
        totalKeseluruhan.value = total.value - nilaiDiskon ;
    }  else {
        totalKeseluruhan.value = total.value
    }
    if (uang.value !== "") {
        kembalian.value = uang.value - totalKeseluruhan.value;
    } else {
        alert("silahkan masukkan uang");
    }   
});

var calculateTotal = () => {
    var daftarPesanan = document.getElementById("daftarPesanan");
    var totalSementara = document.getElementById("totalSementara");
    // var totalKeseluruhan = document.getElementById("sisa");
    var nilai = 0;
    for (var i = 0; i < daftarPesanan.children.length; i++){
        nilai += Number(daftarPesanan.children[i].children[3].innerText)
    }
    totalSementara.value = nilai;
    // totalKeseluruhan.value = nilai;


}


