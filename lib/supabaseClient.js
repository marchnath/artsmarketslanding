import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase environment variables");
}

export const supabase = createClient(supabaseUrl, supabaseKey);

// Function to insert a contact with name, email, phone_number, and message
export async function addContactWithBook(
    name,
    email,
    phone_number,
) {
  const { data, error } = await supabase
      .from("Contact")
      .insert([{ name, email, phone_number }]);

  if (error) {
    throw error;
  }

  return data;
}

// Function to check if email already exists
export async function checkEmailExists(email) {
  const { data, error } = await supabase
      .from("Contact")
      .select("email")
      .eq("email", email);

  if (error) {
    throw error;
  }

  return data.length > 0;
}

// Function to check if phone number already exists
export async function checkPhoneExists(phone_number) {
  const { data, error } = await supabase
      .from("Contact")
      .select("phone_number")
      .eq("phone_number", phone_number);

  if (error) {
    throw error;
  }

  return data.length > 0;
}
