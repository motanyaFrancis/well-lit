import { Metadata } from 'next';
import React from 'react';
import MusicGallery from '@/app/(main)/components/MusicGallery';
import { MusicData } from '@/app/types/music';

export const metadata: Metadata = {
    title: 'Music',
};

const sampleMusicData: MusicData = {
    playlists: [{ id: 1, name: 'Chill Vibes' }],
    tracks: [
        {
            id: 101,
            title: 'Sunset Drive',
            artist: 'Lofi Guy',
            thumbnail: '/thumbnails/lofi1.jpg',
            audioUrl: '/audio/lofi1.mp3',
            year: 2024,
            genre: 'Lofi',
        },
        {
            id: 102,
            title: 'Sunset Drive',
            artist: 'Lofi Guy',
            thumbnail: '/thumbnails/lofi1.jpg',
            audioUrl: '/audio/lofi1.mp3',
            year: 2024,
            genre: 'Lofi',
        },
        {
            id: 103,
            title: 'Sunset Drive',
            artist: 'Lofi Guy',
            thumbnail: '/thumbnails/lofi1.jpg',
            audioUrl: '/audio/lofi1.mp3',
            year: 2024,
            genre: 'Lofi',
        },
        {
            id: 104,
            title: 'Sunset Drive',
            artist: 'Lofi Guy',
            thumbnail: '/thumbnails/lofi1.jpg',
            audioUrl: '/audio/lofi1.mp3',
            year: 2024,
            genre: 'Lofi',
        },
        {
            id: 105,
            title: 'Sunset Drive',
            artist: 'Lofi Guy',
            thumbnail: '/thumbnails/lofi1.jpg',
            audioUrl: '/audio/lofi1.mp3',
            year: 2024,
            genre: 'Lofi',
        },
        {
            id: 106,
            title: 'Sunset Drive',
            artist: 'Lofi Guy',
            thumbnail: '/thumbnails/lofi1.jpg',
            audioUrl: '/audio/lofi1.mp3',
            year: 2024,
            genre: 'Lofi',
        },
        {
            id: 107,
            title: 'Sunset Drive',
            artist: 'Lofi Guy',
            thumbnail: '/thumbnails/lofi1.jpg',
            audioUrl: '/audio/lofi1.mp3',
            year: 2024,
            genre: 'Lofi',
        },
        // Add more...
    ],
};

const MusicPage: React.FC = () => {
    return (
        <div className='container_body'>
            <div className='relative'>
                <MusicGallery musicData={sampleMusicData} />
            </div>
        </div>
    );
};

export default MusicPage;
