ls | jq -R '{ title:. , link: ("/assets/synthwave/" + .), genre: "Synthwave"}' | jq -s .
