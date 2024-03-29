<a href="/" class="h-fit hover:scale-110 transition-all duration-300"
  ><svg
    class="w-12 h-12"
    id="Layer_2"
    data-name="Layer 2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-10 -10 215.8 166.17"
  >
    <g id="Layer_1-2" data-name="Layer 1">
      <g>
        <path
          d="m85.05,111.04c3.96,3.44,8.78,6.37,15.32,8.95,3.79,1.55,5.34,3.27,5.34,6.89,0,7.75-7.06,16.87-13.26,16.87-9.47,0-21-7.4-31.16-21.69-4.13.86-8.44,1.38-12.91,1.38C17.73,123.44,0,105.19,0,75.06,0,32.19,27.55,0,64.39,0c30.65,0,48.03,18.59,48.03,48.72,0,27.03-10.5,49.41-27.37,62.32Zm-37.19-13.26c-1.55-3.96-3.1-8.09-4.65-12.57-.69-1.72-1.03-3.1-1.03-4.65,0-6.89,15.15-13.08,19.97-13.08,2.41,0,3.79,1.38,4.3,3.1,1.89,6.03,3.44,11.36,4.99,16.35,6.2-8.26,9.81-20.31,9.81-34.43,0-15.67-7.4-27.2-19.63-27.2-16.87,0-29.96,20.31-29.96,45.79,0,14.81,6.72,24.96,16.18,26.68Z"
          fill="none"
          stroke="#1caca8"
          stroke-width="10"
        />
        <path
          d="m168.42,113.46c3.96,3.44,8.78,6.37,15.32,8.95,3.79,1.55,5.34,3.27,5.34,6.89,0,7.75-7.06,16.87-13.26,16.87-9.47,0-21-7.4-31.16-21.69-4.13.86-8.44,1.38-12.91,1.38-30.65,0-48.38-18.25-48.38-48.38,0-42.87,27.55-75.06,64.39-75.06,30.65,0,48.03,18.59,48.03,48.72,0,27.03-10.5,49.41-27.37,62.32Zm-37.19-13.26c-1.55-3.96-3.1-8.09-4.65-12.57-.69-1.72-1.03-3.1-1.03-4.65,0-6.89,15.15-13.08,19.97-13.08,2.41,0,3.79,1.38,4.3,3.1,1.89,6.03,3.44,11.36,4.99,16.35,6.2-8.26,9.81-20.31,9.81-34.43,0-15.67-7.4-27.2-19.63-27.2-16.87,0-29.96,20.31-29.96,45.79,0,14.81,6.72,24.96,16.18,26.68Z"
          fill="none"
          stroke="#9060a8"
          stroke-width="10"
        />
      </g>
    </g>
  </svg></a
>

<style>
  @keyframes draw {
    from {
      stroke-dashoffset: 1000; /* Assume 1000 is the path length */
    }
    to {
      stroke-dashoffset: 0;
    }
  }
  /* Initial state with stroke only */
  svg path {
    fill: none;
    transition: fill 0.3s ease;
    stroke-dasharray: 1000; /* Match this to the actual length of your path */
    stroke-dashoffset: 1000;
    animation: draw 2s forwards;
  }

  /* Hover state for the first path */
  a:hover svg path:nth-of-type(1) {
    stroke-dasharray: 1000; /* Match this to the actual length of your path */
    stroke-dashoffset: 1000;
    animation: draw 2s forwards;
    fill: #1caca8;
    stroke-width: 0;
  }

  /* Hover state for the second path */
  a:hover svg path:nth-of-type(2) {
    stroke-dasharray: 1000; /* Match this to the actual length of your path */
    stroke-dashoffset: 1000;
    animation: draw 2s forwards;
    fill: #9060a8;
    stroke-width: 0;
  }

  /* Optional: Adding a scaling effect on hover as per your initial setup */
  a:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease;
  }
</style>
