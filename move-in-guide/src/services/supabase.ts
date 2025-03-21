import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const signUp = async (email: string, password: string) => {
    const { user, error } = await supabase.auth.signUp({ email, password });
    return { user, error };
};

export const signIn = async (email: string, password: string) => {
    const { user, error } = await supabase.auth.signIn({ email, password });
    return { user, error };
};

export const fetchUsers = async () => {
    const { data, error } = await supabase.from('users').select('*');
    return { data, error };
};

export const addUser = async (userData: any) => {
    const { data, error } = await supabase.from('users').insert([userData]);
    return { data, error };
};

export const fetchData = async (table: string) => {
    const { data, error } = await supabase.from(table).select('*');
    return { data, error };
};