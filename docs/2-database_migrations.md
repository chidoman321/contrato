# create a migration file

npx supabase migration new create_employees_table

# edit the new created sql 

for example the previous command will create this file supabase\migrations\20240628150025_create_employees_table.sql

add your custom sql 

# Apply your migration

npx supabase db reset

this will reset our database

# sample data

instead of filling our tables with data manually we have a supabase/seed.sql file , where we can include example data ,this data will be added every time we reset our db

```
-- in supabase/seed.sql
insert into
public.employees (name)
values
('Erlich Bachman'),
('Richard Hendricks'),
('Monica Hall');
```

# if you create tables using supabaser dashboard

npx supabase db diff --schema public

this will create a migration file based on the changes you have made the public schema

# pull supabase database

npx supabase db pull

The auth and storage schemas are excluded. Run npx supabase db pull --schema auth,storage

# To apply the new migration to your local database:

npx supabase migration up

# To reset your local database completely:

npx supabase db reset

# Deploy database changes

npx supabase db push

# Deploy Edge Functions

npx supabase functions deploy <function_name>
