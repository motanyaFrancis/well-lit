'use client';

import React, { useState } from 'react';
import { MusicData } from '@/app/types/music';
import FeaturedTrack from './FeaturedTrack';
import FilterSection from './FilterSection';
import MusicCard from './MusicCard';

interface MusicGalleryProps {
    musicData: MusicData;
}

const MusicGallery: React.FC<MusicGalleryProps> = ({ musicData }) => {
    const featuredTrack = musicData.tracks.find((track) => track.isFeatured) || null;
    const nonFeaturedTracks = featuredTrack
        ? musicData.tracks.filter((track) => track.id !== featuredTrack.id)
        : musicData.tracks;

    const [visibleCount, setVisibleCount] = useState(6);

    const handleShowMore = () => {
        setVisibleCount((prev) => prev + 6);
    };

    const visibleTracks = nonFeaturedTracks.slice(0, visibleCount);
    const hasMoreToShow = visibleCount < nonFeaturedTracks.length;

    return (
        <div className="relative pb-28 px-4 sm:px-6 lg:px-8">
            {/* Filter + Featured */}
            <FilterSection />

            {featuredTrack && (
                <FeaturedTrack track={featuredTrack} />
            )}

            {/* All Music Section */}
            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">All Music</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {visibleTracks.map((track) => (
                    <MusicCard key={track.id} track={track} />
                ))}
            </div>

            {/* View More */}
            {hasMoreToShow && (
                <div className="mt-6 text-center">
                    <button
                        onClick={handleShowMore}
                        className="px-4 py-2 text-sm font-medium text-blue-600 hover:underline"
                    >
                        View More
                    </button>
                </div>
            )}
        </div>
    );
};

export default MusicGallery;
