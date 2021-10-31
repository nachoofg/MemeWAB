import { meme } from "memejs";
export async function getMeme(subreddit?: string) {
  const subr = subreddit ? subreddit : null;
  return (await meme(subr)).img;
}
