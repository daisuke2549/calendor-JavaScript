'use strict';

console.clear();


{
    const year = 2020;
    const month = 4;  //５月

    function getCalendarBody(){
        const dates = []; //date: 日付, day :曜日
        const lastDate = new Date(year, month + 1, 0).getDate();

        for(let i = 1; i <= lastDate; i++){
            dates.push({
                date: i,
                isToday:false,
                isDisabled:false,
            });
        }
        console.log(dates);
    }

    getCalendarBody()
}