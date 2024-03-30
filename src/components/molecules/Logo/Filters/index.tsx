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
