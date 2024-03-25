<script>
  import "../app.css";
</script>

<!--TODO: Find a way to render the colors for tailwind without having to do this-->
<!--This is a hack to get the colors to render in the preview-->
<div class="hidden">
  <div class="text-red-600 bg-red-100"></div>
  <div class="text-blue-600 bg-blue-100"></div>
  <div class="text-yellow-600 bg-yellow-100"></div>
  <div class="text-green-600 bg-green-100"></div>
  <div class="text-purple-600 bg-purple-100"></div>
  <div class="text-cyan-600 bg-cyan-100"></div>
  <div class="text-gray-600 bg-gray-100"></div>
  <div class="text-sky-600 bg-sky-100"></div>
  <div class="text-emerald-600 bg-emerald-100"></div>
</div>
<slot />
