# elk

### J1 - TP1

#### Instalation Elasticsearch et kibana 
Utilisation de docker pour l'instalation d'elasticsearch :
 - `docker pull docker.elastic.co / élasasticsearch / élastique recherche : 8..7.1`
Création d'un nouveau réseaux docker pour elastic et Kibana :
 - `docker network create elastic`
Demarrage d'elastic dans docker :
 - `docker run --name es01 --net elastic -p 9200:9200 -it docker.elastic.co/elasticsearch/elasticsearch:8.7.1`

 #### Probleme lors de la creation 
 ajout d'un variable denvironement qui bloc le deploiement en cas d'absence plus vérification du type d'environment :
  - `-e discovery.type=single-node`
  - la commande est inséré après le `--net elastic` dans la commande de demarrage

#### Connexion
Après telechargement du fichier de certificat de sécurité alors la connexion est refusé : 
 - `curl --cacert http_ca.crt -u elastic https://localhost:9200`
Ajout de l'inactivation de la réponse d'authentification afin d'utiliser la version de dev : 
 - `curl --ssl-revoke-best-effort --cacert http_ca.crt -u elastic https://localhost:9200`

#### Instalation de Kibana
Instalation de Kibana via la commande :
 - `docker pull docker.elastic.co/kibana/kibana:8.7.1`
 - `docker run --name kib-01 --net elastic -p 5601:5601 docker.elastic.co/kibana/kibana:8.7.1`

