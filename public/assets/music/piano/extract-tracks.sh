ls | jq -R '{ title:. , link: ("/assets/piano/" + .), genre: "Piano"}' | jq -s .
