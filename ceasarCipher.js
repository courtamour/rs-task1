const caesarCipher = (arr, letter, shift) => {
    const nextPosition = arr.indexOf(letter) + shift;
    if (nextPosition > arr.length - 1) {
        const validPosition = nextPosition % arr.length;
        return arr[validPosition];
    } else if (nextPosition < 0) {
        if(nextPosition % arr.length === 0 ){
            const validPosition = 0;
            return arr[validPosition];
        }
        else{const validPosition = arr.length + nextPosition % arr.length;
            return arr[validPosition];}

        
    } else {
        return arr[nextPosition];
    }
}
module.exports = {caesarCipher};