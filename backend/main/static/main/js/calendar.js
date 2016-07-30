
$(document).ready(function () {
    viewMonth(2);
});


$('#month_name td').on('click', function () {
    var month = $(this).attr('month');
    viewMonth(month);
});

function viewMonth(selected_month_number) {
    var selected_month_index = selected_month_number - 1;

    var $calendar = $('#calendar');
    var $month_name = $('#month_name');
    var $month = $calendar.find('table').eq(selected_month_index);

    var current_month_number = $calendar.data("selected");

    if (current_month_number != selected_month_number) {
        current_month_number -= 1;  // из порядкового номера месяца делаем индекс

        $calendar.find('table').eq(current_month_number).removeClass('active');
        $month_name.find('td').eq(current_month_number).removeClass('active');
    }

    $month_name.find('td').eq(selected_month_index).addClass('active');

    $month.addClass('active');

    var offset = ($month.width() * selected_month_index) + ($month.width() / 2);

    $calendar.data("selected", selected_month_number);
    $calendar.stop().animate( {
        scrollLeft : offset
    } , 500);
}

function nextPrevMonth(where) {
    var selected_month_indx = $('#calendar').data("selected");

    if (where == 'prev' && selected_month_indx > 1)
    {
        viewMonth(--selected_month_indx);
    }
    else if (where == 'next' && selected_month_indx < 12)
    {
        viewMonth(++selected_month_indx);
    }
}