$(document).ready(function(){
  $("form#FortuneTeller").submit(function(event){
    event.preventDefault();

    var total = 0;
    var userInput = $("input:checkbox[name=unlucky-signs]:checked").each(function(){
      total += parseInt($(this).val());
      // alert(parseInt($(this).val()));
    });
    $("input:checkbox[name=lucky-signs]:checked").each(function(){
      total += parseInt($(this).val());
      // alert(parseInt($(this).val()));
    });
    // alert(total);

    if (total > 0) {
      $(".zero").hide();
      $(".abovezero").hide();
      $(".belowzero").hide();
      $(".abovezero").show();
    } else if ( total < 0) {
      $(".zero").hide();
      $(".abovezero").hide();
      $(".belowzero").hide();
      $(".belowzero").show();
    } else {
      $(".zero").hide();
      $(".abovezero").hide();
      $(".belowzero").hide();
      $(".zero").show();
    }
  });
});
