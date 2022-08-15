ls | jq -R '{ title:. , link: ("/assets/gaming/" + .), genre: "Gaming"}' | jq -s .
