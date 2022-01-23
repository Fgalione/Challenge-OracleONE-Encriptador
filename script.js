
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/
//encriptar texto-limpiar campo input-texto y mostrar en msg
function btnEncriptar(){

    const texto = document.getElementById("input-texto").value;
    var textoMinusculas = texto.toLowerCase();

    for(j = 0; j < textoMinusculas.length; j++){

        if(( textoMinusculas.charCodeAt(j) >= 97 ) && ( textoMinusculas.charCodeAt(j) <= 122 )){

            var textoEncriptado = textoMinusculas.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
            document.getElementById("msg").value = textoEncriptado;
            document.getElementById("input-texto").value = " ";
            break;
        }else{
            alert("El mensaje tiene algún caracter especial. Por favor, verificar.");
            document.getElementById("input-texto").value = " ";
            break;
            
        }
    } 
    
    
}
//desencriptar texto-Mostrar texto en msg y limpiar input-texto
function btnDesencriptar(){
    const textoEncriptado = document.getElementById("input-texto").value;

    const desencriptarTexto = textoEncriptado.replace(/ai/gi,"a").replace(/enter/gi,"e" ).replace(/imes/gi,"i").replace(/ober/gi,"o").replace(/ufat/gi,"u");
    document.getElementById("msg").value = desencriptarTexto;
    document.getElementById("input-texto").value = " ";

}
//crear función copiar, el texto debe quedar en el portapapeles
function btnCopiar(){
    const copiar =document.getElementById("msg").value;
    navigator.clipboard.writeText(copiar);
    alert("El texto fue copiado!")
    document.getElementById("msg").value = " ";
    
}

function btnBorrar(){

    document.getElementById("msg").value = " ";
    document.getElementById("input-texto").value = " ";
    
}
