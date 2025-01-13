#!/bin/bash

if [ ! -d ".git" ]; then
  echo "Ce répertoire n'est pas un dépôt Git. Initialisez un dépôt avec 'git init'."
  exit 1
fi

format_commit_message() {
  local filepath=$1
  local extension="${filepath##*.}"
  local filename=$(basename "$filepath")
  local first_line=$(head -n 1 "$filepath" 2>/dev/null)

  case $extension in
    ts)
      echo "Ajout/modification de $filename : TypeScript file (${first_line:0:50})"
      ;;
    tsx)
      echo "Ajout/modification de $filename : React Component (${first_line:0:50})"
      ;;
    css)
      echo "Mise à jour du style dans $filename : (${first_line:0:50})"
      ;;
    json)
      echo "Mise à jour de la configuration $filename : (${first_line:0:50})"
      ;;
    *)
      echo "Modification de $filename : (${first_line:0:50})"
      ;;
  esac
}

files=$(git ls-files --others --modified --exclude-standard)

if [ -z "$files" ]; then
  echo "Aucun fichier à commiter."
  exit 0
fi

for file in $files; do
  if [ -f "$file" ]; then
    git add "$file"

    commit_message=$(format_commit_message "$file")

    git commit -m "$commit_message"

    echo "Fichier $file commité avec le message : '$commit_message'."
  fi
done

git push origin main

echo "Tous les fichiers ont été committés et poussés avec succès."
