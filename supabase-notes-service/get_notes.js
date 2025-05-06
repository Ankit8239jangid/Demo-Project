import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js";

serve(async (req) => {
  const supabase = createClient(
    Deno.env.get("SUPABASE_URL"),
    Deno.env.get("SUPABASE_ANON_KEY")
  );

  const { data: { user }, error } = await supabase.auth.getUser(req);

  if (error || !user) {
    return new Response("Unauthorized", { status: 401 });
  }

  const { data, error: fetchError } = await supabase
    .from("notes")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  if (fetchError) {
    return new Response(JSON.stringify({ error: fetchError.message }), {
      status: 400,
    });
  }

  return new Response(JSON.stringify(data), { status: 200 });
});