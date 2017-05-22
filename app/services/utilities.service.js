class UtilitiesService {

    displayDate(timestamp) {
        console.log(timestamp);
        var unixtime = timestamp;
        var newDate = new Date();
        newDate.setTime(unixtime * 1000);
        var dateString = newDate.getDate() + '/' + (newDate.getMonth() + 1) + '/' + newDate.getFullYear() + ' ' + this.formatAMPM(newDate);
        return dateString;
    }

    getDay(timestamp){
        var xx = new Date();
		xx.setTime(timestamp*1000); // javascript timestamps are in milliseconds
		let fullDate  = xx.toUTCString();
        let split =  fullDate.split(" ");
        let day = this.getDayFullString(split[0]);
        let getDate = split[1];
        let getMounth = split[2];
        let getYear = split[3];
        
        let result = this.checkCurrentDay(getDate,xx.getMonth() + 1,getYear);

        if(result !== 'false'){
            day = result;
        }
        
        return [day,getDate,getMounth,getYear]
    }

    validateCurrentTime(time,ampm){
        
        var date = new Date();

        let formatAMPM = this.formatAMPM(date);
        let splitHourseAndAMPM = formatAMPM.split(" ");
        let splitHourse = splitHourseAndAMPM[0].split(":");
        console.log(splitHourseAndAMPM)

        if(time == splitHourse[0] && ampm == splitHourseAndAMPM[1]){
            return 'true'
        }
    }

    checkCurrentDay(selectedDate,selectedMounth,selectedYear){
        var date = new Date();
        let  currentDate = date.getDate();
        let  userSelectedDate = selectedDate + '/' + selectedMounth + '/' + selectedYear;
        let  currentDDMMYYYY =  currentDate + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
        let  yesterday =  currentDate - 1 + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
        let tmw =  currentDate + 1 + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
        
        console.log(yesterday + '-' + tmw);

        if(userSelectedDate === currentDDMMYYYY ){
            return 'Today';
        } else if(userSelectedDate === yesterday){
            return 'Yesterday'
        } else if (userSelectedDate === tmw){
            return 'Tomorrow'
        } else {
            return 'false'
        }
        
    }



    getDayFullString(day){
        switch (day) {
            case 'Mon,':
                return  'Monday' 
            case 'Tue,':
                return  'Tuesday' 
            case 'Wed,':
                return  'Wednesday' 
            case 'Thu,':
                return  'Thursday' 
            case 'Fri,':
                return  'Friday' 
            case 'Sat,':
                return   'Saturday'  
            case 'Sun,':
                return   'Sunday'                     
            default :
                return 'error'
        }
    }

    formatAMPM(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12
            ? 'pm'
            : 'am';
        hours %= 12;
        hours = hours
            ? hours
            : 12; // the hour '0' should be '12'
        minutes = minutes < 10
            ? '0' + minutes
            : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }


    get calenderObjects() {
        let object = [
            {
                "date": " 1495067029",
                "timeTable": [
                    
                    { "time" : "8 am",
                      "subject" : "Grade 6 English-2",
                      "lesson"  : "Grammer"
                    },
                    { "time" : "9 am",
                      "subject" : "Grade 6 Maths",
                      "lesson"  : "Fraction"
                    },
                    { "time" : "10 am",
                      "subject" : "Grade 6 Social",
                      "lesson"  : "History"
                    },
                     { "time" : "11 am",
                      "subject" : "Grade 6 Science",
                      "lesson"  : "Biology"
                    },
                    { "time" : "12 pm",
                      "subject" : "Break",
                      "lesson"  : ""
                    },
                    { "time" : "1 pm",
                      "subject" : "Grade 6 Tamil-1",
                      "lesson"  : "Grammer"
                    },
                    { "time" : "2 pm",
                      "subject" : "Grade 6 Hindi-1",
                      "lesson"  : "Grammer"
                    },
                     { "time" : "3 pm",
                      "subject" : "Grade 6 Maths",
                      "lesson"  : "algebra"
                    }
                ],
                "selected": ""
            }, 
            {
                "date": " 1495158794",
                "timeTable": [
                    
                    { "time" : "8 am",
                      "subject" : "Grade 3 Science",
                      "lesson"  : "Biology"
                    },
                    { "time" : "9 am",
                      "subject" : "Grade 3 Maths",
                      "lesson"  : "algebra" 
                    },
                    { "time" : "10 am",
                      "subject" : "Grade 3 Tamil-1",
                      "lesson"  : "Grammer" 
                    },
                     { "time" : "11 am",
                      "subject" : "Grade 3 English-2",
                      "lesson"  : "Grammer"
                    },
                    { "time" : "12 pm",
                      "subject" : "Break",
                      "lesson"  : ""
                    },
                    { "time" : "1 pm",
                      "subject" : "Grade 3 Social",
                      "lesson"  : "History"
                    },
                    { "time" : "2 pm",
                      "subject" : "Grade 3 Hindi-1",
                      "lesson"  : "Grammer"
                    },
                     { "time" : "3 pm",
                      "subject" : "Grade 3 Maths",
                      "lesson"  : "Fraction"
                    }
                ],
                "selected": ""
            },
             {
                "date": " 1495245194",
                "timeTable": [
                    
                    { "time" : "8 am",
                      "subject" : "Grade 2 English-2",
                      "lesson"  : "Grammer"
                    },
                    { "time" : "9 am",
                      "subject" : "Grade 4 Maths",
                      "lesson"  : "Fraction"
                    },
                    { "time" : "10 am",
                      "subject" : "Grade 2 Social",
                      "lesson"  : "History"
                    },
                     { "time" : "11 am",
                      "subject" : "Grade 6 Science",
                      "lesson"  : "Biology"
                    },
                    { "time" : "12 pm",
                      "subject" : "Break",
                      "lesson"  : ""
                    },
                    { "time" : "1 pm",
                      "subject" : "Grade 3 Tamil-1",
                      "lesson"  : "Grammer"
                    },
                    { "time" : "2 pm",
                      "subject" : "Grade 6 Hindi-1",
                      "lesson"  : "Grammer"
                    },
                     { "time" : "3 pm",
                      "subject" : "Grade 6 Maths",
                      "lesson"  : "algebra"
                    }
                ],
                "selected": ""
            },
             {
                "date": " 1495331594",
                "timeTable": [
                    
                    { "time" : "8 am",
                      "subject" : "Grade 3 Science",
                      "lesson"  : "Biology"
                    },
                    { "time" : "9 am",
                      "subject" : "Grade 3 Maths",
                      "lesson"  : "algebra" 
                    },
                    { "time" : "10 am",
                      "subject" : "Grade 3 Tamil-1",
                      "lesson"  : "Grammer" 
                    },
                     { "time" : "11 am",
                      "subject" : "Grade 3 English-2",
                      "lesson"  : "Grammer"
                    },
                    { "time" : "12 pm",
                      "subject" : "Break",
                      "lesson"  : ""
                    },
                    { "time" : "1 pm",
                      "subject" : "Grade 3 Social",
                      "lesson"  : "History"
                    },
                    { "time" : "2 pm",
                      "subject" : "Grade 3 Hindi-1",
                      "lesson"  : "Grammer"
                    },
                     { "time" : "3 pm",
                      "subject" : "Grade 3 Maths",
                      "lesson"  : "Fraction"
                    }
                ],
                "selected": ""
            },
             {
                "date": " 1495417994",
                "timeTable": [
                    
                    { "time" : "8 am",
                      "subject" : "Grade 5 English-2",
                      "lesson"  : "Grammer"
                    },
                    { "time" : "9 am",
                      "subject" : "Grade 5 Maths",
                      "lesson"  : "Fraction"
                    },
                    { "time" : "10 am",
                      "subject" : "Grade 5 Social",
                      "lesson"  : "History"
                    },
                     { "time" : "11 am",
                      "subject" : "Grade 5 Science",
                      "lesson"  : "Biology"
                    },
                    { "time" : "12 pm",
                      "subject" : "Break",
                      "lesson"  : ""
                    },
                    { "time" : "1 pm",
                      "subject" : "Grade 5 Tamil-1",
                      "lesson"  : "Grammer"
                    },
                    { "time" : "2 pm",
                      "subject" : "Grade 5 Hindi-1",
                      "lesson"  : "Grammer"
                    },
                     { "time" : "3 pm",
                      "subject" : "Grade 6 Maths",
                      "lesson"  : "algebra"
                    }
                ],
                "selected": ""
            },
             {
                "date": " 1495504394",
                "timeTable": [
                    
                  { "time" : "8 am",
                      "subject" : "Grade 3 Science",
                      "lesson"  : "Biology"
                    },
                    { "time" : "9 am",
                      "subject" : "Grade 3 Maths",
                      "lesson"  : "algebra" 
                    },
                    { "time" : "10 am",
                      "subject" : "Grade 3 Tamil-1",
                      "lesson"  : "Grammer" 
                    },
                     { "time" : "11 am",
                      "subject" : "Grade 3 English-2",
                      "lesson"  : "Grammer"
                    },
                    { "time" : "12 pm",
                      "subject" : "Break",
                      "lesson"  : ""
                    },
                    { "time" : "1 pm",
                      "subject" : "Grade 3 Social",
                      "lesson"  : "History"
                    },
                    { "time" : "2 pm",
                      "subject" : "Grade 3 Hindi-1",
                      "lesson"  : "Grammer"
                    },
                     { "time" : "3 pm",
                      "subject" : "Grade 3 Maths",
                      "lesson"  : "Fraction"
                    }
                ],
                "selected": ""
            },
             {
                "date": " 1495590794",
                "timeTable": [
                    
                    { "time" : "8 am",
                      "subject" : "Grade 1 English-2",
                      "lesson"  : "Grammer"
                    },
                    { "time" : "9 am",
                      "subject" : "Grade 1 Maths",
                      "lesson"  : "Fraction"
                    },
                    { "time" : "10 am",
                      "subject" : "Grade 1 Social",
                      "lesson"  : "History"
                    },
                     { "time" : "11 am",
                      "subject" : "Grade 1 Science",
                      "lesson"  : "Biology"
                    },
                    { "time" : "12 pm",
                      "subject" : "Break",
                      "lesson"  : ""
                    },
                    { "time" : "1 pm",
                      "subject" : "Grade 1 Tamil-1",
                      "lesson"  : "Grammer"
                    },
                    { "time" : "2 pm",
                      "subject" : "Grade 1 Hindi-1",
                      "lesson"  : "Grammer"
                    },
                     { "time" : "3 pm",
                      "subject" : "Grade 1 Maths",
                      "lesson"  : "algebra"
                    }
                ],
                "selected": ""
            },
             {
                "date": " 1495677194",
                "timeTable": [
                    
                    { "time" : "8 am",
                      "subject" : "Grade 3 Science",
                      "lesson"  : "Biology"
                    },
                    { "time" : "9 am",
                      "subject" : "Grade 3 Maths",
                      "lesson"  : "algebra" 
                    },
                    { "time" : "10 am",
                      "subject" : "Grade 3 Tamil-1",
                      "lesson"  : "Grammer" 
                    },
                     { "time" : "11 am",
                      "subject" : "Grade 3 English-2",
                      "lesson"  : "Grammer"
                    },
                    { "time" : "12 pm",
                      "subject" : "Break",
                      "lesson"  : ""
                    },
                    { "time" : "1 pm",
                      "subject" : "Grade 3 Social",
                      "lesson"  : "History"
                    },
                    { "time" : "2 pm",
                      "subject" : "Grade 3 Hindi-1",
                      "lesson"  : "Grammer"
                    },
                     { "time" : "3 pm",
                      "subject" : "Grade 3 Maths",
                      "lesson"  : "Fraction"
                    }
                ],
                "selected": ""
            },
             {
                "date": " 1495763594",
                "timeTable": [
                    
                    { "time" : "8 am",
                      "subject" : "Grade 7 English-2",
                      "lesson"  : "Grammer"
                    },
                    { "time" : "9 am",
                      "subject" : "Grade 7 Maths",
                      "lesson"  : "Fraction"
                    },
                    { "time" : "10 am",
                      "subject" : "Grade 7 Social",
                      "lesson"  : "History"
                    },
                     { "time" : "11 am",
                      "subject" : "Grade 7 Science",
                      "lesson"  : "Biology"
                    },
                    { "time" : "12 pm",
                      "subject" : "Break",
                      "lesson"  : ""
                    },
                    { "time" : "1 pm",
                      "subject" : "Grade 7 Tamil-1",
                      "lesson"  : "Grammer"
                    },
                    { "time" : "2 pm",
                      "subject" : "Grade 7 Hindi-1",
                      "lesson"  : "Grammer"
                    },
                     { "time" : "3 pm",
                      "subject" : "Grade 7 Maths",
                      "lesson"  : "algebra"
                    }
                ],
                "selected": ""
            },
             {
                "date": " 1495849994",
                "timeTable": [
                    
                     { "time" : "8 am",
                      "subject" : "Grade 3 Science",
                      "lesson"  : "Biology"
                    },
                    { "time" : "9 am",
                      "subject" : "Grade 3 Maths",
                      "lesson"  : "algebra" 
                    },
                    { "time" : "10 am",
                      "subject" : "Grade 3 Tamil-1",
                      "lesson"  : "Grammer" 
                    },
                     { "time" : "11 am",
                      "subject" : "Grade 3 English-2",
                      "lesson"  : "Grammer"
                    },
                    { "time" : "12 pm",
                      "subject" : "Break",
                      "lesson"  : ""
                    },
                    { "time" : "1 pm",
                      "subject" : "Grade 3 Social",
                      "lesson"  : "History"
                    },
                    { "time" : "2 pm",
                      "subject" : "Grade 3 Hindi-1",
                      "lesson"  : "Grammer"
                    },
                     { "time" : "3 pm",
                      "subject" : "Grade 3 Maths",
                      "lesson"  : "Fraction"
                    }
                ],
                "selected": ""
            },
             {
                "date": " 1495936394",
                "timeTable": [
                    
                    { "time" : "8 am",
                      "subject" : "Grade 8 English-2",
                      "lesson"  : "Grammer"
                    },
                    { "time" : "9 am",
                      "subject" : "Grade 8 Maths",
                      "lesson"  : "Fraction"
                    },
                    { "time" : "10 am",
                      "subject" : "Grade 8 Social",
                      "lesson"  : "History"
                    },
                     { "time" : "11 am",
                      "subject" : "Grade 8 Science",
                      "lesson"  : "Biology"
                    },
                    { "time" : "12 pm",
                      "subject" : "Break",
                      "lesson"  : ""
                    },
                    { "time" : "1 pm",
                      "subject" : "Grade 8 Tamil-1",
                      "lesson"  : "Grammer"
                    },
                    { "time" : "2 pm",
                      "subject" : "Grade 6 Hindi-1",
                      "lesson"  : "Grammer"
                    },
                     { "time" : "3 pm",
                      "subject" : "Grade 6 Maths",
                      "lesson"  : "algebra"
                    }
                ],
                "selected": ""
            },
             {
                "date": " 1496022794",
                "timeTable": [
                    
                  { "time" : "8 am",
                      "subject" : "Grade 3 Science",
                      "lesson"  : "Biology"
                    },
                    { "time" : "9 am",
                      "subject" : "Grade 3 Maths",
                      "lesson"  : "algebra" 
                    },
                    { "time" : "10 am",
                      "subject" : "Grade 3 Tamil-1",
                      "lesson"  : "Grammer" 
                    },
                     { "time" : "11 am",
                      "subject" : "Grade 3 English-2",
                      "lesson"  : "Grammer"
                    },
                    { "time" : "12 pm",
                      "subject" : "Break",
                      "lesson"  : ""
                    },
                    { "time" : "1 pm",
                      "subject" : "Grade 3 Social",
                      "lesson"  : "History"
                    },
                    { "time" : "2 pm",
                      "subject" : "Grade 3 Hindi-1",
                      "lesson"  : "Grammer"
                    },
                     { "time" : "3 pm",
                      "subject" : "Grade 3 Maths",
                      "lesson"  : "Fraction"
                    }
                ],
                "selected": ""
            },
             {
                "date": " 1496195594",
                "timeTable": [
                    
                    { "time" : "8 am",
                      "subject" : "Grade 6 English-2",
                      "lesson"  : "Grammer"
                    },
                    { "time" : "9 am",
                      "subject" : "Grade 6 Maths",
                      "lesson"  : "Fraction"
                    },
                    { "time" : "10 am",
                      "subject" : "Grade 6 Social",
                      "lesson"  : "History"
                    },
                     { "time" : "11 am",
                      "subject" : "Grade 6 Science",
                      "lesson"  : "Biology"
                    },
                    { "time" : "12 pm",
                      "subject" : "Break",
                      "lesson"  : ""
                    },
                    { "time" : "1 pm",
                      "subject" : "Grade 6 Tamil-1",
                      "lesson"  : "Grammer"
                    },
                    { "time" : "2 pm",
                      "subject" : "Grade 6 Hindi-1",
                      "lesson"  : "Grammer"
                    },
                     { "time" : "3 pm",
                      "subject" : "Grade 6 Maths",
                      "lesson"  : "algebra"
                    }
                ],
                "selected": ""
            },
             {
                "date": " 1496281994",
                "timeTable": [
                    
                    { "time" : "8 am",
                      "subject" : "Grade 1 English-2",
                      "lesson"  : "Grammer"
                    },
                    { "time" : "9 am",
                      "subject" : "Grade 1 Maths",
                      "lesson"  : "Fraction"
                    },
                    { "time" : "10 am",
                      "subject" : "Grade 1 Social",
                      "lesson"  : "History"
                    },
                     { "time" : "11 am",
                      "subject" : "Grade 1 Science",
                      "lesson"  : "Biology"
                    },
                    { "time" : "12 pm",
                      "subject" : "Break",
                      "lesson"  : ""
                    },
                    { "time" : "1 pm",
                      "subject" : "Grade 1 Tamil-1",
                      "lesson"  : "Grammer"
                    },
                    { "time" : "2 pm",
                      "subject" : "Grade 1 Hindi-1",
                      "lesson"  : "Grammer"
                    },
                     { "time" : "3 pm",
                      "subject" : "Grade 1 Maths",
                      "lesson"  : "algebra"
                    }
                ],
                "selected": ""
            }
        ]
        return object;
    }

}

export default new UtilitiesService();