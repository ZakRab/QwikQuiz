<script>
  import "../app.css";
</script>

<!--TODO: Find a way to render the colors for tailwind without having to do this-->
<!--This is a hack to get the colors to render in the preview-->
<div class="hidden">
  <div class="text-red-400 bg-red-100"></div>
  <div class="text-blue-400 bg-blue-100"></div>
  <div class="text-yellow-400 bg-yellow-100"></div>
  <div class="text-green-400 bg-green-100"></div>
  <div class="text-purple-400 bg-purple-100"></div>
  <div class="text-cyan-400 bg-cyan-100"></div>
  <div class="text-gray-400 bg-gray-100"></div>
  <div class="text-sky-400 bg-sky-100"></div>
  <div class="text-emerald-400 bg-emerald-100"></div>
</div>
<slot />
