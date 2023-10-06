function percentageToNumber(percentageString) {
    const numericValue = parseFloat(percentageString.replace('%', ''));
    
    if (!isNaN(numericValue)) {
        return parseFloat((numericValue / 100).toFixed(2));
    } else {
        return 1;
    }
}

module.exports = percentageToNumber