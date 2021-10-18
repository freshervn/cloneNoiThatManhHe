// import React, { Component } from 'react';
// class BornCalc extends Component {    
//     state = {}
//     render() { 
//         return (    
//             <div className='BornCalc container'>                        
//                 <h1>tính ngày sinh của bé</h1> 
//                 <input type="date" name="" id="sex-day"/>
//                 <select id="menstrual" name="k" >
//                     <option className="text-center" value="15">15 Ngày</option>
//                     <option className="text-center" value="16">16 Ngày</option>
//                     <option className="text-center" value="17">17 Ngày</option>
//                     <option className="text-center" value="18">18 Ngày</option>
//                     <option className="text-center" value="19">19 Ngày</option>
//                     <option className="text-center" value="20">20 Ngày</option>
//                     <option className="text-center" value="21">21 Ngày</option>
//                     <option className="text-center" value="22">22 Ngày</option>
//                     <option className="text-center" value="23">23 Ngày</option>
//                     <option className="text-center" value="24">24 Ngày</option>
//                     <option className="text-center" value="25">25 Ngày</option>
//                     <option className="text-center" value="26">26 Ngày</option>
//                     <option className="text-center" value="27">27 Ngày</option>
//                     <option className="text-center" value="28">28 Ngày</option>
//                     <option className="text-center" value="29">29 Ngày</option>
//                     <option className="text-center" value="30">30 Ngày</option>
//                     <option className="text-center" value="31">31 Ngày</option>
//                     <option className="text-center" value="32">32 Ngày</option>
//                     <option className="text-center" value="33">33 Ngày</option>
//                     <option className="text-center" value="34">34 Ngày</option>
//                     <option className="text-center" value="35">35 Ngày</option>
//                     <option className="text-center" value="36">36 Ngày</option>
//                     <option className="text-center" value="37">37 Ngày</option>
//                     <option className="text-center" value="38">38 Ngày</option>
//                     <option className="text-center" value="39">39 Ngày</option>
//                     <option className="text-center" value="40">40 Ngày</option>
//                 </select>
//                 <button className='run' onClick={this.BornCaculation}>
//                     dự đoán ngày sinh
//                 </button>
//                 <h1 id='result'></h1>
//             </div>
//         );
//     }
//     BornCaculation(){
//         function leapYear(year) {
//             if ((year % 4===0 &&year%100 !==0 && year % 400 !==0)||(year%100===0 && year % 400===0)){
//                 return true;
//             } 
//             else{
//                 return false;
//             }
//         }
//         function Borndate (sex_day,sex_month,sex_year,menstrual){
//             var m,BronMonth,BronDay,BornYear;
//             if( leapYear(sex_year)){        
//                 m=[31,29,31,30,31,30,31,31,30,31,30,31];
//             }
//             else{
//                 m=[31,29,31,30,31,30,31,31,30,31,30,31];
//             };
//             BronMonth=(sex_month + 9) % 12;
//             if (BronMonth==0){
//                 BronMonth = 12;    
//             }
//             BronDay= (sex_day + 7 + menstrual - 29) % m[BronMonth-1];            
//             if (BronDay==0){
//                 BronDay = m[BronMonth-1];    
//             }
//             if ((sex_day + 7 + menstrual - 29) / m[BronMonth-1] >1){
//                 BronMonth++;
//             }           
//             BornYear=sex_year;
//             if ((BronMonth + 9) / 12 >1){
//                 BornYear++;
//             }
//             return [BronDay,BronMonth,BornYear];
//         }
//         var sex_day = document.getElementById('sex-day').value,
//         menstrual=document.getElementById('menstrual').value ;
//         var d = new Date(sex_day);
//         if (d.valueOf() ) {
//             var year = d.getFullYear(),    
//             month = d.getMonth()+1,
//             day = d.getDate();
//             document.getElementById('result').innerHTML = Borndate(day,month,year,Number(menstrual));
//             // console.log( Borndate(day,month,year,menstrual);
//         }
//     }           
// }    
// export default BornCalc;