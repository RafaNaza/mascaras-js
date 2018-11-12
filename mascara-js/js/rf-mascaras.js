function numeros(event,elem){ /** BY NAZA 08 11 2018 */
    valor = elem.value.replace(/[a-z \.\_,]/ig,'');
    _len=valor.length; _val = valor;
    if(valor!="" && _len>2){
        _val=""; j = 0;
        for(i=_len; i>0;i--){
            if( j>2 && (j%3)==0 ) _val = valor.charAt(i-1)+"."+_val;
            else _val = valor.charAt(i-1)+_val;
            j++;
        }
    }
    elem.value = _val;
}

function kilogramas(event,elem){ /** BY NAZA 08 11 2018 */
    if( event.keyCode==8 ){
        elem.value = elem.value.replace(/[a-z]/ig,'').slice(0,-1);
        elem.value = ( elem.value.length>0 ? elem.value+"Kg" : "" );
    }
    valor = parseInt( elem.value.replace(/[a-z \.\_,]/ig,'') ).toString();
    _len=valor.length;
    if(valor>0 && _len<4){
        for(y=0;y<(4-_len);y++) valor = "0"+valor; 
        _len=valor.length;
    }
    _val = valor;
    if(valor!="" && _len>2){
        _val=""; j = 0;
        for(i=_len; i>0;i--){
            if( j>2 && (j%3)==0 && _len>=4) _val = valor.charAt(i-1)+(j>=6?".":",")+_val;
            else _val = valor.charAt(i-1)+_val;
            j++;
        }
    }
    elem.value = ( _val.length>0 && valor>0 ? _val+"Kg" : "" );
}