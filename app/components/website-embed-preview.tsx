"use client";

import { useState } from "react";

type WebsiteEmbedPreviewProps = {
  embedUrl: string;
  title: string;
  showRefresh?: boolean;
};

export default function WebsiteEmbedPreview({
  embedUrl,
  title,
  showRefresh = false,
}: WebsiteEmbedPreviewProps) {
  const [embedKey, setEmbedKey] = useState(0);

  const handleRefresh = () => {
    setEmbedKey((current) => current + 1);
  };

  return (
    <>
      {showRefresh ? (
        <button
          type="button"
          onClick={handleRefresh}
          className="btn-accent-sm mb-4"
        >
          Refresh
        </button>
      ) : null}
      <div className="overflow-hidden border-2 border-[#292441]/30 bg-[#E9E7DA]/40">
        <iframe
          key={embedKey}
          title={title}
          src={embedUrl}
          className="h-[520px] w-full md:h-[680px]"
          allowFullScreen
        />
      </div>
    </>
  );
}
