export async function underscoore(input){
	console.log('underscoore')
	const data = {
		model:'xlarge',
		prompt: `Giveme just the console command to
		--
		Question: Delete a directory on linux
		Answer: rm -r [directory path]
		--
		Question: Move a directory on linux
		Answer: mv [actual directory] [new directory path]
		--
		Question: "${input}"
		Answer:`,
		max_tokens: 300,
		temperature: 0.3,
		k: 0,
		p:1,
		frequency_penalty:0,
		presence_penalty:0,
		stop_sequence: ['--'],
		return_likelihoods: 'NONE'
		}


	const response = await fetch(import.meta.env.COHERE_API_GENERATE_URL,{
		method: 'POST',
		headers: {
			Authorization: `BEARER ${import.meta.env.COHERE_API_KEY}`,
			"Content-Type": 'application/json',
			"Cohere-Version":'2022-12-06'
		},
		body: JSON.stringify(data)
	}).then(res => res.json())

	console.log(response)

	return response.body.generations[0].text

}
