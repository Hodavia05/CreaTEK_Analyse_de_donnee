#!/bin/bash

# Vérifier si on est dans un dépôt Git
if [ ! -d ".git" ]; then
  echo "Ce répertoire n'est pas un dépôt Git. Initialisez un dépôt avec 'git init'."
  exit 1
fi

# Fonction pour formater le message de commit en fonction du contenu du fichier
format_commit_message() {
  local filepath=$1
  local extension="${filepath##*.}"  # Extraire l'extension
  local filename=$(basename "$filepath")  # Nom du fichier sans le chemin
  local first_line=$(head -n 1 "$filepath" 2>/dev/null)  # Première ligne du fichier

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

# Récupérer tous les fichiers modifiés, ajoutés, supprimés ou en conflit
files=$(git status --porcelain | grep -E "^[ MADRCU]" | awk '{print $2}')

# Vérifier si des fichiers sont présents
if [ -z "$files" ]; then
  echo "Aucun fichier à commiter."
  exit 0
fi

# Parcourir chaque fichier
for file in $files; do
  if [ -f "$file" ]; then
    # Résoudre les fichiers en conflit (statut U) automatiquement
    status=$(git status --porcelain | grep "$file" | awk '{print $1}')
    if [[ $status == "U" ]]; then
      echo "Résolution automatique du fichier en conflit : $file"
      git add "$file"
    fi

    # Ajouter le fichier au staging
    git add "$file"

    # Générer un message de commit basé sur le contenu du fichier
    commit_message=$(format_commit_message "$file")

    # Faire le commit
    git commit -m "$commit_message"

    echo "Fichier $file commité avec le message : '$commit_message'."
  fi
done

# Pousser tous les commits
git push origin main

echo "Tous les fichiers ont été committés et poussés avec succès."
