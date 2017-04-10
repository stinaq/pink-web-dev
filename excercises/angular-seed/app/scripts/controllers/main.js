'use strict';

/**
 * @ngdoc function
 * @name angularSeedApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularSeedApp
 */
angular.module('angularSeedApp')
  .controller('MainCtrl', function () {
    var main = this;

    main.characters = [
      {
        '_id': '58c30cea9864e413b736ccae',
        'name': 'Dobby',
        'species': 'House-elf',
        'profession': 'Hogwarts kitchens worker',
        'description': 'Dobby (28 June (year unknown) – March, 1998) was a male house-elf who served the Malfoy family. His masters were Dark Wizards who treated him cruelly. In 1992, he tried to warn Harry Potter of the plot to have the Chamber of Secrets reopened which he came to know via the contact between his masters and Lord Voldemort. Dobby kept hurting himself in numerous ways, e.g. ironing his hands, hitting his head against a lamp, and banging his head against cabinets. He felt this was necessary because he was disobeying his masters, the Malfoy family.',
        'death-eater': false
      },
      {
        '_id': '58c30cea9864e413b736ccaf',
        'name': 'Tom Riddle',
        'species': 'human',
        'wand': '13½inch, Yew, phoenix feather core',
        'profession': 'Fugitive',
        'description': 'Tom Marvolo Riddle (31 December, 1926[11] – 2 May, 1998), later and better known as Lord Voldemort, was a half-blood wizard who was considered to have been the most powerful and dangerous Dark wizard of all time. The son of the wealthy Muggle Tom Riddle Senior and the witch Merope Gaunt, he was orphaned and raised in a Muggle orphanage, which remained his permanent residence through his 1938-1945 attendance at Hogwarts School of Witchcraft and Wizardry. He was a member of Slytherin house. ',
        'death-eater': true
      },
      {
        '_id': '58c30cea9864e413b736ccb1',
        'name': 'Ronald Weasley',
        'species': 'human',
        'wand': '12inch, Ash, unicorn tail hair',
        'profession': 'Student',
        'description': 'Ronald Bilius[25] \'Ron\' Weasley (b. 1 March, 1980) was a pure-blood[26] wizard, the sixth son of Arthur and Molly Weasley (née Prewett). He was also the younger brother of Bill, Charlie, Percy, Fred, George, and the elder brother of Ginny. Ron and his brothers and sister lived in the Burrow. Ron began attending Hogwarts School of Witchcraft and Wizardry in 1991 and was Sorted into Gryffindor House. He soon became best friends with fellow student Harry Potter and later Hermione Granger.',
        'death-eater': false
      },
      {
        '_id': '58c30cea9864e413b736ccb2',
        'name': 'Bellatrix Lestrange',
        'species': 'human',
        'wand': '12¾inch, Walnut, dragon heartstring',
        'profession': 'Fugitive',
        'description': 'Bellatrix Lestrange (née Black) (1951 – 2 May, 1998) was a pure-blood witch, the eldest daughter of Cygnus Black III and Druella Black (née Rosier) and elder sister of Andromeda Tonks and Narcissa Malfoy. She was a member of the House of Black, an old wizarding family and one of the Sacred Twenty-Eight.',
        'death-eater': true
      },
      {
        '_id': '58c30cea9864e413b736ccb3',
        'name': 'Harry Potter',
        'species': 'human',
        'wand': '11inch, Holly, phoenix feather',
        'profession': 'Student',
        'description': 'Harry James[45] Potter (b. 31 July, 1980) was a half-blood[46] wizard, the only child and son of the late James and Lily Potter (née Evans), and one of the most famous wizards of modern times. In what proved to be a vain attempt to circumvent a prophecy that stated that a boy born at the end of July of 1980 could be able to defeat him, Lord Voldemort tried to murder him when he was a year and three months old. Voldemort murdered Harry\'s parents as they tried to protect him, shortly before attacking Harry. This early unsuccessful attempt to vanquish Harry led to Voldemort\'s first downfall, marking the end of the First Wizarding War and to Harry henceforth being known as the \'Boy Who Lived.\' One consequence of Lily\'s loving sacrifice was that her orphaned son had to be raised by her only remaining blood relative. Harry was raised by his Muggle aunt Petunia Dursley, where he would be protected from Lord Voldemort, due to the Bond of Blood charm Albus Dumbledore placed upon him. This powerful charm would protect him until he became of age. As the only known survivor of the Killing Curse (up to that point) Harry was already famous before he arrived at Hogwarts School of Witchcraft and Wizardry.',
        'death-eater': false
      },
      {
        '_id': '58c30cea9864e413b736ccb4',
        'name': 'Minerva McGonagall',
        'species': 'human',
        'wand': '9½inch, Fir, dragon heartstring',
        'profession': 'Professor',
        'description': 'Professor Minerva McGonagall, O.M. (First Class),[11] (b. 4 October,[1] 1935[2]) was a half-blood witch, the only daughter of Muggle Robert McGonagall and witch Isobel Ross. She was a registered Animagus who attended Hogwarts School of Witchcraft and Wizardry from 1947-1954 and was Sorted into Gryffindor House (but it took the sorting hat 5 ½ minutes to decide if she was Gryffindor or Ravenclaw, therefore making her a hatstall).',
        'death-eater': false
      },
      {
        '_id': '58c30cea9864e413b736ccba',
        'name': 'Hedwig',
        'species': 'owl',
        'description': 'Hedwig (d. 27 July, 1997) was Harry Potter\'s pet Snowy Owl (Bubo scandiacus).[3] In August 1991 Hedwig was purchased from Eeylops Owl Emporium and was gifted to Harry from Rubeus Hagrid on his eleventh birthday.',
        'death-eater': false
      },
    ];

  });
