export const BrokenGlassFilter = () => (
  <svg className="svg-defs">
    <filter id="filter-broken-glass">
      <feTurbulence
        type="turbulence"
        baseFrequency="0.02 0.05"
        numOctaves="1"
        seed="1"
        stitchTiles="stitch"
        result="turbulence"
      />
      <feColorMatrix
        type="saturate"
        values="5"
        in="turbulence"
        result="colormatrix"
      />
      <feColorMatrix
        type="matrix"
        values="1 0 0 0 0
  0 1 0 0 0
  0 0 1 0 0
  0 0 0 150 -15"
        in="colormatrix"
        result="colormatrix1"
      />
      <feComposite
        in="SourceGraphic"
        in2="colormatrix1"
        operator="in"
        result="composite"
      />
      <feDisplacementMap
        in="SourceGraphic"
        in2="colormatrix1"
        scale="5"
        xChannelSelector="R"
        yChannelSelector="A"
        result="displacementMap"
      >
        <animate
          attributeName="scale"
          values="0;5;12;7;2;7;1;15;7;1;10;5;0"
          dur="10s"
          repeatCount="indefinite"
        />
      </feDisplacementMap>
    </filter>
  </svg>
);

export const FlameFilter = () => (
  <svg className="svg-defs">
    <filter id="filter-flame">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.035 0.008"
        numOctaves="1"
        seed="2"
        stitchTiles="stitch"
        result="turbulence"
      >
        <animate
          attributeName="seed"
          values="1;3;5;7;9;11;13;15;17;19;21"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </feTurbulence>
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.035 0.007"
        numOctaves="1"
        seed="1"
        stitchTiles="stitch"
        result="turbulence1"
      />
      <feMerge result="merge">
        <feMergeNode
          in="turbulence1"
          result="mergeNode"
        />
        <feMergeNode
          in="turbulence"
          result="mergeNode1"
        />
      </feMerge>
      <feColorMatrix
        type="saturate"
        values="9"
        in="merge"
        result="colormatrix"
      />
      <feColorMatrix
        type="matrix"
        values="1 0 0 0 0
  0 1 0 0 0
  0 0 1 0 0
  0 0 0 10 0"
        in="colormatrix"
        result="colormatrix1"
      />
      <feDisplacementMap
        in="colormatrix1"
        in2="colormatrix"
        scale="40"
        xChannelSelector="R"
        yChannelSelector="G"
        result="displacementMap"
      />
      <feComposite
        in="displacementMap"
        in2="SourceAlpha"
        operator="in"
        result="composite1"
      />
    </filter>
  </svg>
);

export const FireFilter = () => (
  <svg className="svg-defs">
    <filter
      id="filter-fire"
      x="-20%"
      y="-20%"
      width="140%"
      height="140%"
      filterUnits="objectBoundingBox"
      primitiveUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feGaussianBlur
        stdDeviation="0 10"
        x="0%"
        y="0%"
        width="100%"
        height="100%"
        in="SourceGraphic"
        edgeMode="none"
        result="blur"
      />
      <feTurbulence
        type="turbulence"
        baseFrequency="0.06 0.015"
        numOctaves="2"
        seed="2"
        stitchTiles="stitch"
        x="0%"
        y="0%"
        width="100%"
        height="100%"
        result="turbulence1"
      >
        <animate
          attributeName="seed"
          values="1;3;5;7;9;11;13;15;17;19;21"
          dur="1.75s"
          repeatCount="indefinite"
        />
      </feTurbulence>
      <feColorMatrix
        type="matrix"
        values="1 0 0 0 0
0 1 0 0 0
0 0 1 0 0
0 0 0 5 -1"
        x="0%"
        y="0%"
        width="100%"
        height="100%"
        in="turbulence1"
        result="colormatrix2"
      />
      <feColorMatrix
        type="matrix"
        values="1 0 0 0 0
0 1 0 0 0
0 0 1 0 0
0 0 0 3 0"
        x="0%"
        y="0%"
        width="100%"
        height="100%"
        in="turbulence1"
        result="colormatrix3"
      />
      <feComposite
        in="colormatrix2"
        in2="blur"
        operator="in"
        x="0%"
        y="0%"
        width="100%"
        height="100%"
        result="composite1"
      />
      <feFlood
        flood-color="#fc752d"
        flood-opacity="1"
        x="0%"
        y="0%"
        width="100%"
        height="100%"
        result="flood1"
      />
      <feComposite
        in="flood1"
        in2="composite1"
        operator="in"
        x="0%"
        y="0%"
        width="100%"
        height="100%"
        result="composite2"
      />
      <feOffset
        dx="-5"
        dy="-21"
        x="0%"
        y="0%"
        width="100%"
        height="100%"
        in="composite2"
        result="offset1"
      />
      <feMorphology
        operator="dilate"
        radius="0 10"
        x="0%"
        y="0%"
        width="100%"
        height="100%"
        in="offset1"
        result="morphology"
      />
      <feDisplacementMap
        in="morphology"
        in2="turbulence1"
        scale="20"
        xChannelSelector="G"
        yChannelSelector="B"
        x="0%"
        y="0%"
        width="100%"
        height="100%"
        result="displacementMap1"
      />
      <feComposite
        in="merge3"
        in2="colormatrix3"
        operator="out"
        x="0%"
        y="0%"
        width="100%"
        height="100%"
        result="composite3"
      />
      <feFlood
        flood-color="#ff8422"
        flood-opacity="1"
        x="0%"
        y="0%"
        width="100%"
        height="100%"
        result="flood2"
      />
      <feComposite
        in="flood2"
        in2="composite3"
        operator="in"
        x="0%"
        y="0%"
        width="100%"
        height="100%"
        result="composite4"
      />
      <feMerge
        x="0%"
        y="0%"
        width="100%"
        height="100%"
        result="merge3"
      >
        <feMergeNode in="displacementMap1" />
        <feMergeNode in="SourceGraphic" />
        <feMergeNode in="composite4" />
      </feMerge>
    </filter>
  </svg>
);
