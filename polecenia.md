
https://www.npmjs.com/package/create-react-app
https://github.com/facebook/create-react-app
https://github.com/facebook/create-react-app#creating-an-app


## Instalacje skryptów 
Terminal -> New Terminal

npm install --global create-react-app
npm i -g create-react-app

create-react-app --help

## Tworzenie projektu React
cd ..
create-react-app weronika-react --template typescript

## Bootstrap CSS
https://getbootstrap.com/
npm i bootstrap

## Emmet

https://www.npmjs.com/package/create-react-app
https://github.com/facebook/create-react-app
https://github.com/facebook/create-react-app#creating-an-app


## Instalacje skryptów 
Terminal -> New Terminal

npm install --global create-react-app
npm i -g create-react-app

create-react-app --help

## Tworzenie projektu React
cd ..
create-react-app weronika-react --template typescript

## Bootstrap CSS
https://getbootstrap.com/
npm i bootstrap

## Emmet
.container>.row>.col

## React Snippets
tsrafce

dl>(dt{Name:}+dd{opis})*3
Name: jakas lista
Private: Yes
Description: jakiś opis

const playlist = {
  id : "213", name:"Rock123", public:true, description:"opis"
}
warunek ? prawda : falsz

HTML:
<element atrybut="wartość">tresc</element>
<element atrybut={zmienna}

## Form
.form-group>label{Name:}+input.form-control

.form-check>label.form-check-label>input[type=checkbox].form-check-input+{ Public}

.form-group>label{Description:}+textarea.form-control

## List 
.list-group.list-group-flush>.list-group-item.list-group-item-action*3{text}


# React devtools


const playlists = [
    {id:"123", name:"test 123", public:true, description:"test 123"},
    {id:"234", name:"test 234", public:true, description:"test 234"},
    {id:"345", name:"test 345", public:true, description:"test 345"},
]

# Files
mkdir -p ./src/playlists/components
mkdir -p ./src/playlists/pages

touch ./src/playlists/pages/Playlists.tsx
touch ./src/playlists/components/Details.tsx
touch ./src/playlists/components/Edit.tsx
touch ./src/playlists/components/List.tsx

## Buttons
button.btn.btn-info{Edit}+button.btn.btn-danger{Cancel}+button.btn.btn-success{Save}

## Music Search Page

touch ./src/pages/Musicsearch.tsx
touch ./src/components/SearchForm.tsx
touch ./src/components/AlbumGrid.tsx
touch ./src/components/AlbumCard.tsx
