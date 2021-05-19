let hesaplaBtn = document.querySelector("#hesapla")


hesaplaBtn.addEventListener("click",hesaplaFunc)

function hesaplaFunc(){
    let cekTopTut = document.querySelector("#cekTopTut")
    let vade = document.querySelector("#vade")
    let faiz = document.querySelector("#faiz")
    let bsmv = document.querySelector("#BSMV")
    let kkdf = document.querySelector("#KKDF")
    let anaPara = document.querySelector("#anaPara")
    let ayOdeMik = document.querySelector("#aylikOdemeMiktari")
    let topMal = document.querySelector("#toplamMaliyet")
    let topFaiz = document.querySelector("#toplamFaiz")
    let brutFaiz = document.querySelector("#brutFaiz")
    var takBastir = document.querySelector("#takBastir")
    let takSatir =""

    let cekTopTutx = Number(cekTopTut.value)
    let vadex = Number(vade.value)
    let faizx = Number(faiz.value)
    let bsmvx = Number(bsmv.value)
    let kkdfx = Number(kkdf.value)

    let aylikFaiz = ((faizx+(faizx*bsmvx/100)+(faizx*kkdfx/100))/100)
    anaPara.value = cekTopTutx
    aylikTaksit = ((((1+aylikFaiz)**vadex)*aylikFaiz)/(((1+aylikFaiz)**vadex)-1))*cekTopTutx
    ayOdeMik.value = aylikTaksit.toFixed(2)
    topMal.value = (vadex * aylikTaksit).toFixed(2)
    topFaiz.value = ((vadex * aylikTaksit) - cekTopTutx).toFixed(2)
    brutFaiz.value = aylikFaiz * 100

    for(i = 0; i < vadex; i++){
        takSatir +=`
            <tr>
                <td>asd</td>
                <td>asd</td>
                <td>asd</td>
                <td>asd</td>
                <td>asd</td>
                <td>asd</td>
                <td>asd</td>
                <td>asd</td>
            </tr>
        `
    }
    //console.log(takSatir)
    takBastir.innerHTML = takSatir
}