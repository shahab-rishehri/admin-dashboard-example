$( document ).ready(function() {
    let dropDownContainer;

    //Array includes css color names
    const liColors = ['pink-color','yellow-color','red-color']
    //Select all multiple-selects
    $(".multiple-select").each((i,element) => {

    //Add New Class to set each one unique
        $(element).addClass(`custom-multiple-select${i}`)
        dropDownContainer = $('<div/>').addClass(`multiple-select-items multiple-select-hide multiple-custom-options${i}`);

    //Make dropDown list with select options html text
        $(`.custom-multiple-select${i} select option`).each((j,option)=>{
            let dropDownItem = $('<div/>').html($(option).html());

            (function(n) {
                $(dropDownItem).on('click', e => {
                    e.stopPropagation();

    //First Close all open dropdowns
                    closeAllSelect()

                    $(`.custom-multiple-select${n} select option`).each((c,newOption)=>{
                        if ($(newOption).html() == $(option).html()) {
    //Set new Random color name for each li
                            let li = $('<li/>').addClass(liColors[Math.floor(Math.random()*liColors.length)]).html($(option).html());
    //ul li Click event here
                            ((element)=>{
                                $(element).click(e=>{
                                    $(element).remove();
                                    let newDropDownItem = $('<div/>');
                                    $(newDropDownItem).html($(element).html());
                                    $(`.multiple-custom-options${n}`).append(newDropDownItem);
                                    e.stopPropagation();
                    
                                });
                            })(li)

    //Remove dropdown item after li append to ul
                            $(`.custom-multiple-select${n} ul`).append(li);
                            $(dropDownItem).remove();
                        }
                    });
                });
              })(i);

    //Append dropdown item to container
              $(dropDownContainer).append(dropDownItem);

        })
    //Append dropdownContainer item to multiple-select
        $(element).append(dropDownContainer);


    //Click multiple-select event
        (function(n) {
            $(`.custom-multiple-select${n}`).click( function (e) {
                e.stopPropagation();
                closeAllSelect();
                $(`.custom-multiple-select${n}`).addClass("select-arrow-active");
                $(`.multiple-custom-options${n}`).removeClass("multiple-select-hide");
              });
          })(i);
    });


   
 
});


    //This function close all open multiple selects
const closeAllSelect = (e)=>{
    $('.multiple-select-items').addClass("multiple-select-hide");
    $(`.multiple-select`).removeClass("select-arrow-active");
}

document.addEventListener("click", closeAllSelect);

