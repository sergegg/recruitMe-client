
curl "http://localhost:8000/recruitMe/" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token ${TOKEN}" \
  --data '{
    "recruitMe": {
      "name": "'"${NAME}"'",
      "date_of_birth": "'"${DOB}"'",
      "resume_Url": "'"${RESUME}"'"
    }
  }'

echo
