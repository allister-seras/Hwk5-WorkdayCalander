$(function () {
//Display current day at time at the top of page
    function getTime(){
        $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY, hh:mm A"))
        setInterval(getTime, 10000)
    }

    getTime();

    //Save value of textarea for each timeblock to local storage
    $(".saveBtn").click(function () {
        let timeblockHourId = $(this).parent().attr("id")
        let userInput = $(this).prev().val()
        console.log(timeblockHourId);
        console.log(userInput);
        localStorage.setItem(timeblockHourId, userInput)
    })

    //Set colors for each hour block
    function setColor () {
        let currentHour = dayjs().hour()
        console.log(currentHour);
        $(".time-block").each(function () {
            let timeblockHour = $(this).data("hour")
            console.log(timeblockHour);
            if(timeblockHour === currentHour) {
                $(this).addClass("present")
            }
            else if (timeblockHour < currentHour) {
                $(this).addClass("past")
            }
            else {
                $(this).addClass("future") 
            }
        })
    }

    setColor();

    //Retrieves saved data from local storage
    function getLocalStorage () {
        $("textarea").each(function () {
            let key = $(this).parent().attr("id")
            console.log(key);
            $(this).val(localStorage.getItem(key));
        })
    }

    getLocalStorage()


});