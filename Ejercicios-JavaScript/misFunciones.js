/**
 * conversion de unidades, de metros, yardas, pies y pulgadas.
 * @method cambiarunidades
 * @param {string} id - el id de los imputs de metros,yardas, pies y pulgadas.
 * @param {nombre} valor - el valor de los imputs de metros, yardas, pies o pulgadas
 * @return
 */
function cambiarunidades(id, valor) {
    if (isNaN(valor)){
        alert("se ingreso un valor invalido"+id);
        document. lasunidades.unid_metro.value = "";
        document.lasunidades.unid_pulgada.value = "";
        document.lasunidades.unid_pie.value = "";
        document.lasunidades.unid_yarda.value = "";
    }else if(id=="Metro"){
        document.lasunidades.unid_pulgada.value = 39.3701*valor;
        document.lasunidades.unid_pie.value = 3.28084*valor;
        document.lasunidades.unid_yarda.value = 1.09361*valor;

    }else if(id=="pulgada"){
        document.lasunidades.unid_metro.value = 0.0254*valor;
        document.lasunidades.unid_pie.value = 0.833333*valor;
        document.lasunidades.unid_yarda.value = 0.0277778*valor;
    }else if(id=="pie"){
        document.lasunidades.unid_metro.value = 0.3048*valor;
        document.lasunidades.unid_pulgada.value = 12*valor;
        document.lasunidades.unid_yarda.value = 0.333333*valor;
    }else if(id=="yarda"){
        document.lasunidades.unid_metro.value = 0.9144*valor;
        document.lasunidades.unid_pulgada.value = 36*valor;
        document.lasunidades.unid_pie.value = 3*valor;
    }
}
