function calculateVAT( price ){
    if ( typeof price !== 'number' || price<0 ){
        return "Invalid";
    }
    const vat = price*(7.5/100);
    return vat;
}


function validContact( contact ) {
    if ( typeof contact !== "string" ){
        return "Invalid"
    }
    if ( contact.length === 11 && contact[0]+contact[1] === "01" && !contact.includes(" ") ){
        return true;
    }
    return false;
}


function  willSuccess( marks ){
    if ( !Array.isArray(marks) ){
        return "Invalid";
    }
    let passedTests = 0;
    let failedTests = 0;
    for (const mark of marks) {
        if ( mark >= 50 ){
            passedTests++;
        }
        else{
            failedTests++;
        }
    }
    if ( passedTests > failedTests){
        return true;
    }
    return false
}


function validProposal( person1 , person2 ){
    if ( typeof person1 !== 'object' || Array.isArray(person1) || person1 === null ){
        return "Invalid";
    }
    else if( typeof person2 !== 'object' || Array.isArray(person2) || person2 === null ){
        return "Invalid";
    }
    if ( person1.gender !== person2.gender && Math.abs(person1.age - person2.age)<=7 ){
        return true;
    }
    return false;
}


function  calculateSleepTime( times ){
    const outputTime = {};
    let totalSeconds = 0;
    for (const element of times) {
        if (typeof element !== 'number'){
            return "Invalid"
        }
        totalSeconds += element;
    }
        outputTime.hour = Math.floor(totalSeconds/3600);
        outputTime.minute = Math.floor((totalSeconds%3600) / 60);
        outputTime.second = ((totalSeconds%60) % 60);
    
    return outputTime;
}
