$(document).ready(()=>{
    let activeStep = 1;
    //Show first Step at the beginning
    showStep(activeStep);
    

    //Prev & Next step onClick buttons
    $('form #step-next').click(e =>{
      e.preventDefault();
      nextStep(1)
    })

    $('form #step-back').click(e =>{
      e.preventDefault();
      nextStep(-1)
    })

    //Function show active step
    function showStep(n) {
      let steps = $("form#steps");
      let stepCounter = $('.steps ul li');
      let stepIcons = $('div#step-icons');
      if (n > steps.length) activeStep = 1;    
      if (n < 1) activeStep = steps.length;

      //Hide all stepper and deactive theme
      $(steps).each((i,step)=>{
        $(step).addClass('deactive-step');
        $(stepIcons[i]).css('display','none');
        $(stepCounter[i]).removeClass('active');
      })

      //Count the active steps
      for(i = 0;i < n;i++){
        $(stepCounter[i]).addClass('active');
      }

      //Active steps
      $(steps[activeStep-1]).removeClass('deactive-step');  
      $(steps[activeStep-1]).addClass('active-step');  
      $(stepIcons[activeStep-1]).css('display','block');
      $(steps[activeStep-1]).scrollTop(0)
    }
    
    function nextStep(n) {
      showStep(activeStep += n);
    }
})

