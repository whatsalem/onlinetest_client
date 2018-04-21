$(function() {
    
    $('#dataTables-example').DataTable( {
        aLengthMenu: [
            [10,25,50,100,-1],
            [10,25,50,100,'ALL']
        ],
        iDisplayLength: 25,
        responsive: true
    });

    $('.date-of-birth').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true
    });

    $('input').iCheck({
        checkboxClass: 'icheckbox_polaris',
        radioClass: 'iradio_polaris'
    });

    $(".select-option").select2({
        dropdownParent: $("#exampleModalCenter")
    }); 

    $(".select-option-withoutmodal").select2();
});