import { createClient } from "@supabase/supabase-js";
const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY;
const database = createClient(url, key);
const GetImageUrlsPromise = (image: File) => {
    return new Promise((resolve, reject) => {
        if (image === null ) {
            reject('At least one image is required');
            return;
        }
        const newName: string = String(Date.now());
        database.storage.from('smart-pc/productImages').upload(newName, image, {
            upsert: false,
            cacheControl: '3600',
        })
            .then(() => {
                const url: string = database.storage.from('smart-pc/productImages').getPublicUrl(newName).data.publicUrl;
                if (url){
                    resolve(url);
                    return;
                }else{
                    reject('Something went wrong');
                    return;
                }
            })
            .catch(error => {console.log(error)})
    });
};
export default GetImageUrlsPromise;
