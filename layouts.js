/* CPU base layouts for Greek Row. index.html loads this before the game script.

   Each layout is an 18 x 18 text grid, one string per row, read left to right and top to bottom.
   A building is a solid square of its letter, as wide as the building's size:
     C  Chapter House     4x4   exactly one per layout
     B  Balloon Launcher  2x2   at least 4
     N  Nerf Turret       2x2   at least 3
     S  Speaker Stack     2x2   at least 2
     D  Dues Box          2x2   at least 4
     L  Clout Booth       2x2   at least 4
     A  Treasury Annex    2x2   at least 3
     K  Prank Closet      2x2   at least 1
     T  Rush Tent         3x3   at least 1
     h  Hedge             1x1   at least 36
     .  open lawn
   Two buildings of the same type can touch as long as each one is a clean square.

   These are slots, not a fixed build. A rival only fills as many of each type as its level allows,
   using the slots closest to the Chapter House first. That keeps every layout at the same difficulty
   for a given level; only the arrangement changes.

   To add a layout: copy an entry below, give it a new id and name, and draw the grid.
   Nothing else needs to change. When the game starts it checks every layout (grid size, letters,
   clean squares, slot counts, enough open lawn to drop troops) and logs an error in the browser
   console for any that fail. A layout that fails is left out of the rotation. */
window.GR_LAYOUTS=[
  {id:'ring',name:'Ring Fort',grid:[
    'DDLL..........LLDD',
    'DDLL..........LLDD',
    '..................',
    '..................',
    '....hhhhhhhhhh....',
    '....hBBNNSSBBh....',
    '....hBBNNSSBBh....',
    'AA..hSSCCCCNNh..AA',
    'AA..hSSCCCCNNh..AA',
    '....hKKCCCC..h....',
    '....hKKCCCC..h..AA',
    '....hBB..NNBBh..AA',
    '....hBB..NNBBh....',
    '....hhhhhhhhhh....',
    '..................',
    '.......TTT........',
    'DDLL...TTT....LLDD',
    'DDLL...TTT....LLDD',
  ]},
  {id:'westwall',name:'West Wall',grid:[
    'AA.....hh....DD.DD',
    'AA.....hh....DD.DD',
    '.......hh.......LL',
    '.......hh..NN...LL',
    '.......hh..NN.SS..',
    '.......hhBB...SSLL',
    '.......hhBBNN...LL',
    'TTT....hh..NNCCCC.',
    'TTT....hhSS..CCCC.',
    'TTT....hhSSBBCCCC.',
    '.......hh..BBCCCC.',
    '.......hhBB...KKAA',
    '.......hhBB...KKAA',
    '.......hh..NN.....',
    '.......hhBBNNLL.LL',
    '.......hhBB..LL.LL',
    'AA.....hh....DD.DD',
    'AA.....hh....DD.DD',
  ]},
  {id:'corner',name:'Corner Keep',grid:[
    'DD.DD.LL.LL.AA.AA.',
    'DD.DD.LL.LL.AA.AA.',
    '..................',
    'DD.TTT............',
    'DD.TTT............',
    '...TTT............',
    'DD......hhhhhhhh..',
    'DD.....hhhhhhhhhhh',
    '.......hKK..BB.NN.',
    'LL....hhKK..BB.NN.',
    'LL....hh..NN..BB..',
    '......hh..NN..BBSS',
    'LL....hhBB......SS',
    'LL....hhBBBB.CCCC.',
    '......hh..BB.CCCC.',
    'AA....hhNNSS.CCCC.',
    'AA.....hNNSS.CCCC.',
    '.......h..........',
  ]},
  {id:'hall',name:'Long Hall',grid:[
    'DD.TTT..........DD',
    'DD.TTT.CCCC.....DD',
    '...TTT.CCCC.......',
    'DD.....CCCC.....DD',
    'DD.....CCCC.....DD',
    '...hhhh.hh.hhhh...',
    '....hBBSSSSBBh....',
    '....hBBSSSSBBh....',
    '....h........h....',
    'LL..hNN.NN.NN...LL',
    'LL..hNN.NN.NNh..LL',
    '....h........h....',
    'LL..hBB.KK.BBh..LL',
    'LL..hBB.KK.BBh..LL',
    '...hhhhhhhhhhhh...',
    '..................',
    '..AA....AA....AA..',
    '..AA....AA....AA..',
  ]},
  {id:'diagonal',name:'Diagonal',grid:[
    '.........NN...hhAA',
    '.CCCC.BB.NN..hh.AA',
    '.CCCC.BB.BB.hh....',
    '.CCCC.SS.BBhh.....',
    '.CCCC.SS..hh......',
    '.....BB..hh.......',
    '.BBSSBB.hh........',
    '.BBSS..hhh........',
    '...NN.hhh.........',
    'NN.NNhhh..........',
    'NN..hhh.........LL',
    'KK.hhh..........LL',
    'KKhh............LL',
    '.hh........TTTAALL',
    'hh.........TTTAADD',
    'h..........TTT..DD',
    'AA......LLLLDDDDDD',
    'AA......LLLLDDDDDD',
  ]},
  {id:'pods',name:'Four Pods',grid:[
    '..................',
    '.hhhhhh....hhhhhh.',
    '.hBBNN......NNBBh.',
    '.hBBNN..AA..NNBBh.',
    '.h......AA......h.',
    '........SS........',
    '........SS........',
    '...DDLLCCCCLLDD...',
    '...DDLLCCCCLLDD...',
    '...DDLLCCCCLLDD...',
    '...DDLLCCCCLLDD...',
    '........KK........',
    '........KK........',
    '.h.....AAAA.....h.',
    '.hBBSS.AAAA.NNBBh.',
    '.hBBSS.TTT..NNBBh.',
    '.hhhhhhTTT.hhhhhh.',
    '.......TTT........',
  ]},
];
