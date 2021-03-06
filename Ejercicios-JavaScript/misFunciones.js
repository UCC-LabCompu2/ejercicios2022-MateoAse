/**
 * conversion de unidades, de metros, yardas, pies y pulgadas.
 * @method cambiarunidades
 * @param {string} id - el id de los imputs de metros,yardas, pies y pulgadas.
 * @param {nombre} valor - el valor de los imputs de metros, yardas, pies o pulgadas
 * @return
 */
function cambiarunidades(id, value) {
    if (isNaN(value)){
        alert("se ingreso un valor invalido "+id);
        document. lasunidades.unid_metro.value = "";
        document.lasunidades.unid_pulgada.value = "";
        document.lasunidades.unid_pie.value = "";
        document.lasunidades.unid_yarda.value = "";
    }else if(id=="Metro"){
        document.lasunidades.unid_pulgada.value = 39.3701*value;
        document.lasunidades.unid_pie.value = 3.28084*value;
        document.lasunidades.unid_yarda.value = 1.09361*value;

    }else if(id=="pulgada"){
        document.lasunidades.unid_metro.value = 0.0254*value;
        document.lasunidades.unid_pie.value = 0.833333*value;
        document.lasunidades.unid_yarda.value = 0.0277778*value;
    }else if(id=="pie"){
        document.lasunidades.unid_metro.value = 0.3048*value;
        document.lasunidades.unid_pulgada.value = 12*value;
        document.lasunidades.unid_yarda.value = 0.333333*value;
    }else if(id=="yarda"){
        document.lasunidades.unid_metro.value = 0.9144*value;
        document.lasunidades.unid_pulgada.value = 36*value;
        document.lasunidades.unid_pie.value = 3*value;
    }
}
function convertirGr(id) {
    var grad, rad;
    if(id=="grados"){
        grad = document.getElementById(elementId:"grados") . value;
        rad = (grad*math.PI)/180;
    }else if(id=="radianes"){
        rad = document.getElementById(elementId:"radianes"). value;
        grad = (rad*180)/math.PI
    }
    document.getElementById(elementId:"grados").value = grad;
    document.getElementById(elementId:"grados").value = rad;
}