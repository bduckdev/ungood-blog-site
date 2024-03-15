select email, title, content, "Post"."createdAt" as "postCreatedAt", "User"."createdAt" as "userCreatedAt"
FROM "Post"
join "User" on "Post"."authorId" = "User".id;
