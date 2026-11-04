CREATE DATABASE hyruleMemorium;
USE hyruleMemorium;

CREATE TABLE usuario (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR (45) NOT NULL,
email VARCHAR (45) NOT NULL,
senha VARCHAR (45) NOT NULL
);

CREATE TABLE questionario (
id INT PRIMARY KEY AUTO_INCREMENT,
motivacao VARCHAR (1000) NOT NULL, 
jogo VARCHAR (45) NOT NULL,
recomendacao VARCHAR (45),
data_envio TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
fkUsuario INT,
FOREIGN KEY (fkUsuario) REFERENCES usuario(id)
);

INSERT INTO usuario (nome, email, senha) VALUES 
('Rodrigo Wesselka', 'rodrigowesselka@email.com', 'gatinho000!');

INSERT INTO questionario (motivacao, jogo, recomendacao, fkUsuario) VALUES
('Gosto muito da estética sombria e do ar de mistério do jogo',
"The Legend of Zelda: Majora's Mask", 'Tears of The Kingdom', 1);

SELECT * FROM usuario;
SELECT * FROM questionario;

-- buscando os usuários/jogos e motivação da escolha
SELECT u.nome, q.jogo, q.motivacao from usuario u
JOIN questionario q ON q.fkUsuario = u.id;

-- buscando os emails/dtEnvio e o jogo Recomendado
SELECT u.email, q.data_envio, q.recomendacao FROM questionario q
JOIN usuario u ON u.id = q.fkUsuario;