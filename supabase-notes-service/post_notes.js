import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js";

serve(async (req) => {
  const supabase = createClient(
    Deno.env.get("SUPABASE_URL"),
    Deno.env.get("SUPABASE_ANON_KEY")
  );

  const { title, content } = await req.json();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser(req);

  if (authError || !user) {
    return new Response("Unauthorized", { status: 401 });
  }

  const { data, error } = await supabase.from("notes").insert([
    {
      title,
      content,
      user_id: user.id,
    },
  ]);

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
    });
  }

  return new Response(JSON.stringify(data[0]), { status: 201 });
});