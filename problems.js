function calculateVAT( price ){
    if ( typeof price !== 'number' || price<0 ){
        return "Invalid";
    }
    const vat = price*(7.5/100);
    return vat;
}


function  validContact( contact ) {
    if ( typeof contact !== "string" ){
        return "Invalid"
    }
    if ( contact.length === 11 && contact[0]+contact[1] === "01" && !contact.includes(" ") ){
        return true;
    }
    return false;
}
