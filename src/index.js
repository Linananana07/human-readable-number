module.exports = function toReadable (number) {
    let str = String(number);
    const arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const arrTen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen','fifteen', 'sixteen', 
    'seventeen', 'eighteen', 'nineteen'];
    const arrDec = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const hund = 'hundred';
    let result = '';
    
    if (str.length == 3) {
        for (let i = 0; i <= arr.length; i++){
            if (i == Number(str[0])) {
                result +=`${arr[i]} ${hund}`;
            }
        }
        if (Number(str[1]) == 1) {
            for (let i = 0; i <= arrTen.length; i++) {
                if (i == Number(str[2])) {
                    result += ` ${arrTen[i]}`;
                }
            }
        } else if (Number(str[1]) != 1 && Number(str[1]) != 0) {
            for (let i = 0; i <= arrDec.length+1; i++) {
                if (i == Number(str[1])) {
                    result += ` ${arrDec[i - 2]}`;
                }
            }
        } 
        if (Number(str[2]) != 0 && Number(str[1]) != 1) {
            for (let i = 0; i <= arr.length; i++) {
                if (i == Number(str[2])) {
                    result += ` ${arr[i]}`;
                }
            }
        } 
        return (result);
    }

    if (str.length == 2) {
        if (Number(str[0]) == 1) {
            for (let i = 0; i <= arrTen.length; i++) {
                if (i == Number(str[1])) {
                    result += `${arrTen[i]}`;
                }
            }
        } else if (Number(str[0]) != 1) {
            for (let i = 0; i <= arrDec.length+1; i++) {
                if (i == Number(str[0])) {
                    result += `${arrDec[i - 2]}`;
                }
            }
        } 
        if (Number(str[1]) != 0 && Number(str[0]) != 1) {
            for (let i = 0; i <= arr.length; i++) {
                if (i == Number(str[1])) {
                    result += ` ${arr[i]}`;
                }
            }
        } 
        return (result);
    }

    if (str.length == 1) {
        for (let i = 0; i <= number; i++) {
            if (i === number) {
                return (`${arr[i]}`);
            }
        }
    }
};
