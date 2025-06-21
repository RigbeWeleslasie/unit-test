function getFormattedDate(date){
    console.log('Before transformation:', date);
    const formatedDate=date.toLocalDateString('en-US');
    console.log('After transformation:',formatedDate);
    return formatedDate;
}
module.exports={getFormattedDate};