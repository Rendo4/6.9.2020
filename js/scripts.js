$(document).ready(function(){
  $("form#stress-test").submit(function(event){
    event.preventDefault();
    let effectsTally = 0;
    let symptomsTally = 0;
    let reliefTally = 0;
    $("#effects").show();
    $("input:checkbox[name=effects]:checked").each(function(){
      let effectsOfStress = $(this).val();
      $('#effects').append(effectsOfStress + "<br>");
      effectsTally += 1;
      
    });
    $("#symptoms").show();
    $("input:checkbox[name=symptoms]:checked").each(function(){
      let symptomsOfStress = $(this).val();
      
      $('#symptoms').append(symptomsOfStress + "<br>");
      symptomsTally += 1;
    });
    $("#relief").show();
    $("input:checkbox[name=relief]:checked").each(function(){
      let reliefFromStress = $(this).val();
      
      $('#relief').append(reliefFromStress + "<br>");
      reliefTally += 1;
    });
    $('#stress_test').hide();
    if(effectsTally + symptomsTally - reliefTally === 4) {
      alert("you have high stress! relax!!");
    }else{
      alert("you seem to be coping well! keep it up!");
    }
  });
});
