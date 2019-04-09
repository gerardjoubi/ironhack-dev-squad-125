export default class DOM {
    constructor() {

    }

    setPlayerCount() {
       return window.prompt("number of players");
    }

    setPlayerName() {
        return window.prompt("player name");
    }

    setFishRemovalAmount(d) {
        return window.prompt(`Hey fisherman, it's day ${d}, how many fishes do you wan't to take today ?`);
    }
}