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
    let kkdfA = []
    let bsmvA = []
    let burutFaizA= []
    let kalanAnaPara = []
    let anaParaTaksit = []
    let netFaiz = []
    let z = 0



    let cekTopTutx = Number(cekTopTut.value)
    let vadex = Number(vade.value)
    let faizx = Number(faiz.value)
    let bsmvx = Number(bsmv.value)
    let kkdfx = Number(kkdf.value)

    
    let aylikFaiz = ((faizx+(faizx*bsmvx/100)+(faizx*kkdfx/100))/100)
    anaPara.value = cekTopTutx
    aylikTaksit = (((((1+aylikFaiz)**vadex)*aylikFaiz)/(((1+aylikFaiz)**vadex)-1))*cekTopTutx)
    ayOdeMik.value = aylikTaksit
    topMal.value = (vadex * aylikTaksit)
    topFaiz.value = ((vadex * aylikTaksit) - cekTopTutx)
    brutFaiz.value = aylikFaiz * 100
    //netFaiz = (i==0)?((cekTopTutx*faizx)/100):kalanAnaPara-ayOdeMik.value

    for(i = 0; i <= vadex-1; i++){
        
        if(i<=0){
            netFaiz[i] = ((cekTopTutx * faizx)/100)
            kkdfA[i] = netFaiz[i]*(kkdfx/100)
            bsmvA[i] = netFaiz[i]*(bsmvx/100)
            burutFaizA[i] = netFaiz[i] + bsmvA[i] + kkdfA[i]
            anaParaTaksit[i] = aylikTaksit-burutFaizA[i]
            kalanAnaPara[i] = (cekTopTutx-anaParaTaksit)
            console.log(i+"-i")
        }else{
            z=i-1
            console.log(i+"-i"+z+"-z")
            netFaiz[i] = ((kalanAnaPara[i-1] * faizx)/100)
            console.log(netFaiz[i]+" - "+kalanAnaPara[i-1])
            kkdfA[i] = netFaiz[i]*(kkdfx/100)
            bsmvA[i] = netFaiz[i]*(bsmvx/100)
            burutFaizA[i] = netFaiz[i] + bsmvA[i] + kkdfA[i]
            anaParaTaksit[i] = aylikTaksit-burutFaizA[i]
            //Ödeme bittiği için kontrole sok vade sonu geldiyse hesaplama sıfır bas.
            if(i==vadex-1){
                kalanAnaPara[i] = 0
            }else{
                kalanAnaPara[i] = kalanAnaPara[i-1]-anaParaTaksit[i]
            }
        }
        takSatir +=`
            <tr>
                <td>${i+1}</td>
                <td>${anaParaTaksit[i]}</td>
                <td>${netFaiz[i]}</td>
                <td>${kkdfA[i]}</td>
                <td>${bsmvA[i]}</td>
                <td>${burutFaizA[i]}</td>
                <td>${kalanAnaPara[i]}</td>
            </tr>
        `
    }
    //console.log(takSatir)
    takBastir.innerHTML = takSatir
}