const palindromes = function (str) {
    // Remove non-alphanumeric characters and lowercase
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
};


// Do not edit below this line
module.exports = palindromes;
