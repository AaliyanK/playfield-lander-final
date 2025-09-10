"use client";

import { useEffect, useState } from "react";

interface AbstractBrainSilhouetteProps {
  className?: string;
}

export default function AbstractBrainSilhouette({
  className = "",
}: AbstractBrainSilhouetteProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div
        className={`absolute inset-0 pointer-events-none ${className}`}
        style={{ zIndex: -2 }}
      />
    );
  }

  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ zIndex: -2 }}
    >
      <svg
        viewBox="0 0 1200 800"
        className="w-full h-full opacity-100"
        style={{ filter: "blur(0.2px)" }}
      >
        <defs>
          <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6A9B5A" stopOpacity="1.0" />
            <stop offset="100%" stopColor="#6A9B5A" stopOpacity="0.7" />
          </linearGradient>
          <linearGradient
            id="connectionGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#6A9B5A" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#6A9B5A" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Central Text Area - Keep Clear */}
        <rect
          x="400"
          y="200"
          width="400"
          height="400"
          fill="none"
          stroke="none"
        />

        {/* Left Hemisphere - Frontal Lobe */}
        <circle
          cx="150"
          cy="180"
          r="6"
          fill="url(#nodeGradient)"
          className="animate-pulse"
        >
          <animate
            attributeName="opacity"
            values="0.6;1.0;0.6"
            dur="3s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="r"
            values="5;7;5"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>

        <circle cx="190" cy="220" r="5" fill="url(#nodeGradient)">
          <animate
            attributeName="opacity"
            values="0.5;0.9;0.5"
            dur="2.5s"
            repeatCount="indefinite"
            begin="0.5s"
          />
          <animate
            attributeName="r"
            values="2;4;2"
            dur="2.5s"
            repeatCount="indefinite"
            begin="0.5s"
          />
        </circle>

        {/* Left Hemisphere - Parietal Lobe */}
        <circle cx="170" cy="280" r="5.5" fill="url(#nodeGradient)">
          <animate
            attributeName="opacity"
            values="0.5;0.9;0.5"
            dur="2.8s"
            repeatCount="indefinite"
            begin="1s"
          />
          <animate
            attributeName="r"
            values="2.5;4.5;2.5"
            dur="2.8s"
            repeatCount="indefinite"
            begin="1s"
          />
        </circle>

        <circle cx="130" cy="320" r="4.5" fill="url(#nodeGradient)">
          <animate
            attributeName="opacity"
            values="0.4;0.8;0.4"
            dur="3.2s"
            repeatCount="indefinite"
            begin="1.5s"
          />
          <animate
            attributeName="r"
            values="1.5;3.5;1.5"
            dur="3.2s"
            repeatCount="indefinite"
            begin="1.5s"
          />
        </circle>

        {/* Left Hemisphere - Temporal Lobe */}
        <circle cx="110" cy="380" r="5" fill="url(#nodeGradient)">
          <animate
            attributeName="opacity"
            values="0.5;0.9;0.5"
            dur="2.7s"
            repeatCount="indefinite"
            begin="0.8s"
          />
          <animate
            attributeName="r"
            values="2;4;2"
            dur="2.7s"
            repeatCount="indefinite"
            begin="0.8s"
          />
        </circle>

        <circle cx="150" cy="420" r="4.5" fill="url(#nodeGradient)">
          <animate
            attributeName="opacity"
            values="0.4;0.8;0.4"
            dur="3.1s"
            repeatCount="indefinite"
            begin="1.2s"
          />
          <animate
            attributeName="r"
            values="1.5;3.5;1.5"
            dur="3.1s"
            repeatCount="indefinite"
            begin="1.2s"
          />
        </circle>

        {/* Left Hemisphere - Occipital Lobe */}
        <circle cx="190" cy="480" r="5" fill="url(#nodeGradient)">
          <animate
            attributeName="opacity"
            values="0.5;0.9;0.5"
            dur="2.9s"
            repeatCount="indefinite"
            begin="0.3s"
          />
          <animate
            attributeName="r"
            values="2;4;2"
            dur="2.9s"
            repeatCount="indefinite"
            begin="0.3s"
          />
        </circle>

        {/* Left Hemisphere - Additional Bottom Node */}
        <circle cx="120" cy="520" r="4" fill="url(#nodeGradient)">
          <animate
            attributeName="opacity"
            values="0.4;0.8;0.4"
            dur="3.3s"
            repeatCount="indefinite"
            begin="0.8s"
          />
          <animate
            attributeName="r"
            values="3;5;3"
            dur="3.3s"
            repeatCount="indefinite"
            begin="0.8s"
          />
        </circle>

        {/* Right Hemisphere - Frontal Lobe */}
        <circle cx="1050" cy="180" r="6" fill="url(#nodeGradient)">
          <animate
            attributeName="opacity"
            values="0.4;0.8;0.4"
            dur="3s"
            repeatCount="indefinite"
            begin="0.2s"
          />
          <animate
            attributeName="r"
            values="3;5;3"
            dur="3s"
            repeatCount="indefinite"
            begin="0.2s"
          />
        </circle>

        <circle cx="1010" cy="220" r="5" fill="url(#nodeGradient)">
          <animate
            attributeName="opacity"
            values="0.5;0.9;0.5"
            dur="2.5s"
            repeatCount="indefinite"
            begin="0.7s"
          />
          <animate
            attributeName="r"
            values="2;4;2"
            dur="2.5s"
            repeatCount="indefinite"
            begin="0.7s"
          />
        </circle>

        {/* Right Hemisphere - Parietal Lobe */}
        <circle cx="1030" cy="280" r="5.5" fill="url(#nodeGradient)">
          <animate
            attributeName="opacity"
            values="0.5;0.9;0.5"
            dur="2.8s"
            repeatCount="indefinite"
            begin="1.2s"
          />
          <animate
            attributeName="r"
            values="2.5;4.5;2.5"
            dur="2.8s"
            repeatCount="indefinite"
            begin="1.2s"
          />
        </circle>

        <circle cx="1070" cy="320" r="4.5" fill="url(#nodeGradient)">
          <animate
            attributeName="opacity"
            values="0.4;0.8;0.4"
            dur="3.2s"
            repeatCount="indefinite"
            begin="1.7s"
          />
          <animate
            attributeName="r"
            values="1.5;3.5;1.5"
            dur="3.2s"
            repeatCount="indefinite"
            begin="1.7s"
          />
        </circle>

        {/* Right Hemisphere - Temporal Lobe */}
        <circle cx="1090" cy="380" r="5" fill="url(#nodeGradient)">
          <animate
            attributeName="opacity"
            values="0.5;0.9;0.5"
            dur="2.7s"
            repeatCount="indefinite"
            begin="1s"
          />
          <animate
            attributeName="r"
            values="2;4;2"
            dur="2.7s"
            repeatCount="indefinite"
            begin="1s"
          />
        </circle>

        <circle cx="1050" cy="420" r="4.5" fill="url(#nodeGradient)">
          <animate
            attributeName="opacity"
            values="0.4;0.8;0.4"
            dur="3.1s"
            repeatCount="indefinite"
            begin="1.4s"
          />
          <animate
            attributeName="r"
            values="1.5;3.5;1.5"
            dur="3.1s"
            repeatCount="indefinite"
            begin="1.4s"
          />
        </circle>

        {/* Right Hemisphere - Occipital Lobe */}
        <circle cx="1010" cy="480" r="5" fill="url(#nodeGradient)">
          <animate
            attributeName="opacity"
            values="0.5;0.9;0.5"
            dur="2.9s"
            repeatCount="indefinite"
            begin="0.5s"
          />
          <animate
            attributeName="r"
            values="2;4;2"
            dur="2.9s"
            repeatCount="indefinite"
            begin="0.5s"
          />
        </circle>

        {/* Right Hemisphere - Additional Bottom Node */}
        <circle cx="1080" cy="520" r="4" fill="url(#nodeGradient)">
          <animate
            attributeName="opacity"
            values="0.4;0.8;0.4"
            dur="3.3s"
            repeatCount="indefinite"
            begin="1.2s"
          />
          <animate
            attributeName="r"
            values="3;5;3"
            dur="3.3s"
            repeatCount="indefinite"
            begin="1.2s"
          />
        </circle>

        {/* Neural Connections - Left Hemisphere */}
        <line
          x1="150"
          y1="180"
          x2="190"
          y2="220"
          stroke="url(#connectionGradient)"
          strokeWidth="2.5"
        >
          <animate
            attributeName="opacity"
            values="0.2;0.6;0.2"
            dur="3s"
            repeatCount="indefinite"
          />
        </line>

        <line
          x1="190"
          y1="220"
          x2="170"
          y2="280"
          stroke="url(#connectionGradient)"
          strokeWidth="2.0"
        >
          <animate
            attributeName="opacity"
            values="0.2;0.5;0.2"
            dur="2.8s"
            repeatCount="indefinite"
            begin="0.5s"
          />
        </line>

        <line
          x1="170"
          y1="280"
          x2="130"
          y2="320"
          stroke="url(#connectionGradient)"
          strokeWidth="1.5"
        >
          <animate
            attributeName="opacity"
            values="0.2;0.5;0.2"
            dur="3.2s"
            repeatCount="indefinite"
            begin="1s"
          />
        </line>

        <line
          x1="130"
          y1="320"
          x2="110"
          y2="380"
          stroke="url(#connectionGradient)"
          strokeWidth="2.0"
        >
          <animate
            attributeName="opacity"
            values="0.2;0.5;0.2"
            dur="2.7s"
            repeatCount="indefinite"
            begin="1.5s"
          />
        </line>

        <line
          x1="110"
          y1="380"
          x2="150"
          y2="420"
          stroke="url(#connectionGradient)"
          strokeWidth="1.5"
        >
          <animate
            attributeName="opacity"
            values="0.2;0.5;0.2"
            dur="3.1s"
            repeatCount="indefinite"
            begin="0.8s"
          />
        </line>

        <line
          x1="150"
          y1="420"
          x2="190"
          y2="480"
          stroke="url(#connectionGradient)"
          strokeWidth="2.0"
        >
          <animate
            attributeName="opacity"
            values="0.2;0.5;0.2"
            dur="2.9s"
            repeatCount="indefinite"
            begin="1.2s"
          />
        </line>

        {/* Connection to additional bottom node */}
        <line
          x1="190"
          y1="480"
          x2="120"
          y2="520"
          stroke="url(#connectionGradient)"
          strokeWidth="1.5"
        >
          <animate
            attributeName="opacity"
            values="0.2;0.4;0.2"
            dur="3.3s"
            repeatCount="indefinite"
            begin="0.8s"
          />
        </line>

        {/* Neural Connections - Right Hemisphere */}
        <line
          x1="1050"
          y1="180"
          x2="1010"
          y2="220"
          stroke="url(#connectionGradient)"
          strokeWidth="2.5"
        >
          <animate
            attributeName="opacity"
            values="0.2;0.6;0.2"
            dur="3s"
            repeatCount="indefinite"
            begin="0.2s"
          />
        </line>

        <line
          x1="1010"
          y1="220"
          x2="1030"
          y2="280"
          stroke="url(#connectionGradient)"
          strokeWidth="2.0"
        >
          <animate
            attributeName="opacity"
            values="0.2;0.5;0.2"
            dur="2.8s"
            repeatCount="indefinite"
            begin="0.7s"
          />
        </line>

        <line
          x1="1030"
          y1="280"
          x2="1070"
          y2="320"
          stroke="url(#connectionGradient)"
          strokeWidth="1.5"
        >
          <animate
            attributeName="opacity"
            values="0.2;0.5;0.2"
            dur="3.2s"
            repeatCount="indefinite"
            begin="1.2s"
          />
        </line>

        <line
          x1="1070"
          y1="320"
          x2="1090"
          y2="380"
          stroke="url(#connectionGradient)"
          strokeWidth="2.0"
        >
          <animate
            attributeName="opacity"
            values="0.2;0.5;0.2"
            dur="2.7s"
            repeatCount="indefinite"
            begin="1.7s"
          />
        </line>

        <line
          x1="1090"
          y1="380"
          x2="1050"
          y2="420"
          stroke="url(#connectionGradient)"
          strokeWidth="1.5"
        >
          <animate
            attributeName="opacity"
            values="0.2;0.5;0.2"
            dur="3.1s"
            repeatCount="indefinite"
            begin="1s"
          />
        </line>

        <line
          x1="1050"
          y1="420"
          x2="1010"
          y2="480"
          stroke="url(#connectionGradient)"
          strokeWidth="2.0"
        >
          <animate
            attributeName="opacity"
            values="0.2;0.5;0.2"
            dur="2.9s"
            repeatCount="indefinite"
            begin="1.4s"
          />
        </line>

        {/* Connection to additional bottom node */}
        <line
          x1="1010"
          y1="480"
          x2="1080"
          y2="520"
          stroke="url(#connectionGradient)"
          strokeWidth="1.5"
        >
          <animate
            attributeName="opacity"
            values="0.2;0.4;0.2"
            dur="3.3s"
            repeatCount="indefinite"
            begin="1.2s"
          />
        </line>

        {/* Cross-hemisphere Connections */}
        <line
          x1="190"
          y1="220"
          x2="1010"
          y2="220"
          stroke="url(#connectionGradient)"
          strokeWidth="1.2"
        >
          <animate
            attributeName="opacity"
            values="0.1;0.4;0.1"
            dur="4s"
            repeatCount="indefinite"
            begin="1s"
          />
        </line>

        <line
          x1="170"
          y1="280"
          x2="1030"
          y2="280"
          stroke="url(#connectionGradient)"
          strokeWidth="1.2"
        >
          <animate
            attributeName="opacity"
            values="0.1;0.4;0.1"
            dur="4s"
            repeatCount="indefinite"
            begin="1.5s"
          />
        </line>

        <line
          x1="110"
          y1="380"
          x2="1090"
          y2="380"
          stroke="url(#connectionGradient)"
          strokeWidth="1.2"
        >
          <animate
            attributeName="opacity"
            values="0.1;0.4;0.1"
            dur="4s"
            repeatCount="indefinite"
            begin="2s"
          />
        </line>

        {/* Subtle Signal Bursts */}
        <circle r="2" fill="url(#nodeGradient)" opacity="0.6">
          <animateMotion dur="6s" repeatCount="indefinite" begin="0s">
            <mpath href="#signalPath1" />
          </animateMotion>
          <animate
            attributeName="opacity"
            values="0;0.6;0"
            dur="6s"
            repeatCount="indefinite"
            begin="0s"
          />
        </circle>

        <circle r="1.5" fill="url(#nodeGradient)" opacity="0.5">
          <animateMotion dur="5s" repeatCount="indefinite" begin="2s">
            <mpath href="#signalPath2" />
          </animateMotion>
          <animate
            attributeName="opacity"
            values="0;0.5;0"
            dur="5s"
            repeatCount="indefinite"
            begin="2s"
          />
        </circle>

        {/* Signal Paths */}
        <path
          id="signalPath1"
          d="M 150 180 L 190 220 L 170 280 L 130 320 L 110 380 L 150 420 L 190 480 L 120 520"
          fill="none"
        />
        <path
          id="signalPath2"
          d="M 1050 180 L 1010 220 L 1030 280 L 1070 320 L 1090 380 L 1050 420 L 1010 480 L 1080 520"
          fill="none"
        />
      </svg>
    </div>
  );
}
