# 📝 Supabase Custom Note Service

A lightweight Supabase backend with two REST endpoints for managing personal notes.

## 📦 Setup & Deployment

1. Create a new Supabase project.
2. Create the `notes` table using:
   ```bash
   supabase db push
   ```
3. Add Supabase Edge Functions:
   ```bash
   supabase functions deploy post_notes
   supabase functions deploy get_notes
   ```
4. Ensure authentication is enabled.
5. Set environment variables in Supabase:
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`

---

## 🧠 Schema Design – `Why?`

- **UUID Primary Key**: Universally unique, avoids collisions.
- **user_id**: Used to associate notes with authenticated users.
- **text fields**: `title` is mandatory; `content` is optional.
- **created_at**: Tracks note creation timestamp automatically.

---

## 🚀 API Endpoints – `Why?`

- `POST /notes`: To **create** a new note. POST is the correct semantic method for resource creation. Parameters come from the **body**.
- `GET /notes`: To **retrieve** all notes. GET is idempotent and safe for reads. Authenticated user's ID is used internally, nothing from body.

---

## 🧪 Demo Commands

### ➕ Create Note
```bash
curl -X POST https://<project-id>.functions.supabase.co/post_notes \
  -H "Authorization: Bearer <access_token>" \
  -H "Content-Type: application/json" \
  -d '{"title": "First Note", "content": "Hello from Supabase!"}'
```

**Expected Output**:
```json
{
  "id": "generated-uuid",
  "user_id": "user-uuid",
  "title": "First Note",
  "content": "Hello from Supabase!",
  "created_at": "2025-05-06T10:00:00.000Z"
}
```

---

### 📃 List Notes
```bash
curl -X GET https://<project-id>.functions.supabase.co/get_notes \
  -H "Authorization: Bearer <access_token>"
```

**Expected Output**:
```json
[
  {
    "id": "generated-uuid",
    "user_id": "user-uuid",
    "title": "First Note",
    "content": "Hello from Supabase!",
    "created_at": "2025-05-06T10:00:00.000Z"
  }
]
```

---

## ⏱️ Time Taken
~1.5–2 hours

Focus was kept on clarity, security, and minimalism.
