# pandas-web

Web based Pandas API

1.  Clone project

`git clone https://github.com/pvamshi/pandas-web`

2.  Create virtual environment inside the project

`cd pandas-web`

`` virtualenv -p `which python3` venv ``

3.  Run virtualenv

`source venv/bin/activate`

4. Build client code 

`cd client`

`npm install` 

`npm build`

`cd ..`

5. Run server

`python app/main.py`

You can check the API swagger at http://localhost:5000/api

Application at http://localhost:5000 


