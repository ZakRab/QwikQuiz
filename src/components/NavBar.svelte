<nav
  class="flex flex-row justify-between items-center p-3 border-gray-300 bg-white rounded-xl"
>
  <!-- LOGO -->
  <a href="/" class="h-fit hover:scale-110 transition-all duration-300"
    ><svg
      class="w-16 h-16"
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
  <!-- NAV LINKS -->
  <div class="flex gap-3">
    <a
      href="/generateTest"
      class="py-2 px-3 text-md font-semibold bg-purple-500 rounded-xl text-white border-b-2 border-purple-700 hover:bg-purple-600 hover:translate-y-0.5 hover:border-b-2 hover:border-transparent shadow-md hover:shadow-lg transition-all duration-300"
      >Generate Test</a
    >
    <a
      href="/allTests"
      class="py-2 px-4 text-md font-semibold bg-cyan-500 rounded-xl text-white border-b-2 border-cyan-600 hover:translate-y-0.5 hover:border-b-2 hover:bg-cyan-600 hover:border-transparent shadow-md hover:shadow-lg transition-all duration-300"
      >All Tests</a
    >
  </div>
</nav>

<style>
  @keyframes drawBlue {
    from {
      stroke-dashoffset: 1000; /* Assume 1000 is the path length */
      fill: none;
      stroke: #000000;
      stroke-width: 10;
    }
    to {
      stroke-dashoffset: 0;
      fill: #1caca8;
      stroke-width: 0;
    }
  }
  @keyframes drawPurple {
    from {
      stroke-dashoffset: 1000; /* Assume 1000 is the path length */
      fill: none;
      stroke: #000000;

      stroke-width: 10;
    }
    to {
      stroke-dashoffset: 0;
      fill: #9060a8;
      stroke-width: 0;
    }
  }

  svg path:nth-of-type(1) {
    fill: none;
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: drawBlue 5s cubic-bezier(0.42, 0, 0.58, 1) forwards;
  }

  svg path:nth-of-type(2) {
    fill: none;
    transition: fill 0.3s ease;
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: drawPurple 5s cubic-bezier(0.42, 0, 0.58, 1) forwards;
  }

  a svg:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
    animation: drawPurple 5s backwards;
  }
</style>
