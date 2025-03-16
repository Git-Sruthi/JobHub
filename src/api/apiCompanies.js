import supabaseClient, { supabaseUrl } from "@/utils/supabase";

export async function getCompanies(token) {
    const supabase = await supabaseClient(token);


    const {data,error} = await supabase
    .from("companies")
    .select("*");

    if(error){
        console.error("Error Fetching Companies:",deleteError);
        return null;
    }

    return data;
}

export async function addNewCompany(token, _,companyData) {
    const supabase = await supabaseClient(token);

    const random = Math.floor(Math.random() * 90000);
    const fileName = `logo-${random}-${companyData.name}`;

    const {error:storageError} = await supabase.storage.from('company-logo').upload(fileName,companyData.logo)

    if(storageError){
        console.error("Error Uploading Company Logo:",storageError);
        return null;
    }
    
    //https://vvelprmprdniklomawgy.supabase.co/storage/v1/object/public/company-logo/amazon.svg?t=2024-11-27T16%3A57%3A57.142Z

    const logo_url = `${supabaseUrl}/storage/v1/object/public/company-logo/${fileName}`;

    const {data,error} = await supabase
    .from("companies")
    .insert([{
        name:companyData.name,
        logo_url,

    },])
    .select();

    if(error){
        console.error("Error Submitting Company:",error);
        return null;
    }

    return data;
}