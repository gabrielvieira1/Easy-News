Obs: Os scripts devem ser executados em ordem, se não, não vai funcionar devido as depêndencias.

----------------------------------------------------------- ADDRESS ----------------------------------------------------------

INSERT INTO ADDRESS (
	City,
	Country,
	Latitude,
	Longitude,
	State,
	Street
) 
VALUES
('Olinda', 'Brasil', -8.00030, -34.89599, 'Pernambuco', 'Sao Benedito'),
('Recife', 'Brasil', -8.00799, -34.89010, 'Pernambuco', 'Av. Beberibe'),
('Recife', 'Brasil', -7.98870, -34.91757, 'Pernambuco', 'Rua da mata'),
('Jaboatao', 'Brasil', -8.16113, -34.92173, 'Pernambuco', 'Floriano Peixoto'),
('Recife', 'Brasil', -7.98870, -34.91757, 'Pernambuco', 'Rua da mata'),
('Recife', 'Brasil', -8.00290, -34.89771, 'Pernambuco', 'Teste posts'),
('Recife', 'Brasil', -8.00270, -34.89761, 'Pernambuco', 'Teste posts 1'),
('Recife', 'Brasil', -8.00263, -34.89767, 'Pernambuco', 'Teste posts 2'),
('Recife', 'Brasil', -8.00277, -34.89780, 'Pernambuco', 'Teste posts 3'),
('Recife', 'Brasil', -8.00295, -34.89801, 'Pernambuco', 'Teste posts 4');

------------------------------------------------------------ TIPO POSTS ----------------------------------------------------

INSERT INTO TIPO_POSTS (
	Cod,
	Description
) 
VALUES 
(1, 'NOTICE'),
(2, 'EVENT');

----------------------------------------------------------- USER ----------------------------------------------------------

INSERT INTO USER (
	Email,
	Name,
	Password,
	User_name,
	Adress_id
) 
VALUES 
('gabrielc@gmail.com', 'Gabriel Cezario', '123456', 'g1', 1),
('gabrielv@gmail.com', 'Gabriel Vieira', '789123', 'g2', 3),
('will@gmail.com', 'Will Jorge', '456789', 'jorgin', 4),
('weza@gmail.com', 'Weza Bernardo', '123456', 'g2', 5),
('zezin@gmail.com', 'Ze dos grudes', '789123', 'jorgin', 2);

----------------------------------------------------------- POSTS ----------------------------------------------------------

INSERT INTO POSTS (
	Active,
	Date,
	Description,
	Tags,
	Title,
	Address_id,
	tipo_posts_id
) 
VALUES 

(true, CURRENT_TIMESTAMP, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 'tag1', 'Teste titulo 1', 6, 1),
(true, TO_DATE('17/12/2015', 'DD/MM/YYYY'), 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 'tag2', 'Teste titulo 2', 7, 1),
(true, TO_DATE('17/12/2015', 'DD/MM/YYYY'), 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 'tag3', 'Teste titulo 3', 8, 1),
(true, TO_DATE('17/12/2015', 'DD/MM/YYYY'), 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 'tag4', 'Teste titulo 4', 9, 2),
(true, TO_DATE('17/12/2015', 'DD/MM/YYYY'), 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 'tag5', 'Teste titulo 5', 10, 2);