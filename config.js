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
  upgrades:{
    // Each troop type has its own level, bought in the Lobby. Every troop of that type gets the boost.
    // Cost to reach level n = costPerLevel x (n - 1): level 2 costs 100, level 3 costs 200, and so on.
    maxLevel:10,
    costPerLevel:100,
    boostPerLevel:0.10,  // +10% health and +10% damage per level above 1
    currency:'dues',     // which balance pays for upgrades: 'dues', 'clout' or 'gems'
  },
  // Leagues you climb with Rep (trophies). Reaching a new one pays its gems once.
  leagues:[
    {name:'Freshman Lawn',rep:0,gems:0},
    {name:'Sophomore Quad',rep:60,gems:10},
    {name:'Junior Courtyard',rep:150,gems:15},
    {name:'Senior Row',rep:300,gems:20},
    {name:'Alumni Hall',rep:500,gems:30},
    {name:'Legend Estate',rep:800,gems:50},
  ],
  // Chests drop on wins. One unlocks at a time; Gems skip the wait.
  chests:{
    slots:4,
    skipGemsPerMinute:1,          // cost to open early, rounded up, minimum 1
    leagueBonus:0.35,             // each league above the first adds this much to chest contents
    types:{
      wood:  {name:'Wooden Chest', unlockSeconds:30,   weight:60,color:'#9a6a3a',trim:'#c9a46a',dues:[150,300], clout:[100,250], gems:[0,1]},
      silver:{name:'Silver Chest', unlockSeconds:180,  weight:28,color:'#8b98a8',trim:'#dfe6ee',dues:[350,600], clout:[300,500], gems:[1,3]},
      gold:  {name:'Golden Chest', unlockSeconds:900,  weight:10,color:'#d9a21f',trim:'#fff0b3',dues:[800,1300],clout:[700,1100],gems:[4,8]},
      magic: {name:'Magic Chest',  unlockSeconds:3600, weight:2, color:'#8a4fd8',trim:'#ffd0f2',dues:[1800,2600],clout:[1500,2200],gems:[12,20]},
    },
  },
  // Seven-day login streak; missing a day starts it over. `chest` gives a chest instead of resources.
  daily:[{dues:200},{clout:250},{gems:5},{dues:500},{clout:500},{gems:10},{chest:'gold'}],
  quests:{perDay:3},
  // Siege Night: waves of CPU troops attack your own base. Your defenses fire on their own;
  // you spend Spirit (it refills over time) on the abilities below.
  defend:{
    waves:3,
    firstWaveIn:3,        // seconds before wave 1
    waveEvery:16,         // seconds between waves (cut to 3 once the lawn is clear)
    spawnEvery:0.45,      // seconds between attackers within a wave
    baseCount:2,perWave:2,perLevel:1,   // attackers in wave w = baseCount + perWave x w + perLevel x chapter level
    enemyBoostPerLevel:0.15,            // attacker health and damage per chapter level above 1
    homeTurfHp:1.6,                     // your buildings get this much extra health when defending
    spirit:{start:5,max:10,perSecond:1.2},
    abilities:{
      strike:{name:'Water Strike',glyph:'W',cost:3,radius:1.7,damage:160},
      horn:  {name:'Air Horn',    glyph:'A',cost:4,radius:2.4,stunSeconds:3},
      wall:  {name:'Hedge Drop',  glyph:'H',cost:2},
    },
    rewards:{duesPerLevel:220,cloutPerLevel:180},   // paid in full for 3 stars, by thirds below that
  },
  layouts:{
    maxHedges:36,        // most hedges any rival builds; every layout needs at least this many hedge slots
    minDeployTiles:30,   // open lawn tiles (outside the red no-drop zone) a fully built layout must leave
  },
};
