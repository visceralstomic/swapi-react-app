import getIdFromUrl from "./getIdFromUrl";

const getItemList = async (itemUrlList: string[], serviceFn: (id: number | string) => Promise<any>) => {
    const promises: Promise<any>[] = []; 
    itemUrlList.forEach(itemUrl => {
        const itemID = getIdFromUrl(itemUrl);
        const item = serviceFn(itemID);
        promises.push(item);
    })
    const res = Promise.all(promises)
    return res;
}  

export default getItemList;