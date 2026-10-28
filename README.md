# Frat Wars

A frat-row base builder in the spirit of Clash of Clans. Grow your chapter, stock pranks, raid rival frats, and get revenge on the ones who hit you.

## Play

Open `index.html` in a browser. There's no build step. `index.html` holds the game, and `config.js` holds the numbers you can tune; keep them in the same folder. Progress saves in your browser's local storage.

## How it plays

The tab bar at the bottom switches between four pages any time you're not in a match:

- **Base:** your chapter lawn. Build, upgrade, collect, and check Rivals.
- **Shop:** gifts you can buy with Gems or Dues. Each purchase asks you to confirm first.
- **Troops:** every troop with its stats. Recruit them with Clout and pick up to 5 types to bring into your next match. Locked troops show what unlocks them.
- **Lobby:** your player name, your loadout and the rival you'll face. Hit **Ready** to start the match.

A match runs Lobby → Ready (a short countdown) → Match → Results (Victory or Defeat, with time, troops sent, troops lost and rewards) → **Return to lobby**. You can play as many CPU matches in a row as you like.

Resources:

- **Chapter House** is your headquarters. Its level caps how far every other building can go.
- **Dues** and **Clout** are the two main resources. Dues Boxes and Clout Booths produce them; Treasury Annexes raise storage.
- **Gems** are earned by winning raids (2 per star) and by holding off rival raids (1 each). Spend them in the Shop.
- **Rush Tents** house your raiding party. **Prank Closets** hold pranks.
- **Defenses:** Balloon Launcher, Nerf Turret, Speaker Stack, and Hedges.

### Troops

| Troop | Role |
|---|---|
| Pledge | Cheap, fast swarm |
| Lightweight | Very fast, goes only for resource buildings, double damage to them |
| Balloon Kid | Ranged, throws over hedges |
| Heavyweight | Very slow tank that walks straight to defenses and hits hard |
| Frisbee Bro | Tough, quick melee (Chapter LV 2) |
| Nerf Sniper | Long range (Chapter LV 2) |
| Couch Tank | Heavy tank that targets defenses (Chapter LV 3) |

### Raids

- Only the troop types in your loadout come with you.
- Drop troops on open lawn, outside the red zone around enemy buildings.
- **Pranks** (Pizza Drop, Air Horn, Glitter Bomb) can land anywhere.
- Knocking buildings down fills **Hype**. When it's full, throw a **Rager** to boost your troops for 8 seconds.
- Stars: 50% destroyed, Chapter House down, and 100% destroyed.

### Rivals

Rival frats raid you while you're away. How much they take depends on your defenses. The Rivals tab lists who hit you, and a Revenge raid sends you to the Lobby against them so you can win back what they took.

Online multiplayer isn't supported. Every match is against an AI-run rival chapter.

The "Sponsored" card on the Base page is a placeholder ad with made-up brands. Close it with the ✕.
