$(document).ready(function(){

  //Company input status
  $('input[type=radio][name=category]').change(function(){
    if ($(this).val() == 'company') {
      $('#company-name').removeClass('d-none');
      $('#company-name').addClass('d-flex');
    }else{
      $('#company-name').addClass('d-none');
    }
  }) 


  //Menu Icon Status
    $('.menu-icon-checkbox').click(e=>{
      e.stopPropagation();
    })
    $(document).click(e=>{
      $('.menu-icon-checkbox').prop('checked',false)
    })


    // Jquery date picker
    $( function() {
      $("#certificationdatepicker").datepicker();
    } );

    $( function() {
      $("#validitydatepicker").datepicker();
    } );


    // Chart js
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132,1)',
                    'rgba(54, 162, 235,1)',
                    'rgba(255, 206, 86,1)',
                    'rgba(75, 192, 192,1)',
                ]
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });



  })