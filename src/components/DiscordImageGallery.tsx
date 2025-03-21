import React, { useEffect, useState } from 'react';
import { fetchDiscordImages } from '../services/discord';
import { useStore } from '../store/useStore';

const DiscordImageGallery: React.FC = () => {
    const [images, setImages] = useState<string[]>([]);
    const { serverId } = useStore(state => state);

    useEffect(() => {
        const getImages = async () => {
            const fetchedImages = await fetchDiscordImages(serverId);
            setImages(fetchedImages);
        };

        getImages();
    }, [serverId]);

    return (
        <div className="image-gallery">
            {images.length > 0 ? (
                images.map((image, index) => (
                    <img key={index} src={image} alt={`Discord Image ${index}`} />
                ))
            ) : (
                <p>No images found.</p>
            )}
        </div>
    );
};

export default DiscordImageGallery;