/* Greek Row tuning values. index.html loads this before the game script.
   Change numbers here; the game logic reads them from GR_CONFIG and keeps no copies. */
window.GR_CONFIG={
  match:{
    duration:150,        // seconds on the clock for each CPU match
    readySeconds:1.5,    // "Get ready" countdown between pressing Ready and the match starting
    endDelay:0.6,        // pause after the last building falls, before the results screen
    findAnotherCost:25,  // Dues to swap the lobby opponent for a new one
    gemsPerStar:2,       // Gems awarded per star on the results screen
  },
  layouts:{
    maxHedges:36,        // most hedges any rival builds; every layout needs at least this many hedge slots
    minDeployTiles:30,   // open lawn tiles (outside the red no-drop zone) a fully built layout must leave
  },
};
