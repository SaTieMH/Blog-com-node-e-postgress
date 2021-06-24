create schema blog;

--tabela onde serão guardados os posts
create table blog.post(
    id serial primary key,
    title text not null,
    content text not null,
    date timestamp default now()
);

select * from blog.post;

insert into blog.post (title, content) values ('Rest API: Métodos', '...');
insert into blog.post (title, content) values ('Rest API: Introdução', '...');
insert into blog.post (title, content) values ('Rest API: Documentação', '...');
