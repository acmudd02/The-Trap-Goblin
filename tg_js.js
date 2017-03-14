//Create arrays for each of the selections
  var levels= [['1d6','2d6','4d6'],
 ['2d6', '4d6', '10d6'],
 ['4d6', '10d6', '18d6'],
 ['10d6', '18d6', '24d6']
];
  var save= ['10-11', '12- 15', '16- 20']

  var to_hit= ['+3 to +5', '+6 to +8', '+9 to +12']

  var damage = [['  Suddenly, long barbs come darting out of the walls from hidden panels dealing ', '  Suddenly, spikes spring from the dungeon floor, dealing ', '  Suddenly, a flurry of darts sprays from a hidden panel dealing ', '  Suddenly, a pit in the floor opens, a pit lined with spikes dealing ', '  Suddenly, magic thorns spring from the ground, dealing ', '  Suddenly, the floor tilts into a stone slide, at the bottom is a bed of spikes, dealing '],
  [ '  Suddenly, spinning blades come slashing out of the floor dealing ', '  Suddenly, an animated sword attacks, dealing ', '  Suddenly, a pendulum swings a crescent blade, dealing ', '  Suddenly, a spinning blade shoots from a hidden aperture, dealing ','  Suddenly, a spinning blade slashes from the floor, dealing ', '  Suddenly, a statue in the corner swings its sword, dealing '],
  [ '  Suddenly, the ceiling drops, crushing everything beneath it, dealing ', '  Suddenly, the walls slam together, dealing ', '  Suddenly, a boulder drops from the ceiling, dealing ', '  Suddenly, a panel drops from above, dealing ', '  Suddenly, a panel in the floor rotates, pressing all pcs on it, dealing ', '  Suddenly, a statue collapses, dealing '],
  [ '  Suddenly, jets of flame erupt from hidden tubes in the walls, dealing ', '  Suddenly, a floor magically turns into magma, dealing ', '  Suddenly, a burst of flame emerges from the floor, dealing ', "  Suddenly, a stone dragon's head turns, and breathes flame, dealing ", '  Suddenly, the sound of gas can be heard, followed by a dropping quick match, dealing ', '  Suddenly, an animated lantern flies from the wall, and pours flaming oil, dealing '],
  [ '  Suddenly, arcing currents of electricity dance on hidden panels in the floor, dealing ', '  Suddenly, a bolt of lightning erupts from a pair of diamonds set in the wall, dealing ', '  Suddenly, a bolt of lightning roars from a fresco of a storm cloud on the ceiling, dealing ', '  Suddenly, a jar filled with a blue potion drops from a hidden chute, dealing ', '  Suddenly, the hum of electricity can be heard coming from the walls, the floor sparks, dealing ', '  Suddenly, there is a flash of light, as a bolt of electricity strikes, dealing ' ],
  [ '  Suddenly, an arctic wind blows from a hidden passage, dealing ', '  Suddenly, a cold mist forms around, dealing ', '  Suddenly, an orb of glacial ice drops from the ceiling, dealing ', '  Suddenly, a puff of arctic wind blows from a glowing crystal orb, dealing ', 'Suddenly, the floor drops, giving way to a pool of unbelievably cold water, dealing ', 'Suddenly, a blue bolt of arcane energy leaps from a rod in the center of the room, dealing '],
  [ '  Suddenly, a spectral hand reaches through the wall, dealing ', '  Suddenly a ray of green energy blasts from a hidden panel, dealing ', '  Suddenly, a statue of a mummy touches, dealing ', '  Suddenly, a screaming skull descends from the ceiling and strikes, dealing ', '  Suddenly, the floor takes on a greenish incandescence, dealing ', '  Suddenly, there is a flash of green light, and a skeletal figure lashes out, dealing ']];



var dmg_selector = [ ' piercing ', ' slashing ', ' crushing ', ' fire ', ' electric', ' cold ', ' necrotic ']

   // On selection of the damage, a paragraph is added to the body containing a description i.e.
  // A sectret panel opens in the wall, and a spinning blade lashes out, dealing (damage)
  //Create a method to gather options from the arrays
  //Display the results to the screen
  function get_level(){
    var sev = $("#severity").val();
    var lvl = $("#cha_lvl").val();
    var dmg_type = $("#type").val();
    var random = Math.floor(Math.random() * 6);
    document.getElementById("trap").innerHTML = 'Your Trap:  ' + damage[dmg_type][random] + levels[lvl][sev] + ' ' + dmg_selector[dmg_type] + " damage." + " To Hit: " + to_hit[sev]  + " To Save: " + save[sev];
}
  //Create a Random Trap Option to randomize all trap features
  function random_trap() {
    var random_sev = Math.floor(Math.random() * 3);
    var random_lvl = Math.floor(Math.random() * 3);
    var random_dmg_type = Math.floor(Math.random() * 3);
    var random_txt = Math.floor(Math.random() * 6);
    var dmg =
    document.getElementById("trap").innerHTML = 'Your Trap:  ' + damage[random_dmg_type][random_txt] + levels[random_lvl][random_sev] + ' ' + dmg_selector[random_dmg_type] + " damage." + " To Hit: " + to_hit[random_sev]  + " To Save: " + save[random_sev];
  }
