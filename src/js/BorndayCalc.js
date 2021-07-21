// chương trình tính ngày sinh

// lấy dữ liệu bỏ vào hàm 
function BornCaculation(){
    
    // lấy ngày tháng sinh
    var sex_day = document.getElementById('sex-day').value;
    var d = new Date(sex_day);
    if (d.valueOf() ) {
        var day = d.getDate(),
        month = d.getMonth()+1,
        year = d.getFullYear();
    }
    // lấy chu kì kinh nguyệt    
    var menstrual=document.getElementById('menstrual').value ;

    // truyền tham số : ngày x,tháng x, nẵm x, chù kỳ kinh nguyệt
    Borndate(day,month,year,menstrual)[0];// là ngày sinh
    Borndate(day,month,year,menstrual)[1];// là tháng sinh
    Borndate(day,month,year,menstrual)[2];// là năm sinh            
}
BornCaculation()

// trả lại hết quả ngày sinh theo dạng [ngày,tháng,năm]
function Borndate(sex_day,sex_month,sex_year,menstrual){
    if(leapYear(sex_year)){        
        var m=[31,29,31,30,31,30,31,31,30,31,30,31];
    }
    else{
        var m=[31,29,31,30,31,30,31,31,30,31,30,31];
    }
    let BronMonth=(sex_month + 9) % 12;
    if (BronMonth==0){
        BronMonth = 12;    
    }
    let BronDay= (sex_day + 7 + menstrual - 29) % m[BronMonth-1];
    if (BronDay==0){
        BronDay = m[BronMonth-1];    
    }
    if ((sex_day + 7 + menstrual - 29) / m[BronMonth-1]>1){
        BronMonth++;
    }    
    let BornYear=sex_year;
    if ((BronMonth + 9) / 12 >1){
        BornYear++;
    }
    return [BronDay,BronMonth,BornYear];
}
// kiểm tra năm nhuận (true,false)
function leapYear(year){
    if ((year % 4===0 &&year%100 !==0 && year % 400 !==0)||(year%100===0 && year % 400===0)){
        return true;
    } 
    else{
        return false;
    }
};