import React, { useState, useEffect } from 'react';
import blog1 from '../assets/photos/blog1.png'; 

interface Photo {
  src: string;
  title: string;
  date: string;
}

interface PhotoGalleryProps {
  photos?: Photo[];
  photosPerLoad?: number;
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ 
  photos = [], 
  photosPerLoad = 3
}) => {
  const [displayedPhotos, setDisplayedPhotos] = useState<Photo[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Default photos if none provided
  const defaultPhotos: Photo[] = [
    {
      src: blog1,
      title: 'Android Development Workshop',
      date: 'March 15, 2024'
    },
    {
      src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop',
      title: 'Machine Learning Bootcamp',
      date: 'February 28, 2024'
    },
    {
      src: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=300&fit=crop',
      title: 'Cloud Computing Seminar',
      date: 'January 20, 2024'
    },
    {
      src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop',
      title: 'Flutter Development Meetup',
      date: 'December 10, 2023'
    },
    {
      src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop',
      title: 'DevFest 2023',
      date: 'November 25, 2023'
    },
    {
      src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
      title: 'Women in Tech Panel',
      date: 'October 15, 2023'
    },
    {
      src: 'https://images.unsplash.com/photo-1506485338023-6ce5f36692df?w=400&h=300&fit=crop',
      title: 'Startup Pitch Competition',
      date: 'September 30, 2023'
    },
    {
      src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c4?w=400&h=300&fit=crop',
      title: 'AI & Ethics Discussion',
      date: 'August 20, 2023'
    },
    {
      src: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop',
      title: 'Cybersecurity Workshop',
      date: 'July 12, 2023'
    }
  ];

  const photoData = photos.length > 0 ? photos : defaultPhotos;

  // Load initial photos
  useEffect(() => {
    const initialPhotos = photoData.slice(0, photosPerLoad);
    setDisplayedPhotos(initialPhotos);
  }, [photoData, photosPerLoad]);

  const loadMorePhotos = () => {
    if (isLoading) return; // Prevent multiple clicks
    
    setIsLoading(true);
    
    const currentCount = displayedPhotos.length;
    const nextBatch = photoData.slice(currentCount, currentCount + photosPerLoad);
    
    // Add a small delay to prevent race conditions
    setTimeout(() => {
      setDisplayedPhotos(prev => [...prev, ...nextBatch]);
      setIsLoading(false);
    }, 100);
  };

  const openModal = (src: string) => {
    setSelectedPhoto(src);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  const hasMorePhotos = displayedPhotos.length < photoData.length;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    if (selectedPhoto) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [selectedPhoto]);

  return (
    <div id="gallery">
      <div className="max-w-7xl mx-auto rounded-3xl p-12 ">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-center mb-5">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 ">
        GDG Noida Events
          </h1>
        </div>
          <p className="text-xl text-gray-600">
            Capturing moments from our amazing tech community gatherings
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayedPhotos.map((photo, index) => (
            <div
              key={`${photo.src}-${index}`} // Better key to prevent React issues
              className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ease-out hover:-translate-y-2 shadow-lg hover:shadow-2xl border border-black"
              onClick={() => openModal(photo.src)}
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white text-lg font-medium mb-1">
                  {photo.title}
                </h3>
                <p className="text-white/90 text-sm">
                  {photo.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {hasMorePhotos && (
          <div className="text-center">
            <button
              onClick={loadMorePhotos}
              disabled={isLoading}
              className={`px-8 py-4 bg-blue-500 text-white rounded-full text-sm font-medium uppercase tracking-wider transition-all duration-300 hover:bg-yellow-400 hover:text-white hover:-translate-y-1 hover:shadow-lg ${
                isLoading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isLoading ? 'Loading...' : 'Load More Photos'}
            </button>
          </div>
        )}

        {/* Modal */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <button
              onClick={closeModal}
              className="absolute top-6 right-8 text-white text-3xl font-bold hover:opacity-70 transition-opacity z-10"
            >
              ×
            </button>
            <div className="relative max-w-[90%] max-h-[90%] rounded-xl overflow-hidden shadow-2xl">
              <img
                src={selectedPhoto}
                alt="Full size"
                className="w-full h-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotoGallery;