// import WixImage from "@/components/WixImage";
// import { cn } from "@/lib/utils";
// import { products } from "@wix/stores";
// import { PlayIcon } from "lucide-react";
// import { useEffect, useState } from "react";
// import Zoom from "react-medium-image-zoom";

// interface ProductMediaProps {
//   media: products.MediaItem[] | undefined;
// }

// export default function ProductMedia({ media }: ProductMediaProps) {
//   const [selectedMedia, setSelectedMedia] = useState(media?.[0]);

//   useEffect(() => {
//     setSelectedMedia(media?.[0]);
//   }, [media]);

//   if (!media?.length) return null;

//   const selectedImage = selectedMedia?.image;
//   const selectedVideo = selectedMedia?.video?.files?.[0];

//   return (
//     <div className="h-fit basis-2/5 space-y-5 md:sticky md:top-10">
//       <div className="aspect-square bg-secondary">
//         {selectedImage?.url ? (
//           <Zoom key={selectedImage.url}>
//             <WixImage
//               mediaIdentifier={selectedImage.url}
//               alt={selectedImage.altText}
//               width={1000}
//               height={1000}
//             />
//           </Zoom>
//         ) : selectedVideo?.url ? (
//           <div className="flex size-full items-center bg-black">
//             <video controls className="size-full">
//               <source
//                 src={selectedVideo.url}
//                 type={`video/${selectedVideo.format}`}
//               />
//             </video>
//           </div>
//         ) : null}
//       </div>
//       {media.length > 1 && (
//         <div className="flex flex-wrap gap-5">
//           {media.map((mediaItem) => (
//             <MediaPreview
//               key={mediaItem._id}
//               mediaItem={mediaItem}
//               isSelected={mediaItem._id === selectedMedia?._id}
//               onSelect={() => setSelectedMedia(mediaItem)}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// interface MediaPreviewProps {
//   mediaItem: products.MediaItem;
//   isSelected: boolean;
//   onSelect: () => void;
// }

// function MediaPreview({ mediaItem, isSelected, onSelect }: MediaPreviewProps) {
//   const imageUrl = mediaItem.image?.url;
//   const stillFrameMediaId = mediaItem.video?.stillFrameMediaId;
//   const thumbnailUrl = mediaItem.thumbnail?.url;
//   const resolvedThumbnailUrl =
//     stillFrameMediaId && thumbnailUrl
//       ? thumbnailUrl.split(stillFrameMediaId)[0] + stillFrameMediaId
//       : undefined;

//   if (!imageUrl && !resolvedThumbnailUrl) return null;

//   return (
//     <div
//       className={cn(
//         "relative cursor-pointer bg-secondary",
//         isSelected && "outline outline-1 outline-primary",
//       )}
//     >
//       <WixImage
//         mediaIdentifier={imageUrl || resolvedThumbnailUrl}
//         alt={mediaItem.image?.altText || mediaItem.video?.files?.[0].altText}
//         width={100}
//         height={100}
//         onMouseEnter={onSelect}
//       />
//       {resolvedThumbnailUrl && (
//         <span className="absolute left-1/2 top-1/2 flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/40">
//           <PlayIcon className="size-5 text-white/60" />
//         </span>
//       )}
//     </div>
//   );
// }

import WixImage from "@/components/WixImage";
import { cn } from "@/lib/utils";
import { products } from "@wix/stores";
import { PlayIcon } from "lucide-react";
import { useEffect, useState } from "react";
import Zoom from "react-medium-image-zoom";

interface ProductMediaProps {
  media: products.MediaItem[] | undefined;
}

export default function ProductMedia({ media }: ProductMediaProps) {
  const [selectedMedia, setSelectedMedia] = useState(media?.[0]);

  useEffect(() => {
    setSelectedMedia(media?.[0]);
  }, [media]);

  if (!media?.length) return null;

  const selectedImage = selectedMedia?.image;
  const selectedVideo = selectedMedia?.video?.files?.[0];

  return (
    <div className="h-fit basis-2/5 md:sticky md:top-10">
      {/* On medium+ screens: side-by-side, on small: stacked */}
      <div className="flex flex-col gap-4 md:flex-row">
        {/* Main image first on all screens */}
        <div className="order-1 flex-1 md:order-2">
          <div className="aspect-square overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
            {selectedImage?.url ? (
              <Zoom key={selectedImage.url}>
                <WixImage
                  mediaIdentifier={selectedImage.url}
                  alt={selectedImage.altText}
                  width={1000}
                  height={1000}
                  className="h-full w-full object-contain"
                />
              </Zoom>
            ) : selectedVideo?.url ? (
              <div className="flex size-full items-center bg-black">
                <video controls className="size-full">
                  <source
                    src={selectedVideo.url}
                    type={`video/${selectedVideo.format}`}
                  />
                </video>
              </div>
            ) : null}
          </div>
        </div>

        {/* Previews - below main on small, left on medium+ */}
        {media.length > 1 && (
          <div className="order-2 flex gap-2 md:order-1 md:w-20 md:flex-col">
            {media.slice(0, 4).map((mediaItem) => (
              <MediaPreview
                key={mediaItem._id}
                mediaItem={mediaItem}
                isSelected={mediaItem._id === selectedMedia?._id}
                onSelect={() => setSelectedMedia(mediaItem)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Bottom image grid — only on medium and up */}
      {media.length > 1 && (
        <div className="mt-6 hidden space-y-4 md:block">
          <div className="grid grid-cols-2 gap-4">
            {media.slice(0, 3).map((mediaItem, index) => (
              <div key={mediaItem._id} className="relative">
                <div className="aspect-square cursor-pointer overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md">
                  <Zoom key={mediaItem?.image?.url}>
                    <WixImage
                      mediaIdentifier={
                        mediaItem.image?.url || mediaItem.thumbnail?.url
                      }
                      alt={
                        mediaItem.image?.altText || `Product view ${index + 2}`
                      }
                      width={300}
                      height={300}
                      className="h-full w-full object-contain"
                    />
                  </Zoom>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

interface MediaPreviewProps {
  mediaItem: products.MediaItem;
  isSelected: boolean;
  onSelect: () => void;
}

function MediaPreview({ mediaItem, isSelected, onSelect }: MediaPreviewProps) {
  const imageUrl = mediaItem.image?.url;
  const stillFrameMediaId = mediaItem.video?.stillFrameMediaId;
  const thumbnailUrl = mediaItem.thumbnail?.url;
  const resolvedThumbnailUrl =
    stillFrameMediaId && thumbnailUrl
      ? thumbnailUrl.split(stillFrameMediaId)[0] + stillFrameMediaId
      : undefined;

  if (!imageUrl && !resolvedThumbnailUrl) return null;

  return (
    <div
      className={cn(
        "relative cursor-pointer overflow-hidden rounded-lg border bg-white transition-all duration-200 hover:shadow-md",
        isSelected
          ? "border-2 border-primary shadow-md"
          : "border-gray-200 hover:border-gray-300",
      )}
      style={{ width: "64px", height: "64px" }} // smaller thumbs on all screens
    >
      <WixImage
        mediaIdentifier={imageUrl || resolvedThumbnailUrl}
        alt={mediaItem.image?.altText || mediaItem.video?.files?.[0].altText}
        width={64}
        height={64}
        onClick={onSelect}
        className="aspect-square h-full w-full object-contain"
      />
      {resolvedThumbnailUrl && (
        <span className="absolute left-1/2 top-1/2 flex size-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/60">
          <PlayIcon className="size-3 fill-white text-white" />
        </span>
      )}
    </div>
  );
}
