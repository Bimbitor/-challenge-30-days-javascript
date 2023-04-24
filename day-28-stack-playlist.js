class Node {
    constructor(value) {
        // Tu código aquí 👈🏻
        this.value = value;
        this.next = null;
    }
}

class Playlist {
    constructor() {
        // Tu código aquí 👈🏻
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    
    addSong(song) {
        // Tu código aquí 👈🏻
        
        const newNode = new Node(song);
        if (!this.length === 0) {
            this.bottom = newNode;
            this.top = newNode;
        } else {
            this.top.next = newNode;
            this.top = newNode;
        }
        this.length++;
        console.log(this);
    }
    
    playSong() {
        // Tu código aquí 👈🏻
        if (!this.top) {
            throw new Error("No hay canciones en la playlist")
        }
        
        const currentSong = this.top.value;
        if (this.top === this.bottom) {
            this.bottom = null;
        }
        this.top = this.top.next;
        this.length--;
        return currentSong;
    }
    
    getPlaylist() {
        // Tu código aquí 👈🏻
        let songs = [];
        let currentSong = this.bottom;
        for (let i = 0; i < this.length; i++) {
            songs.push(currentSong.value);
            currentSong = currentSong.next;
        }
        return songs.reverse();
    }
}


const playlist = new Playlist();

playlist.addSong("Bohemian Rhapsody");
playlist.addSong("Stairway to Heaven");
playlist.addSong("Hotel California");

console.log(playlist.getPlaylist());

playlist.playSong();
Output: "Bohemian Rhapsody"
playlist.playSong();
Output: "Stairway to Heaven"


console.log(playlist.getPlaylist());


