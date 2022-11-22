// Debounce Function
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this,
            args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

const addDaysInDate = function (date, days) {
    date.setDate(date.getDate() + days);
    return date;
}


const getFormatedDate = (date) => {
    let days = date.getUTCDate();
    let month = date.getUTCMonth() + 1;
    let year = date.getUTCFullYear();

    let str = `${days}/${month < 10 ? `0${month}` : month}/${year}`;

    return str;
}

const generateCode = () => {
    var pass = '';
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
        'abcdefghijklmnopqrstuvwxyz0123456789@#$';

    for (var i = 1; i <= 8; i++) {
        var char = Math.floor(Math.random()
            * str.length + 1);

        pass += str.charAt(char)
    }

    return pass;
}


export { debounce, addDaysInDate, getFormatedDate, generateCode }