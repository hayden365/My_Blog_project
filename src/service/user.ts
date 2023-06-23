import { client } from "./sanity";

export async function addUser({ email, name, image }: any) {
	return client.createIfNotExists({
		_id: email.split("@")[0],
		_type: "user",
		email,
		name,
		image,
		posts: [],
	});
}
