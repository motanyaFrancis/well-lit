export interface Track {
    id: number;
    title: string;
    artist: string;
    album?: string;
    genre?: string;
    year?: number;
    thumbnail: string;
    audioUrl: string;
    isFeatured?: boolean;
  }
  
  export interface Playlist {
    id: number;
    name: string;
  }
  
  export interface MusicData {
    tracks: Track[];
    playlists: Playlist[];
  }
  