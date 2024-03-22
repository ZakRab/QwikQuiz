<script>
  export let test;
</script>

<div class="card">
  <div class="card-body">
    <h6 class="card-title d-inline">{test.name}</h6>
    <!-- Fixed: Pass generateTest as a reference -->
    <a
      class="btn btn-primary d-inline"
      href="/test/{test.id}"
      data-sveltekit-preload-data>View Test</a
    >
    <!-- /test/{test.id} it is basically a parameter which is populating the route test/[test.id]-->
  </div>
</div>
