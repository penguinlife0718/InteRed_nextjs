const convertDate = (date) => {
    if(date !== null) {
        if (date.includes(' ')) {
            date = date.replace(/-/g, '/')
            const newDate = new Date(date);
            return newDate.toLocaleString("en-ZA");
        }
        else {
            const newDate = new Date(date);
            return newDate.toLocaleString("en-ZA");
        }
    // safari 時間無法讀YYYY-MM--DD格式
    // YYYYDDTHH:mm:ss.sss+08:00 格式 safari正常讀取
    }
}
export default convertDate;