

export default function(url: string) {return (url.match(/(?<=\/)\d+/g) as string[])[0]}