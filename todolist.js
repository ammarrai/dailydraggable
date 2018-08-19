$(document).ready(function () {

    addTaskTime();

    function addTaskTime() {
        $(".taskTimeEstimate").change(function () {
            var inputs = $(".taskTimeEstimate");
            var total = 0;
            for (var i = 0; i < inputs.length; i++) {
                if ($(inputs[i]).val() != '')
                    total += parseInt($(inputs[i]).val());
            }
            $("#totalTaskTime").val(total);
        });
    }


    $(document).on('click', '.recipe-table__add-row-btn', function (e) {
        var $el = $(e.currentTarget);
        var $tableBody = $('#recipeTableBody');
        var htmlString = $('#rowTemplate').html();
        $tableBody.append(htmlString);
        addTaskTime();
        return false;
    });

    $(document).on('click', '.recipe-table__del-row-btn', function (e) {
        var $el = $(e.currentTarget);
        var $row = $el.closest('tr');
        $row.remove();
        return false;
    });
    Sortable.create(
        $('#recipeTableBody')[0],
        {
            animation: 150,
            scroll: true,
            handle: '.drag-handler',
            onEnd: function () {
                console.log('More see in https://github.com/RubaXa/Sortable');
            }
        }
    );
});