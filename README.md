<details close>
  <summary>Fetch All Recipes in the Database</summary>

    > GET /api/v1/recipes
    
  JSON Response Example: 
  ```json 
  ```
</details>
<details close>
  <summary>Fetch One Recipe in the Database by ID</summary>

    > GET /api/v1/recipes/:id
    
  JSON Response Example: 
  ```json 
  ```
</details>
<details close>
  <summary>Create Recipe in the Database</summary>

    > POST /api/v1/Recipes

  Request Body Example: 
  ```json
    {
        "name": "Peanut Butter Oreos",
        "steps": [
            "Dip Oreo into jar of Peanut Butter",
            "Consume",
            "Repeat until satisfied"
        ],
        "description": "A true camp classic! Enjoy with a scary movie on a slumber party.",
        "ingredients": [
            {
                "name": "Peanut Butter",
                "amount": 1,
                "unit": "jar"
            },
            {
                "name": "Oreos",
                "amount": 1,
                "unit": "box"
            }
        ]
    }
  ```
    
  Successful Response Example: 
  ```
    Recipe successfully created
  ```
</details>
<details close>
  <summary>Update Recipe in the Database</summary>

    > PATCH /api/v1/recipes/:id

  Request Body Example: 
  ```json
  ```
    
  Successful Response Example: 
  ```
  ```
</details>
<details close>
  <summary>Delete Recipe in the Database</summary>

    > DELETE /api/v1/recipes/:id
    
  Successful Response Example: 
  ```
  ```
</details>
<br>