import { c as create_ssr_component, b as each, e as escape, a as subscribe, v as validate_component } from "../../../../chunks/ssr.js";
import { T as TestStore, N as NavBar } from "../../../../chunks/NavBar.js";
import { p as page } from "../../../../chunks/stores.js";
const QuestionList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { mcQuestionList } = $$props;
  let { laQuestionList } = $$props;
  if ($$props.mcQuestionList === void 0 && $$bindings.mcQuestionList && mcQuestionList !== void 0)
    $$bindings.mcQuestionList(mcQuestionList);
  if ($$props.laQuestionList === void 0 && $$bindings.laQuestionList && laQuestionList !== void 0)
    $$bindings.laQuestionList(laQuestionList);
  return `<div>${each(mcQuestionList, (mcQuestion) => {
    return `<div><h3>${escape(mcQuestion.question)}</h3> ${each(mcQuestion.options, (option) => {
      return `<div>${escape(option)} </div>`;
    })} </div>`;
  })} ${each(laQuestionList, (laQuestion) => {
    return `<div><h3>${escape(laQuestion.question)}</h3> </div>`;
  })}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $TestStore, $$unsubscribe_TestStore;
  let $page, $$unsubscribe_page;
  $$unsubscribe_TestStore = subscribe(TestStore, (value) => $TestStore = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let testId = $page.params.testId;
  let test = $TestStore.find((test2) => test2.id == testId);
  let mcQuestionList = test.mcQuestions;
  let laQuestionList = test.laQuestions;
  console.log(test.toString());
  $$unsubscribe_TestStore();
  $$unsubscribe_page();
  return `${validate_component(NavBar, "NavBar").$$render($$result, {}, {}, {})} <h1>${escape(test.name)}</h1> <p>${escape(test.dateCreated)}</p> ${validate_component(QuestionList, "QuestionList").$$render($$result, { mcQuestionList, laQuestionList }, {}, {})}`;
});
export {
  Page as default
};
