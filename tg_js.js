//Create arrays for each of the selections
  var levels= [['1d6','2d6','4d6'],
 ['2d6', '4d6', '10d6'],
 ['4d6', '10d6', '18d6'],
 ['10d6', '18d6', '24d6']
];
  var save= ['10-11', '12- 15', '16- 20']

  var to_hit= ['+3 to +5', '+6 to +8', '+9 to +12']

  var damage = ['Suddenly, long barbs come darting out of the walls from hidden panels dealing ',
  'Suddenly, spinning blades come slashing out of the floor dealing ',
  'Suddenly, the ceiling drops, crushing everything beneath it, dealing ',
  'Suddenly, jets of flame erupt from hidden tubes in the walls, dealing ',
  'Suddenly, arcing currents of electricity dance on hidden panels in the floor, dealing ',
  'Suddenly, an arctic wind blows from a hidden passage, dealing ',
  'Suddenly, a spectral hand reachs through the wall, dealing '];


   // On selection of the damage, a paragraph is added to the body containing a description i.e.
  // A sectret panel opens in the wall, and a spinning blade lashes out, dealing (damage)
  //Create a method to gather options from the arrays
  //Display the results to the screen
  function get_level(){
    var sev = $("#severity").val();
    var lvl = $("#cha_lvl").val();
    var dmg_type = $("#type").val();
    var dmg = $("#type option:selected").text();
    document.getElementById("trap").innerHTML = damage[dmg_type] + levels[lvl][sev] + ' ' + dmg + " damage." + " To Hit: " + to_hit[sev]  + " To Save: " + save[sev];
}
