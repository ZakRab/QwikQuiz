import { c as create_ssr_component, e as escape, a as subscribe, v as validate_component, b as each } from "../../chunks/ssr.js";
import { T as TestStore, N as NavBar } from "../../chunks/NavBar.js";
import "jspdf";
const css$1 = {
  code: ".card-left-wrapper.svelte-1yw811b{display:flex;gap:10px;align-items:center}.card-right-wrapper.svelte-1yw811b{display:flex;gap:10px;align-items:center}.card-body.svelte-1yw811b{display:flex;justify-content:space-between}",
  map: null
};
const TestCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { test } = $$props;
  if ($$props.test === void 0 && $$bindings.test && test !== void 0)
    $$bindings.test(test);
  $$result.css.add(css$1);
  return `<div class="card"><div class="card-body svelte-1yw811b"><div class="card-left-wrapper svelte-1yw811b"><button class="btn btn-primary d-inline" data-svelte-h="svelte-1h7bp0f">D</button> <h6 class="card-title d-inline">${escape(test.name)}</h6></div> <div class="card-right-wrapper svelte-1yw811b"><a class="btn btn-primary d-inline" href="${"/test/" + escape(test.id, true)}" data-sveltekit-preload-data>View Test</a> <button class="btn btn-danger d-inline" data-svelte-h="svelte-1cjgf5f">Delete</button></div> </div> </div>`;
});
const css = {
  code: ".test-list-container.svelte-tqkyhl{display:flex;flex-direction:column;flex-wrap:wrap;padding:2.5vw 5vw}h4.svelte-tqkyhl{padding:2.5vw 5vw}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $TestStore, $$unsubscribe_TestStore;
  $$unsubscribe_TestStore = subscribe(TestStore, (value) => $TestStore = value);
  $$result.css.add(css);
  $$unsubscribe_TestStore();
  return `${validate_component(NavBar, "NavBar").$$render($$result, {}, {}, {})} <h4 class="svelte-tqkyhl" data-svelte-h="svelte-1iemnhm">Main Page</h4> <div class="test-list-container svelte-tqkyhl">${each($TestStore, (test) => {
    return `${validate_component(TestCard, "TestCard").$$render($$result, { test }, {}, {})}`;
  })} </div>`;
});
export {
  Page as default
};
