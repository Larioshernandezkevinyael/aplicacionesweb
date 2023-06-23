export var triangulo = {
    l1:0,
    l2:0,
    l3:0,
}

export const semiper = (trian) =>{
    return (trian.l1 + trian.l2 + trian.l3) /2;
}

export const area =(lados)=>{
    let ar = semiper(lados);
    let as = (ar*(ar-lados.l1)*(ar-lados.l2)*(ar-lados.l3))
   return  Math.sqrt(as);
}

export const validawe=(we)=>{
    if(we.l1 > we.l2 && we.l1 > we.l3){
        if(we.l2+we.l3 > we.l1){
            return true;
        }else{
            return false;
        }

    }else if(we.l2 > we.l1 && we.l2 > we.l3){
        if(we.l1+we.l3 > we.l2){
            return true;
        }else{
            return false;
        }
    }else{
        if(we.l2+we.l1 > we.l3){
            return true;
        }else{
            return false;
        }
    }
}
