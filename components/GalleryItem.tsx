import Image from 'next/image';

interface GalleryItemProps {
  imageUrl: string;
  imageAlt: string;
  caption?: string;
}

export default function GalleryItem({ imageUrl, imageAlt, caption }: GalleryItemProps) {
  return (
    <div className="group">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      {caption && (
        <p className="mt-2 text-sm text-gray-600">{caption}</p>
      )}
    </div>
  );
}



