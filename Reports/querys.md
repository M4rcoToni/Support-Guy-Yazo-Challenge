# Insira aqui as query utilizadas

## Todas as agendas

```sql
SELECT
  *
FROM
  schedules;
```

## Todas as agendas com a tag "Dev"

```sql
SELECT
  s.*
FROM
  schedules s
  INNER JOIN schedule_tags ON s.id = schedule_tags.schedule_id
  INNER JOIN tags ON schedule_tags.tag_id = tags.id
WHERE
  tags.title LIKE 'Dev';
```

## Todas as agendas que acontecerão no dia 10 de maio

```sql
SELECT
  *
FROM
  schedules
WHERE
  start_time >= '2023-05-10 00:00:00'
  AND end_time < '2023-05-11 00:00:00';
```

## Todas as agendas que o usuário Luís participou


```sql
SELECT
	s.*
FROM
  schedules s
  INNER JOIN schedule_users ON s.id = schedule_users.schedule_id
  INNER JOIN users ON schedule_users.user_id = users.id 
WHERE
  users.first_name LIKE 'Luís'
```
