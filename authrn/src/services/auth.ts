interface Response{
	token: string;
	user: {
		name: string;
		email: string;
	}
}

export function signIn(): Promise<Response> {
	return new Promise(resolve => {
		setTimeout(()=> {
			resolve({
				token: 'sfniufniefnpuwn vwenvuipwnevponewoinfoimneoiwmcio',
				user:{
					name: 'Diego',
					email: 'diego@rocketseat.com.br',
				}
			})
		}, 2000)
	})
}