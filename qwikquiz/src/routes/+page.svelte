<script>
	import { TestStore } from '../stores';
	$: console.log($TestStore);
</script>

<h1>Main Page</h1>
<a href="/generateTest">generate</a>
{#each $TestStore as test (test.dateCreated)}
	<div>
		<p>{test.name}</p>
		<p>{test.dateCreated.getDate()}th {test.dateCreated.getMonth()}</p>
		<p>{test.mcQuestions[0].question}</p>
		{#each test.mcQuestions[0].options as option}
			<p>{option}</p>
		{/each}
		{test.mcQuestions[0].answer}
	</div>
{/each}
